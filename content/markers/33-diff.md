---
title: "diff"
number: "33"
position:
  left: "12%"
  top: "76%"
description: "Compare two files and show exactly what changed"
---

[`diff`](https://en.wikipedia.org/wiki/Diff) compares two files line by line and
shows what was added, removed, or changed. Doug McIlroy and James Hunt wrote it at
Bell Labs, and it shipped with Fifth Edition Unix in 1974. Its output, the patch,
became a universal unit of change.

Before diff, reconciling two versions of a source file meant reading them side by
side. diff automated that, and once Larry Wall's
[`patch(1)`](https://man7.org/linux/man-pages/man1/patch.1.html) arrived in 1985,
you could mail someone a diff and they could apply it to their own copy of the
file.

Hunt and McIlroy described the algorithm in a 1976 paper. It finds the longest
common subsequence of the two files' lines, which is expensive to compute
naively, and they made it fast enough for the hardware of the time. Most tools
today use Eugene Myers's 1986 algorithm instead; it's the default in both GNU
diff and git.
