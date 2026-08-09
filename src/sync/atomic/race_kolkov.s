// Copyright 2025 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

//go:build race && !cgo

// Pure Go race detector (Kolkov) atomic operations.
// All 36 sync/atomic functions are now implemented in Go in
// src/runtime/race_kolkov_atomic.go via go:linkname.
// They provide proper acquire/release semantics for race detection.
//
// This file is intentionally empty -- it previously contained
// TEXT/JMP entries that bypassed the race detector entirely,
// causing false positives on all atomic-based synchronization.
