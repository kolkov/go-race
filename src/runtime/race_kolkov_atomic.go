// Copyright 2025 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

//go:build race && !cgo

// T38: Atomic instrumentation for the pure-Go race detector.
//
// Provides all sync/atomic functions with correct acquire/release semantics.
// Without these, the detector sees no synchronization from atomics and reports
// false positives on atomic-based coordination patterns.
//
// Semantics (matching Go memory model for sequentially consistent atomics):
//   Load*  -> hardware load, then acquire
//   Store* -> release, then hardware store
//   Add*/Swap*/And*/Or* (RMW) -> release + hardware op + acquire
//   CompareAndSwap* -> if CAS succeeds: release + CAS + acquire
//                      if CAS fails: just CAS (no synchronization)
//
// We call kolkovOnAcquireCtx/kolkovOnReleaseCtx directly via systemstack,
// NOT raceacquire/racerelease, because those check gp.raceignore and bail
// out — our stubs set raceignore to prevent re-entrant instrumentation,
// which would silently skip the HB edge recording.
//
// Pointer operations (StorePointer, SwapPointer, CompareAndSwapPointer)
// are handled by atomic_pointer.go (GC write barriers) which delegates
// to Uintptr variants. LoadPointer is defined here (no write barrier needed).

package runtime

import (
	"internal/runtime/atomic"
	"unsafe"
)

// raceAtomicAcquire records an acquire HB edge, bypassing raceignore.
//
//go:nosplit
func raceAtomicAcquire(addr unsafe.Pointer) {
	gp := getg()
	racectx := gp.racectx
	if racectx > 1 {
		systemstack(func() {
			kolkovOnAcquireCtx(uintptr(addr), racectx)
		})
	} else {
		var newCtx uintptr
		systemstack(func() {
			newCtx = kolkovOnAcquireSlow(uintptr(addr))
		})
		if newCtx > 1 {
			gp.racectx = newCtx
			kolkovCacheShadowPtr()
		}
	}
}

// raceAtomicRelease records a release HB edge, bypassing raceignore.
//
//go:nosplit
func raceAtomicRelease(addr unsafe.Pointer) {
	gp := getg()
	racectx := gp.racectx
	if racectx > 1 {
		systemstack(func() {
			kolkovOnReleaseCtx(uintptr(addr), racectx)
		})
	} else {
		systemstack(func() {
			kolkovOnRelease(uintptr(addr))
		})
	}
}

// ---------------------------------------------------------------------------
// Loads: hardware load, then acquire
// ---------------------------------------------------------------------------

//go:nosplit
func kolkovSyncAtomicLoadInt32(addr *int32) int32 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Loadint32(addr)
	}
	gp.raceignore++
	v := atomic.Loadint32(addr)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicLoadInt64(addr *int64) int64 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Loadint64(addr)
	}
	gp.raceignore++
	v := atomic.Loadint64(addr)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicLoadUint32(addr *uint32) uint32 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Load(addr)
	}
	gp.raceignore++
	v := atomic.Load(addr)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicLoadUint64(addr *uint64) uint64 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Load64(addr)
	}
	gp.raceignore++
	v := atomic.Load64(addr)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicLoadUintptr(addr *uintptr) uintptr {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Loaduintptr(addr)
	}
	gp.raceignore++
	v := atomic.Loaduintptr(addr)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicLoadPointer(addr *unsafe.Pointer) unsafe.Pointer {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Loadp(unsafe.Pointer(addr))
	}
	gp.raceignore++
	v := atomic.Loadp(unsafe.Pointer(addr))
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

// ---------------------------------------------------------------------------
// Stores: release, then hardware store
// ---------------------------------------------------------------------------

//go:nosplit
func kolkovSyncAtomicStoreInt32(addr *int32, val int32) {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		atomic.Storeint32(addr, val)
		return
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	atomic.Storeint32(addr, val)
	gp.raceignore--
}

//go:nosplit
func kolkovSyncAtomicStoreInt64(addr *int64, val int64) {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		atomic.Storeint64(addr, val)
		return
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	atomic.Storeint64(addr, val)
	gp.raceignore--
}

//go:nosplit
func kolkovSyncAtomicStoreUint32(addr *uint32, val uint32) {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		atomic.Store(addr, val)
		return
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	atomic.Store(addr, val)
	gp.raceignore--
}

//go:nosplit
func kolkovSyncAtomicStoreUint64(addr *uint64, val uint64) {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		atomic.Store64(addr, val)
		return
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	atomic.Store64(addr, val)
	gp.raceignore--
}

//go:nosplit
func kolkovSyncAtomicStoreUintptr(addr *uintptr, val uintptr) {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		atomic.Storeuintptr(addr, val)
		return
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	atomic.Storeuintptr(addr, val)
	gp.raceignore--
}

// ---------------------------------------------------------------------------
// Add (RMW): release + hardware add + acquire
// ---------------------------------------------------------------------------

