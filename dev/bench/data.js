window.BENCHMARK_DATA = {
  "lastUpdate": 1771876519833,
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
      }
    ]
  }
}