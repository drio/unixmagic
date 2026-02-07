---
title: "spawn"
number: "23"
position:
  left: "66%"
  top: "39%"
description: "An operation in which a new child process is created"
---

Spawning means creating a new child process. In UNIX, this is traditionally
done with `fork` and `exec`: `fork` creates a copy of the current process,
then the *child* calls `exec` to replace itself with a different program. The
parent typically calls `wait` to wait for the child to finish.

POSIX also defines `posix_spawn`, which combines the two steps into one call
and can be more efficient since it avoids copying the parent's entire address
space.