//go:nosplit
func kolkovSyncAtomicAddInt32(addr *int32, delta int32) int32 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Xaddint32(addr, delta)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := atomic.Xaddint32(addr, delta)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicAddInt64(addr *int64, delta int64) int64 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Xaddint64(addr, delta)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := atomic.Xaddint64(addr, delta)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicAddUint32(addr *uint32, delta uint32) uint32 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Xadd(addr, int32(delta))
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := atomic.Xadd(addr, int32(delta))
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicAddUint64(addr *uint64, delta uint64) uint64 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Xadd64(addr, int64(delta))
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := atomic.Xadd64(addr, int64(delta))
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicAddUintptr(addr *uintptr, delta uintptr) uintptr {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Xadduintptr(addr, delta)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := atomic.Xadduintptr(addr, delta)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

// ---------------------------------------------------------------------------
// Swap (RMW): release + hardware swap + acquire
// ---------------------------------------------------------------------------

//go:nosplit
func kolkovSyncAtomicSwapInt32(addr *int32, new int32) int32 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Xchgint32(addr, new)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := atomic.Xchgint32(addr, new)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicSwapInt64(addr *int64, new int64) int64 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Xchgint64(addr, new)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := atomic.Xchgint64(addr, new)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicSwapUint32(addr *uint32, new uint32) uint32 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Xchg(addr, new)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := atomic.Xchg(addr, new)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicSwapUint64(addr *uint64, new uint64) uint64 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Xchg64(addr, new)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := atomic.Xchg64(addr, new)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicSwapUintptr(addr *uintptr, new uintptr) uintptr {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Xchguintptr(addr, new)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := atomic.Xchguintptr(addr, new)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

// ---------------------------------------------------------------------------
// CompareAndSwap: release + CAS; acquire ONLY if swapped
// ---------------------------------------------------------------------------

//go:nosplit
func kolkovSyncAtomicCompareAndSwapInt32(addr *int32, old, new int32) bool {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Casint32(addr, old, new)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	swapped := atomic.Casint32(addr, old, new)
	if swapped {
		raceAtomicAcquire(unsafe.Pointer(addr))
	}
	gp.raceignore--
	return swapped
}

//go:nosplit
func kolkovSyncAtomicCompareAndSwapInt64(addr *int64, old, new int64) bool {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Casint64(addr, old, new)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	swapped := atomic.Casint64(addr, old, new)
	if swapped {
		raceAtomicAcquire(unsafe.Pointer(addr))
	}
	gp.raceignore--
	return swapped
}

//go:nosplit
func kolkovSyncAtomicCompareAndSwapUint32(addr *uint32, old, new uint32) bool {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Cas(addr, old, new)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	swapped := atomic.Cas(addr, old, new)
	if swapped {
		raceAtomicAcquire(unsafe.Pointer(addr))
	}
	gp.raceignore--
	return swapped
}

//go:nosplit
func kolkovSyncAtomicCompareAndSwapUint64(addr *uint64, old, new uint64) bool {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Cas64(addr, old, new)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	swapped := atomic.Cas64(addr, old, new)
	if swapped {
		raceAtomicAcquire(unsafe.Pointer(addr))
	}
	gp.raceignore--
	return swapped
}

//go:nosplit
func kolkovSyncAtomicCompareAndSwapUintptr(addr *uintptr, old, new uintptr) bool {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Casuintptr(addr, old, new)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	swapped := atomic.Casuintptr(addr, old, new)
	if swapped {
		raceAtomicAcquire(unsafe.Pointer(addr))
	}
	gp.raceignore--
	return swapped
}

// ---------------------------------------------------------------------------
// And (RMW): release + hardware and + acquire
// ---------------------------------------------------------------------------

//go:nosplit
func kolkovSyncAtomicAndInt32(addr *int32, mask int32) int32 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return int32(atomic.And32((*uint32)(unsafe.Pointer(addr)), uint32(mask)))
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := int32(atomic.And32((*uint32)(unsafe.Pointer(addr)), uint32(mask)))
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicAndInt64(addr *int64, mask int64) int64 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return int64(atomic.And64((*uint64)(unsafe.Pointer(addr)), uint64(mask)))
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := int64(atomic.And64((*uint64)(unsafe.Pointer(addr)), uint64(mask)))
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicAndUint32(addr *uint32, mask uint32) uint32 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.And32(addr, mask)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := atomic.And32(addr, mask)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicAndUint64(addr *uint64, mask uint64) uint64 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.And64(addr, mask)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := atomic.And64(addr, mask)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicAndUintptr(addr *uintptr, mask uintptr) uintptr {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return uintptr(atomic.And64((*uint64)(unsafe.Pointer(addr)), uint64(mask)))
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := uintptr(atomic.And64((*uint64)(unsafe.Pointer(addr)), uint64(mask)))
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

// ---------------------------------------------------------------------------
// Or (RMW): release + hardware or + acquire
// ---------------------------------------------------------------------------

//go:nosplit
func kolkovSyncAtomicOrInt32(addr *int32, mask int32) int32 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return int32(atomic.Or32((*uint32)(unsafe.Pointer(addr)), uint32(mask)))
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := int32(atomic.Or32((*uint32)(unsafe.Pointer(addr)), uint32(mask)))
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicOrInt64(addr *int64, mask int64) int64 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return int64(atomic.Or64((*uint64)(unsafe.Pointer(addr)), uint64(mask)))
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := int64(atomic.Or64((*uint64)(unsafe.Pointer(addr)), uint64(mask)))
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicOrUint32(addr *uint32, mask uint32) uint32 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Or32(addr, mask)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := atomic.Or32(addr, mask)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicOrUint64(addr *uint64, mask uint64) uint64 {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return atomic.Or64(addr, mask)
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := atomic.Or64(addr, mask)
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}

//go:nosplit
func kolkovSyncAtomicOrUintptr(addr *uintptr, mask uintptr) uintptr {
	gp := getg()
	if gp == nil || gp.m == nil || gp.m.curg == nil || gp != gp.m.curg || gp.raceignore != 0 {
		return uintptr(atomic.Or64((*uint64)(unsafe.Pointer(addr)), uint64(mask)))
	}
	gp.raceignore++
	raceAtomicRelease(unsafe.Pointer(addr))
	v := uintptr(atomic.Or64((*uint64)(unsafe.Pointer(addr)), uint64(mask)))
	raceAtomicAcquire(unsafe.Pointer(addr))
	gp.raceignore--
	return v
}
