// Copyright 2025 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

//go:build race && !cgo

// This file is intentionally empty for the pure-Go race detector.
// All sync/atomic function bodies are defined in
// src/runtime/race_kolkov_amd64.s which bridges to Go implementations
// in src/runtime/race_kolkov_atomic.go.
