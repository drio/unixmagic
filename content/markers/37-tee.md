---
title: "tee"
number: "37"
position:
  left: "71%"
  top: "19%"
description: "The T-junctions in the pipes, possibly a reference to the tee command."
---

The T-shaped pipe junctions in the poster may reference the
[`tee`](https://man7.org/linux/man-pages/man1/tee.1.html) command. `tee` reads
from standard input and writes to both standard output and one or more files at
the same time, like a T-junction splitting a flow of water.

This is handy for debugging pipelines (you can tap into the middle of a chain
to see what's flowing through) or for logging (save a copy of the data while
still passing it along): `make 2>&1 | tee build.log`.
