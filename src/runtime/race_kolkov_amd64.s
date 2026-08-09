// Copyright 2025 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

//go:build race && !cgo

#include "textflag.h"

// Atomic operations for sync/atomic package — pure-Go race detector.
// Mirrors race_amd64.s (TSAN path) pattern: define sync∕atomic·* TEXT
// entries in package runtime that bridge to Go implementations in
// race_kolkov_atomic.go with acquire/release HB edge recording.

// Swap
TEXT	sync∕atomic·SwapInt32<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicSwapInt32<ABIInternal>(SB)
TEXT	sync∕atomic·SwapUint32<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicSwapUint32<ABIInternal>(SB)
TEXT	sync∕atomic·SwapInt64<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicSwapInt64<ABIInternal>(SB)
TEXT	sync∕atomic·SwapUint64<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicSwapUint64<ABIInternal>(SB)
TEXT	sync∕atomic·SwapUintptr<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicSwapUintptr<ABIInternal>(SB)

// CompareAndSwap
TEXT	sync∕atomic·CompareAndSwapInt32<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicCompareAndSwapInt32<ABIInternal>(SB)
TEXT	sync∕atomic·CompareAndSwapUint32<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicCompareAndSwapUint32<ABIInternal>(SB)
TEXT	sync∕atomic·CompareAndSwapInt64<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicCompareAndSwapInt64<ABIInternal>(SB)
TEXT	sync∕atomic·CompareAndSwapUint64<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicCompareAndSwapUint64<ABIInternal>(SB)
TEXT	sync∕atomic·CompareAndSwapUintptr<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicCompareAndSwapUintptr<ABIInternal>(SB)

// Add
TEXT	sync∕atomic·AddInt32<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicAddInt32<ABIInternal>(SB)
TEXT	sync∕atomic·AddUint32<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicAddUint32<ABIInternal>(SB)
TEXT	sync∕atomic·AddInt64<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicAddInt64<ABIInternal>(SB)
TEXT	sync∕atomic·AddUint64<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicAddUint64<ABIInternal>(SB)
TEXT	sync∕atomic·AddUintptr<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicAddUintptr<ABIInternal>(SB)

// Load
TEXT	sync∕atomic·LoadInt32<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicLoadInt32<ABIInternal>(SB)
TEXT	sync∕atomic·LoadUint32<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicLoadUint32<ABIInternal>(SB)
TEXT	sync∕atomic·LoadInt64<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicLoadInt64<ABIInternal>(SB)
TEXT	sync∕atomic·LoadUint64<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicLoadUint64<ABIInternal>(SB)
TEXT	sync∕atomic·LoadUintptr<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicLoadUintptr<ABIInternal>(SB)
TEXT	sync∕atomic·LoadPointer<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicLoadPointer<ABIInternal>(SB)

// Store
TEXT	sync∕atomic·StoreInt32<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicStoreInt32<ABIInternal>(SB)
TEXT	sync∕atomic·StoreUint32<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicStoreUint32<ABIInternal>(SB)
TEXT	sync∕atomic·StoreInt64<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicStoreInt64<ABIInternal>(SB)
TEXT	sync∕atomic·StoreUint64<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicStoreUint64<ABIInternal>(SB)
TEXT	sync∕atomic·StoreUintptr<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicStoreUintptr<ABIInternal>(SB)

// And
TEXT	sync∕atomic·AndInt32<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicAndInt32<ABIInternal>(SB)
TEXT	sync∕atomic·AndUint32<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicAndUint32<ABIInternal>(SB)
TEXT	sync∕atomic·AndInt64<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicAndInt64<ABIInternal>(SB)
TEXT	sync∕atomic·AndUint64<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicAndUint64<ABIInternal>(SB)
TEXT	sync∕atomic·AndUintptr<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicAndUintptr<ABIInternal>(SB)

// Or
TEXT	sync∕atomic·OrInt32<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicOrInt32<ABIInternal>(SB)
TEXT	sync∕atomic·OrUint32<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicOrUint32<ABIInternal>(SB)
TEXT	sync∕atomic·OrInt64<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicOrInt64<ABIInternal>(SB)
TEXT	sync∕atomic·OrUint64<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicOrUint64<ABIInternal>(SB)
TEXT	sync∕atomic·OrUintptr<ABIInternal>(SB),NOSPLIT,$0
	JMP	runtime·kolkovSyncAtomicOrUintptr<ABIInternal>(SB)
