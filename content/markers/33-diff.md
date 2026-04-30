---
title: "diff"
number: "33"
position:
  left: "12%"
  top: "76%"
description: "Compare two files and show exactly what changed"
---

[`diff`](https://en.wikipedia.org/wiki/Diff) compares two files line by line and
shows what was added, removed, or changed. Doug McIlroy wrote it at Bell Labs in
the early 1970s.

Before diff, reconciling two versions of a source file meant reading them side by
side. diff automated that completely and its output format -- the patch -- became
a universal unit of change. You could mail a patch to someone and they could apply
it with [`patch(1)`](https://man7.org/linux/man-pages/man1/patch.1.html) without
ever seeing the original file. 

The algorithm diff uses -- the longest common subsequence problem -- was formalized by James Hunt and McIlroy in a 1976 paper. For large files the naive approach is expensive, and getting it fast enough to be useful on the hardware of the time was non-trivial. The Hunt-McIlroy algorithm is still the basis of most diff implementations.
