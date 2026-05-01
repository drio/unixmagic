---
title: "spawn"
number: "23"
position:
  left: "66%"
  top: "39%"
description: "An operation in which a new child process is created"
---

Spawning means creating a new child process. In Unix, this is traditionally
done with `fork` and `exec`: `fork` creates a copy of the current process,
then the *child* calls `exec` to replace itself with a different program. The
parent typically calls `wait` to wait for the child to finish.

POSIX also defines `posix_spawn`, which combines the two steps into one call.
It can be more efficient on systems where `fork` is expensive -- for example,
hardware without an MMU, or very large parent processes where even setting up
copy-on-write mappings is slow.
