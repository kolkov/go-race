window.BENCHMARK_DATA = {
  "lastUpdate": 1771925472456,
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
          "id": "3a6cf876a9cfa92966af3bf0d94345929b67dfcc",
          "message": "fix(benchmark): remove double write to GITHUB_STEP_SUMMARY\n\nScript was writing to both stdout AND GITHUB_STEP_SUMMARY directly,\nwhile the workflow already redirects stdout to GITHUB_STEP_SUMMARY.\nThis caused all tables to appear twice.",
          "timestamp": "2026-02-23T17:40:17+03:00",
          "tree_id": "385c5dfabdf22cd8ef1eadbcb441b7ac412220a3",
          "url": "https://github.com/kolkov/go-race/commit/3a6cf876a9cfa92966af3bf0d94345929b67dfcc"
        },
        "date": 1771858397449,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkRaceRead",
            "value": 174.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6803722 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 174.8,
            "unit": "ns/op",
            "extra": "6803722 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6803722 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6803722 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 174.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6875924 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 174.5,
            "unit": "ns/op",
            "extra": "6875924 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6875924 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6875924 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 177.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6759062 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 177.5,
            "unit": "ns/op",
            "extra": "6759062 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6759062 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6759062 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 175.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6836628 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 175.5,
            "unit": "ns/op",
            "extra": "6836628 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6836628 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6836628 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 172.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6956715 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 172.7,
            "unit": "ns/op",
            "extra": "6956715 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6956715 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6956715 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 177,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6805185 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 177,
            "unit": "ns/op",
            "extra": "6805185 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6805185 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6805185 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 175.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6817171 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 175.3,
            "unit": "ns/op",
            "extra": "6817171 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6817171 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6817171 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 175.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6821582 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 175.8,
            "unit": "ns/op",
            "extra": "6821582 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6821582 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6821582 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 176.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6810484 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 176.2,
            "unit": "ns/op",
            "extra": "6810484 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6810484 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6810484 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 174.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6817935 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 174.6,
            "unit": "ns/op",
            "extra": "6817935 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6817935 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6817935 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 176.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6816018 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 176.3,
            "unit": "ns/op",
            "extra": "6816018 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6816018 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6816018 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 175.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6845281 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 175.1,
            "unit": "ns/op",
            "extra": "6845281 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6845281 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6845281 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 177.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6784251 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 177.6,
            "unit": "ns/op",
            "extra": "6784251 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6784251 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6784251 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 176.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6793598 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 176.8,
            "unit": "ns/op",
            "extra": "6793598 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6793598 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6793598 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 174.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6892867 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 174.1,
            "unit": "ns/op",
            "extra": "6892867 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6892867 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6892867 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 174.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6875748 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 174.4,
            "unit": "ns/op",
            "extra": "6875748 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6875748 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6875748 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 176.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6790888 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 176.7,
            "unit": "ns/op",
            "extra": "6790888 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6790888 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6790888 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 177.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6791888 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 177.5,
            "unit": "ns/op",
            "extra": "6791888 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6791888 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6791888 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 280.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4262270 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 280.9,
            "unit": "ns/op",
            "extra": "4262270 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4262270 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4262270 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 283.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4244373 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 283.6,
            "unit": "ns/op",
            "extra": "4244373 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4244373 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4244373 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 286.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4215074 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 286.8,
            "unit": "ns/op",
            "extra": "4215074 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4215074 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4215074 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 290.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4148794 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 290.4,
            "unit": "ns/op",
            "extra": "4148794 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4148794 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4148794 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 289.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4180893 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 289.8,
            "unit": "ns/op",
            "extra": "4180893 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4180893 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4180893 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 287.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4148638 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 287.6,
            "unit": "ns/op",
            "extra": "4148638 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4148638 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4148638 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 355.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3372006 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 355.7,
            "unit": "ns/op",
            "extra": "3372006 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3372006 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3372006 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 358.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3347874 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 358.1,
            "unit": "ns/op",
            "extra": "3347874 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3347874 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3347874 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 357.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3355156 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 357.6,
            "unit": "ns/op",
            "extra": "3355156 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3355156 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3355156 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 358.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3345945 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 358.8,
            "unit": "ns/op",
            "extra": "3345945 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3345945 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3345945 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 372.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3231159 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 372.7,
            "unit": "ns/op",
            "extra": "3231159 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3231159 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3231159 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 373,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3190198 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 373,
            "unit": "ns/op",
            "extra": "3190198 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3190198 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3190198 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 199269,
            "unit": "ns/op\t  954498 B/op\t      18 allocs/op",
            "extra": "9044 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 199269,
            "unit": "ns/op",
            "extra": "9044 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 954498,
            "unit": "B/op",
            "extra": "9044 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "9044 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 212960,
            "unit": "ns/op\t  955914 B/op\t      18 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 212960,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 955914,
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
            "value": 205968,
            "unit": "ns/op\t  957447 B/op\t      18 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 205968,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 957447,
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
            "value": 222688,
            "unit": "ns/op\t  939184 B/op\t      18 allocs/op",
            "extra": "7251 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 222688,
            "unit": "ns/op",
            "extra": "7251 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 939184,
            "unit": "B/op",
            "extra": "7251 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "7251 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 189753,
            "unit": "ns/op\t      43 B/op\t       0 allocs/op",
            "extra": "6171 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 189753,
            "unit": "ns/op",
            "extra": "6171 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 43,
            "unit": "B/op",
            "extra": "6171 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6171 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 188933,
            "unit": "ns/op\t      42 B/op\t       0 allocs/op",
            "extra": "6298 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 188933,
            "unit": "ns/op",
            "extra": "6298 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "6298 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6298 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 190210,
            "unit": "ns/op\t      43 B/op\t       0 allocs/op",
            "extra": "6170 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 190210,
            "unit": "ns/op",
            "extra": "6170 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 43,
            "unit": "B/op",
            "extra": "6170 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6170 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 506389,
            "unit": "ns/op\t 3198889 B/op\t      51 allocs/op",
            "extra": "2670 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 506389,
            "unit": "ns/op",
            "extra": "2670 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3198889,
            "unit": "B/op",
            "extra": "2670 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2670 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1648779,
            "unit": "ns/op\t12752137 B/op\t     194 allocs/op",
            "extra": "806 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1648779,
            "unit": "ns/op",
            "extra": "806 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12752137,
            "unit": "B/op",
            "extra": "806 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "806 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 5844034,
            "unit": "ns/op\t51845481 B/op\t     771 allocs/op",
            "extra": "202 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 5844034,
            "unit": "ns/op",
            "extra": "202 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 51845481,
            "unit": "B/op",
            "extra": "202 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 771,
            "unit": "allocs/op",
            "extra": "202 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 122586,
            "unit": "ns/op\t      29 B/op\t       0 allocs/op",
            "extra": "9253 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 122586,
            "unit": "ns/op",
            "extra": "9253 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 29,
            "unit": "B/op",
            "extra": "9253 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9253 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 208662,
            "unit": "ns/op\t  540605 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 208662,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540605,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 122403,
            "unit": "ns/op\t      27 B/op\t       0 allocs/op",
            "extra": "9940 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 122403,
            "unit": "ns/op",
            "extra": "9940 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 27,
            "unit": "B/op",
            "extra": "9940 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9940 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 148429,
            "unit": "ns/op\t  540795 B/op\t       6 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 148429,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540795,
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
            "value": 104867,
            "unit": "ns/op\t  540768 B/op\t       6 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 104867,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540768,
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
            "value": 109261,
            "unit": "ns/op\t  540362 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 109261,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 540362,
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
            "value": 321.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3711643 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 321.2,
            "unit": "ns/op",
            "extra": "3711643 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3711643 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3711643 times\n4 procs"
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
          "id": "5c7063d736490d8701ae67629b560689f03ce0ab",
          "message": "perf(detector): quick win optimizations — remove locks, lock-free VarState (T16)\n\nQW1: Atomic stats — remove d.mu.Lock from OnRead/OnWrite hot path\n- PromotionStats fields changed to atomic.Uint64\n- Add PromotionStatsSnapshot + LoadSnapshot() for safe reading\n- Saves ~25ns per memory access\n\nQW2: Lock-free VarState read accessors\n- Add readEpoch0 atomic.Uint64 + readerState atomic.Uint32\n- IsPromoted() now 0.27ns (was 20-50ns with spinlock)\n- GetReadEpoch() now 0.63ns (was 20-50ns with spinlock)\n- Correct ordering: promote sets readClock before readerState\n- Saves ~50ns per memory access\n\nQW3: Move overflow check to sync events\n- Remove checkOverflowPeriodically from OnRead/OnWrite\n- Add to OnAcquire/OnRelease where overflows actually happen\n- Saves ~8ns per memory access\n\nTotal expected savings: ~83ns (195ns -> ~132ns target)",
          "timestamp": "2026-02-23T22:40:40+03:00",
          "tree_id": "0314907fb12f2d89fb34f9c7d6cc49bd997317d0",
          "url": "https://github.com/kolkov/go-race/commit/5c7063d736490d8701ae67629b560689f03ce0ab"
        },
        "date": 1771876518492,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkRaceRead",
            "value": 211.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5669337 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 211.6,
            "unit": "ns/op",
            "extra": "5669337 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5669337 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5669337 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 211.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5665383 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 211.8,
            "unit": "ns/op",
            "extra": "5665383 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5665383 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5665383 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 209,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5736649 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 209,
            "unit": "ns/op",
            "extra": "5736649 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5736649 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5736649 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 213.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5649373 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 213.1,
            "unit": "ns/op",
            "extra": "5649373 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5649373 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5649373 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 206.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5770324 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 206.5,
            "unit": "ns/op",
            "extra": "5770324 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5770324 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5770324 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 219.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5467854 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 219.2,
            "unit": "ns/op",
            "extra": "5467854 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5467854 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5467854 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 208.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5721278 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 208.5,
            "unit": "ns/op",
            "extra": "5721278 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5721278 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5721278 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 207.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5767892 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 207.9,
            "unit": "ns/op",
            "extra": "5767892 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5767892 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5767892 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 211.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5673166 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 211.5,
            "unit": "ns/op",
            "extra": "5673166 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5673166 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5673166 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 211.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5663398 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 211.5,
            "unit": "ns/op",
            "extra": "5663398 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5663398 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5663398 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 211.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5660880 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 211.9,
            "unit": "ns/op",
            "extra": "5660880 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5660880 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5660880 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 214.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5596959 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 214.4,
            "unit": "ns/op",
            "extra": "5596959 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5596959 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5596959 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 211.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5685967 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 211.1,
            "unit": "ns/op",
            "extra": "5685967 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5685967 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5685967 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 209.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5733084 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 209.1,
            "unit": "ns/op",
            "extra": "5733084 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5733084 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5733084 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 213,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5644682 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 213,
            "unit": "ns/op",
            "extra": "5644682 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5644682 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5644682 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 212.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5641160 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 212.7,
            "unit": "ns/op",
            "extra": "5641160 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5641160 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5641160 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 211.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5691376 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 211.9,
            "unit": "ns/op",
            "extra": "5691376 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5691376 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5691376 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 209.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5722786 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 209.4,
            "unit": "ns/op",
            "extra": "5722786 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5722786 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5722786 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 334.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3584793 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 334.8,
            "unit": "ns/op",
            "extra": "3584793 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3584793 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3584793 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 343.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3595598 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 343.8,
            "unit": "ns/op",
            "extra": "3595598 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3595598 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3595598 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 376.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3189782 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 376.6,
            "unit": "ns/op",
            "extra": "3189782 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3189782 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3189782 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 341.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3617389 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 341.5,
            "unit": "ns/op",
            "extra": "3617389 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3617389 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3617389 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 430.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2833290 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 430.9,
            "unit": "ns/op",
            "extra": "2833290 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2833290 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2833290 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 336.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3567264 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 336.1,
            "unit": "ns/op",
            "extra": "3567264 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3567264 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3567264 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 412.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2871110 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 412.2,
            "unit": "ns/op",
            "extra": "2871110 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2871110 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2871110 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 421.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2850356 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 421.3,
            "unit": "ns/op",
            "extra": "2850356 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2850356 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2850356 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 417.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2870263 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 417.9,
            "unit": "ns/op",
            "extra": "2870263 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2870263 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2870263 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 430,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2673790 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 430,
            "unit": "ns/op",
            "extra": "2673790 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2673790 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2673790 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 421.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2855036 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 421.2,
            "unit": "ns/op",
            "extra": "2855036 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2855036 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2855036 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 423.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2806554 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 423.8,
            "unit": "ns/op",
            "extra": "2806554 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2806554 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2806554 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 186674,
            "unit": "ns/op\t  946947 B/op\t      18 allocs/op",
            "extra": "6644 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 186674,
            "unit": "ns/op",
            "extra": "6644 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 946947,
            "unit": "B/op",
            "extra": "6644 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "6644 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 193515,
            "unit": "ns/op\t  930832 B/op\t      18 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 193515,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 930832,
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
            "value": 196119,
            "unit": "ns/op\t  956185 B/op\t      18 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 196119,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 956185,
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
            "value": 198684,
            "unit": "ns/op\t  959807 B/op\t      18 allocs/op",
            "extra": "8455 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 198684,
            "unit": "ns/op",
            "extra": "8455 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 959807,
            "unit": "B/op",
            "extra": "8455 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "8455 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 183373,
            "unit": "ns/op\t  983494 B/op\t      19 allocs/op",
            "extra": "8041 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 183373,
            "unit": "ns/op",
            "extra": "8041 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 983494,
            "unit": "B/op",
            "extra": "8041 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 19,
            "unit": "allocs/op",
            "extra": "8041 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 209380,
            "unit": "ns/op\t  950354 B/op\t      18 allocs/op",
            "extra": "6796 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 209380,
            "unit": "ns/op",
            "extra": "6796 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 950354,
            "unit": "B/op",
            "extra": "6796 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "6796 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 206798,
            "unit": "ns/op\t      45 B/op\t       0 allocs/op",
            "extra": "5944 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 206798,
            "unit": "ns/op",
            "extra": "5944 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 45,
            "unit": "B/op",
            "extra": "5944 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5944 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 215574,
            "unit": "ns/op\t      49 B/op\t       0 allocs/op",
            "extra": "5420 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 215574,
            "unit": "ns/op",
            "extra": "5420 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 49,
            "unit": "B/op",
            "extra": "5420 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5420 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 209414,
            "unit": "ns/op\t      49 B/op\t       0 allocs/op",
            "extra": "5415 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 209414,
            "unit": "ns/op",
            "extra": "5415 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 49,
            "unit": "B/op",
            "extra": "5415 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5415 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 208436,
            "unit": "ns/op\t      50 B/op\t       0 allocs/op",
            "extra": "5392 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 208436,
            "unit": "ns/op",
            "extra": "5392 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 50,
            "unit": "B/op",
            "extra": "5392 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5392 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 210744,
            "unit": "ns/op\t      45 B/op\t       0 allocs/op",
            "extra": "5932 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 210744,
            "unit": "ns/op",
            "extra": "5932 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 45,
            "unit": "B/op",
            "extra": "5932 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5932 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 209160,
            "unit": "ns/op\t      49 B/op\t       0 allocs/op",
            "extra": "5427 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 209160,
            "unit": "ns/op",
            "extra": "5427 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 49,
            "unit": "B/op",
            "extra": "5427 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5427 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 214460,
            "unit": "ns/op\t  810506 B/op\t      15 allocs/op",
            "extra": "9940 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 214460,
            "unit": "ns/op",
            "extra": "9940 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 810506,
            "unit": "B/op",
            "extra": "9940 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "9940 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 174583,
            "unit": "ns/op\t  806930 B/op\t      15 allocs/op",
            "extra": "8626 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 174583,
            "unit": "ns/op",
            "extra": "8626 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 806930,
            "unit": "B/op",
            "extra": "8626 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "8626 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 147458,
            "unit": "ns/op\t  805929 B/op\t      15 allocs/op",
            "extra": "9056 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 147458,
            "unit": "ns/op",
            "extra": "9056 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 805929,
            "unit": "B/op",
            "extra": "9056 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "9056 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 146856,
            "unit": "ns/op\t  805250 B/op\t      15 allocs/op",
            "extra": "8532 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 146856,
            "unit": "ns/op",
            "extra": "8532 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 805250,
            "unit": "B/op",
            "extra": "8532 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "8532 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 176980,
            "unit": "ns/op\t  801240 B/op\t      15 allocs/op",
            "extra": "8404 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 176980,
            "unit": "ns/op",
            "extra": "8404 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 801240,
            "unit": "B/op",
            "extra": "8404 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "8404 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 140820,
            "unit": "ns/op\t  803805 B/op\t      15 allocs/op",
            "extra": "8408 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 140820,
            "unit": "ns/op",
            "extra": "8408 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 803805,
            "unit": "B/op",
            "extra": "8408 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "8408 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 437023,
            "unit": "ns/op\t 3206845 B/op\t      51 allocs/op",
            "extra": "2959 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 437023,
            "unit": "ns/op",
            "extra": "2959 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3206845,
            "unit": "B/op",
            "extra": "2959 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2959 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 432786,
            "unit": "ns/op\t 3215746 B/op\t      51 allocs/op",
            "extra": "2966 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 432786,
            "unit": "ns/op",
            "extra": "2966 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3215746,
            "unit": "B/op",
            "extra": "2966 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2966 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 430000,
            "unit": "ns/op\t 3217015 B/op\t      51 allocs/op",
            "extra": "3102 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 430000,
            "unit": "ns/op",
            "extra": "3102 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3217015,
            "unit": "B/op",
            "extra": "3102 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "3102 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 440404,
            "unit": "ns/op\t 3215079 B/op\t      51 allocs/op",
            "extra": "3042 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 440404,
            "unit": "ns/op",
            "extra": "3042 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3215079,
            "unit": "B/op",
            "extra": "3042 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "3042 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 429273,
            "unit": "ns/op\t 3211724 B/op\t      51 allocs/op",
            "extra": "2965 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 429273,
            "unit": "ns/op",
            "extra": "2965 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3211724,
            "unit": "B/op",
            "extra": "2965 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2965 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 433945,
            "unit": "ns/op\t 3210033 B/op\t      51 allocs/op",
            "extra": "2770 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 433945,
            "unit": "ns/op",
            "extra": "2770 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3210033,
            "unit": "B/op",
            "extra": "2770 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2770 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1384399,
            "unit": "ns/op\t12879963 B/op\t     195 allocs/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1384399,
            "unit": "ns/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12879963,
            "unit": "B/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1458790,
            "unit": "ns/op\t12714895 B/op\t     193 allocs/op",
            "extra": "886 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1458790,
            "unit": "ns/op",
            "extra": "886 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12714895,
            "unit": "B/op",
            "extra": "886 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 193,
            "unit": "allocs/op",
            "extra": "886 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1431294,
            "unit": "ns/op\t12924444 B/op\t     195 allocs/op",
            "extra": "883 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1431294,
            "unit": "ns/op",
            "extra": "883 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12924444,
            "unit": "B/op",
            "extra": "883 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "883 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1447072,
            "unit": "ns/op\t12896510 B/op\t     195 allocs/op",
            "extra": "846 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1447072,
            "unit": "ns/op",
            "extra": "846 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12896510,
            "unit": "B/op",
            "extra": "846 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "846 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1453743,
            "unit": "ns/op\t12875036 B/op\t     195 allocs/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1453743,
            "unit": "ns/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12875036,
            "unit": "B/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "878 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1450541,
            "unit": "ns/op\t12753190 B/op\t     194 allocs/op",
            "extra": "865 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1450541,
            "unit": "ns/op",
            "extra": "865 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12753190,
            "unit": "B/op",
            "extra": "865 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "865 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 5613253,
            "unit": "ns/op\t51056033 B/op\t     765 allocs/op",
            "extra": "217 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 5613253,
            "unit": "ns/op",
            "extra": "217 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 51056033,
            "unit": "B/op",
            "extra": "217 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 765,
            "unit": "allocs/op",
            "extra": "217 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 5340868,
            "unit": "ns/op\t51543421 B/op\t     769 allocs/op",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 5340868,
            "unit": "ns/op",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 51543421,
            "unit": "B/op",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 769,
            "unit": "allocs/op",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 5555653,
            "unit": "ns/op\t51520375 B/op\t     768 allocs/op",
            "extra": "210 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 5555653,
            "unit": "ns/op",
            "extra": "210 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 51520375,
            "unit": "B/op",
            "extra": "210 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 768,
            "unit": "allocs/op",
            "extra": "210 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 5559944,
            "unit": "ns/op\t50625773 B/op\t     762 allocs/op",
            "extra": "225 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 5559944,
            "unit": "ns/op",
            "extra": "225 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 50625773,
            "unit": "B/op",
            "extra": "225 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 762,
            "unit": "allocs/op",
            "extra": "225 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 5612205,
            "unit": "ns/op\t51132083 B/op\t     766 allocs/op",
            "extra": "216 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 5612205,
            "unit": "ns/op",
            "extra": "216 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 51132083,
            "unit": "B/op",
            "extra": "216 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 766,
            "unit": "allocs/op",
            "extra": "216 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 5447807,
            "unit": "ns/op\t50741774 B/op\t     763 allocs/op",
            "extra": "218 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 5447807,
            "unit": "ns/op",
            "extra": "218 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 50741774,
            "unit": "B/op",
            "extra": "218 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 763,
            "unit": "allocs/op",
            "extra": "218 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 132597,
            "unit": "ns/op\t      29 B/op\t       0 allocs/op",
            "extra": "9198 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 132597,
            "unit": "ns/op",
            "extra": "9198 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 29,
            "unit": "B/op",
            "extra": "9198 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9198 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 131410,
            "unit": "ns/op\t      29 B/op\t       0 allocs/op",
            "extra": "9057 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 131410,
            "unit": "ns/op",
            "extra": "9057 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 29,
            "unit": "B/op",
            "extra": "9057 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9057 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 131827,
            "unit": "ns/op\t      29 B/op\t       0 allocs/op",
            "extra": "9154 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 131827,
            "unit": "ns/op",
            "extra": "9154 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 29,
            "unit": "B/op",
            "extra": "9154 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9154 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 131435,
            "unit": "ns/op\t      30 B/op\t       0 allocs/op",
            "extra": "8880 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 131435,
            "unit": "ns/op",
            "extra": "8880 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "8880 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8880 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 131221,
            "unit": "ns/op\t      29 B/op\t       0 allocs/op",
            "extra": "9274 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 131221,
            "unit": "ns/op",
            "extra": "9274 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 29,
            "unit": "B/op",
            "extra": "9274 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9274 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 132297,
            "unit": "ns/op\t      31 B/op\t       0 allocs/op",
            "extra": "8618 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 132297,
            "unit": "ns/op",
            "extra": "8618 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 31,
            "unit": "B/op",
            "extra": "8618 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8618 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 192631,
            "unit": "ns/op\t  540795 B/op\t       6 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 192631,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540795,
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
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 106769,
            "unit": "ns/op\t  439142 B/op\t       4 allocs/op",
            "extra": "12260 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 106769,
            "unit": "ns/op",
            "extra": "12260 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 439142,
            "unit": "B/op",
            "extra": "12260 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12260 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 132731,
            "unit": "ns/op\t  506692 B/op\t       5 allocs/op",
            "extra": "13164 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 132731,
            "unit": "ns/op",
            "extra": "13164 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 506692,
            "unit": "B/op",
            "extra": "13164 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "13164 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 110425,
            "unit": "ns/op\t  540389 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 110425,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540389,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 123688,
            "unit": "ns/op\t  540748 B/op\t       6 allocs/op",
            "extra": "13581 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 123688,
            "unit": "ns/op",
            "extra": "13581 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540748,
            "unit": "B/op",
            "extra": "13581 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "13581 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 100996,
            "unit": "ns/op\t  540490 B/op\t       5 allocs/op",
            "extra": "13664 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 100996,
            "unit": "ns/op",
            "extra": "13664 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540490,
            "unit": "B/op",
            "extra": "13664 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "13664 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 101974,
            "unit": "ns/op\t  539848 B/op\t       5 allocs/op",
            "extra": "14410 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 101974,
            "unit": "ns/op",
            "extra": "14410 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 539848,
            "unit": "B/op",
            "extra": "14410 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14410 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 96394,
            "unit": "ns/op\t  540786 B/op\t       6 allocs/op",
            "extra": "14506 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 96394,
            "unit": "ns/op",
            "extra": "14506 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 540786,
            "unit": "B/op",
            "extra": "14506 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "14506 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 94754,
            "unit": "ns/op\t  540712 B/op\t       5 allocs/op",
            "extra": "14500 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 94754,
            "unit": "ns/op",
            "extra": "14500 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 540712,
            "unit": "B/op",
            "extra": "14500 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14500 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 93932,
            "unit": "ns/op\t  539756 B/op\t       5 allocs/op",
            "extra": "14697 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 93932,
            "unit": "ns/op",
            "extra": "14697 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 539756,
            "unit": "B/op",
            "extra": "14697 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14697 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 91128,
            "unit": "ns/op\t  540787 B/op\t       6 allocs/op",
            "extra": "13645 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 91128,
            "unit": "ns/op",
            "extra": "13645 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 540787,
            "unit": "B/op",
            "extra": "13645 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "13645 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 100459,
            "unit": "ns/op\t  539608 B/op\t       5 allocs/op",
            "extra": "14461 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 100459,
            "unit": "ns/op",
            "extra": "14461 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 539608,
            "unit": "B/op",
            "extra": "14461 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14461 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 130743,
            "unit": "ns/op\t      30 B/op\t       0 allocs/op",
            "extra": "8972 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 130743,
            "unit": "ns/op",
            "extra": "8972 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "8972 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8972 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 130645,
            "unit": "ns/op\t      29 B/op\t       0 allocs/op",
            "extra": "9159 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 130645,
            "unit": "ns/op",
            "extra": "9159 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 29,
            "unit": "B/op",
            "extra": "9159 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9159 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 130973,
            "unit": "ns/op\t      30 B/op\t       0 allocs/op",
            "extra": "9018 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 130973,
            "unit": "ns/op",
            "extra": "9018 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 30,
            "unit": "B/op",
            "extra": "9018 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9018 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 131213,
            "unit": "ns/op\t      31 B/op\t       0 allocs/op",
            "extra": "8667 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 131213,
            "unit": "ns/op",
            "extra": "8667 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 31,
            "unit": "B/op",
            "extra": "8667 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8667 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 131198,
            "unit": "ns/op\t      29 B/op\t       0 allocs/op",
            "extra": "9256 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 131198,
            "unit": "ns/op",
            "extra": "9256 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 29,
            "unit": "B/op",
            "extra": "9256 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9256 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 129927,
            "unit": "ns/op\t      29 B/op\t       0 allocs/op",
            "extra": "9202 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 129927,
            "unit": "ns/op",
            "extra": "9202 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 29,
            "unit": "B/op",
            "extra": "9202 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9202 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 108959,
            "unit": "ns/op\t  540795 B/op\t       6 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 108959,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540795,
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
            "name": "BenchmarkWorkerPool/g4",
            "value": 119797,
            "unit": "ns/op\t  540789 B/op\t       6 allocs/op",
            "extra": "12688 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 119797,
            "unit": "ns/op",
            "extra": "12688 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540789,
            "unit": "B/op",
            "extra": "12688 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "12688 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 107895,
            "unit": "ns/op\t  540768 B/op\t       6 allocs/op",
            "extra": "14142 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 107895,
            "unit": "ns/op",
            "extra": "14142 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540768,
            "unit": "B/op",
            "extra": "14142 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "14142 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 99433,
            "unit": "ns/op\t  540786 B/op\t       6 allocs/op",
            "extra": "14305 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 99433,
            "unit": "ns/op",
            "extra": "14305 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540786,
            "unit": "B/op",
            "extra": "14305 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "14305 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 98746,
            "unit": "ns/op\t  540786 B/op\t       6 allocs/op",
            "extra": "14442 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 98746,
            "unit": "ns/op",
            "extra": "14442 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540786,
            "unit": "B/op",
            "extra": "14442 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "14442 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 94935,
            "unit": "ns/op\t  540786 B/op\t       6 allocs/op",
            "extra": "14370 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 94935,
            "unit": "ns/op",
            "extra": "14370 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540786,
            "unit": "B/op",
            "extra": "14370 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "14370 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 94378,
            "unit": "ns/op\t  540596 B/op\t       5 allocs/op",
            "extra": "14175 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 94378,
            "unit": "ns/op",
            "extra": "14175 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540596,
            "unit": "B/op",
            "extra": "14175 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14175 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 96658,
            "unit": "ns/op\t  540768 B/op\t       6 allocs/op",
            "extra": "14064 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 96658,
            "unit": "ns/op",
            "extra": "14064 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540768,
            "unit": "B/op",
            "extra": "14064 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "14064 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 102001,
            "unit": "ns/op\t  540768 B/op\t       6 allocs/op",
            "extra": "14527 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 102001,
            "unit": "ns/op",
            "extra": "14527 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540768,
            "unit": "B/op",
            "extra": "14527 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "14527 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 94532,
            "unit": "ns/op\t  540768 B/op\t       6 allocs/op",
            "extra": "14350 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 94532,
            "unit": "ns/op",
            "extra": "14350 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540768,
            "unit": "B/op",
            "extra": "14350 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "14350 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 95819,
            "unit": "ns/op\t  540559 B/op\t       5 allocs/op",
            "extra": "14242 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 95819,
            "unit": "ns/op",
            "extra": "14242 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540559,
            "unit": "B/op",
            "extra": "14242 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14242 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 98010,
            "unit": "ns/op\t  540673 B/op\t       5 allocs/op",
            "extra": "14262 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 98010,
            "unit": "ns/op",
            "extra": "14262 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540673,
            "unit": "B/op",
            "extra": "14262 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14262 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 99538,
            "unit": "ns/op\t  540654 B/op\t       5 allocs/op",
            "extra": "14302 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 99538,
            "unit": "ns/op",
            "extra": "14302 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 540654,
            "unit": "B/op",
            "extra": "14302 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14302 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 97446,
            "unit": "ns/op\t  540768 B/op\t       6 allocs/op",
            "extra": "14197 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 97446,
            "unit": "ns/op",
            "extra": "14197 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 540768,
            "unit": "B/op",
            "extra": "14197 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "14197 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 96718,
            "unit": "ns/op\t  539965 B/op\t       5 allocs/op",
            "extra": "14151 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 96718,
            "unit": "ns/op",
            "extra": "14151 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 539965,
            "unit": "B/op",
            "extra": "14151 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14151 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 97185,
            "unit": "ns/op\t  531745 B/op\t       5 allocs/op",
            "extra": "14145 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 97185,
            "unit": "ns/op",
            "extra": "14145 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 531745,
            "unit": "B/op",
            "extra": "14145 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14145 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 101297,
            "unit": "ns/op\t  540787 B/op\t       6 allocs/op",
            "extra": "14216 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 101297,
            "unit": "ns/op",
            "extra": "14216 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 540787,
            "unit": "B/op",
            "extra": "14216 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "14216 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 98446,
            "unit": "ns/op\t  540806 B/op\t       6 allocs/op",
            "extra": "14204 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 98446,
            "unit": "ns/op",
            "extra": "14204 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 540806,
            "unit": "B/op",
            "extra": "14204 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "14204 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 338.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3545088 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 338.5,
            "unit": "ns/op",
            "extra": "3545088 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3545088 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3545088 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 340.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3534429 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 340.9,
            "unit": "ns/op",
            "extra": "3534429 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3534429 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3534429 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 366.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3260978 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 366.3,
            "unit": "ns/op",
            "extra": "3260978 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3260978 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3260978 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 365.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3281046 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 365.1,
            "unit": "ns/op",
            "extra": "3281046 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3281046 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3281046 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 342.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3499286 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 342.9,
            "unit": "ns/op",
            "extra": "3499286 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3499286 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3499286 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 344.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3491848 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 344.3,
            "unit": "ns/op",
            "extra": "3491848 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3491848 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3491848 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 27.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47959479 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 27.04,
            "unit": "ns/op",
            "extra": "47959479 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47959479 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47959479 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 24.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43711538 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 24.54,
            "unit": "ns/op",
            "extra": "43711538 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43711538 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43711538 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 25.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43361031 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 25.26,
            "unit": "ns/op",
            "extra": "43361031 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43361031 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43361031 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 26.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43694451 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 26.42,
            "unit": "ns/op",
            "extra": "43694451 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43694451 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43694451 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 23.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45268951 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 23.28,
            "unit": "ns/op",
            "extra": "45268951 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45268951 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45268951 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 24.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48251480 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 24.02,
            "unit": "ns/op",
            "extra": "48251480 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48251480 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48251480 times\n4 procs"
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
          "id": "93ac39882faf9517af3122f2d3144109f4e77cb9",
          "message": "perf(shadow): revert to CASBasedShadow, fully lock-free SetReadEpoch\n\nTwo performance fixes for hot path regression:\n\n1. DefaultShadow reverted to CASBasedShadow:\n   PageTableShadow uses 4 atomic loads per GetOrCreate (baseSet, base,\n   pages[idx], slots[idx]) vs 1 atomic load for CASBasedShadow (cells[hash]).\n   Runtime workloads have random access patterns where CAS hash is faster.\n\n2. SetReadEpoch made fully lock-free:\n   Remove spinlock from single-reader hot path. Only atomic readEpoch0.Store\n   and readerState updates needed. The readEpochs[0] backing field is synced\n   lazily in AddReader/PromoteToReadClock when a second reader appears.\n   Saves ~20ns per memory access (was: 3 atomics + spinlock, now: 2 atomics).",
          "timestamp": "2026-02-23T23:21:26+03:00",
          "tree_id": "a4eec8eb433fb05c71595b3b0f503528b0565ebe",
          "url": "https://github.com/kolkov/go-race/commit/93ac39882faf9517af3122f2d3144109f4e77cb9"
        },
        "date": 1771878751429,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkRaceRead",
            "value": 140.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8514516 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 140.7,
            "unit": "ns/op",
            "extra": "8514516 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8514516 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8514516 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 140.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8561260 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 140.4,
            "unit": "ns/op",
            "extra": "8561260 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8561260 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8561260 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 140.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8551749 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 140.1,
            "unit": "ns/op",
            "extra": "8551749 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8551749 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8551749 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 140.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8547541 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 140.2,
            "unit": "ns/op",
            "extra": "8547541 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8547541 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8547541 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 139.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8572800 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 139.9,
            "unit": "ns/op",
            "extra": "8572800 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8572800 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8572800 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 140,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8573835 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 140,
            "unit": "ns/op",
            "extra": "8573835 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8573835 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8573835 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 141.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8495826 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 141.1,
            "unit": "ns/op",
            "extra": "8495826 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8495826 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8495826 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 140.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8515444 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 140.8,
            "unit": "ns/op",
            "extra": "8515444 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8515444 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8515444 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 140.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8504157 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 140.9,
            "unit": "ns/op",
            "extra": "8504157 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8504157 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8504157 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 141.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8469645 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 141.6,
            "unit": "ns/op",
            "extra": "8469645 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8469645 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8469645 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 142.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8373555 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 142.6,
            "unit": "ns/op",
            "extra": "8373555 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8373555 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8373555 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 141.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8473414 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 141.5,
            "unit": "ns/op",
            "extra": "8473414 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8473414 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8473414 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 141.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8315275 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 141.3,
            "unit": "ns/op",
            "extra": "8315275 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8315275 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8315275 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8049874 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 149,
            "unit": "ns/op",
            "extra": "8049874 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8049874 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8049874 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 146.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8234419 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 146.5,
            "unit": "ns/op",
            "extra": "8234419 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8234419 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8234419 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 141.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8482311 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 141.4,
            "unit": "ns/op",
            "extra": "8482311 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8482311 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8482311 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8506402 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 141,
            "unit": "ns/op",
            "extra": "8506402 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8506402 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8506402 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 141.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8476366 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 141.6,
            "unit": "ns/op",
            "extra": "8476366 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8476366 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8476366 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 264.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4556815 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 264.3,
            "unit": "ns/op",
            "extra": "4556815 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4556815 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4556815 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 266.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4407534 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 266.6,
            "unit": "ns/op",
            "extra": "4407534 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4407534 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4407534 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 268.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4466077 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 268.5,
            "unit": "ns/op",
            "extra": "4466077 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4466077 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4466077 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 268.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4471537 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 268.3,
            "unit": "ns/op",
            "extra": "4471537 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4471537 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4471537 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 272.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4420137 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 272.3,
            "unit": "ns/op",
            "extra": "4420137 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4420137 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4420137 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 273,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4393320 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 273,
            "unit": "ns/op",
            "extra": "4393320 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4393320 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4393320 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 291.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4109014 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 291.7,
            "unit": "ns/op",
            "extra": "4109014 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4109014 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4109014 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 292.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4101871 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 292.5,
            "unit": "ns/op",
            "extra": "4101871 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4101871 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4101871 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 297.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4038106 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 297.3,
            "unit": "ns/op",
            "extra": "4038106 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4038106 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4038106 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 295.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4024747 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 295.8,
            "unit": "ns/op",
            "extra": "4024747 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4024747 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4024747 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 295.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4063260 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 295.4,
            "unit": "ns/op",
            "extra": "4063260 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4063260 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4063260 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 296.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4041322 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 296.7,
            "unit": "ns/op",
            "extra": "4041322 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4041322 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4041322 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 208573,
            "unit": "ns/op\t  924883 B/op\t      18 allocs/op",
            "extra": "5769 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 208573,
            "unit": "ns/op",
            "extra": "5769 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 924883,
            "unit": "B/op",
            "extra": "5769 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "5769 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 206643,
            "unit": "ns/op\t  927183 B/op\t      18 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 206643,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 927183,
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
            "value": 227910,
            "unit": "ns/op\t  950004 B/op\t      18 allocs/op",
            "extra": "8551 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 227910,
            "unit": "ns/op",
            "extra": "8551 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 950004,
            "unit": "B/op",
            "extra": "8551 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "8551 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 257171,
            "unit": "ns/op\t  949901 B/op\t      18 allocs/op",
            "extra": "8284 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 257171,
            "unit": "ns/op",
            "extra": "8284 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 949901,
            "unit": "B/op",
            "extra": "8284 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "8284 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 210636,
            "unit": "ns/op\t      47 B/op\t       0 allocs/op",
            "extra": "5746 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 210636,
            "unit": "ns/op",
            "extra": "5746 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 47,
            "unit": "B/op",
            "extra": "5746 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5746 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 209228,
            "unit": "ns/op\t      46 B/op\t       0 allocs/op",
            "extra": "5810 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 209228,
            "unit": "ns/op",
            "extra": "5810 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 46,
            "unit": "B/op",
            "extra": "5810 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5810 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 210773,
            "unit": "ns/op\t      50 B/op\t       0 allocs/op",
            "extra": "5430 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 210773,
            "unit": "ns/op",
            "extra": "5430 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 50,
            "unit": "B/op",
            "extra": "5430 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5430 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 211567,
            "unit": "ns/op\t      46 B/op\t       0 allocs/op",
            "extra": "5863 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 211567,
            "unit": "ns/op",
            "extra": "5863 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 46,
            "unit": "B/op",
            "extra": "5863 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5863 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 208644,
            "unit": "ns/op\t      46 B/op\t       0 allocs/op",
            "extra": "5870 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 208644,
            "unit": "ns/op",
            "extra": "5870 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 46,
            "unit": "B/op",
            "extra": "5870 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5870 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 209020,
            "unit": "ns/op\t      46 B/op\t       0 allocs/op",
            "extra": "5839 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 209020,
            "unit": "ns/op",
            "extra": "5839 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 46,
            "unit": "B/op",
            "extra": "5839 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5839 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 239445,
            "unit": "ns/op\t  806652 B/op\t      15 allocs/op",
            "extra": "7168 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 239445,
            "unit": "ns/op",
            "extra": "7168 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 806652,
            "unit": "B/op",
            "extra": "7168 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "7168 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 216567,
            "unit": "ns/op\t  804662 B/op\t      15 allocs/op",
            "extra": "6532 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 216567,
            "unit": "ns/op",
            "extra": "6532 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 804662,
            "unit": "B/op",
            "extra": "6532 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "6532 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 205621,
            "unit": "ns/op\t  799093 B/op\t      15 allocs/op",
            "extra": "6771 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 205621,
            "unit": "ns/op",
            "extra": "6771 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 799093,
            "unit": "B/op",
            "extra": "6771 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "6771 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 194524,
            "unit": "ns/op\t  800436 B/op\t      15 allocs/op",
            "extra": "6255 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 194524,
            "unit": "ns/op",
            "extra": "6255 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 800436,
            "unit": "B/op",
            "extra": "6255 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "6255 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 206002,
            "unit": "ns/op\t  798575 B/op\t      15 allocs/op",
            "extra": "6572 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 206002,
            "unit": "ns/op",
            "extra": "6572 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 798575,
            "unit": "B/op",
            "extra": "6572 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "6572 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 204853,
            "unit": "ns/op\t  793698 B/op\t      15 allocs/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 204853,
            "unit": "ns/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 793698,
            "unit": "B/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "6242 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 591619,
            "unit": "ns/op\t 3123851 B/op\t      51 allocs/op",
            "extra": "2170 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 591619,
            "unit": "ns/op",
            "extra": "2170 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3123851,
            "unit": "B/op",
            "extra": "2170 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2170 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 602274,
            "unit": "ns/op\t 3155202 B/op\t      51 allocs/op",
            "extra": "2167 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 602274,
            "unit": "ns/op",
            "extra": "2167 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3155202,
            "unit": "B/op",
            "extra": "2167 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2167 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 576854,
            "unit": "ns/op\t 3151336 B/op\t      51 allocs/op",
            "extra": "2206 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 576854,
            "unit": "ns/op",
            "extra": "2206 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3151336,
            "unit": "B/op",
            "extra": "2206 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2206 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 593188,
            "unit": "ns/op\t 3134510 B/op\t      51 allocs/op",
            "extra": "2114 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 593188,
            "unit": "ns/op",
            "extra": "2114 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3134510,
            "unit": "B/op",
            "extra": "2114 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2114 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 603599,
            "unit": "ns/op\t 3184869 B/op\t      51 allocs/op",
            "extra": "2160 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 603599,
            "unit": "ns/op",
            "extra": "2160 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3184869,
            "unit": "B/op",
            "extra": "2160 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2160 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 584914,
            "unit": "ns/op\t 3130935 B/op\t      51 allocs/op",
            "extra": "2125 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 584914,
            "unit": "ns/op",
            "extra": "2125 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3130935,
            "unit": "B/op",
            "extra": "2125 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2125 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 2003158,
            "unit": "ns/op\t12539838 B/op\t     192 allocs/op",
            "extra": "624 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 2003158,
            "unit": "ns/op",
            "extra": "624 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12539838,
            "unit": "B/op",
            "extra": "624 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "624 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 2252521,
            "unit": "ns/op\t12580999 B/op\t     192 allocs/op",
            "extra": "613 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 2252521,
            "unit": "ns/op",
            "extra": "613 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12580999,
            "unit": "B/op",
            "extra": "613 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "613 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1993403,
            "unit": "ns/op\t12631087 B/op\t     193 allocs/op",
            "extra": "626 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1993403,
            "unit": "ns/op",
            "extra": "626 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12631087,
            "unit": "B/op",
            "extra": "626 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 193,
            "unit": "allocs/op",
            "extra": "626 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 2054416,
            "unit": "ns/op\t12337174 B/op\t     191 allocs/op",
            "extra": "616 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 2054416,
            "unit": "ns/op",
            "extra": "616 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12337174,
            "unit": "B/op",
            "extra": "616 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 191,
            "unit": "allocs/op",
            "extra": "616 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 2138780,
            "unit": "ns/op\t12526266 B/op\t     192 allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 2138780,
            "unit": "ns/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12526266,
            "unit": "B/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 2056157,
            "unit": "ns/op\t12425301 B/op\t     191 allocs/op",
            "extra": "597 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 2056157,
            "unit": "ns/op",
            "extra": "597 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12425301,
            "unit": "B/op",
            "extra": "597 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 191,
            "unit": "allocs/op",
            "extra": "597 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 8199614,
            "unit": "ns/op\t50037316 B/op\t     758 allocs/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 8199614,
            "unit": "ns/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 50037316,
            "unit": "B/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 758,
            "unit": "allocs/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 7803546,
            "unit": "ns/op\t50279197 B/op\t     759 allocs/op",
            "extra": "157 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 7803546,
            "unit": "ns/op",
            "extra": "157 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 50279197,
            "unit": "B/op",
            "extra": "157 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 759,
            "unit": "allocs/op",
            "extra": "157 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 7768705,
            "unit": "ns/op\t50824289 B/op\t     763 allocs/op",
            "extra": "156 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 7768705,
            "unit": "ns/op",
            "extra": "156 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 50824289,
            "unit": "B/op",
            "extra": "156 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 763,
            "unit": "allocs/op",
            "extra": "156 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 7925222,
            "unit": "ns/op\t49625285 B/op\t     755 allocs/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 7925222,
            "unit": "ns/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 49625285,
            "unit": "B/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 755,
            "unit": "allocs/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 7870274,
            "unit": "ns/op\t50681292 B/op\t     762 allocs/op",
            "extra": "152 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 7870274,
            "unit": "ns/op",
            "extra": "152 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 50681292,
            "unit": "B/op",
            "extra": "152 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 762,
            "unit": "allocs/op",
            "extra": "152 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 7635479,
            "unit": "ns/op\t50618200 B/op\t     762 allocs/op",
            "extra": "158 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 7635479,
            "unit": "ns/op",
            "extra": "158 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 50618200,
            "unit": "B/op",
            "extra": "158 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 762,
            "unit": "allocs/op",
            "extra": "158 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 164125,
            "unit": "ns/op\t  540799 B/op\t       6 allocs/op",
            "extra": "8494 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 164125,
            "unit": "ns/op",
            "extra": "8494 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 540799,
            "unit": "B/op",
            "extra": "8494 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8494 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 141940,
            "unit": "ns/op\t      33 B/op\t       0 allocs/op",
            "extra": "8076 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 141940,
            "unit": "ns/op",
            "extra": "8076 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 33,
            "unit": "B/op",
            "extra": "8076 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8076 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 146395,
            "unit": "ns/op\t  540800 B/op\t       6 allocs/op",
            "extra": "8457 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 146395,
            "unit": "ns/op",
            "extra": "8457 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 540800,
            "unit": "B/op",
            "extra": "8457 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8457 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 142706,
            "unit": "ns/op\t      31 B/op\t       0 allocs/op",
            "extra": "8643 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 142706,
            "unit": "ns/op",
            "extra": "8643 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 31,
            "unit": "B/op",
            "extra": "8643 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8643 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 147793,
            "unit": "ns/op\t  540799 B/op\t       6 allocs/op",
            "extra": "8522 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 147793,
            "unit": "ns/op",
            "extra": "8522 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 540799,
            "unit": "B/op",
            "extra": "8522 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8522 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 152730,
            "unit": "ns/op\t      34 B/op\t       0 allocs/op",
            "extra": "7892 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 152730,
            "unit": "ns/op",
            "extra": "7892 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 34,
            "unit": "B/op",
            "extra": "7892 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7892 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 140018,
            "unit": "ns/op\t  540298 B/op\t       6 allocs/op",
            "extra": "8055 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 140018,
            "unit": "ns/op",
            "extra": "8055 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540298,
            "unit": "B/op",
            "extra": "8055 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8055 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 145668,
            "unit": "ns/op\t  540617 B/op\t       5 allocs/op",
            "extra": "8996 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 145668,
            "unit": "ns/op",
            "extra": "8996 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540617,
            "unit": "B/op",
            "extra": "8996 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "8996 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 146511,
            "unit": "ns/op\t  540707 B/op\t       6 allocs/op",
            "extra": "8852 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 146511,
            "unit": "ns/op",
            "extra": "8852 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540707,
            "unit": "B/op",
            "extra": "8852 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8852 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 141034,
            "unit": "ns/op\t  540768 B/op\t       6 allocs/op",
            "extra": "8457 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 141034,
            "unit": "ns/op",
            "extra": "8457 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540768,
            "unit": "B/op",
            "extra": "8457 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8457 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 145020,
            "unit": "ns/op\t  540472 B/op\t       5 allocs/op",
            "extra": "9141 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 145020,
            "unit": "ns/op",
            "extra": "9141 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540472,
            "unit": "B/op",
            "extra": "9141 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9141 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 141438,
            "unit": "ns/op\t  540524 B/op\t       6 allocs/op",
            "extra": "8869 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 141438,
            "unit": "ns/op",
            "extra": "8869 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540524,
            "unit": "B/op",
            "extra": "8869 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8869 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 152634,
            "unit": "ns/op\t  540630 B/op\t       6 allocs/op",
            "extra": "9799 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 152634,
            "unit": "ns/op",
            "extra": "9799 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 540630,
            "unit": "B/op",
            "extra": "9799 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "9799 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 141317,
            "unit": "ns/op\t  497317 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 141317,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 497317,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 149891,
            "unit": "ns/op\t  531142 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 149891,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 531142,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 146378,
            "unit": "ns/op\t  531378 B/op\t       5 allocs/op",
            "extra": "9877 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 146378,
            "unit": "ns/op",
            "extra": "9877 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 531378,
            "unit": "B/op",
            "extra": "9877 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9877 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 147475,
            "unit": "ns/op\t  531196 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 147475,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 531196,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 146305,
            "unit": "ns/op\t  531965 B/op\t       5 allocs/op",
            "extra": "9891 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 146305,
            "unit": "ns/op",
            "extra": "9891 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 531965,
            "unit": "B/op",
            "extra": "9891 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9891 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 147345,
            "unit": "ns/op\t      33 B/op\t       0 allocs/op",
            "extra": "8017 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 147345,
            "unit": "ns/op",
            "extra": "8017 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 33,
            "unit": "B/op",
            "extra": "8017 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8017 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 140573,
            "unit": "ns/op\t  540800 B/op\t       6 allocs/op",
            "extra": "8367 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 140573,
            "unit": "ns/op",
            "extra": "8367 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 540800,
            "unit": "B/op",
            "extra": "8367 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8367 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 141996,
            "unit": "ns/op\t      31 B/op\t       0 allocs/op",
            "extra": "8719 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 141996,
            "unit": "ns/op",
            "extra": "8719 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 31,
            "unit": "B/op",
            "extra": "8719 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8719 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 148993,
            "unit": "ns/op\t  540800 B/op\t       6 allocs/op",
            "extra": "8494 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 148993,
            "unit": "ns/op",
            "extra": "8494 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 540800,
            "unit": "B/op",
            "extra": "8494 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8494 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 143291,
            "unit": "ns/op\t      32 B/op\t       0 allocs/op",
            "extra": "8228 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 143291,
            "unit": "ns/op",
            "extra": "8228 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "8228 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8228 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 146453,
            "unit": "ns/op\t  540800 B/op\t       6 allocs/op",
            "extra": "8446 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 146453,
            "unit": "ns/op",
            "extra": "8446 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 540800,
            "unit": "B/op",
            "extra": "8446 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8446 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 139639,
            "unit": "ns/op\t  540799 B/op\t       6 allocs/op",
            "extra": "8649 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 139639,
            "unit": "ns/op",
            "extra": "8649 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540799,
            "unit": "B/op",
            "extra": "8649 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8649 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 137539,
            "unit": "ns/op\t  540798 B/op\t       6 allocs/op",
            "extra": "8815 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 137539,
            "unit": "ns/op",
            "extra": "8815 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540798,
            "unit": "B/op",
            "extra": "8815 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8815 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 137242,
            "unit": "ns/op\t  540768 B/op\t       6 allocs/op",
            "extra": "8860 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 137242,
            "unit": "ns/op",
            "extra": "8860 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540768,
            "unit": "B/op",
            "extra": "8860 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8860 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 136392,
            "unit": "ns/op\t  540737 B/op\t       5 allocs/op",
            "extra": "8773 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 136392,
            "unit": "ns/op",
            "extra": "8773 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540737,
            "unit": "B/op",
            "extra": "8773 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "8773 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 136148,
            "unit": "ns/op\t  540798 B/op\t       6 allocs/op",
            "extra": "8935 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 136148,
            "unit": "ns/op",
            "extra": "8935 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540798,
            "unit": "B/op",
            "extra": "8935 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8935 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 138941,
            "unit": "ns/op\t  540798 B/op\t       6 allocs/op",
            "extra": "8835 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 138941,
            "unit": "ns/op",
            "extra": "8835 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540798,
            "unit": "B/op",
            "extra": "8835 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8835 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 137404,
            "unit": "ns/op\t  540798 B/op\t       6 allocs/op",
            "extra": "8772 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 137404,
            "unit": "ns/op",
            "extra": "8772 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540798,
            "unit": "B/op",
            "extra": "8772 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8772 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 136714,
            "unit": "ns/op\t  540737 B/op\t       5 allocs/op",
            "extra": "8750 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 136714,
            "unit": "ns/op",
            "extra": "8750 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540737,
            "unit": "B/op",
            "extra": "8750 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "8750 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 136919,
            "unit": "ns/op\t  506880 B/op\t       5 allocs/op",
            "extra": "9423 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 136919,
            "unit": "ns/op",
            "extra": "9423 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 506880,
            "unit": "B/op",
            "extra": "9423 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9423 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 136193,
            "unit": "ns/op\t  540455 B/op\t       5 allocs/op",
            "extra": "8660 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 136193,
            "unit": "ns/op",
            "extra": "8660 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540455,
            "unit": "B/op",
            "extra": "8660 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "8660 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 138104,
            "unit": "ns/op\t  540642 B/op\t       5 allocs/op",
            "extra": "8618 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 138104,
            "unit": "ns/op",
            "extra": "8618 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540642,
            "unit": "B/op",
            "extra": "8618 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "8618 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 146931,
            "unit": "ns/op\t  540429 B/op\t       5 allocs/op",
            "extra": "9598 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 146931,
            "unit": "ns/op",
            "extra": "9598 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540429,
            "unit": "B/op",
            "extra": "9598 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9598 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 141607,
            "unit": "ns/op\t  531425 B/op\t       5 allocs/op",
            "extra": "8566 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 141607,
            "unit": "ns/op",
            "extra": "8566 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 531425,
            "unit": "B/op",
            "extra": "8566 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "8566 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 137221,
            "unit": "ns/op\t  540768 B/op\t       6 allocs/op",
            "extra": "8690 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 137221,
            "unit": "ns/op",
            "extra": "8690 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 540768,
            "unit": "B/op",
            "extra": "8690 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8690 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 145615,
            "unit": "ns/op\t  530641 B/op\t       5 allocs/op",
            "extra": "9639 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 145615,
            "unit": "ns/op",
            "extra": "9639 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 530641,
            "unit": "B/op",
            "extra": "9639 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9639 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 140185,
            "unit": "ns/op\t  532040 B/op\t       5 allocs/op",
            "extra": "8922 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 140185,
            "unit": "ns/op",
            "extra": "8922 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 532040,
            "unit": "B/op",
            "extra": "8922 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "8922 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 139102,
            "unit": "ns/op\t  530460 B/op\t       5 allocs/op",
            "extra": "8342 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 139102,
            "unit": "ns/op",
            "extra": "8342 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 530460,
            "unit": "B/op",
            "extra": "8342 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "8342 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 143342,
            "unit": "ns/op\t  531400 B/op\t       5 allocs/op",
            "extra": "9381 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 143342,
            "unit": "ns/op",
            "extra": "9381 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 531400,
            "unit": "B/op",
            "extra": "9381 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9381 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 269.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4310156 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 269.6,
            "unit": "ns/op",
            "extra": "4310156 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4310156 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4310156 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 268.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4453372 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 268.7,
            "unit": "ns/op",
            "extra": "4453372 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4453372 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4453372 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 276.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4333149 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 276.7,
            "unit": "ns/op",
            "extra": "4333149 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4333149 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4333149 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 270.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4442642 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 270.4,
            "unit": "ns/op",
            "extra": "4442642 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4442642 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4442642 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 280.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4279921 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 280.1,
            "unit": "ns/op",
            "extra": "4279921 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4279921 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4279921 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 269.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4443597 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 269.9,
            "unit": "ns/op",
            "extra": "4443597 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4443597 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4443597 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 29.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38716495 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 29.44,
            "unit": "ns/op",
            "extra": "38716495 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38716495 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38716495 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 29.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38387557 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 29.05,
            "unit": "ns/op",
            "extra": "38387557 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38387557 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38387557 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 31.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39084348 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 31.01,
            "unit": "ns/op",
            "extra": "39084348 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39084348 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39084348 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 29.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41529982 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 29.46,
            "unit": "ns/op",
            "extra": "41529982 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41529982 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41529982 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 30.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37698861 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 30.49,
            "unit": "ns/op",
            "extra": "37698861 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37698861 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37698861 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 28.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38855592 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 28.26,
            "unit": "ns/op",
            "extra": "38855592 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38855592 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38855592 times\n4 procs"
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
          "id": "6ffa81b6b2b480d2e0739b8d6768fff26b823389",
          "message": "fix(race): prevent detector re-entrancy on g0 (meta-race fix)\n\nAdd 'gp != gp.m.curg' guard to all race entry points to suppress\ndetection when running on g0/gsignal. Without this, detector code\nrunning inside systemstack() can trigger raceread/racewrite on g0\nwhere raceignore==0 (it was only set on the user goroutine gp),\ncausing cascading false positives.\n\nThis is the same pattern TSAN uses for racereadrangepc/racewriterangepc.\n\nAffected functions (11 total):\n- raceread, racewrite, racereadrange, racewriterange\n- racereadpc, racewritepc\n- racereadrangepc1, racewriterangepc1\n- raceacquire, racerelease, racereleasemerge\n\nFixes MapReadWrite benchmark showing 87-127us (179-220x) due to ~950\nfalse positive race reports from detector's own allocations on g0.",
          "timestamp": "2026-02-23T23:50:50+03:00",
          "tree_id": "6e4e8d032889ce21d2f47284b7ec3006bc76ba5e",
          "url": "https://github.com/kolkov/go-race/commit/6ffa81b6b2b480d2e0739b8d6768fff26b823389"
        },
        "date": 1771880612470,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkRaceRead",
            "value": 160.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7486713 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 160.5,
            "unit": "ns/op",
            "extra": "7486713 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7486713 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7486713 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 161.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7457061 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 161.2,
            "unit": "ns/op",
            "extra": "7457061 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7457061 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7457061 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 160.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7455475 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 160.4,
            "unit": "ns/op",
            "extra": "7455475 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7455475 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7455475 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7505094 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 160,
            "unit": "ns/op",
            "extra": "7505094 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7505094 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7505094 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 160.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7463451 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 160.3,
            "unit": "ns/op",
            "extra": "7463451 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7463451 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7463451 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 160.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7489574 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 160.1,
            "unit": "ns/op",
            "extra": "7489574 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7489574 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7489574 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 161.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7517726 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 161.8,
            "unit": "ns/op",
            "extra": "7517726 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7517726 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7517726 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 161.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7446982 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 161.2,
            "unit": "ns/op",
            "extra": "7446982 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7446982 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7446982 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 159.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7531837 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 159.5,
            "unit": "ns/op",
            "extra": "7531837 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7531837 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7531837 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 160.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7452721 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 160.2,
            "unit": "ns/op",
            "extra": "7452721 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7452721 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7452721 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7552059 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 160,
            "unit": "ns/op",
            "extra": "7552059 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7552059 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7552059 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 160.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7486594 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 160.3,
            "unit": "ns/op",
            "extra": "7486594 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7486594 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7486594 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 160.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7508931 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 160.6,
            "unit": "ns/op",
            "extra": "7508931 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7508931 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7508931 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 163.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7388091 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 163.7,
            "unit": "ns/op",
            "extra": "7388091 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7388091 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7388091 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 159.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7554547 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 159.1,
            "unit": "ns/op",
            "extra": "7554547 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7554547 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7554547 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 162.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7240846 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 162.4,
            "unit": "ns/op",
            "extra": "7240846 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7240846 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7240846 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 159.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7515109 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 159.9,
            "unit": "ns/op",
            "extra": "7515109 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7515109 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7515109 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 158.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7572440 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 158.6,
            "unit": "ns/op",
            "extra": "7572440 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7572440 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7572440 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 286.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4180987 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 286.2,
            "unit": "ns/op",
            "extra": "4180987 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4180987 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4180987 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 290.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4119271 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 290.2,
            "unit": "ns/op",
            "extra": "4119271 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4119271 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4119271 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 305.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3892002 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 305.5,
            "unit": "ns/op",
            "extra": "3892002 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3892002 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3892002 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 302.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3956152 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 302.9,
            "unit": "ns/op",
            "extra": "3956152 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3956152 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3956152 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 295,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4067019 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 295,
            "unit": "ns/op",
            "extra": "4067019 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4067019 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4067019 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 306.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3915483 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 306.6,
            "unit": "ns/op",
            "extra": "3915483 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3915483 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3915483 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 346,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3512403 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 346,
            "unit": "ns/op",
            "extra": "3512403 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3512403 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3512403 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 343,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3519804 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 343,
            "unit": "ns/op",
            "extra": "3519804 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3519804 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3519804 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 344.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3488202 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 344.5,
            "unit": "ns/op",
            "extra": "3488202 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3488202 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3488202 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 347,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3457851 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 347,
            "unit": "ns/op",
            "extra": "3457851 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3457851 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3457851 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 358.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3351871 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 358.1,
            "unit": "ns/op",
            "extra": "3351871 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3351871 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3351871 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 358.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3349564 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 358.6,
            "unit": "ns/op",
            "extra": "3349564 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3349564 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3349564 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 209809,
            "unit": "ns/op\t  951519 B/op\t      18 allocs/op",
            "extra": "6082 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 209809,
            "unit": "ns/op",
            "extra": "6082 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 951519,
            "unit": "B/op",
            "extra": "6082 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "6082 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 194754,
            "unit": "ns/op\t  920801 B/op\t      18 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 194754,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 920801,
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
            "value": 207574,
            "unit": "ns/op\t  932932 B/op\t      18 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 207574,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 932932,
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
            "value": 228080,
            "unit": "ns/op\t  959309 B/op\t      18 allocs/op",
            "extra": "8522 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 228080,
            "unit": "ns/op",
            "extra": "8522 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 959309,
            "unit": "B/op",
            "extra": "8522 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "8522 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 202965,
            "unit": "ns/op\t  926259 B/op\t      18 allocs/op",
            "extra": "7424 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 202965,
            "unit": "ns/op",
            "extra": "7424 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 926259,
            "unit": "B/op",
            "extra": "7424 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "7424 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1",
            "value": 60708,
            "unit": "ns/op\t     226 B/op\t       0 allocs/op",
            "extra": "20404 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - ns/op",
            "value": 60708,
            "unit": "ns/op",
            "extra": "20404 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - B/op",
            "value": 226,
            "unit": "B/op",
            "extra": "20404 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20404 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1",
            "value": 60436,
            "unit": "ns/op\t     201 B/op\t       0 allocs/op",
            "extra": "20181 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - ns/op",
            "value": 60436,
            "unit": "ns/op",
            "extra": "20181 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - B/op",
            "value": 201,
            "unit": "B/op",
            "extra": "20181 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20181 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1",
            "value": 61136,
            "unit": "ns/op\t     178 B/op\t       0 allocs/op",
            "extra": "19803 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - ns/op",
            "value": 61136,
            "unit": "ns/op",
            "extra": "19803 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "19803 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19803 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1",
            "value": 59781,
            "unit": "ns/op\t     194 B/op\t       0 allocs/op",
            "extra": "21004 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - ns/op",
            "value": 59781,
            "unit": "ns/op",
            "extra": "21004 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - B/op",
            "value": 194,
            "unit": "B/op",
            "extra": "21004 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21004 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4",
            "value": 60996,
            "unit": "ns/op\t     694 B/op\t       0 allocs/op",
            "extra": "19897 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - ns/op",
            "value": 60996,
            "unit": "ns/op",
            "extra": "19897 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - B/op",
            "value": 694,
            "unit": "B/op",
            "extra": "19897 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19897 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4",
            "value": 61917,
            "unit": "ns/op\t     498 B/op\t       0 allocs/op",
            "extra": "19591 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - ns/op",
            "value": 61917,
            "unit": "ns/op",
            "extra": "19591 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - B/op",
            "value": 498,
            "unit": "B/op",
            "extra": "19591 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19591 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4",
            "value": 61250,
            "unit": "ns/op\t     491 B/op\t       0 allocs/op",
            "extra": "19378 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - ns/op",
            "value": 61250,
            "unit": "ns/op",
            "extra": "19378 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - B/op",
            "value": 491,
            "unit": "B/op",
            "extra": "19378 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19378 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 222761,
            "unit": "ns/op\t      54 B/op\t       0 allocs/op",
            "extra": "4954 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 222761,
            "unit": "ns/op",
            "extra": "4954 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 54,
            "unit": "B/op",
            "extra": "4954 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4954 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 224215,
            "unit": "ns/op\t      47 B/op\t       0 allocs/op",
            "extra": "5640 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 224215,
            "unit": "ns/op",
            "extra": "5640 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 47,
            "unit": "B/op",
            "extra": "5640 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5640 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 225916,
            "unit": "ns/op\t      51 B/op\t       0 allocs/op",
            "extra": "5264 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 225916,
            "unit": "ns/op",
            "extra": "5264 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 51,
            "unit": "B/op",
            "extra": "5264 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5264 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 222400,
            "unit": "ns/op\t      48 B/op\t       0 allocs/op",
            "extra": "5580 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 222400,
            "unit": "ns/op",
            "extra": "5580 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "5580 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5580 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 194948,
            "unit": "ns/op\t  798730 B/op\t      15 allocs/op",
            "extra": "7825 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 194948,
            "unit": "ns/op",
            "extra": "7825 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 798730,
            "unit": "B/op",
            "extra": "7825 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "7825 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 192650,
            "unit": "ns/op\t  795341 B/op\t      15 allocs/op",
            "extra": "7386 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 192650,
            "unit": "ns/op",
            "extra": "7386 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 795341,
            "unit": "B/op",
            "extra": "7386 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "7386 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 186975,
            "unit": "ns/op\t  791420 B/op\t      15 allocs/op",
            "extra": "7162 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 186975,
            "unit": "ns/op",
            "extra": "7162 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 791420,
            "unit": "B/op",
            "extra": "7162 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "7162 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 185548,
            "unit": "ns/op\t  796020 B/op\t      15 allocs/op",
            "extra": "7482 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 185548,
            "unit": "ns/op",
            "extra": "7482 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 796020,
            "unit": "B/op",
            "extra": "7482 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "7482 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 183292,
            "unit": "ns/op\t  794467 B/op\t      15 allocs/op",
            "extra": "7435 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 183292,
            "unit": "ns/op",
            "extra": "7435 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 794467,
            "unit": "B/op",
            "extra": "7435 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "7435 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 505038,
            "unit": "ns/op\t 3164150 B/op\t      51 allocs/op",
            "extra": "2761 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 505038,
            "unit": "ns/op",
            "extra": "2761 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3164150,
            "unit": "B/op",
            "extra": "2761 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2761 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 477325,
            "unit": "ns/op\t 3125187 B/op\t      50 allocs/op",
            "extra": "2794 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 477325,
            "unit": "ns/op",
            "extra": "2794 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3125187,
            "unit": "B/op",
            "extra": "2794 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2794 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 483107,
            "unit": "ns/op\t 3187754 B/op\t      51 allocs/op",
            "extra": "2803 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 483107,
            "unit": "ns/op",
            "extra": "2803 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3187754,
            "unit": "B/op",
            "extra": "2803 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2803 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 485950,
            "unit": "ns/op\t 3150413 B/op\t      51 allocs/op",
            "extra": "2762 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 485950,
            "unit": "ns/op",
            "extra": "2762 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3150413,
            "unit": "B/op",
            "extra": "2762 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2762 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 487942,
            "unit": "ns/op\t 3144700 B/op\t      51 allocs/op",
            "extra": "2754 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 487942,
            "unit": "ns/op",
            "extra": "2754 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3144700,
            "unit": "B/op",
            "extra": "2754 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "2754 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 482508,
            "unit": "ns/op\t 3112342 B/op\t      50 allocs/op",
            "extra": "2686 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 482508,
            "unit": "ns/op",
            "extra": "2686 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 3112342,
            "unit": "B/op",
            "extra": "2686 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2686 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1593541,
            "unit": "ns/op\t12391395 B/op\t     191 allocs/op",
            "extra": "804 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1593541,
            "unit": "ns/op",
            "extra": "804 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12391395,
            "unit": "B/op",
            "extra": "804 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 191,
            "unit": "allocs/op",
            "extra": "804 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1611192,
            "unit": "ns/op\t12534844 B/op\t     192 allocs/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1611192,
            "unit": "ns/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12534844,
            "unit": "B/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1612278,
            "unit": "ns/op\t12497127 B/op\t     192 allocs/op",
            "extra": "792 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1612278,
            "unit": "ns/op",
            "extra": "792 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12497127,
            "unit": "B/op",
            "extra": "792 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "792 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1563836,
            "unit": "ns/op\t12427593 B/op\t     191 allocs/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1563836,
            "unit": "ns/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12427593,
            "unit": "B/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 191,
            "unit": "allocs/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1602366,
            "unit": "ns/op\t12642533 B/op\t     193 allocs/op",
            "extra": "774 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1602366,
            "unit": "ns/op",
            "extra": "774 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12642533,
            "unit": "B/op",
            "extra": "774 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 193,
            "unit": "allocs/op",
            "extra": "774 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1619286,
            "unit": "ns/op\t12449388 B/op\t     191 allocs/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1619286,
            "unit": "ns/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 12449388,
            "unit": "B/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 191,
            "unit": "allocs/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 6297773,
            "unit": "ns/op\t50050526 B/op\t     757 allocs/op",
            "extra": "193 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 6297773,
            "unit": "ns/op",
            "extra": "193 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 50050526,
            "unit": "B/op",
            "extra": "193 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 757,
            "unit": "allocs/op",
            "extra": "193 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 5805886,
            "unit": "ns/op\t49822222 B/op\t     756 allocs/op",
            "extra": "205 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 5805886,
            "unit": "ns/op",
            "extra": "205 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 49822222,
            "unit": "B/op",
            "extra": "205 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 756,
            "unit": "allocs/op",
            "extra": "205 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 5818329,
            "unit": "ns/op\t49749305 B/op\t     755 allocs/op",
            "extra": "206 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 5818329,
            "unit": "ns/op",
            "extra": "206 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 49749305,
            "unit": "B/op",
            "extra": "206 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 755,
            "unit": "allocs/op",
            "extra": "206 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 5851057,
            "unit": "ns/op\t50305688 B/op\t     759 allocs/op",
            "extra": "202 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 5851057,
            "unit": "ns/op",
            "extra": "202 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 50305688,
            "unit": "B/op",
            "extra": "202 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 759,
            "unit": "allocs/op",
            "extra": "202 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 5796218,
            "unit": "ns/op\t49682953 B/op\t     755 allocs/op",
            "extra": "200 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 5796218,
            "unit": "ns/op",
            "extra": "200 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 49682953,
            "unit": "B/op",
            "extra": "200 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 755,
            "unit": "allocs/op",
            "extra": "200 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 6172151,
            "unit": "ns/op\t50165760 B/op\t     758 allocs/op",
            "extra": "186 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 6172151,
            "unit": "ns/op",
            "extra": "186 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 50165760,
            "unit": "B/op",
            "extra": "186 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 758,
            "unit": "allocs/op",
            "extra": "186 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 158053,
            "unit": "ns/op\t      36 B/op\t       0 allocs/op",
            "extra": "7428 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 158053,
            "unit": "ns/op",
            "extra": "7428 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 36,
            "unit": "B/op",
            "extra": "7428 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7428 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 159696,
            "unit": "ns/op\t      36 B/op\t       0 allocs/op",
            "extra": "7509 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 159696,
            "unit": "ns/op",
            "extra": "7509 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 36,
            "unit": "B/op",
            "extra": "7509 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7509 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 159755,
            "unit": "ns/op\t      37 B/op\t       0 allocs/op",
            "extra": "7248 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 159755,
            "unit": "ns/op",
            "extra": "7248 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 37,
            "unit": "B/op",
            "extra": "7248 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7248 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 159215,
            "unit": "ns/op\t      35 B/op\t       0 allocs/op",
            "extra": "7718 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 159215,
            "unit": "ns/op",
            "extra": "7718 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 35,
            "unit": "B/op",
            "extra": "7718 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7718 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 156402,
            "unit": "ns/op\t      35 B/op\t       0 allocs/op",
            "extra": "7713 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 156402,
            "unit": "ns/op",
            "extra": "7713 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 35,
            "unit": "B/op",
            "extra": "7713 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7713 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 153755,
            "unit": "ns/op\t      32 B/op\t       0 allocs/op",
            "extra": "8310 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 153755,
            "unit": "ns/op",
            "extra": "8310 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "8310 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8310 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 226125,
            "unit": "ns/op\t  506998 B/op\t       5 allocs/op",
            "extra": "9520 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 226125,
            "unit": "ns/op",
            "extra": "9520 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 506998,
            "unit": "B/op",
            "extra": "9520 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9520 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 150684,
            "unit": "ns/op\t  506749 B/op\t       5 allocs/op",
            "extra": "9514 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 150684,
            "unit": "ns/op",
            "extra": "9514 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 506749,
            "unit": "B/op",
            "extra": "9514 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9514 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 143903,
            "unit": "ns/op\t  506534 B/op\t       5 allocs/op",
            "extra": "8917 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 143903,
            "unit": "ns/op",
            "extra": "8917 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 506534,
            "unit": "B/op",
            "extra": "8917 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "8917 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 150903,
            "unit": "ns/op\t  540470 B/op\t       5 allocs/op",
            "extra": "9094 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 150903,
            "unit": "ns/op",
            "extra": "9094 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540470,
            "unit": "B/op",
            "extra": "9094 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9094 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 151013,
            "unit": "ns/op\t  540620 B/op\t       5 allocs/op",
            "extra": "9156 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 151013,
            "unit": "ns/op",
            "extra": "9156 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540620,
            "unit": "B/op",
            "extra": "9156 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9156 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 150427,
            "unit": "ns/op\t  540396 B/op\t       5 allocs/op",
            "extra": "9450 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 150427,
            "unit": "ns/op",
            "extra": "9450 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 540396,
            "unit": "B/op",
            "extra": "9450 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9450 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 142419,
            "unit": "ns/op\t  539376 B/op\t       5 allocs/op",
            "extra": "9325 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 142419,
            "unit": "ns/op",
            "extra": "9325 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 539376,
            "unit": "B/op",
            "extra": "9325 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9325 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 151141,
            "unit": "ns/op\t  540173 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 151141,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 540173,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 142174,
            "unit": "ns/op\t  539713 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 142174,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 539713,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 133657,
            "unit": "ns/op\t  498400 B/op\t       5 allocs/op",
            "extra": "9426 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 133657,
            "unit": "ns/op",
            "extra": "9426 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 498400,
            "unit": "B/op",
            "extra": "9426 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9426 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 151586,
            "unit": "ns/op\t  540741 B/op\t       6 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 151586,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 540741,
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
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 145258,
            "unit": "ns/op\t  539929 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 145258,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 539929,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 160752,
            "unit": "ns/op\t      36 B/op\t       0 allocs/op",
            "extra": "7441 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 160752,
            "unit": "ns/op",
            "extra": "7441 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 36,
            "unit": "B/op",
            "extra": "7441 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7441 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 159970,
            "unit": "ns/op\t      34 B/op\t       0 allocs/op",
            "extra": "7785 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 159970,
            "unit": "ns/op",
            "extra": "7785 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 34,
            "unit": "B/op",
            "extra": "7785 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7785 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 157003,
            "unit": "ns/op\t      36 B/op\t       0 allocs/op",
            "extra": "7339 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 157003,
            "unit": "ns/op",
            "extra": "7339 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 36,
            "unit": "B/op",
            "extra": "7339 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7339 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 161915,
            "unit": "ns/op\t      33 B/op\t       0 allocs/op",
            "extra": "8012 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 161915,
            "unit": "ns/op",
            "extra": "8012 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 33,
            "unit": "B/op",
            "extra": "8012 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8012 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 164853,
            "unit": "ns/op\t      35 B/op\t       0 allocs/op",
            "extra": "7573 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 164853,
            "unit": "ns/op",
            "extra": "7573 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 35,
            "unit": "B/op",
            "extra": "7573 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7573 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 163297,
            "unit": "ns/op\t      37 B/op\t       0 allocs/op",
            "extra": "7168 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 163297,
            "unit": "ns/op",
            "extra": "7168 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 37,
            "unit": "B/op",
            "extra": "7168 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7168 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 184280,
            "unit": "ns/op\t  540796 B/op\t       6 allocs/op",
            "extra": "9592 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 184280,
            "unit": "ns/op",
            "extra": "9592 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540796,
            "unit": "B/op",
            "extra": "9592 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "9592 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 143781,
            "unit": "ns/op\t  540795 B/op\t       6 allocs/op",
            "extra": "9690 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 143781,
            "unit": "ns/op",
            "extra": "9690 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540795,
            "unit": "B/op",
            "extra": "9690 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "9690 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 139785,
            "unit": "ns/op\t  540768 B/op\t       6 allocs/op",
            "extra": "9715 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 139785,
            "unit": "ns/op",
            "extra": "9715 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540768,
            "unit": "B/op",
            "extra": "9715 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "9715 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 141776,
            "unit": "ns/op\t  540795 B/op\t       6 allocs/op",
            "extra": "9801 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 141776,
            "unit": "ns/op",
            "extra": "9801 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540795,
            "unit": "B/op",
            "extra": "9801 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "9801 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 135945,
            "unit": "ns/op\t  540798 B/op\t       6 allocs/op",
            "extra": "8954 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 135945,
            "unit": "ns/op",
            "extra": "8954 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540798,
            "unit": "B/op",
            "extra": "8954 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "8954 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 146329,
            "unit": "ns/op\t  540768 B/op\t       6 allocs/op",
            "extra": "9573 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 146329,
            "unit": "ns/op",
            "extra": "9573 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 540768,
            "unit": "B/op",
            "extra": "9573 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "9573 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 139676,
            "unit": "ns/op\t  540509 B/op\t       5 allocs/op",
            "extra": "9417 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 139676,
            "unit": "ns/op",
            "extra": "9417 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540509,
            "unit": "B/op",
            "extra": "9417 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9417 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 139839,
            "unit": "ns/op\t  540535 B/op\t       5 allocs/op",
            "extra": "9301 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 139839,
            "unit": "ns/op",
            "extra": "9301 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540535,
            "unit": "B/op",
            "extra": "9301 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9301 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 140397,
            "unit": "ns/op\t  540509 B/op\t       5 allocs/op",
            "extra": "9409 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 140397,
            "unit": "ns/op",
            "extra": "9409 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540509,
            "unit": "B/op",
            "extra": "9409 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9409 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 142702,
            "unit": "ns/op\t  540595 B/op\t       5 allocs/op",
            "extra": "9410 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 142702,
            "unit": "ns/op",
            "extra": "9410 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540595,
            "unit": "B/op",
            "extra": "9410 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9410 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 144218,
            "unit": "ns/op\t  540598 B/op\t       5 allocs/op",
            "extra": "9574 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 144218,
            "unit": "ns/op",
            "extra": "9574 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540598,
            "unit": "B/op",
            "extra": "9574 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9574 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 142271,
            "unit": "ns/op\t  540713 B/op\t       6 allocs/op",
            "extra": "9937 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 142271,
            "unit": "ns/op",
            "extra": "9937 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 540713,
            "unit": "B/op",
            "extra": "9937 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "9937 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 146933,
            "unit": "ns/op\t  539983 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 146933,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 539983,
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
            "name": "BenchmarkWorkerPool/g64",
            "value": 137730,
            "unit": "ns/op\t  540796 B/op\t       6 allocs/op",
            "extra": "9409 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 137730,
            "unit": "ns/op",
            "extra": "9409 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 540796,
            "unit": "B/op",
            "extra": "9409 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "9409 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 152292,
            "unit": "ns/op\t  539767 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 152292,
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
            "name": "BenchmarkWorkerPool/g64",
            "value": 147372,
            "unit": "ns/op\t  540470 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 147372,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 540470,
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
            "name": "BenchmarkWorkerPool/g64",
            "value": 147864,
            "unit": "ns/op\t  539848 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 147864,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 539848,
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
            "name": "BenchmarkWorkerPool/g64",
            "value": 133457,
            "unit": "ns/op\t  539960 B/op\t       5 allocs/op",
            "extra": "9044 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 133457,
            "unit": "ns/op",
            "extra": "9044 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 539960,
            "unit": "B/op",
            "extra": "9044 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "9044 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 289.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3896241 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 289.1,
            "unit": "ns/op",
            "extra": "3896241 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3896241 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3896241 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 287.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4170237 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 287.5,
            "unit": "ns/op",
            "extra": "4170237 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4170237 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4170237 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 288.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4154122 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 288.1,
            "unit": "ns/op",
            "extra": "4154122 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4154122 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4154122 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 285.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4206552 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 285.8,
            "unit": "ns/op",
            "extra": "4206552 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4206552 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4206552 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 287.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4196857 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 287.3,
            "unit": "ns/op",
            "extra": "4196857 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4196857 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4196857 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 286.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4209847 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 286.4,
            "unit": "ns/op",
            "extra": "4209847 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4209847 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4209847 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 28.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48314299 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 28.87,
            "unit": "ns/op",
            "extra": "48314299 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48314299 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48314299 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 26.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47643795 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 26.45,
            "unit": "ns/op",
            "extra": "47643795 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47643795 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47643795 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 62.66,
            "unit": "ns/op\t      38 B/op\t       0 allocs/op",
            "extra": "46243998 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 62.66,
            "unit": "ns/op",
            "extra": "46243998 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 38,
            "unit": "B/op",
            "extra": "46243998 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46243998 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 24.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43331149 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 24.66,
            "unit": "ns/op",
            "extra": "43331149 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43331149 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43331149 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 27.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50337139 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 27.48,
            "unit": "ns/op",
            "extra": "50337139 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50337139 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50337139 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 24.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41452750 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 24.8,
            "unit": "ns/op",
            "extra": "41452750 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41452750 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41452750 times\n4 procs"
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
          "id": "48160eb4a5971d7dfeed4e4b54f24e7bcf0721f7",
          "message": "perf(T10): reduce MaxThreads 65536->1024, revert broken CI cache\n\nVectorClock: 256KB -> 4KB per goroutine (64x reduction).\nExpected GoroutineStartStop: ~946KB -> ~20KB per goroutine.\n\nChanges:\n- vectorclock.MaxThreads: 65536 -> 1024 (4x TSAN's 256 limit)\n- TID pool: [1..1023] instead of [1..65535]\n- maxClockAtFree/tidToGIDMap: use MaxThreads constant\n- Revert CI toolchain caching (make.bash generates source files\n  like zdefaultcc.go that go install std cannot recreate)",
          "timestamp": "2026-02-24T00:54:00+03:00",
          "tree_id": "70b9aebabf8cff815a43d7ab8b7a2494aea398bd",
          "url": "https://github.com/kolkov/go-race/commit/48160eb4a5971d7dfeed4e4b54f24e7bcf0721f7"
        },
        "date": 1771884264254,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkRaceRead",
            "value": 164.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7297363 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 164.2,
            "unit": "ns/op",
            "extra": "7297363 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7297363 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7297363 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 165.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7262264 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 165.4,
            "unit": "ns/op",
            "extra": "7262264 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7262264 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7262264 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 164.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7291170 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 164.5,
            "unit": "ns/op",
            "extra": "7291170 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7291170 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7291170 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 164.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7302590 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 164.4,
            "unit": "ns/op",
            "extra": "7302590 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7302590 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7302590 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 163.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7302336 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 163.5,
            "unit": "ns/op",
            "extra": "7302336 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7302336 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7302336 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 164.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7306682 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 164.3,
            "unit": "ns/op",
            "extra": "7306682 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7306682 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7306682 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 163.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7330060 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 163.6,
            "unit": "ns/op",
            "extra": "7330060 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7330060 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7330060 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7349223 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 163,
            "unit": "ns/op",
            "extra": "7349223 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7349223 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7349223 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 163.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7282962 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 163.7,
            "unit": "ns/op",
            "extra": "7282962 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7282962 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7282962 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 165.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7234801 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 165.1,
            "unit": "ns/op",
            "extra": "7234801 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7234801 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7234801 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 164.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7308724 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 164.6,
            "unit": "ns/op",
            "extra": "7308724 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7308724 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7308724 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 164.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7274869 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 164.8,
            "unit": "ns/op",
            "extra": "7274869 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7274869 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7274869 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 164.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7302320 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 164.1,
            "unit": "ns/op",
            "extra": "7302320 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7302320 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7302320 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 166.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7296582 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 166.1,
            "unit": "ns/op",
            "extra": "7296582 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7296582 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7296582 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 165.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7026913 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 165.2,
            "unit": "ns/op",
            "extra": "7026913 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7026913 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7026913 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 164.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7313295 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 164.4,
            "unit": "ns/op",
            "extra": "7313295 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7313295 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7313295 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 164.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7292035 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 164.7,
            "unit": "ns/op",
            "extra": "7292035 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7292035 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7292035 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 165.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7241124 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 165.4,
            "unit": "ns/op",
            "extra": "7241124 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7241124 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7241124 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 302.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3950827 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 302.1,
            "unit": "ns/op",
            "extra": "3950827 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3950827 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3950827 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 307.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3952178 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 307.7,
            "unit": "ns/op",
            "extra": "3952178 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3952178 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3952178 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 307.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3895521 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 307.4,
            "unit": "ns/op",
            "extra": "3895521 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3895521 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3895521 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 309.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3865737 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 309.8,
            "unit": "ns/op",
            "extra": "3865737 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3865737 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3865737 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 312.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3845030 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 312.1,
            "unit": "ns/op",
            "extra": "3845030 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3845030 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3845030 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 318,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3800445 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 318,
            "unit": "ns/op",
            "extra": "3800445 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3800445 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3800445 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 357.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3350029 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 357.5,
            "unit": "ns/op",
            "extra": "3350029 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3350029 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3350029 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 359.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3331810 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 359.6,
            "unit": "ns/op",
            "extra": "3331810 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3331810 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3331810 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 360.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3325837 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 360.7,
            "unit": "ns/op",
            "extra": "3325837 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3325837 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3325837 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 369.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3259975 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 369.9,
            "unit": "ns/op",
            "extra": "3259975 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3259975 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3259975 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 369.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3236024 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 369.7,
            "unit": "ns/op",
            "extra": "3236024 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3236024 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3236024 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 373,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3216192 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 373,
            "unit": "ns/op",
            "extra": "3216192 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3216192 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3216192 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 24897,
            "unit": "ns/op\t   18734 B/op\t      19 allocs/op",
            "extra": "48590 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 24897,
            "unit": "ns/op",
            "extra": "48590 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 18734,
            "unit": "B/op",
            "extra": "48590 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 19,
            "unit": "allocs/op",
            "extra": "48590 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 12272,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "102157 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 12272,
            "unit": "ns/op",
            "extra": "102157 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "102157 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "102157 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 14549,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "84909 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 14549,
            "unit": "ns/op",
            "extra": "84909 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "84909 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "84909 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 13700,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "97530 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 13700,
            "unit": "ns/op",
            "extra": "97530 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "97530 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "97530 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 12248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "93543 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 12248,
            "unit": "ns/op",
            "extra": "93543 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "93543 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "93543 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 12063,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "104326 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 12063,
            "unit": "ns/op",
            "extra": "104326 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "104326 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "104326 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 29486,
            "unit": "ns/op\t   15146 B/op\t      15 allocs/op",
            "extra": "40810 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 29486,
            "unit": "ns/op",
            "extra": "40810 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15146,
            "unit": "B/op",
            "extra": "40810 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "40810 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 29484,
            "unit": "ns/op\t   15096 B/op\t      15 allocs/op",
            "extra": "41589 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 29484,
            "unit": "ns/op",
            "extra": "41589 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15096,
            "unit": "B/op",
            "extra": "41589 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "41589 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 30020,
            "unit": "ns/op\t   15110 B/op\t      15 allocs/op",
            "extra": "40195 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 30020,
            "unit": "ns/op",
            "extra": "40195 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15110,
            "unit": "B/op",
            "extra": "40195 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "40195 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 29970,
            "unit": "ns/op\t   15086 B/op\t      15 allocs/op",
            "extra": "42170 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 29970,
            "unit": "ns/op",
            "extra": "42170 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15086,
            "unit": "B/op",
            "extra": "42170 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "42170 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 30480,
            "unit": "ns/op\t   15078 B/op\t      15 allocs/op",
            "extra": "38102 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 30480,
            "unit": "ns/op",
            "extra": "38102 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15078,
            "unit": "B/op",
            "extra": "38102 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "38102 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 30204,
            "unit": "ns/op\t   15097 B/op\t      15 allocs/op",
            "extra": "42672 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 30204,
            "unit": "ns/op",
            "extra": "42672 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15097,
            "unit": "B/op",
            "extra": "42672 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "42672 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 128398,
            "unit": "ns/op\t   60311 B/op\t      52 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 128398,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 60311,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 52,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 128302,
            "unit": "ns/op\t   60115 B/op\t      51 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 128302,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 60115,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 128494,
            "unit": "ns/op\t   59737 B/op\t      51 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 128494,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 59737,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 128911,
            "unit": "ns/op\t   59561 B/op\t      51 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 128911,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 59561,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 130143,
            "unit": "ns/op\t   59834 B/op\t      51 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 130143,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 59834,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 129467,
            "unit": "ns/op\t   60236 B/op\t      51 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 129467,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 60236,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 471388,
            "unit": "ns/op\t  237068 B/op\t     194 allocs/op",
            "extra": "3018 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 471388,
            "unit": "ns/op",
            "extra": "3018 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 237068,
            "unit": "B/op",
            "extra": "3018 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "3018 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 468617,
            "unit": "ns/op\t  239402 B/op\t     195 allocs/op",
            "extra": "3088 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 468617,
            "unit": "ns/op",
            "extra": "3088 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 239402,
            "unit": "B/op",
            "extra": "3088 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "3088 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 467229,
            "unit": "ns/op\t  238849 B/op\t     195 allocs/op",
            "extra": "3051 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 467229,
            "unit": "ns/op",
            "extra": "3051 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 238849,
            "unit": "B/op",
            "extra": "3051 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "3051 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 469648,
            "unit": "ns/op\t  238663 B/op\t     195 allocs/op",
            "extra": "3042 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 469648,
            "unit": "ns/op",
            "extra": "3042 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 238663,
            "unit": "B/op",
            "extra": "3042 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "3042 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 466958,
            "unit": "ns/op\t  239599 B/op\t     195 allocs/op",
            "extra": "3069 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 466958,
            "unit": "ns/op",
            "extra": "3069 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 239599,
            "unit": "B/op",
            "extra": "3069 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "3069 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 471583,
            "unit": "ns/op\t  239874 B/op\t     195 allocs/op",
            "extra": "3051 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 471583,
            "unit": "ns/op",
            "extra": "3051 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 239874,
            "unit": "B/op",
            "extra": "3051 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "3051 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1799611,
            "unit": "ns/op\t  962114 B/op\t     772 allocs/op",
            "extra": "705 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1799611,
            "unit": "ns/op",
            "extra": "705 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 962114,
            "unit": "B/op",
            "extra": "705 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 772,
            "unit": "allocs/op",
            "extra": "705 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1835691,
            "unit": "ns/op\t  958976 B/op\t     770 allocs/op",
            "extra": "700 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1835691,
            "unit": "ns/op",
            "extra": "700 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 958976,
            "unit": "B/op",
            "extra": "700 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "700 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1829565,
            "unit": "ns/op\t  957319 B/op\t     770 allocs/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1829565,
            "unit": "ns/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 957319,
            "unit": "B/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1798343,
            "unit": "ns/op\t  956920 B/op\t     769 allocs/op",
            "extra": "724 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1798343,
            "unit": "ns/op",
            "extra": "724 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 956920,
            "unit": "B/op",
            "extra": "724 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 769,
            "unit": "allocs/op",
            "extra": "724 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1808293,
            "unit": "ns/op\t  956020 B/op\t     769 allocs/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1808293,
            "unit": "ns/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 956020,
            "unit": "B/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 769,
            "unit": "allocs/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1781051,
            "unit": "ns/op\t  952569 B/op\t     768 allocs/op",
            "extra": "722 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1781051,
            "unit": "ns/op",
            "extra": "722 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 952569,
            "unit": "B/op",
            "extra": "722 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 768,
            "unit": "allocs/op",
            "extra": "722 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 7825,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "147109 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 7825,
            "unit": "ns/op",
            "extra": "147109 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "147109 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "147109 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 3610,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "339872 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 3610,
            "unit": "ns/op",
            "extra": "339872 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "339872 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "339872 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 7706,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "154489 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 7706,
            "unit": "ns/op",
            "extra": "154489 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "154489 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "154489 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 3568,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "349279 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 3568,
            "unit": "ns/op",
            "extra": "349279 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "349279 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "349279 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 7549,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "169239 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 7549,
            "unit": "ns/op",
            "extra": "169239 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "169239 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "169239 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 3554,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "359311 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 3554,
            "unit": "ns/op",
            "extra": "359311 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "359311 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "359311 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 3310,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "382683 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 3310,
            "unit": "ns/op",
            "extra": "382683 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "382683 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "382683 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 3513,
            "unit": "ns/op\t    9210 B/op\t       5 allocs/op",
            "extra": "364717 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 3513,
            "unit": "ns/op",
            "extra": "364717 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9210,
            "unit": "B/op",
            "extra": "364717 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "364717 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 3373,
            "unit": "ns/op\t    9823 B/op\t       6 allocs/op",
            "extra": "403084 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 3373,
            "unit": "ns/op",
            "extra": "403084 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9823,
            "unit": "B/op",
            "extra": "403084 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "403084 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 3442,
            "unit": "ns/op\t    9209 B/op\t       5 allocs/op",
            "extra": "354694 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 3442,
            "unit": "ns/op",
            "extra": "354694 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9209,
            "unit": "B/op",
            "extra": "354694 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "354694 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 3472,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "379032 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 3472,
            "unit": "ns/op",
            "extra": "379032 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "379032 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "379032 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 3494,
            "unit": "ns/op\t    9209 B/op\t       5 allocs/op",
            "extra": "361574 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 3494,
            "unit": "ns/op",
            "extra": "361574 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9209,
            "unit": "B/op",
            "extra": "361574 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "361574 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 4167,
            "unit": "ns/op\t    9056 B/op\t       5 allocs/op",
            "extra": "318630 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 4167,
            "unit": "ns/op",
            "extra": "318630 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9056,
            "unit": "B/op",
            "extra": "318630 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "318630 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 3692,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "310240 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 3692,
            "unit": "ns/op",
            "extra": "310240 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "310240 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "310240 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 3707,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "300427 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 3707,
            "unit": "ns/op",
            "extra": "300427 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "300427 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "300427 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 3689,
            "unit": "ns/op\t    9823 B/op\t       5 allocs/op",
            "extra": "321900 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 3689,
            "unit": "ns/op",
            "extra": "321900 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9823,
            "unit": "B/op",
            "extra": "321900 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "321900 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 3656,
            "unit": "ns/op\t    9823 B/op\t       5 allocs/op",
            "extra": "305673 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 3656,
            "unit": "ns/op",
            "extra": "305673 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9823,
            "unit": "B/op",
            "extra": "305673 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "305673 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 4161,
            "unit": "ns/op\t    9056 B/op\t       5 allocs/op",
            "extra": "295726 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 4161,
            "unit": "ns/op",
            "extra": "295726 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9056,
            "unit": "B/op",
            "extra": "295726 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "295726 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 7404,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "166882 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 7404,
            "unit": "ns/op",
            "extra": "166882 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "166882 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "166882 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 3797,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "323575 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 3797,
            "unit": "ns/op",
            "extra": "323575 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "323575 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "323575 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 6920,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "173407 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 6920,
            "unit": "ns/op",
            "extra": "173407 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "173407 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "173407 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 3809,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "358197 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 3809,
            "unit": "ns/op",
            "extra": "358197 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "358197 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "358197 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 7214,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167624 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 7214,
            "unit": "ns/op",
            "extra": "167624 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167624 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167624 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 3794,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "360667 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 3794,
            "unit": "ns/op",
            "extra": "360667 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "360667 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "360667 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 3721,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "331054 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 3721,
            "unit": "ns/op",
            "extra": "331054 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "331054 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "331054 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 3833,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "334760 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 3833,
            "unit": "ns/op",
            "extra": "334760 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "334760 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "334760 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 3766,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "329371 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 3766,
            "unit": "ns/op",
            "extra": "329371 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "329371 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "329371 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 3844,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "326288 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 3844,
            "unit": "ns/op",
            "extra": "326288 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "326288 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "326288 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 3813,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "325032 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 3813,
            "unit": "ns/op",
            "extra": "325032 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "325032 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "325032 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 3883,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "332798 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 3883,
            "unit": "ns/op",
            "extra": "332798 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "332798 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "332798 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 4200,
            "unit": "ns/op\t    9210 B/op\t       5 allocs/op",
            "extra": "240753 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 4200,
            "unit": "ns/op",
            "extra": "240753 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9210,
            "unit": "B/op",
            "extra": "240753 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "240753 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 4119,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "309772 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 4119,
            "unit": "ns/op",
            "extra": "309772 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "309772 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "309772 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 4141,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "313610 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 4141,
            "unit": "ns/op",
            "extra": "313610 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "313610 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "313610 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 4157,
            "unit": "ns/op\t    9210 B/op\t       5 allocs/op",
            "extra": "297946 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 4157,
            "unit": "ns/op",
            "extra": "297946 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9210,
            "unit": "B/op",
            "extra": "297946 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "297946 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 4195,
            "unit": "ns/op\t    9209 B/op\t       5 allocs/op",
            "extra": "303861 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 4195,
            "unit": "ns/op",
            "extra": "303861 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9209,
            "unit": "B/op",
            "extra": "303861 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "303861 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 4106,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "313070 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 4106,
            "unit": "ns/op",
            "extra": "313070 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "313070 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "313070 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 4072,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "307514 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 4072,
            "unit": "ns/op",
            "extra": "307514 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "307514 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "307514 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 4099,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "311114 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 4099,
            "unit": "ns/op",
            "extra": "311114 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "311114 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "311114 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 4229,
            "unit": "ns/op\t    9056 B/op\t       5 allocs/op",
            "extra": "295579 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 4229,
            "unit": "ns/op",
            "extra": "295579 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9056,
            "unit": "B/op",
            "extra": "295579 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "295579 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 4207,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "309306 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 4207,
            "unit": "ns/op",
            "extra": "309306 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "309306 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "309306 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 4259,
            "unit": "ns/op\t    9056 B/op\t       5 allocs/op",
            "extra": "292414 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 4259,
            "unit": "ns/op",
            "extra": "292414 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9056,
            "unit": "B/op",
            "extra": "292414 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "292414 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 4360,
            "unit": "ns/op\t    9056 B/op\t       5 allocs/op",
            "extra": "299794 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 4360,
            "unit": "ns/op",
            "extra": "299794 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9056,
            "unit": "B/op",
            "extra": "299794 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "299794 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 275.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4349648 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 275.6,
            "unit": "ns/op",
            "extra": "4349648 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4349648 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4349648 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 276.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4332476 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 276.9,
            "unit": "ns/op",
            "extra": "4332476 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4332476 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4332476 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 277.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4379808 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 277.1,
            "unit": "ns/op",
            "extra": "4379808 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4379808 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4379808 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 275.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4365129 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 275.6,
            "unit": "ns/op",
            "extra": "4365129 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4365129 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4365129 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 273.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4391677 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 273.3,
            "unit": "ns/op",
            "extra": "4391677 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4391677 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4391677 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 274.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4378756 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 274.1,
            "unit": "ns/op",
            "extra": "4378756 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4378756 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4378756 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58099351 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.51,
            "unit": "ns/op",
            "extra": "58099351 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58099351 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58099351 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58888016 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.24,
            "unit": "ns/op",
            "extra": "58888016 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58888016 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58888016 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57643958 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.4,
            "unit": "ns/op",
            "extra": "57643958 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57643958 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57643958 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56721874 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.23,
            "unit": "ns/op",
            "extra": "56721874 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56721874 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56721874 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57827911 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.33,
            "unit": "ns/op",
            "extra": "57827911 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57827911 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57827911 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58940995 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.6,
            "unit": "ns/op",
            "extra": "58940995 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58940995 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58940995 times\n4 procs"
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
          "id": "01384e2a96847b68b85b0e5f6e6ef436265a6f3c",
          "message": "fix(detector): suppress sync-address false positives, unconditional shadow clearing\n\nTwo fixes for false positive race reports in CI benchmarks:\n\n1. Sync address suppression (MutexContention, MapReadWrite):\n   Go 1.26 internal/sync.Mutex does CAS on m.state BEFORE race.Acquire(),\n   triggering racewrite before VectorClock is updated. Added HasEntry()\n   check in reportRaceV2 to suppress reports on addresses that have a\n   SyncVar (sync primitives tracked via raceacquire/racerelease).\n\n2. Unconditional racemalloc/racefree (MemoryConcurrent/g16):\n   GC sweep can call racefree during a detector call (raceignore > 0).\n   Old code skipped clearing, leaving stale VarState entries that cause\n   false positives on address reuse. Shadow clearing is in NoInstrument\n   package and does not re-enter the detector.",
          "timestamp": "2026-02-24T01:45:37+03:00",
          "tree_id": "421dfaa9434085a4b7a9673301e55d09705a94f3",
          "url": "https://github.com/kolkov/go-race/commit/01384e2a96847b68b85b0e5f6e6ef436265a6f3c"
        },
        "date": 1771916126723,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkRaceRead",
            "value": 161.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7426826 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 161.7,
            "unit": "ns/op",
            "extra": "7426826 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7426826 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7426826 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 159.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7503450 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 159.9,
            "unit": "ns/op",
            "extra": "7503450 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7503450 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7503450 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 162.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7362348 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 162.3,
            "unit": "ns/op",
            "extra": "7362348 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7362348 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7362348 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 162.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7415718 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 162.6,
            "unit": "ns/op",
            "extra": "7415718 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7415718 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7415718 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 161.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7444518 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 161.3,
            "unit": "ns/op",
            "extra": "7444518 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7444518 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7444518 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7561286 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 159,
            "unit": "ns/op",
            "extra": "7561286 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7561286 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7561286 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 162.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7364362 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 162.9,
            "unit": "ns/op",
            "extra": "7364362 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7364362 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7364362 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 163.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7353760 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 163.4,
            "unit": "ns/op",
            "extra": "7353760 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7353760 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7353760 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 164.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7326688 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 164.1,
            "unit": "ns/op",
            "extra": "7326688 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7326688 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7326688 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 164.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7316910 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 164.4,
            "unit": "ns/op",
            "extra": "7316910 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7316910 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7316910 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 160.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7371147 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 160.9,
            "unit": "ns/op",
            "extra": "7371147 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7371147 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7371147 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 162.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7378903 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 162.4,
            "unit": "ns/op",
            "extra": "7378903 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7378903 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7378903 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 163.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7415132 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 163.5,
            "unit": "ns/op",
            "extra": "7415132 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7415132 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7415132 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 161.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7433133 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 161.1,
            "unit": "ns/op",
            "extra": "7433133 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7433133 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7433133 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 162.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7333933 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 162.9,
            "unit": "ns/op",
            "extra": "7333933 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7333933 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7333933 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 159.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7510843 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 159.7,
            "unit": "ns/op",
            "extra": "7510843 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7510843 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7510843 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 161.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7426729 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 161.6,
            "unit": "ns/op",
            "extra": "7426729 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7426729 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7426729 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 162.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7398668 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 162.3,
            "unit": "ns/op",
            "extra": "7398668 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7398668 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7398668 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 285.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4207375 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 285.4,
            "unit": "ns/op",
            "extra": "4207375 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4207375 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4207375 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 288,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4190996 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 288,
            "unit": "ns/op",
            "extra": "4190996 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4190996 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4190996 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 286.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4196161 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 286.4,
            "unit": "ns/op",
            "extra": "4196161 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4196161 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4196161 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 290.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4144950 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 290.5,
            "unit": "ns/op",
            "extra": "4144950 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4144950 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4144950 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 293.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4091295 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 293.3,
            "unit": "ns/op",
            "extra": "4091295 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4091295 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4091295 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 295,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4074169 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 295,
            "unit": "ns/op",
            "extra": "4074169 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4074169 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4074169 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 336.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3560922 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 336.7,
            "unit": "ns/op",
            "extra": "3560922 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3560922 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3560922 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 342.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3519261 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 342.4,
            "unit": "ns/op",
            "extra": "3519261 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3519261 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3519261 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 341.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3505908 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 341.5,
            "unit": "ns/op",
            "extra": "3505908 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3505908 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3505908 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 341.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3517276 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 341.5,
            "unit": "ns/op",
            "extra": "3517276 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3517276 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3517276 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 354.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3386124 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 354.4,
            "unit": "ns/op",
            "extra": "3386124 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3386124 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3386124 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 354.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3385918 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 354.5,
            "unit": "ns/op",
            "extra": "3385918 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3385918 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3385918 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 59833,
            "unit": "ns/op\t   18802 B/op\t      19 allocs/op",
            "extra": "26209 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 59833,
            "unit": "ns/op",
            "extra": "26209 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 18802,
            "unit": "B/op",
            "extra": "26209 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 19,
            "unit": "allocs/op",
            "extra": "26209 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 8084,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "152736 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 8084,
            "unit": "ns/op",
            "extra": "152736 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "152736 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "152736 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 8344,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "145644 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 8344,
            "unit": "ns/op",
            "extra": "145644 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "145644 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "145644 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 8007,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "150841 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 8007,
            "unit": "ns/op",
            "extra": "150841 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "150841 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "150841 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 7951,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "151820 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 7951,
            "unit": "ns/op",
            "extra": "151820 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "151820 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "151820 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 7974,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "161920 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 7974,
            "unit": "ns/op",
            "extra": "161920 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "161920 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "161920 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 8005,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "136284 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 8005,
            "unit": "ns/op",
            "extra": "136284 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "136284 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "136284 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 99068,
            "unit": "ns/op\t   15138 B/op\t      15 allocs/op",
            "extra": "12114 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 99068,
            "unit": "ns/op",
            "extra": "12114 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15138,
            "unit": "B/op",
            "extra": "12114 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "12114 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 101165,
            "unit": "ns/op\t   15132 B/op\t      15 allocs/op",
            "extra": "12015 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 101165,
            "unit": "ns/op",
            "extra": "12015 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15132,
            "unit": "B/op",
            "extra": "12015 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "12015 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 102662,
            "unit": "ns/op\t   15089 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 102662,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15089,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 100631,
            "unit": "ns/op\t   15076 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 100631,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15076,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 100317,
            "unit": "ns/op\t   15080 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 100317,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15080,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 106125,
            "unit": "ns/op\t   15079 B/op\t      15 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 106125,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15079,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 314882,
            "unit": "ns/op\t   59916 B/op\t      51 allocs/op",
            "extra": "4714 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 314882,
            "unit": "ns/op",
            "extra": "4714 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 59916,
            "unit": "B/op",
            "extra": "4714 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "4714 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 315445,
            "unit": "ns/op\t   59706 B/op\t      51 allocs/op",
            "extra": "4693 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 315445,
            "unit": "ns/op",
            "extra": "4693 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 59706,
            "unit": "B/op",
            "extra": "4693 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "4693 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 315286,
            "unit": "ns/op\t   59943 B/op\t      51 allocs/op",
            "extra": "4554 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 315286,
            "unit": "ns/op",
            "extra": "4554 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 59943,
            "unit": "B/op",
            "extra": "4554 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "4554 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 323338,
            "unit": "ns/op\t   59258 B/op\t      51 allocs/op",
            "extra": "4777 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 323338,
            "unit": "ns/op",
            "extra": "4777 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 59258,
            "unit": "B/op",
            "extra": "4777 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "4777 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 320674,
            "unit": "ns/op\t   59886 B/op\t      51 allocs/op",
            "extra": "4612 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 320674,
            "unit": "ns/op",
            "extra": "4612 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 59886,
            "unit": "B/op",
            "extra": "4612 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "4612 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 320861,
            "unit": "ns/op\t   59911 B/op\t      51 allocs/op",
            "extra": "4692 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 320861,
            "unit": "ns/op",
            "extra": "4692 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 59911,
            "unit": "B/op",
            "extra": "4692 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 51,
            "unit": "allocs/op",
            "extra": "4692 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1104218,
            "unit": "ns/op\t  237952 B/op\t     194 allocs/op",
            "extra": "1382 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1104218,
            "unit": "ns/op",
            "extra": "1382 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 237952,
            "unit": "B/op",
            "extra": "1382 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "1382 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1118159,
            "unit": "ns/op\t  237757 B/op\t     194 allocs/op",
            "extra": "1370 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1118159,
            "unit": "ns/op",
            "extra": "1370 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 237757,
            "unit": "B/op",
            "extra": "1370 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "1370 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1106503,
            "unit": "ns/op\t  237453 B/op\t     194 allocs/op",
            "extra": "1386 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1106503,
            "unit": "ns/op",
            "extra": "1386 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 237453,
            "unit": "B/op",
            "extra": "1386 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "1386 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1133741,
            "unit": "ns/op\t  236659 B/op\t     194 allocs/op",
            "extra": "1366 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1133741,
            "unit": "ns/op",
            "extra": "1366 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 236659,
            "unit": "B/op",
            "extra": "1366 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "1366 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1114742,
            "unit": "ns/op\t  235880 B/op\t     194 allocs/op",
            "extra": "1372 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1114742,
            "unit": "ns/op",
            "extra": "1372 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 235880,
            "unit": "B/op",
            "extra": "1372 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 194,
            "unit": "allocs/op",
            "extra": "1372 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 1111350,
            "unit": "ns/op\t  235409 B/op\t     193 allocs/op",
            "extra": "1368 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 1111350,
            "unit": "ns/op",
            "extra": "1368 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 235409,
            "unit": "B/op",
            "extra": "1368 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 193,
            "unit": "allocs/op",
            "extra": "1368 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 4231406,
            "unit": "ns/op\t  962109 B/op\t     772 allocs/op",
            "extra": "324 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 4231406,
            "unit": "ns/op",
            "extra": "324 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 962109,
            "unit": "B/op",
            "extra": "324 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 772,
            "unit": "allocs/op",
            "extra": "324 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 4193554,
            "unit": "ns/op\t  956253 B/op\t     769 allocs/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 4193554,
            "unit": "ns/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 956253,
            "unit": "B/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 769,
            "unit": "allocs/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 4171977,
            "unit": "ns/op\t  962100 B/op\t     772 allocs/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 4171977,
            "unit": "ns/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 962100,
            "unit": "B/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 772,
            "unit": "allocs/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 4295038,
            "unit": "ns/op\t  962107 B/op\t     772 allocs/op",
            "extra": "324 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 4295038,
            "unit": "ns/op",
            "extra": "324 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 962107,
            "unit": "B/op",
            "extra": "324 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 772,
            "unit": "allocs/op",
            "extra": "324 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 4222122,
            "unit": "ns/op\t  962100 B/op\t     772 allocs/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 4222122,
            "unit": "ns/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 962100,
            "unit": "B/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 772,
            "unit": "allocs/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 4200255,
            "unit": "ns/op\t  962106 B/op\t     772 allocs/op",
            "extra": "325 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 4200255,
            "unit": "ns/op",
            "extra": "325 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 962106,
            "unit": "B/op",
            "extra": "325 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 772,
            "unit": "allocs/op",
            "extra": "325 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 7313,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "163632 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 7313,
            "unit": "ns/op",
            "extra": "163632 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "163632 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "163632 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 6902,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "252574 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 6902,
            "unit": "ns/op",
            "extra": "252574 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "252574 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "252574 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 6688,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "162381 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 6688,
            "unit": "ns/op",
            "extra": "162381 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "162381 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "162381 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 6888,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "204278 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 6888,
            "unit": "ns/op",
            "extra": "204278 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "204278 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "204278 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 6153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "206628 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 6153,
            "unit": "ns/op",
            "extra": "206628 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "206628 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "206628 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 6448,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "170824 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 6448,
            "unit": "ns/op",
            "extra": "170824 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "170824 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "170824 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 46103,
            "unit": "ns/op\t    9208 B/op\t       5 allocs/op",
            "extra": "26842 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 46103,
            "unit": "ns/op",
            "extra": "26842 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9208,
            "unit": "B/op",
            "extra": "26842 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "26842 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 48195,
            "unit": "ns/op\t    9822 B/op\t       5 allocs/op",
            "extra": "24267 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 48195,
            "unit": "ns/op",
            "extra": "24267 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9822,
            "unit": "B/op",
            "extra": "24267 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "24267 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 47771,
            "unit": "ns/op\t    9209 B/op\t       5 allocs/op",
            "extra": "25676 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 47771,
            "unit": "ns/op",
            "extra": "25676 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9209,
            "unit": "B/op",
            "extra": "25676 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "25676 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 50181,
            "unit": "ns/op\t    9822 B/op\t       5 allocs/op",
            "extra": "22888 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 50181,
            "unit": "ns/op",
            "extra": "22888 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9822,
            "unit": "B/op",
            "extra": "22888 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "22888 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 50010,
            "unit": "ns/op\t    9821 B/op\t       5 allocs/op",
            "extra": "24868 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 50010,
            "unit": "ns/op",
            "extra": "24868 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9821,
            "unit": "B/op",
            "extra": "24868 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "24868 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 48098,
            "unit": "ns/op\t    9821 B/op\t       5 allocs/op",
            "extra": "25042 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 48098,
            "unit": "ns/op",
            "extra": "25042 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9821,
            "unit": "B/op",
            "extra": "25042 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "25042 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 47483,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "25574 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 47483,
            "unit": "ns/op",
            "extra": "25574 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "25574 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "25574 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 46475,
            "unit": "ns/op\t    9814 B/op\t       5 allocs/op",
            "extra": "26941 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 46475,
            "unit": "ns/op",
            "extra": "26941 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9814,
            "unit": "B/op",
            "extra": "26941 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "26941 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 51873,
            "unit": "ns/op\t    9813 B/op\t       5 allocs/op",
            "extra": "25462 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 51873,
            "unit": "ns/op",
            "extra": "25462 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9813,
            "unit": "B/op",
            "extra": "25462 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "25462 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 47585,
            "unit": "ns/op\t    9816 B/op\t       5 allocs/op",
            "extra": "26569 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 47585,
            "unit": "ns/op",
            "extra": "26569 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9816,
            "unit": "B/op",
            "extra": "26569 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "26569 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 48890,
            "unit": "ns/op\t    9666 B/op\t       5 allocs/op",
            "extra": "22778 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 48890,
            "unit": "ns/op",
            "extra": "22778 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9666,
            "unit": "B/op",
            "extra": "22778 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "22778 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 47751,
            "unit": "ns/op\t    9823 B/op\t       6 allocs/op",
            "extra": "25764 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 47751,
            "unit": "ns/op",
            "extra": "25764 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9823,
            "unit": "B/op",
            "extra": "25764 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "25764 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 6920,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "187504 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 6920,
            "unit": "ns/op",
            "extra": "187504 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "187504 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "187504 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 5856,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "190806 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 5856,
            "unit": "ns/op",
            "extra": "190806 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "190806 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "190806 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 5937,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "274171 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 5937,
            "unit": "ns/op",
            "extra": "274171 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "274171 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "274171 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 6261,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "212733 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 6261,
            "unit": "ns/op",
            "extra": "212733 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "212733 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "212733 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 5260,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "221666 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 5260,
            "unit": "ns/op",
            "extra": "221666 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "221666 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "221666 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 5619,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "215942 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 5619,
            "unit": "ns/op",
            "extra": "215942 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "215942 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "215942 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 50265,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "24273 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 50265,
            "unit": "ns/op",
            "extra": "24273 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "24273 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "24273 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 50706,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "23526 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 50706,
            "unit": "ns/op",
            "extra": "23526 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "23526 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "23526 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 51125,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "23746 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 51125,
            "unit": "ns/op",
            "extra": "23746 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "23746 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "23746 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 49470,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "24596 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 49470,
            "unit": "ns/op",
            "extra": "24596 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "24596 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "24596 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 51131,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "23596 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 51131,
            "unit": "ns/op",
            "extra": "23596 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "23596 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "23596 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 50471,
            "unit": "ns/op\t    9823 B/op\t       6 allocs/op",
            "extra": "23803 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 50471,
            "unit": "ns/op",
            "extra": "23803 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9823,
            "unit": "B/op",
            "extra": "23803 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "23803 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 50460,
            "unit": "ns/op\t    9822 B/op\t       5 allocs/op",
            "extra": "24212 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 50460,
            "unit": "ns/op",
            "extra": "24212 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9822,
            "unit": "B/op",
            "extra": "24212 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "24212 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 49904,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "24165 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 49904,
            "unit": "ns/op",
            "extra": "24165 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "24165 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "24165 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 49532,
            "unit": "ns/op\t    9823 B/op\t       6 allocs/op",
            "extra": "24319 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 49532,
            "unit": "ns/op",
            "extra": "24319 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9823,
            "unit": "B/op",
            "extra": "24319 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "24319 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 48604,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "24910 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 48604,
            "unit": "ns/op",
            "extra": "24910 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "24910 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "24910 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 49962,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "24782 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 49962,
            "unit": "ns/op",
            "extra": "24782 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "24782 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "24782 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 49894,
            "unit": "ns/op\t    9822 B/op\t       5 allocs/op",
            "extra": "24811 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 49894,
            "unit": "ns/op",
            "extra": "24811 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9822,
            "unit": "B/op",
            "extra": "24811 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "24811 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 49539,
            "unit": "ns/op\t    9821 B/op\t       5 allocs/op",
            "extra": "24954 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 49539,
            "unit": "ns/op",
            "extra": "24954 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9821,
            "unit": "B/op",
            "extra": "24954 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "24954 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 49927,
            "unit": "ns/op\t    9816 B/op\t       5 allocs/op",
            "extra": "24502 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 49927,
            "unit": "ns/op",
            "extra": "24502 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9816,
            "unit": "B/op",
            "extra": "24502 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "24502 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 49801,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "24229 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 49801,
            "unit": "ns/op",
            "extra": "24229 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "24229 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "24229 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 50013,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "24694 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 50013,
            "unit": "ns/op",
            "extra": "24694 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "24694 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "24694 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 49318,
            "unit": "ns/op\t    9822 B/op\t       5 allocs/op",
            "extra": "25065 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 49318,
            "unit": "ns/op",
            "extra": "25065 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9822,
            "unit": "B/op",
            "extra": "25065 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "25065 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 45717,
            "unit": "ns/op\t    9056 B/op\t       5 allocs/op",
            "extra": "27615 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 45717,
            "unit": "ns/op",
            "extra": "27615 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9056,
            "unit": "B/op",
            "extra": "27615 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "27615 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 266.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4424665 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 266.6,
            "unit": "ns/op",
            "extra": "4424665 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4424665 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4424665 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 265.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4517244 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 265.9,
            "unit": "ns/op",
            "extra": "4517244 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4517244 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4517244 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 265.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4508788 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 265.9,
            "unit": "ns/op",
            "extra": "4508788 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4508788 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4508788 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 265.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4512216 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 265.5,
            "unit": "ns/op",
            "extra": "4512216 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4512216 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4512216 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 268.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4473409 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 268.8,
            "unit": "ns/op",
            "extra": "4473409 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4473409 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4473409 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 269.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4454932 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 269.8,
            "unit": "ns/op",
            "extra": "4454932 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4454932 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4454932 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 21.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57078493 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 21.02,
            "unit": "ns/op",
            "extra": "57078493 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57078493 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57078493 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 19.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60203949 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 19.76,
            "unit": "ns/op",
            "extra": "60203949 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "60203949 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "60203949 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 21.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56729535 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 21.13,
            "unit": "ns/op",
            "extra": "56729535 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56729535 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56729535 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 19.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58706811 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 19.81,
            "unit": "ns/op",
            "extra": "58706811 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58706811 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58706811 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 19.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56660227 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 19.73,
            "unit": "ns/op",
            "extra": "56660227 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56660227 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56660227 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57062805 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.57,
            "unit": "ns/op",
            "extra": "57062805 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57062805 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57062805 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16",
            "value": 21.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58533266 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - ns/op",
            "value": 21.09,
            "unit": "ns/op",
            "extra": "58533266 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58533266 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58533266 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16",
            "value": 20.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58088754 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - ns/op",
            "value": 20.94,
            "unit": "ns/op",
            "extra": "58088754 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58088754 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58088754 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16",
            "value": 20.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58438880 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - ns/op",
            "value": 20.6,
            "unit": "ns/op",
            "extra": "58438880 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58438880 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58438880 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16",
            "value": 20.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58462813 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - ns/op",
            "value": 20.81,
            "unit": "ns/op",
            "extra": "58462813 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58462813 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58462813 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16",
            "value": 20.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57701401 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - ns/op",
            "value": 20.8,
            "unit": "ns/op",
            "extra": "57701401 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57701401 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57701401 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16",
            "value": 21.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57702987 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - ns/op",
            "value": 21.51,
            "unit": "ns/op",
            "extra": "57702987 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57702987 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57702987 times\n4 procs"
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
          "id": "83adb18883d7f38107d64650d44a164eca58cd0c",
          "message": "fix(syncshadow): make SyncVar.releaseClock thread-safe with atomic.Pointer\n\nMergeReleaseClock is called concurrently by multiple goroutines\n(wg.Done, RWMutex.RUnlock). Previously, the in-place Join on a bare\n*VectorClock caused data races, corrupting HB clocks and producing\nfalse positive race reports in MutexContention and MapReadWrite\nbenchmarks.\n\nChanges:\n- releaseClock *VectorClock -> atomic.Pointer[VectorClock]\n- GetReleaseClock: atomic Load\n- SetReleaseClock: atomic Store (always clone)\n- MergeReleaseClock: CAS retry loop (clone + merge + CompareAndSwap)",
          "timestamp": "2026-02-24T10:45:04+03:00",
          "tree_id": "81f6ab51e6c927a35efbe2171d26295f2559c2c9",
          "url": "https://github.com/kolkov/go-race/commit/83adb18883d7f38107d64650d44a164eca58cd0c"
        },
        "date": 1771923167137,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkRaceRead",
            "value": 166.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7203950 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 166.3,
            "unit": "ns/op",
            "extra": "7203950 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7203950 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7203950 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 166.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7218699 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 166.3,
            "unit": "ns/op",
            "extra": "7218699 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7218699 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7218699 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 162.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7370736 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 162.7,
            "unit": "ns/op",
            "extra": "7370736 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7370736 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7370736 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 166.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7207652 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 166.3,
            "unit": "ns/op",
            "extra": "7207652 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7207652 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7207652 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 161.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7480980 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 161.4,
            "unit": "ns/op",
            "extra": "7480980 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7480980 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7480980 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 169.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6573934 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 169.2,
            "unit": "ns/op",
            "extra": "6573934 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6573934 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6573934 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 161.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7397455 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 161.7,
            "unit": "ns/op",
            "extra": "7397455 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7397455 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7397455 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 164.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7287802 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 164.7,
            "unit": "ns/op",
            "extra": "7287802 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7287802 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7287802 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 166.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7279162 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 166.7,
            "unit": "ns/op",
            "extra": "7279162 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7279162 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7279162 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7399510 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 163,
            "unit": "ns/op",
            "extra": "7399510 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7399510 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7399510 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 166.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7223620 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 166.2,
            "unit": "ns/op",
            "extra": "7223620 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7223620 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7223620 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 166.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7217068 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 166.4,
            "unit": "ns/op",
            "extra": "7217068 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7217068 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7217068 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 166.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7171045 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 166.9,
            "unit": "ns/op",
            "extra": "7171045 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7171045 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7171045 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 166.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7197350 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 166.2,
            "unit": "ns/op",
            "extra": "7197350 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7197350 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7197350 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7340359 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 164,
            "unit": "ns/op",
            "extra": "7340359 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7340359 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7340359 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 166.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7198558 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 166.8,
            "unit": "ns/op",
            "extra": "7198558 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7198558 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7198558 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 160.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7451521 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 160.7,
            "unit": "ns/op",
            "extra": "7451521 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7451521 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7451521 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 166.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7193650 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 166.8,
            "unit": "ns/op",
            "extra": "7193650 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7193650 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7193650 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 861.2,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1396518 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 861.2,
            "unit": "ns/op",
            "extra": "1396518 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1396518 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1396518 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 824,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1463359 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 824,
            "unit": "ns/op",
            "extra": "1463359 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1463359 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1463359 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 810.9,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1553782 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 810.9,
            "unit": "ns/op",
            "extra": "1553782 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1553782 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1553782 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 783,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1630689 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 783,
            "unit": "ns/op",
            "extra": "1630689 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1630689 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1630689 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 786.9,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1633909 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 786.9,
            "unit": "ns/op",
            "extra": "1633909 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1633909 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1633909 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 777.3,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1648561 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 777.3,
            "unit": "ns/op",
            "extra": "1648561 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1648561 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1648561 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 877.8,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1420940 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 877.8,
            "unit": "ns/op",
            "extra": "1420940 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1420940 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1420940 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 884.5,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1393333 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 884.5,
            "unit": "ns/op",
            "extra": "1393333 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1393333 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1393333 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 897.9,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1382571 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 897.9,
            "unit": "ns/op",
            "extra": "1382571 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1382571 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1382571 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 905.9,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1355854 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 905.9,
            "unit": "ns/op",
            "extra": "1355854 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1355854 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1355854 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 903.5,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1358462 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 903.5,
            "unit": "ns/op",
            "extra": "1358462 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1358462 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1358462 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 943.7,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1291006 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 943.7,
            "unit": "ns/op",
            "extra": "1291006 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1291006 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1291006 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 22084,
            "unit": "ns/op\t   20323 B/op\t      19 allocs/op",
            "extra": "56720 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 22084,
            "unit": "ns/op",
            "extra": "56720 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 20323,
            "unit": "B/op",
            "extra": "56720 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 19,
            "unit": "allocs/op",
            "extra": "56720 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 27991,
            "unit": "ns/op\t   20324 B/op\t      19 allocs/op",
            "extra": "47956 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 27991,
            "unit": "ns/op",
            "extra": "47956 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 20324,
            "unit": "B/op",
            "extra": "47956 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 19,
            "unit": "allocs/op",
            "extra": "47956 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 31304,
            "unit": "ns/op\t   20329 B/op\t      19 allocs/op",
            "extra": "42068 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 31304,
            "unit": "ns/op",
            "extra": "42068 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 20329,
            "unit": "B/op",
            "extra": "42068 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 19,
            "unit": "allocs/op",
            "extra": "42068 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 11433,
            "unit": "ns/op\t   19456 B/op\t       4 allocs/op",
            "extra": "106874 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 11433,
            "unit": "ns/op",
            "extra": "106874 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 19456,
            "unit": "B/op",
            "extra": "106874 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "106874 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 11274,
            "unit": "ns/op\t   19456 B/op\t       4 allocs/op",
            "extra": "108097 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 11274,
            "unit": "ns/op",
            "extra": "108097 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 19456,
            "unit": "B/op",
            "extra": "108097 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "108097 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 11739,
            "unit": "ns/op\t   19456 B/op\t       4 allocs/op",
            "extra": "96438 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 11739,
            "unit": "ns/op",
            "extra": "96438 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 19456,
            "unit": "B/op",
            "extra": "96438 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "96438 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 11735,
            "unit": "ns/op\t   19456 B/op\t       4 allocs/op",
            "extra": "95002 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 11735,
            "unit": "ns/op",
            "extra": "95002 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 19456,
            "unit": "B/op",
            "extra": "95002 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "95002 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 11629,
            "unit": "ns/op\t   19456 B/op\t       4 allocs/op",
            "extra": "109434 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 11629,
            "unit": "ns/op",
            "extra": "109434 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 19456,
            "unit": "B/op",
            "extra": "109434 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "109434 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 11535,
            "unit": "ns/op\t   19456 B/op\t       4 allocs/op",
            "extra": "105214 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 11535,
            "unit": "ns/op",
            "extra": "105214 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 19456,
            "unit": "B/op",
            "extra": "105214 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "105214 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 29599,
            "unit": "ns/op\t   15221 B/op\t      15 allocs/op",
            "extra": "41266 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 29599,
            "unit": "ns/op",
            "extra": "41266 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15221,
            "unit": "B/op",
            "extra": "41266 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "41266 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 29771,
            "unit": "ns/op\t   15221 B/op\t      15 allocs/op",
            "extra": "41334 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 29771,
            "unit": "ns/op",
            "extra": "41334 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15221,
            "unit": "B/op",
            "extra": "41334 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "41334 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 28810,
            "unit": "ns/op\t   15221 B/op\t      15 allocs/op",
            "extra": "42021 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 28810,
            "unit": "ns/op",
            "extra": "42021 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15221,
            "unit": "B/op",
            "extra": "42021 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "42021 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 28507,
            "unit": "ns/op\t   15221 B/op\t      15 allocs/op",
            "extra": "43179 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 28507,
            "unit": "ns/op",
            "extra": "43179 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15221,
            "unit": "B/op",
            "extra": "43179 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "43179 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 28952,
            "unit": "ns/op\t   15220 B/op\t      15 allocs/op",
            "extra": "42058 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 28952,
            "unit": "ns/op",
            "extra": "42058 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15220,
            "unit": "B/op",
            "extra": "42058 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "42058 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 29774,
            "unit": "ns/op\t   15221 B/op\t      15 allocs/op",
            "extra": "42183 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 29774,
            "unit": "ns/op",
            "extra": "42183 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15221,
            "unit": "B/op",
            "extra": "42183 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "42183 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 126582,
            "unit": "ns/op\t   60311 B/op\t      52 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 126582,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 60311,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 52,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 126536,
            "unit": "ns/op\t   60311 B/op\t      52 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 126536,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 60311,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 52,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 125973,
            "unit": "ns/op\t   60311 B/op\t      52 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 125973,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 60311,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 52,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 125957,
            "unit": "ns/op\t   60311 B/op\t      52 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 125957,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 60311,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 52,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 127003,
            "unit": "ns/op\t   60311 B/op\t      52 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 127003,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 60311,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 52,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 125753,
            "unit": "ns/op\t   60311 B/op\t      52 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 125753,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 60311,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 52,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 461966,
            "unit": "ns/op\t  240866 B/op\t     195 allocs/op",
            "extra": "3028 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 461966,
            "unit": "ns/op",
            "extra": "3028 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 240866,
            "unit": "B/op",
            "extra": "3028 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "3028 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 462989,
            "unit": "ns/op\t  240669 B/op\t     196 allocs/op",
            "extra": "3043 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 462989,
            "unit": "ns/op",
            "extra": "3043 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 240669,
            "unit": "B/op",
            "extra": "3043 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 196,
            "unit": "allocs/op",
            "extra": "3043 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 462122,
            "unit": "ns/op\t  240669 B/op\t     196 allocs/op",
            "extra": "2949 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 462122,
            "unit": "ns/op",
            "extra": "2949 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 240669,
            "unit": "B/op",
            "extra": "2949 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 196,
            "unit": "allocs/op",
            "extra": "2949 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 463681,
            "unit": "ns/op\t  240739 B/op\t     195 allocs/op",
            "extra": "3046 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 463681,
            "unit": "ns/op",
            "extra": "3046 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 240739,
            "unit": "B/op",
            "extra": "3046 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "3046 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 462870,
            "unit": "ns/op\t  240670 B/op\t     196 allocs/op",
            "extra": "3042 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 462870,
            "unit": "ns/op",
            "extra": "3042 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 240670,
            "unit": "B/op",
            "extra": "3042 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 196,
            "unit": "allocs/op",
            "extra": "3042 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 467555,
            "unit": "ns/op\t  240906 B/op\t     195 allocs/op",
            "extra": "2988 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 467555,
            "unit": "ns/op",
            "extra": "2988 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 240906,
            "unit": "B/op",
            "extra": "2988 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 195,
            "unit": "allocs/op",
            "extra": "2988 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1809804,
            "unit": "ns/op\t  962105 B/op\t     772 allocs/op",
            "extra": "709 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1809804,
            "unit": "ns/op",
            "extra": "709 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 962105,
            "unit": "B/op",
            "extra": "709 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 772,
            "unit": "allocs/op",
            "extra": "709 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1794955,
            "unit": "ns/op\t  964039 B/op\t     770 allocs/op",
            "extra": "714 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1794955,
            "unit": "ns/op",
            "extra": "714 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 964039,
            "unit": "B/op",
            "extra": "714 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "714 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1793793,
            "unit": "ns/op\t  962613 B/op\t     771 allocs/op",
            "extra": "728 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1793793,
            "unit": "ns/op",
            "extra": "728 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 962613,
            "unit": "B/op",
            "extra": "728 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 771,
            "unit": "allocs/op",
            "extra": "728 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1788600,
            "unit": "ns/op\t  964235 B/op\t     770 allocs/op",
            "extra": "721 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1788600,
            "unit": "ns/op",
            "extra": "721 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 964235,
            "unit": "B/op",
            "extra": "721 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 770,
            "unit": "allocs/op",
            "extra": "721 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1792852,
            "unit": "ns/op\t  962104 B/op\t     772 allocs/op",
            "extra": "710 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1792852,
            "unit": "ns/op",
            "extra": "710 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 962104,
            "unit": "B/op",
            "extra": "710 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 772,
            "unit": "allocs/op",
            "extra": "710 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1789618,
            "unit": "ns/op\t  962103 B/op\t     772 allocs/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1789618,
            "unit": "ns/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 962103,
            "unit": "B/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 772,
            "unit": "allocs/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 5979,
            "unit": "ns/op\t    9728 B/op\t       2 allocs/op",
            "extra": "200742 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 5979,
            "unit": "ns/op",
            "extra": "200742 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 9728,
            "unit": "B/op",
            "extra": "200742 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "200742 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 5885,
            "unit": "ns/op\t    9728 B/op\t       2 allocs/op",
            "extra": "198706 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 5885,
            "unit": "ns/op",
            "extra": "198706 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 9728,
            "unit": "B/op",
            "extra": "198706 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "198706 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 6058,
            "unit": "ns/op\t    9728 B/op\t       2 allocs/op",
            "extra": "171786 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 6058,
            "unit": "ns/op",
            "extra": "171786 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 9728,
            "unit": "B/op",
            "extra": "171786 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "171786 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 5981,
            "unit": "ns/op\t    9728 B/op\t       2 allocs/op",
            "extra": "202050 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 5981,
            "unit": "ns/op",
            "extra": "202050 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 9728,
            "unit": "B/op",
            "extra": "202050 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "202050 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 5964,
            "unit": "ns/op\t    9728 B/op\t       2 allocs/op",
            "extra": "195000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 5964,
            "unit": "ns/op",
            "extra": "195000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 9728,
            "unit": "B/op",
            "extra": "195000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "195000 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 5996,
            "unit": "ns/op\t    9728 B/op\t       2 allocs/op",
            "extra": "197542 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 5996,
            "unit": "ns/op",
            "extra": "197542 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 9728,
            "unit": "B/op",
            "extra": "197542 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "197542 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 3383,
            "unit": "ns/op\t    9823 B/op\t       5 allocs/op",
            "extra": "391624 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 3383,
            "unit": "ns/op",
            "extra": "391624 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9823,
            "unit": "B/op",
            "extra": "391624 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "391624 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 3337,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "392158 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 3337,
            "unit": "ns/op",
            "extra": "392158 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "392158 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "392158 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 3290,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "397596 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 3290,
            "unit": "ns/op",
            "extra": "397596 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "397596 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "397596 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 3288,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "406531 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 3288,
            "unit": "ns/op",
            "extra": "406531 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "406531 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "406531 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 3332,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "398359 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 3332,
            "unit": "ns/op",
            "extra": "398359 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "398359 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "398359 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 3271,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "400410 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 3271,
            "unit": "ns/op",
            "extra": "400410 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "400410 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "400410 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 3646,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "316468 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 3646,
            "unit": "ns/op",
            "extra": "316468 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "316468 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "316468 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 3673,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "300763 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 3673,
            "unit": "ns/op",
            "extra": "300763 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "300763 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "300763 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 3764,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "309585 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 3764,
            "unit": "ns/op",
            "extra": "309585 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "309585 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "309585 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 3736,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "322957 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 3736,
            "unit": "ns/op",
            "extra": "322957 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "322957 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "322957 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 3663,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "292582 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 3663,
            "unit": "ns/op",
            "extra": "292582 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "292582 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "292582 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 3605,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "345292 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 3605,
            "unit": "ns/op",
            "extra": "345292 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "345292 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "345292 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 6246,
            "unit": "ns/op\t    9728 B/op\t       2 allocs/op",
            "extra": "198058 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 6246,
            "unit": "ns/op",
            "extra": "198058 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 9728,
            "unit": "B/op",
            "extra": "198058 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "198058 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 6032,
            "unit": "ns/op\t    9728 B/op\t       2 allocs/op",
            "extra": "179644 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 6032,
            "unit": "ns/op",
            "extra": "179644 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 9728,
            "unit": "B/op",
            "extra": "179644 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "179644 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 5998,
            "unit": "ns/op\t    9728 B/op\t       2 allocs/op",
            "extra": "186751 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 5998,
            "unit": "ns/op",
            "extra": "186751 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 9728,
            "unit": "B/op",
            "extra": "186751 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "186751 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 6360,
            "unit": "ns/op\t    9728 B/op\t       2 allocs/op",
            "extra": "177637 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 6360,
            "unit": "ns/op",
            "extra": "177637 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 9728,
            "unit": "B/op",
            "extra": "177637 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "177637 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 6195,
            "unit": "ns/op\t    9728 B/op\t       2 allocs/op",
            "extra": "189325 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 6195,
            "unit": "ns/op",
            "extra": "189325 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 9728,
            "unit": "B/op",
            "extra": "189325 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "189325 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 6093,
            "unit": "ns/op\t    9728 B/op\t       2 allocs/op",
            "extra": "177694 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 6093,
            "unit": "ns/op",
            "extra": "177694 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 9728,
            "unit": "B/op",
            "extra": "177694 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "177694 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 3959,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "339301 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 3959,
            "unit": "ns/op",
            "extra": "339301 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "339301 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "339301 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 3766,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "334794 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 3766,
            "unit": "ns/op",
            "extra": "334794 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "334794 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "334794 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 3797,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "334380 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 3797,
            "unit": "ns/op",
            "extra": "334380 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "334380 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "334380 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 3785,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "335836 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 3785,
            "unit": "ns/op",
            "extra": "335836 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "335836 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "335836 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 3821,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "333631 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 3821,
            "unit": "ns/op",
            "extra": "333631 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "333631 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "333631 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 3856,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "340618 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 3856,
            "unit": "ns/op",
            "extra": "340618 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "340618 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "340618 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 3993,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "307710 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 3993,
            "unit": "ns/op",
            "extra": "307710 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "307710 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "307710 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 4052,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "306663 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 4052,
            "unit": "ns/op",
            "extra": "306663 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "306663 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "306663 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 4091,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "306463 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 4091,
            "unit": "ns/op",
            "extra": "306463 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "306463 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "306463 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 4071,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "309403 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 4071,
            "unit": "ns/op",
            "extra": "309403 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "309403 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "309403 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 4039,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "305995 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 4039,
            "unit": "ns/op",
            "extra": "305995 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "305995 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "305995 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 4102,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "308848 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 4102,
            "unit": "ns/op",
            "extra": "308848 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "308848 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "308848 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 4126,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "303456 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 4126,
            "unit": "ns/op",
            "extra": "303456 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "303456 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "303456 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 4198,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "308970 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 4198,
            "unit": "ns/op",
            "extra": "308970 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "308970 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "308970 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 4137,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "300784 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 4137,
            "unit": "ns/op",
            "extra": "300784 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "300784 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "300784 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 4222,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "313826 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 4222,
            "unit": "ns/op",
            "extra": "313826 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "313826 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "313826 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 4154,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "312282 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 4154,
            "unit": "ns/op",
            "extra": "312282 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "312282 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "312282 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 4206,
            "unit": "ns/op\t    9824 B/op\t       6 allocs/op",
            "extra": "284422 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 4206,
            "unit": "ns/op",
            "extra": "284422 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 9824,
            "unit": "B/op",
            "extra": "284422 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "284422 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 277.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4290380 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 277.1,
            "unit": "ns/op",
            "extra": "4290380 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4290380 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4290380 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 276.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4354426 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 276.1,
            "unit": "ns/op",
            "extra": "4354426 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4354426 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4354426 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 271.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4423317 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 271.1,
            "unit": "ns/op",
            "extra": "4423317 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4423317 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4423317 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 273.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4386598 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 273.4,
            "unit": "ns/op",
            "extra": "4386598 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4386598 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4386598 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 271.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4418462 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 271.7,
            "unit": "ns/op",
            "extra": "4418462 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4418462 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4418462 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 274.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4367961 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 274.4,
            "unit": "ns/op",
            "extra": "4367961 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4367961 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4367961 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56159364 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.39,
            "unit": "ns/op",
            "extra": "56159364 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56159364 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56159364 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58586929 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.37,
            "unit": "ns/op",
            "extra": "58586929 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58586929 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58586929 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55989914 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.25,
            "unit": "ns/op",
            "extra": "55989914 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "55989914 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "55989914 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58249078 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.35,
            "unit": "ns/op",
            "extra": "58249078 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58249078 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58249078 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58804353 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.52,
            "unit": "ns/op",
            "extra": "58804353 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58804353 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58804353 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59047983 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.26,
            "unit": "ns/op",
            "extra": "59047983 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "59047983 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "59047983 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16",
            "value": 20.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57775584 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - ns/op",
            "value": 20.74,
            "unit": "ns/op",
            "extra": "57775584 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57775584 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57775584 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16",
            "value": 22.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58044579 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - ns/op",
            "value": 22.72,
            "unit": "ns/op",
            "extra": "58044579 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58044579 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58044579 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16",
            "value": 21.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57586502 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - ns/op",
            "value": 21.49,
            "unit": "ns/op",
            "extra": "57586502 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57586502 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57586502 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16",
            "value": 21.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57531404 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - ns/op",
            "value": 21.72,
            "unit": "ns/op",
            "extra": "57531404 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57531404 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57531404 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16",
            "value": 20.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56830231 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - ns/op",
            "value": 20.99,
            "unit": "ns/op",
            "extra": "56830231 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56830231 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56830231 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16",
            "value": 21.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56641966 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - ns/op",
            "value": 21.11,
            "unit": "ns/op",
            "extra": "56641966 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56641966 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56641966 times\n4 procs"
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
          "id": "fa3a801a70470f9bf178f2dc3d5c743d769435de",
          "message": "fix(syncshadow): increase hash table 16K->128K, add eviction, restore CopyFrom\n\nTwo fixes for CI benchmark failures:\n\n1. SyncShadow table overflow caused MutexContention/MapReadWrite FAILs:\n   - Table was 16384 slots with 8 probes, filled by short-lived channels\n     from earlier benchmarks (GoroutineStartStop creates ~58K channels)\n   - Overflow returned standalone SyncVar{} breaking HB chain\n   - Fix: 131072 slots (128K), 16 probes, eviction on overflow\n\n2. SetReleaseClock always-Clone caused MutexLockUnlock regression (267->859ns)\n   and 13.7GB RSS explosion:\n   - Restore CopyFrom for non-nil case (safe: serialized by sync primitive)\n   - Clone only on first Release (nil -> non-nil transition)\n   - MergeReleaseClock keeps CAS loop (concurrent wg.Done/RUnlock)",
          "timestamp": "2026-02-24T12:15:49+03:00",
          "tree_id": "e4c638e68de940c61b26ec861fc61714fdeffac9",
          "url": "https://github.com/kolkov/go-race/commit/fa3a801a70470f9bf178f2dc3d5c743d769435de"
        },
        "date": 1771925471427,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkRaceRead",
            "value": 164.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7301058 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 164.4,
            "unit": "ns/op",
            "extra": "7301058 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7301058 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7301058 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 164.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7293126 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 164.5,
            "unit": "ns/op",
            "extra": "7293126 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7293126 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7293126 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 164.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7285032 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 164.7,
            "unit": "ns/op",
            "extra": "7285032 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7285032 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7285032 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 164.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7293428 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 164.5,
            "unit": "ns/op",
            "extra": "7293428 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7293428 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7293428 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 165.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7253332 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 165.4,
            "unit": "ns/op",
            "extra": "7253332 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7253332 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7253332 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead",
            "value": 164.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7289600 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - ns/op",
            "value": 164.5,
            "unit": "ns/op",
            "extra": "7289600 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7289600 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceRead - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7289600 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 165.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7308600 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 165.5,
            "unit": "ns/op",
            "extra": "7308600 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7308600 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7308600 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 164.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7301563 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 164.4,
            "unit": "ns/op",
            "extra": "7301563 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7301563 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7301563 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 165.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7267827 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 165.1,
            "unit": "ns/op",
            "extra": "7267827 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7267827 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7267827 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 164.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7293973 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 164.6,
            "unit": "ns/op",
            "extra": "7293973 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7293973 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7293973 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 164.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7288045 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 164.7,
            "unit": "ns/op",
            "extra": "7288045 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7288045 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7288045 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite",
            "value": 163.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7334065 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - ns/op",
            "value": 163.2,
            "unit": "ns/op",
            "extra": "7334065 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7334065 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7334065 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 163.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7313450 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 163.2,
            "unit": "ns/op",
            "extra": "7313450 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7313450 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7313450 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 164.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7303490 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 164.5,
            "unit": "ns/op",
            "extra": "7303490 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7303490 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7303490 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 162.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7390765 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 162.8,
            "unit": "ns/op",
            "extra": "7390765 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7390765 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7390765 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 163.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7294501 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 163.7,
            "unit": "ns/op",
            "extra": "7294501 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7294501 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7294501 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 163.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7348558 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 163.3,
            "unit": "ns/op",
            "extra": "7348558 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7348558 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7348558 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite",
            "value": 163.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7347050 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - ns/op",
            "value": 163.1,
            "unit": "ns/op",
            "extra": "7347050 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7347050 times\n4 procs"
          },
          {
            "name": "BenchmarkRaceReadWrite - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7347050 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 311.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3869551 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 311.9,
            "unit": "ns/op",
            "extra": "3869551 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3869551 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3869551 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 314.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3807463 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 314.2,
            "unit": "ns/op",
            "extra": "3807463 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3807463 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3807463 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 313.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3829525 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 313.3,
            "unit": "ns/op",
            "extra": "3829525 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3829525 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3829525 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 316.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3799820 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 316.3,
            "unit": "ns/op",
            "extra": "3799820 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3799820 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3799820 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 315.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3799155 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 315.7,
            "unit": "ns/op",
            "extra": "3799155 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3799155 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3799155 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock",
            "value": 321.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3739292 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - ns/op",
            "value": 321.3,
            "unit": "ns/op",
            "extra": "3739292 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3739292 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexLockUnlock - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3739292 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 983.5,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1220508 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 983.5,
            "unit": "ns/op",
            "extra": "1220508 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1220508 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1220508 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 902.3,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1353872 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 902.3,
            "unit": "ns/op",
            "extra": "1353872 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1353872 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1353872 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 923,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1311205 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 923,
            "unit": "ns/op",
            "extra": "1311205 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1311205 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1311205 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 902.4,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1366336 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 902.4,
            "unit": "ns/op",
            "extra": "1366336 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1366336 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1366336 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 899,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1379050 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 899,
            "unit": "ns/op",
            "extra": "1379050 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1379050 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1379050 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock",
            "value": 895.1,
            "unit": "ns/op\t    4864 B/op\t       1 allocs/op",
            "extra": "1387438 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - ns/op",
            "value": 895.1,
            "unit": "ns/op",
            "extra": "1387438 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - B/op",
            "value": 4864,
            "unit": "B/op",
            "extra": "1387438 times\n4 procs"
          },
          {
            "name": "BenchmarkRWMutexReadLock - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1387438 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 28130,
            "unit": "ns/op\t   18892 B/op\t      19 allocs/op",
            "extra": "52538 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 28130,
            "unit": "ns/op",
            "extra": "52538 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 18892,
            "unit": "B/op",
            "extra": "52538 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 19,
            "unit": "allocs/op",
            "extra": "52538 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 36392,
            "unit": "ns/op\t   17782 B/op\t      19 allocs/op",
            "extra": "35608 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 36392,
            "unit": "ns/op",
            "extra": "35608 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 17782,
            "unit": "B/op",
            "extra": "35608 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 19,
            "unit": "allocs/op",
            "extra": "35608 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 35149,
            "unit": "ns/op\t   16748 B/op\t      19 allocs/op",
            "extra": "38461 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 35149,
            "unit": "ns/op",
            "extra": "38461 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 16748,
            "unit": "B/op",
            "extra": "38461 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 19,
            "unit": "allocs/op",
            "extra": "38461 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 34556,
            "unit": "ns/op\t   16018 B/op\t      19 allocs/op",
            "extra": "35347 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 34556,
            "unit": "ns/op",
            "extra": "35347 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 16018,
            "unit": "B/op",
            "extra": "35347 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 19,
            "unit": "allocs/op",
            "extra": "35347 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 34918,
            "unit": "ns/op\t   15796 B/op\t      19 allocs/op",
            "extra": "31866 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 34918,
            "unit": "ns/op",
            "extra": "31866 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 15796,
            "unit": "B/op",
            "extra": "31866 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 19,
            "unit": "allocs/op",
            "extra": "31866 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop",
            "value": 34894,
            "unit": "ns/op\t   16263 B/op\t      20 allocs/op",
            "extra": "35068 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - ns/op",
            "value": 34894,
            "unit": "ns/op",
            "extra": "35068 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - B/op",
            "value": 16263,
            "unit": "B/op",
            "extra": "35068 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutineStartStop - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "35068 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1",
            "value": 2464,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "501796 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - ns/op",
            "value": 2464,
            "unit": "ns/op",
            "extra": "501796 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "501796 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "501796 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1",
            "value": 2439,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "496516 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - ns/op",
            "value": 2439,
            "unit": "ns/op",
            "extra": "496516 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "496516 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "496516 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1",
            "value": 2453,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "502623 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - ns/op",
            "value": 2453,
            "unit": "ns/op",
            "extra": "502623 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "502623 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "502623 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1",
            "value": 2453,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "489820 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - ns/op",
            "value": 2453,
            "unit": "ns/op",
            "extra": "489820 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "489820 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "489820 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1",
            "value": 2433,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "482440 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - ns/op",
            "value": 2433,
            "unit": "ns/op",
            "extra": "482440 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "482440 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "482440 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1",
            "value": 2454,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "505437 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - ns/op",
            "value": 2454,
            "unit": "ns/op",
            "extra": "505437 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "505437 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "505437 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4",
            "value": 2512,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "493208 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - ns/op",
            "value": 2512,
            "unit": "ns/op",
            "extra": "493208 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "493208 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "493208 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4",
            "value": 2503,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "500113 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - ns/op",
            "value": 2503,
            "unit": "ns/op",
            "extra": "500113 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "500113 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "500113 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4",
            "value": 2492,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "489385 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - ns/op",
            "value": 2492,
            "unit": "ns/op",
            "extra": "489385 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "489385 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "489385 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4",
            "value": 2516,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "487054 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - ns/op",
            "value": 2516,
            "unit": "ns/op",
            "extra": "487054 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "487054 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "487054 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4",
            "value": 2503,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "495738 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - ns/op",
            "value": 2503,
            "unit": "ns/op",
            "extra": "495738 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "495738 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "495738 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4",
            "value": 2490,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "472640 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - ns/op",
            "value": 2490,
            "unit": "ns/op",
            "extra": "472640 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "472640 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "472640 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16",
            "value": 2686,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "434226 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - ns/op",
            "value": 2686,
            "unit": "ns/op",
            "extra": "434226 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "434226 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "434226 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16",
            "value": 2734,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "425157 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - ns/op",
            "value": 2734,
            "unit": "ns/op",
            "extra": "425157 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "425157 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "425157 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16",
            "value": 2719,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "435526 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - ns/op",
            "value": 2719,
            "unit": "ns/op",
            "extra": "435526 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "435526 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "435526 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16",
            "value": 2688,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "460641 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - ns/op",
            "value": 2688,
            "unit": "ns/op",
            "extra": "460641 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "460641 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "460641 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16",
            "value": 2737,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "432728 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - ns/op",
            "value": 2737,
            "unit": "ns/op",
            "extra": "432728 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "432728 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "432728 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16",
            "value": 2736,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "433620 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - ns/op",
            "value": 2736,
            "unit": "ns/op",
            "extra": "433620 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "433620 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "433620 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64",
            "value": 3875,
            "unit": "ns/op\t      12 B/op\t       0 allocs/op",
            "extra": "333152 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - ns/op",
            "value": 3875,
            "unit": "ns/op",
            "extra": "333152 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - B/op",
            "value": 12,
            "unit": "B/op",
            "extra": "333152 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "333152 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64",
            "value": 3847,
            "unit": "ns/op\t      12 B/op\t       0 allocs/op",
            "extra": "352527 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - ns/op",
            "value": 3847,
            "unit": "ns/op",
            "extra": "352527 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - B/op",
            "value": 12,
            "unit": "B/op",
            "extra": "352527 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "352527 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64",
            "value": 3925,
            "unit": "ns/op\t      12 B/op\t       0 allocs/op",
            "extra": "351637 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - ns/op",
            "value": 3925,
            "unit": "ns/op",
            "extra": "351637 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - B/op",
            "value": 12,
            "unit": "B/op",
            "extra": "351637 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "351637 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64",
            "value": 3937,
            "unit": "ns/op\t      12 B/op\t       0 allocs/op",
            "extra": "340689 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - ns/op",
            "value": 3937,
            "unit": "ns/op",
            "extra": "340689 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - B/op",
            "value": 12,
            "unit": "B/op",
            "extra": "340689 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "340689 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64",
            "value": 3942,
            "unit": "ns/op\t      12 B/op\t       0 allocs/op",
            "extra": "336946 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - ns/op",
            "value": 3942,
            "unit": "ns/op",
            "extra": "336946 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - B/op",
            "value": 12,
            "unit": "B/op",
            "extra": "336946 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "336946 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64",
            "value": 3906,
            "unit": "ns/op\t      12 B/op\t       0 allocs/op",
            "extra": "331156 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - ns/op",
            "value": 3906,
            "unit": "ns/op",
            "extra": "331156 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - B/op",
            "value": 12,
            "unit": "B/op",
            "extra": "331156 times\n4 procs"
          },
          {
            "name": "BenchmarkMutexContention/g64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "331156 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 12211,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90937 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 12211,
            "unit": "ns/op",
            "extra": "90937 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90937 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90937 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 12691,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "101107 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 12691,
            "unit": "ns/op",
            "extra": "101107 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "101107 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "101107 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 12112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "97675 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 12112,
            "unit": "ns/op",
            "extra": "97675 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "97675 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "97675 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 11711,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99891 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 11711,
            "unit": "ns/op",
            "extra": "99891 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "99891 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "99891 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 12855,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99168 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 12855,
            "unit": "ns/op",
            "extra": "99168 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "99168 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "99168 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong",
            "value": 12376,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "93374 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - ns/op",
            "value": 12376,
            "unit": "ns/op",
            "extra": "93374 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "93374 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPingPong - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "93374 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 30472,
            "unit": "ns/op\t   15210 B/op\t      15 allocs/op",
            "extra": "41114 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 30472,
            "unit": "ns/op",
            "extra": "41114 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15210,
            "unit": "B/op",
            "extra": "41114 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "41114 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 30468,
            "unit": "ns/op\t   15208 B/op\t      15 allocs/op",
            "extra": "43485 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 30468,
            "unit": "ns/op",
            "extra": "43485 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15208,
            "unit": "B/op",
            "extra": "43485 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "43485 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 30540,
            "unit": "ns/op\t   15210 B/op\t      15 allocs/op",
            "extra": "43090 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 30540,
            "unit": "ns/op",
            "extra": "43090 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15210,
            "unit": "B/op",
            "extra": "43090 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "43090 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 29523,
            "unit": "ns/op\t   15209 B/op\t      15 allocs/op",
            "extra": "43224 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 29523,
            "unit": "ns/op",
            "extra": "43224 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15209,
            "unit": "B/op",
            "extra": "43224 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "43224 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 30359,
            "unit": "ns/op\t   15211 B/op\t      15 allocs/op",
            "extra": "42027 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 30359,
            "unit": "ns/op",
            "extra": "42027 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15211,
            "unit": "B/op",
            "extra": "42027 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "42027 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1",
            "value": 31077,
            "unit": "ns/op\t   15211 B/op\t      15 allocs/op",
            "extra": "42094 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - ns/op",
            "value": 31077,
            "unit": "ns/op",
            "extra": "42094 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - B/op",
            "value": 15211,
            "unit": "B/op",
            "extra": "42094 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g1 - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "42094 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 138113,
            "unit": "ns/op\t   62035 B/op\t      49 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 138113,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 62035,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 140747,
            "unit": "ns/op\t   62177 B/op\t      49 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 140747,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 62177,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 140107,
            "unit": "ns/op\t   62078 B/op\t      49 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 140107,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 62078,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 139801,
            "unit": "ns/op\t   62241 B/op\t      48 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 139801,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 62241,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 48,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 139818,
            "unit": "ns/op\t   62153 B/op\t      48 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 139818,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 62153,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 48,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4",
            "value": 139686,
            "unit": "ns/op\t   62272 B/op\t      48 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - ns/op",
            "value": 139686,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - B/op",
            "value": 62272,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g4 - allocs/op",
            "value": 48,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 507290,
            "unit": "ns/op\t  248461 B/op\t     181 allocs/op",
            "extra": "3187 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 507290,
            "unit": "ns/op",
            "extra": "3187 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 248461,
            "unit": "B/op",
            "extra": "3187 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 181,
            "unit": "allocs/op",
            "extra": "3187 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 503546,
            "unit": "ns/op\t  248238 B/op\t     181 allocs/op",
            "extra": "3165 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 503546,
            "unit": "ns/op",
            "extra": "3165 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 248238,
            "unit": "B/op",
            "extra": "3165 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 181,
            "unit": "allocs/op",
            "extra": "3165 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 499375,
            "unit": "ns/op\t  247696 B/op\t     181 allocs/op",
            "extra": "3102 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 499375,
            "unit": "ns/op",
            "extra": "3102 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 247696,
            "unit": "B/op",
            "extra": "3102 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 181,
            "unit": "allocs/op",
            "extra": "3102 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 503322,
            "unit": "ns/op\t  248056 B/op\t     181 allocs/op",
            "extra": "3200 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 503322,
            "unit": "ns/op",
            "extra": "3200 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 248056,
            "unit": "B/op",
            "extra": "3200 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 181,
            "unit": "allocs/op",
            "extra": "3200 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 505101,
            "unit": "ns/op\t  247612 B/op\t     180 allocs/op",
            "extra": "3166 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 505101,
            "unit": "ns/op",
            "extra": "3166 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 247612,
            "unit": "B/op",
            "extra": "3166 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 180,
            "unit": "allocs/op",
            "extra": "3166 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16",
            "value": 496228,
            "unit": "ns/op\t  248237 B/op\t     181 allocs/op",
            "extra": "3067 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - ns/op",
            "value": 496228,
            "unit": "ns/op",
            "extra": "3067 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - B/op",
            "value": 248237,
            "unit": "B/op",
            "extra": "3067 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g16 - allocs/op",
            "value": 181,
            "unit": "allocs/op",
            "extra": "3067 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1919448,
            "unit": "ns/op\t  993902 B/op\t     714 allocs/op",
            "extra": "730 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1919448,
            "unit": "ns/op",
            "extra": "730 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 993902,
            "unit": "B/op",
            "extra": "730 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 714,
            "unit": "allocs/op",
            "extra": "730 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1921448,
            "unit": "ns/op\t  995940 B/op\t     714 allocs/op",
            "extra": "739 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1921448,
            "unit": "ns/op",
            "extra": "739 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 995940,
            "unit": "B/op",
            "extra": "739 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 714,
            "unit": "allocs/op",
            "extra": "739 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1916910,
            "unit": "ns/op\t  994352 B/op\t     714 allocs/op",
            "extra": "729 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1916910,
            "unit": "ns/op",
            "extra": "729 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 994352,
            "unit": "B/op",
            "extra": "729 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 714,
            "unit": "allocs/op",
            "extra": "729 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1923382,
            "unit": "ns/op\t  995787 B/op\t     714 allocs/op",
            "extra": "728 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1923382,
            "unit": "ns/op",
            "extra": "728 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 995787,
            "unit": "B/op",
            "extra": "728 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 714,
            "unit": "allocs/op",
            "extra": "728 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1917716,
            "unit": "ns/op\t  995242 B/op\t     714 allocs/op",
            "extra": "739 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1917716,
            "unit": "ns/op",
            "extra": "739 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 995242,
            "unit": "B/op",
            "extra": "739 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 714,
            "unit": "allocs/op",
            "extra": "739 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64",
            "value": 1920078,
            "unit": "ns/op\t  996542 B/op\t     714 allocs/op",
            "extra": "735 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - ns/op",
            "value": 1920078,
            "unit": "ns/op",
            "extra": "735 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - B/op",
            "value": 996542,
            "unit": "B/op",
            "extra": "735 times\n4 procs"
          },
          {
            "name": "BenchmarkWaitGroupFanOut/g64 - allocs/op",
            "value": 714,
            "unit": "allocs/op",
            "extra": "735 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1",
            "value": 7239,
            "unit": "ns/op\t    5668 B/op\t       1 allocs/op",
            "extra": "184088 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - ns/op",
            "value": 7239,
            "unit": "ns/op",
            "extra": "184088 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - B/op",
            "value": 5668,
            "unit": "B/op",
            "extra": "184088 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "184088 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1",
            "value": 7032,
            "unit": "ns/op\t    5696 B/op\t       1 allocs/op",
            "extra": "180762 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - ns/op",
            "value": 7032,
            "unit": "ns/op",
            "extra": "180762 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - B/op",
            "value": 5696,
            "unit": "B/op",
            "extra": "180762 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "180762 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1",
            "value": 7110,
            "unit": "ns/op\t    5727 B/op\t       1 allocs/op",
            "extra": "179950 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - ns/op",
            "value": 7110,
            "unit": "ns/op",
            "extra": "179950 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - B/op",
            "value": 5727,
            "unit": "B/op",
            "extra": "179950 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "179950 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1",
            "value": 7284,
            "unit": "ns/op\t    5746 B/op\t       1 allocs/op",
            "extra": "181908 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - ns/op",
            "value": 7284,
            "unit": "ns/op",
            "extra": "181908 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - B/op",
            "value": 5746,
            "unit": "B/op",
            "extra": "181908 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "181908 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1",
            "value": 7209,
            "unit": "ns/op\t    5773 B/op\t       1 allocs/op",
            "extra": "181107 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - ns/op",
            "value": 7209,
            "unit": "ns/op",
            "extra": "181107 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - B/op",
            "value": 5773,
            "unit": "B/op",
            "extra": "181107 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "181107 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1",
            "value": 7295,
            "unit": "ns/op\t    5793 B/op\t       1 allocs/op",
            "extra": "178978 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - ns/op",
            "value": 7295,
            "unit": "ns/op",
            "extra": "178978 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - B/op",
            "value": 5793,
            "unit": "B/op",
            "extra": "178978 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g1 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "178978 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4",
            "value": 7754,
            "unit": "ns/op\t    7107 B/op\t       1 allocs/op",
            "extra": "174704 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - ns/op",
            "value": 7754,
            "unit": "ns/op",
            "extra": "174704 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - B/op",
            "value": 7107,
            "unit": "B/op",
            "extra": "174704 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "174704 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4",
            "value": 7822,
            "unit": "ns/op\t    7170 B/op\t       1 allocs/op",
            "extra": "174182 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - ns/op",
            "value": 7822,
            "unit": "ns/op",
            "extra": "174182 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - B/op",
            "value": 7170,
            "unit": "B/op",
            "extra": "174182 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "174182 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4",
            "value": 7866,
            "unit": "ns/op\t    7180 B/op\t       1 allocs/op",
            "extra": "177784 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - ns/op",
            "value": 7866,
            "unit": "ns/op",
            "extra": "177784 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - B/op",
            "value": 7180,
            "unit": "B/op",
            "extra": "177784 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "177784 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4",
            "value": 7884,
            "unit": "ns/op\t    7242 B/op\t       1 allocs/op",
            "extra": "176971 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - ns/op",
            "value": 7884,
            "unit": "ns/op",
            "extra": "176971 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - B/op",
            "value": 7242,
            "unit": "B/op",
            "extra": "176971 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "176971 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4",
            "value": 7849,
            "unit": "ns/op\t    7255 B/op\t       1 allocs/op",
            "extra": "176106 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - ns/op",
            "value": 7849,
            "unit": "ns/op",
            "extra": "176106 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - B/op",
            "value": 7255,
            "unit": "B/op",
            "extra": "176106 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "176106 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4",
            "value": 7890,
            "unit": "ns/op\t    7322 B/op\t       1 allocs/op",
            "extra": "173952 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - ns/op",
            "value": 7890,
            "unit": "ns/op",
            "extra": "173952 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - B/op",
            "value": 7322,
            "unit": "B/op",
            "extra": "173952 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g4 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "173952 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16",
            "value": 8120,
            "unit": "ns/op\t    7648 B/op\t       1 allocs/op",
            "extra": "165818 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - ns/op",
            "value": 8120,
            "unit": "ns/op",
            "extra": "165818 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - B/op",
            "value": 7648,
            "unit": "B/op",
            "extra": "165818 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "165818 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16",
            "value": 8178,
            "unit": "ns/op\t    7640 B/op\t       1 allocs/op",
            "extra": "164791 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - ns/op",
            "value": 8178,
            "unit": "ns/op",
            "extra": "164791 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - B/op",
            "value": 7640,
            "unit": "B/op",
            "extra": "164791 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "164791 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16",
            "value": 8110,
            "unit": "ns/op\t    7623 B/op\t       1 allocs/op",
            "extra": "162630 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - ns/op",
            "value": 8110,
            "unit": "ns/op",
            "extra": "162630 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - B/op",
            "value": 7623,
            "unit": "B/op",
            "extra": "162630 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "162630 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16",
            "value": 8145,
            "unit": "ns/op\t    7684 B/op\t       1 allocs/op",
            "extra": "163082 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - ns/op",
            "value": 8145,
            "unit": "ns/op",
            "extra": "163082 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - B/op",
            "value": 7684,
            "unit": "B/op",
            "extra": "163082 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "163082 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16",
            "value": 8163,
            "unit": "ns/op\t    7705 B/op\t       1 allocs/op",
            "extra": "163866 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - ns/op",
            "value": 8163,
            "unit": "ns/op",
            "extra": "163866 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - B/op",
            "value": 7705,
            "unit": "B/op",
            "extra": "163866 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "163866 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16",
            "value": 8173,
            "unit": "ns/op\t    7718 B/op\t       1 allocs/op",
            "extra": "163203 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - ns/op",
            "value": 8173,
            "unit": "ns/op",
            "extra": "163203 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - B/op",
            "value": 7718,
            "unit": "B/op",
            "extra": "163203 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g16 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "163203 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64",
            "value": 8193,
            "unit": "ns/op\t    7615 B/op\t       1 allocs/op",
            "extra": "158016 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - ns/op",
            "value": 8193,
            "unit": "ns/op",
            "extra": "158016 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - B/op",
            "value": 7615,
            "unit": "B/op",
            "extra": "158016 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "158016 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64",
            "value": 8225,
            "unit": "ns/op\t    7690 B/op\t       1 allocs/op",
            "extra": "160276 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - ns/op",
            "value": 8225,
            "unit": "ns/op",
            "extra": "160276 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - B/op",
            "value": 7690,
            "unit": "B/op",
            "extra": "160276 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "160276 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64",
            "value": 8234,
            "unit": "ns/op\t    7653 B/op\t       1 allocs/op",
            "extra": "159495 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - ns/op",
            "value": 8234,
            "unit": "ns/op",
            "extra": "159495 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - B/op",
            "value": 7653,
            "unit": "B/op",
            "extra": "159495 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "159495 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64",
            "value": 8196,
            "unit": "ns/op\t    7647 B/op\t       1 allocs/op",
            "extra": "159062 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - ns/op",
            "value": 8196,
            "unit": "ns/op",
            "extra": "159062 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - B/op",
            "value": 7647,
            "unit": "B/op",
            "extra": "159062 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "159062 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64",
            "value": 7600,
            "unit": "ns/op\t    7298 B/op\t       1 allocs/op",
            "extra": "159666 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - ns/op",
            "value": 7600,
            "unit": "ns/op",
            "extra": "159666 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - B/op",
            "value": 7298,
            "unit": "B/op",
            "extra": "159666 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "159666 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64",
            "value": 8330,
            "unit": "ns/op\t    7776 B/op\t       1 allocs/op",
            "extra": "154918 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - ns/op",
            "value": 8330,
            "unit": "ns/op",
            "extra": "154918 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - B/op",
            "value": 7776,
            "unit": "B/op",
            "extra": "154918 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReadWrite/g64 - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "154918 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 6505,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "176469 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 6505,
            "unit": "ns/op",
            "extra": "176469 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "176469 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "176469 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 7104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "188930 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 7104,
            "unit": "ns/op",
            "extra": "188930 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "188930 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "188930 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 6672,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "171414 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 6672,
            "unit": "ns/op",
            "extra": "171414 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "171414 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "171414 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 6362,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "173770 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 6362,
            "unit": "ns/op",
            "extra": "173770 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "173770 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "173770 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 7030,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "194481 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 7030,
            "unit": "ns/op",
            "extra": "194481 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "194481 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "194481 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1",
            "value": 6462,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "189475 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - ns/op",
            "value": 6462,
            "unit": "ns/op",
            "extra": "189475 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "189475 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "189475 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 5431,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "229851 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 5431,
            "unit": "ns/op",
            "extra": "229851 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "229851 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "229851 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 5550,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "224955 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 5550,
            "unit": "ns/op",
            "extra": "224955 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "224955 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "224955 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 5837,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "202918 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 5837,
            "unit": "ns/op",
            "extra": "202918 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "202918 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "202918 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 5705,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "203690 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 5705,
            "unit": "ns/op",
            "extra": "203690 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "203690 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "203690 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 5651,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "206413 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 5651,
            "unit": "ns/op",
            "extra": "206413 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "206413 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "206413 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16",
            "value": 5197,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "242876 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - ns/op",
            "value": 5197,
            "unit": "ns/op",
            "extra": "242876 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "242876 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "242876 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 5780,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "257071 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 5780,
            "unit": "ns/op",
            "extra": "257071 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "257071 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "257071 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 5386,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "219861 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 5386,
            "unit": "ns/op",
            "extra": "219861 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "219861 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "219861 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 5996,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "185301 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 5996,
            "unit": "ns/op",
            "extra": "185301 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "185301 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "185301 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 5448,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "209780 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 5448,
            "unit": "ns/op",
            "extra": "209780 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "209780 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "209780 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 5393,
            "unit": "ns/op\t       1 B/op\t       0 allocs/op",
            "extra": "270268 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 5393,
            "unit": "ns/op",
            "extra": "270268 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "270268 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "270268 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64",
            "value": 6212,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "200482 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - ns/op",
            "value": 6212,
            "unit": "ns/op",
            "extra": "200482 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "200482 times\n4 procs"
          },
          {
            "name": "BenchmarkProducerConsumer/buf64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "200482 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 7486,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "175074 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 7486,
            "unit": "ns/op",
            "extra": "175074 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "175074 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "175074 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 7004,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "168481 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 7004,
            "unit": "ns/op",
            "extra": "168481 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "168481 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "168481 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 7195,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "162664 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 7195,
            "unit": "ns/op",
            "extra": "162664 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "162664 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "162664 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 8255,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "156147 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 8255,
            "unit": "ns/op",
            "extra": "156147 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "156147 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "156147 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 8105,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "150588 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 8105,
            "unit": "ns/op",
            "extra": "150588 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "150588 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "150588 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1",
            "value": 7106,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "199827 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - ns/op",
            "value": 7106,
            "unit": "ns/op",
            "extra": "199827 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "199827 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g1 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "199827 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 6238,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "193844 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 6238,
            "unit": "ns/op",
            "extra": "193844 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "193844 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "193844 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 6203,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "190498 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 6203,
            "unit": "ns/op",
            "extra": "190498 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "190498 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "190498 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 6244,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "192316 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 6244,
            "unit": "ns/op",
            "extra": "192316 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "192316 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "192316 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 6231,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "192564 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 6231,
            "unit": "ns/op",
            "extra": "192564 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "192564 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "192564 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 6217,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "193252 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 6217,
            "unit": "ns/op",
            "extra": "193252 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "193252 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "193252 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4",
            "value": 6248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "195998 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - ns/op",
            "value": 6248,
            "unit": "ns/op",
            "extra": "195998 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "195998 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "195998 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 6348,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "189225 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 6348,
            "unit": "ns/op",
            "extra": "189225 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "189225 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "189225 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 6307,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "189904 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 6307,
            "unit": "ns/op",
            "extra": "189904 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "189904 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "189904 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 6343,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "193233 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 6343,
            "unit": "ns/op",
            "extra": "193233 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "193233 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "193233 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 6356,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "187580 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 6356,
            "unit": "ns/op",
            "extra": "187580 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "187580 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "187580 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 6329,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "189652 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 6329,
            "unit": "ns/op",
            "extra": "189652 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "189652 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "189652 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16",
            "value": 6351,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "192457 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - ns/op",
            "value": 6351,
            "unit": "ns/op",
            "extra": "192457 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "192457 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g16 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "192457 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 6295,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "185856 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 6295,
            "unit": "ns/op",
            "extra": "185856 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "185856 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "185856 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 6277,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "191768 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 6277,
            "unit": "ns/op",
            "extra": "191768 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "191768 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "191768 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 6334,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "193743 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 6334,
            "unit": "ns/op",
            "extra": "193743 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "193743 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "193743 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 6345,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "188311 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 6345,
            "unit": "ns/op",
            "extra": "188311 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "188311 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "188311 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 6262,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "197157 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 6262,
            "unit": "ns/op",
            "extra": "197157 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "197157 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "197157 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64",
            "value": 6284,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "190214 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - ns/op",
            "value": 6284,
            "unit": "ns/op",
            "extra": "190214 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "190214 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPool/g64 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "190214 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 271.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4425571 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 271.9,
            "unit": "ns/op",
            "extra": "4425571 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4425571 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4425571 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 273.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4381033 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 273.1,
            "unit": "ns/op",
            "extra": "4381033 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4381033 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4381033 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 271,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4427938 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 271,
            "unit": "ns/op",
            "extra": "4427938 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4427938 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4427938 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 268.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4482200 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 268.3,
            "unit": "ns/op",
            "extra": "4482200 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4482200 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4482200 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 272.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4403370 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 272.4,
            "unit": "ns/op",
            "extra": "4403370 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4403370 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4403370 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation",
            "value": 272.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4404337 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - ns/op",
            "value": 272.4,
            "unit": "ns/op",
            "extra": "4404337 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4404337 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryAllocation - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4404337 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 21.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58561462 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 21.24,
            "unit": "ns/op",
            "extra": "58561462 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58561462 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58561462 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56202244 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.22,
            "unit": "ns/op",
            "extra": "56202244 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56202244 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56202244 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58508455 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.96,
            "unit": "ns/op",
            "extra": "58508455 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58508455 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58508455 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52682252 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.19,
            "unit": "ns/op",
            "extra": "52682252 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52682252 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52682252 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59051360 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.19,
            "unit": "ns/op",
            "extra": "59051360 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "59051360 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "59051360 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4",
            "value": 20.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58835628 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - ns/op",
            "value": 20.2,
            "unit": "ns/op",
            "extra": "58835628 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58835628 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryConcurrent/g4 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58835628 times\n4 procs"
          }
        ]
      }
    ]
  }
}