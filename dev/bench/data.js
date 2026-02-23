window.BENCHMARK_DATA = {
  "lastUpdate": 1771857689132,
  "repoUrl": "https://github.com/kolkov/go-race",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "a.kolkov@gmail.com",
            "name": "Andy",
            "username": "kolkov"
          },
          "committer": {
            "email": "a.kolkov@gmail.com",
            "name": "Andy",
            "username": "kolkov"
          },
          "distinct": true,
          "id": "12da771cb0d80b3c653e4463622a65382d906bd4",
          "message": "ci(benchmarks): add GitHub Actions benchmark infrastructure\n\nThree workflows for professional benchmark tracking:\n- full-comparison.yml: manual-dispatch 3-config comparison (BASELINE/TSAN/KOLKOV)\n  with benchstat, beautiful markdown tables, RSS measurement, 90-day artifacts\n- benchmark-pr.yml: PR regression detection with dual checkout, benchstat diff,\n  and bot comment via peter-evans/create-or-update-comment\n- benchmark-history.yml: push-triggered Kolkov tracking via github-action-benchmark\n  with GitHub Pages charts and 115% regression alerts\n\nSupporting scripts:\n- generate-summary.sh: parse benchmark output, generate comparison tables with\n  speedup ratios, winner column, and bold formatting (inspired by regex-bench)\n- measure_rss.sh: peak RSS measurement via GNU time\n- run_comparison.sh: add --save/--diff/--list modes for versioned baselines\n\nInfrastructure:\n- benchmarks/baselines/ for milestone snapshots (committed)\n- benchmarks/results/ gitignored (generated output)\n- benchmarks/.gitignore configured accordingly",
          "timestamp": "2026-02-23T15:23:05+03:00",
          "tree_id": "a9666fd5d671a9a8af2f3d66f1bef94d9f09487b",
          "url": "https://github.com/kolkov/go-race/commit/12da771cb0d80b3c653e4463622a65382d906bd4"
        },
        "date": 1771851183383,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkRaceRead",
            "value": 180.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6669159 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 180.1,
            "unit": "ns/op",
            "extra": "6669159 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6669159 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6669159 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 178.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6701001 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 178.9,
            "unit": "ns/op",
            "extra": "6701001 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6701001 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6701001 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 182.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6591201 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 182.4,
            "unit": "ns/op",
            "extra": "6591201 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6591201 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6591201 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 181.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6637975 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 181.3,
            "unit": "ns/op",
            "extra": "6637975 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6637975 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6637975 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 178.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6695684 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 178.4,
            "unit": "ns/op",
            "extra": "6695684 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6695684 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6695684 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 180.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6640200 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 180.6,
            "unit": "ns/op",
            "extra": "6640200 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6640200 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6640200 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 183.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6414375 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 183.5,
            "unit": "ns/op",
            "extra": "6414375 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6414375 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6414375 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 178.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6721056 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 178.4,
            "unit": "ns/op",
            "extra": "6721056 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6721056 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6721056 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 179.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6655412 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 179.9,
            "unit": "ns/op",
            "extra": "6655412 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6655412 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6655412 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 177.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6751320 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 177.4,
            "unit": "ns/op",
            "extra": "6751320 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6751320 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6751320 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 180.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6654756 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 180.3,
            "unit": "ns/op",
            "extra": "6654756 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6654756 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6654756 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 178.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6736704 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 178.1,
            "unit": "ns/op",
            "extra": "6736704 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6736704 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6736704 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 179.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6707556 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 179.2,
            "unit": "ns/op",
            "extra": "6707556 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6707556 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6707556 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 177.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6747153 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 177.9,
            "unit": "ns/op",
            "extra": "6747153 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6747153 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6747153 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6589327 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 182,
            "unit": "ns/op",
            "extra": "6589327 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6589327 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6589327 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 175.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6829436 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 175.1,
            "unit": "ns/op",
            "extra": "6829436 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6829436 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6829436 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 178.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6734564 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 178.2,
            "unit": "ns/op",
            "extra": "6734564 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6734564 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6734564 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6738342 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 178,
            "unit": "ns/op",
            "extra": "6738342 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6738342 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6738342 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 286.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4209790 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 286.1,
            "unit": "ns/op",
            "extra": "4209790 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4209790 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4209790 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 283.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4227884 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 283.7,
            "unit": "ns/op",
            "extra": "4227884 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4227884 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4227884 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 290.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4140523 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 290.6,
            "unit": "ns/op",
            "extra": "4140523 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4140523 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4140523 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 288.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4168670 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 288.2,
            "unit": "ns/op",
            "extra": "4168670 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4168670 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4168670 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 292,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4134392 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 292,
            "unit": "ns/op",
            "extra": "4134392 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4134392 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4134392 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 291.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4115071 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 291.8,
            "unit": "ns/op",
            "extra": "4115071 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4115071 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4115071 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 362.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3290221 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 362.8,
            "unit": "ns/op",
            "extra": "3290221 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3290221 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3290221 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 361.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3266823 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 361.5,
            "unit": "ns/op",
            "extra": "3266823 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3266823 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3266823 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 360.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3354518 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 360.2,
            "unit": "ns/op",
            "extra": "3354518 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3354518 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3354518 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 357,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3383736 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 357,
            "unit": "ns/op",
            "extra": "3383736 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3383736 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3383736 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 372.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3222832 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 372.6,
            "unit": "ns/op",
            "extra": "3222832 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3222832 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3222832 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 366.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3273339 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 366.5,
            "unit": "ns/op",
            "extra": "3273339 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3273339 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3273339 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 212840,
            "unit": "ns/op\t  949435 B/op\t      18 allocs/op",
            "extra": "5857 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 212840,
            "unit": "ns/op",
            "extra": "5857 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 949435,
            "unit": "B/op",
            "extra": "5857 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "5857 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 196300,
            "unit": "ns/op\t  928416 B/op\t      18 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 196300,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 928416,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 224152,
            "unit": "ns/op\t  965222 B/op\t      18 allocs/op",
            "extra": "9620 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 224152,
            "unit": "ns/op",
            "extra": "9620 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 965222,
            "unit": "B/op",
            "extra": "9620 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "9620 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 218334,
            "unit": "ns/op\t  949421 B/op\t      18 allocs/op",
            "extra": "7323 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 218334,
            "unit": "ns/op",
            "extra": "7323 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 949421,
            "unit": "B/op",
            "extra": "7323 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "7323 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 218127,
            "unit": "ns/op\t  952318 B/op\t      18 allocs/op",
            "extra": "6756 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 218127,
            "unit": "ns/op",
            "extra": "6756 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 952318,
            "unit": "B/op",
            "extra": "6756 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "6756 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 192640,
            "unit": "ns/op\t      43 B/op\t       0 allocs/op",
            "extra": "6265 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 192640,
            "unit": "ns/op",
            "extra": "6265 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 43,
            "unit": "B/op",
            "extra": "6265 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6265 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 176228,
            "unit": "ns/op\t      40 B/op\t       0 allocs/op",
            "extra": "6722 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 176228,
            "unit": "ns/op",
            "extra": "6722 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "6722 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6722 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 178658,
            "unit": "ns/op\t      40 B/op\t       0 allocs/op",
            "extra": "6626 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 178658,
            "unit": "ns/op",
            "extra": "6626 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "6626 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6626 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 184322,
            "unit": "ns/op\t      45 B/op\t       0 allocs/op",
            "extra": "5911 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 184322,
            "unit": "ns/op",
            "extra": "5911 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 45,
            "unit": "B/op",
            "extra": "5911 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5911 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 180147,
            "unit": "ns/op\t      46 B/op\t       0 allocs/op",
            "extra": "5860 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 180147,
            "unit": "ns/op",
            "extra": "5860 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 46,
            "unit": "B/op",
            "extra": "5860 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5860 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 180877,
            "unit": "ns/op\t      42 B/op\t       0 allocs/op",
            "extra": "6363 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 180877,
            "unit": "ns/op",
            "extra": "6363 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "6363 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6363 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 213863,
            "unit": "ns/op\t  801807 B/op\t      15 allocs/op",
            "extra": "8242 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 213863,
            "unit": "ns/op",
            "extra": "8242 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 801807,
            "unit": "B/op",
            "extra": "8242 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "8242 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1630542,
            "unit": "ns/op\t12314273 B/op\t     190 allocs/op",
            "extra": "796 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1630542,
            "unit": "ns/op",
            "extra": "796 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12314273,
            "unit": "B/op",
            "extra": "796 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "796 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 6105429,
            "unit": "ns/op\t51020508 B/op\t     765 allocs/op",
            "extra": "190 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 6105429,
            "unit": "ns/op",
            "extra": "190 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 51020508,
            "unit": "B/op",
            "extra": "190 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 765,
            "unit": "allocs/op",
            "extra": "190 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 127791,
            "unit": "ns/op\t      28 B/op\t       0 allocs/op",
            "extra": "9450 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 127791,
            "unit": "ns/op",
            "extra": "9450 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 28,
            "unit": "B/op",
            "extra": "9450 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9450 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 187857,
            "unit": "ns/op\t  439238 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 187857,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 439238,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 128332,
            "unit": "ns/op\t      29 B/op\t       0 allocs/op",
            "extra": "9178 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 128332,
            "unit": "ns/op",
            "extra": "9178 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 29,
            "unit": "B/op",
            "extra": "9178 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9178 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 165240,
            "unit": "ns/op\t  540768 B/op\t       6 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 165240,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540768,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 105442,
            "unit": "ns/op\t  506726 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 105442,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 506726,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 113232,
            "unit": "ns/op\t  539767 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 113232,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 539767,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 300.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3969908 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 300.4,
            "unit": "ns/op",
            "extra": "3969908 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3969908 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3969908 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "a.kolkov@gmail.com",
            "name": "Andy",
            "username": "kolkov"
          },
          "committer": {
            "email": "a.kolkov@gmail.com",
            "name": "Andy",
            "username": "kolkov"
          },
          "distinct": true,
          "id": "3290f542ca2067cc7479d2e3ebd6fabfc506daf1",
          "message": "feat(benchmark): add TSAN/Base column to comparison table\n\nShows TSAN overhead vs baseline alongside Kolkov ratios\nfor full picture of race detector costs.",
          "timestamp": "2026-02-23T17:29:42+03:00",
          "tree_id": "a30c168b0ee8a0886a1282c1ed65fb5aaeadabb8",
          "url": "https://github.com/kolkov/go-race/commit/3290f542ca2067cc7479d2e3ebd6fabfc506daf1"
        },
        "date": 1771857688206,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkRaceRead",
            "value": 176.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6792229 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 176.6,
            "unit": "ns/op",
            "extra": "6792229 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6792229 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6792229 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 177.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6771663 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 177.6,
            "unit": "ns/op",
            "extra": "6771663 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6771663 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6771663 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 176.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6808068 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 176.5,
            "unit": "ns/op",
            "extra": "6808068 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6808068 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6808068 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 175.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6815996 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 175.3,
            "unit": "ns/op",
            "extra": "6815996 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6815996 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6815996 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 176.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6802266 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 176.3,
            "unit": "ns/op",
            "extra": "6802266 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6802266 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6802266 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 176.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6797206 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 176.7,
            "unit": "ns/op",
            "extra": "6797206 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6797206 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6797206 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 175.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6818644 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 175.9,
            "unit": "ns/op",
            "extra": "6818644 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6818644 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6818644 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6919335 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 174,
            "unit": "ns/op",
            "extra": "6919335 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6919335 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6919335 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 174.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6907134 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 174.1,
            "unit": "ns/op",
            "extra": "6907134 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6907134 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6907134 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 177.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6667884 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 177.7,
            "unit": "ns/op",
            "extra": "6667884 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6667884 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6667884 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 175.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6830726 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 175.7,
            "unit": "ns/op",
            "extra": "6830726 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6830726 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6830726 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 178.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6803010 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 178.1,
            "unit": "ns/op",
            "extra": "6803010 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6803010 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6803010 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 175.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6811102 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 175.2,
            "unit": "ns/op",
            "extra": "6811102 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6811102 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6811102 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 176.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6782002 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 176.8,
            "unit": "ns/op",
            "extra": "6782002 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6782002 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6782002 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 177.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6733394 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 177.9,
            "unit": "ns/op",
            "extra": "6733394 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6733394 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6733394 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 176.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6709938 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 176.6,
            "unit": "ns/op",
            "extra": "6709938 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6709938 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6709938 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 176.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6788778 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 176.9,
            "unit": "ns/op",
            "extra": "6788778 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6788778 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6788778 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 176.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6808051 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 176.3,
            "unit": "ns/op",
            "extra": "6808051 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6808051 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6808051 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 283.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4230109 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 283.3,
            "unit": "ns/op",
            "extra": "4230109 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4230109 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4230109 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 288.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4150287 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 288.6,
            "unit": "ns/op",
            "extra": "4150287 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4150287 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4150287 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 284.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4209596 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 284.8,
            "unit": "ns/op",
            "extra": "4209596 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4209596 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4209596 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 291.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4116477 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 291.4,
            "unit": "ns/op",
            "extra": "4116477 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4116477 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4116477 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 288.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4089987 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 288.9,
            "unit": "ns/op",
            "extra": "4089987 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4089987 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4089987 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 296.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4059034 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 296.6,
            "unit": "ns/op",
            "extra": "4059034 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4059034 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4059034 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 355,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3387909 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 355,
            "unit": "ns/op",
            "extra": "3387909 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3387909 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3387909 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 361.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3313273 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 361.1,
            "unit": "ns/op",
            "extra": "3313273 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3313273 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3313273 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 360,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3329701 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 360,
            "unit": "ns/op",
            "extra": "3329701 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3329701 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3329701 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 360.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3320328 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 360.9,
            "unit": "ns/op",
            "extra": "3320328 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3320328 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3320328 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 372,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3228973 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 372,
            "unit": "ns/op",
            "extra": "3228973 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3228973 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3228973 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 372,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3223138 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 372,
            "unit": "ns/op",
            "extra": "3223138 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3223138 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3223138 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 219855,
            "unit": "ns/op\t  961617 B/op\t      18 allocs/op",
            "extra": "4567 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 219855,
            "unit": "ns/op",
            "extra": "4567 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 961617,
            "unit": "B/op",
            "extra": "4567 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "4567 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 219149,
            "unit": "ns/op\t  935905 B/op\t      18 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 219149,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 935905,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 212210,
            "unit": "ns/op\t  943466 B/op\t      18 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 212210,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 943466,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 205436,
            "unit": "ns/op\t  930063 B/op\t      18 allocs/op",
            "extra": "8686 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 205436,
            "unit": "ns/op",
            "extra": "8686 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 930063,
            "unit": "B/op",
            "extra": "8686 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "8686 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 184582,
            "unit": "ns/op\t  913442 B/op\t      18 allocs/op",
            "extra": "5718 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 184582,
            "unit": "ns/op",
            "extra": "5718 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 913442,
            "unit": "B/op",
            "extra": "5718 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "5718 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 220128,
            "unit": "ns/op\t  895559 B/op\t      18 allocs/op",
            "extra": "6518 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 220128,
            "unit": "ns/op",
            "extra": "6518 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 895559,
            "unit": "B/op",
            "extra": "6518 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "6518 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 182364,
            "unit": "ns/op\t      44 B/op\t       0 allocs/op",
            "extra": "6146 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 182364,
            "unit": "ns/op",
            "extra": "6146 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 44,
            "unit": "B/op",
            "extra": "6146 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6146 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 180396,
            "unit": "ns/op\t      40 B/op\t       0 allocs/op",
            "extra": "6780 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 180396,
            "unit": "ns/op",
            "extra": "6780 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "6780 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6780 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 179759,
            "unit": "ns/op\t      39 B/op\t       0 allocs/op",
            "extra": "6962 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 179759,
            "unit": "ns/op",
            "extra": "6962 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 39,
            "unit": "B/op",
            "extra": "6962 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6962 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 178769,
            "unit": "ns/op\t      42 B/op\t       0 allocs/op",
            "extra": "6381 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 178769,
            "unit": "ns/op",
            "extra": "6381 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "6381 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6381 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 179556,
            "unit": "ns/op\t      45 B/op\t       0 allocs/op",
            "extra": "6034 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 179556,
            "unit": "ns/op",
            "extra": "6034 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 45,
            "unit": "B/op",
            "extra": "6034 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6034 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 178772,
            "unit": "ns/op\t      39 B/op\t       0 allocs/op",
            "extra": "6861 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 178772,
            "unit": "ns/op",
            "extra": "6861 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 39,
            "unit": "B/op",
            "extra": "6861 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6861 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 245423,
            "unit": "ns/op\t  804306 B/op\t      15 allocs/op",
            "extra": "8287 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 245423,
            "unit": "ns/op",
            "extra": "8287 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 804306,
            "unit": "B/op",
            "extra": "8287 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "8287 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 514692,
            "unit": "ns/op\t 3197791 B/op\t      51 allocs/op",
            "extra": "2500 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 514692,
            "unit": "ns/op",
            "extra": "2500 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3197791,
            "unit": "B/op",
            "extra": "2500 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2500 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1546526,
            "unit": "ns/op\t12709595 B/op\t     193 allocs/op",
            "extra": "823 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1546526,
            "unit": "ns/op",
            "extra": "823 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12709595,
            "unit": "B/op",
            "extra": "823 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 193,
            "unit": "allocs/op",
            "extra": "823 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 131004,
            "unit": "ns/op\t      28 B/op\t       0 allocs/op",
            "extra": "9543 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 131004,
            "unit": "ns/op",
            "extra": "9543 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 28,
            "unit": "B/op",
            "extra": "9543 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9543 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 185998,
            "unit": "ns/op\t  540659 B/op\t       6 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 185998,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540659,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 109181,
            "unit": "ns/op\t  540768 B/op\t       6 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 109181,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 540768,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 127516,
            "unit": "ns/op\t      29 B/op\t       0 allocs/op",
            "extra": "9344 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 127516,
            "unit": "ns/op",
            "extra": "9344 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 29,
            "unit": "B/op",
            "extra": "9344 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9344 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 149632,
            "unit": "ns/op\t  540768 B/op\t       6 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 149632,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540768,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 108381,
            "unit": "ns/op\t  540795 B/op\t       6 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 108381,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540795,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 108651,
            "unit": "ns/op\t  540173 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 108651,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 540173,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 296.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4039783 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 296.6,
            "unit": "ns/op",
            "extra": "4039783 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4039783 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4039783 times\n4 procs"
          }
        ]
      }
    ]
  }
}