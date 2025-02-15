---
title: "spawn"
number: "23"
position:
  left: "66%"
  top: "39%"
description: "An operation in which a new child process is created"
---

Spawning is the process of loading and executing a new child process.
Closely related is the idea of `fork` and `exec` that can be used
to simulate spawning, by forking a process, having the parent terminate
and `exec`ing the child into the desired spawn process.

POSIX allow for the concept of spawning by itself that can be made
to be more efficient than `fork` and `exec`.

The spawn metaphor had its early use in the VMS operating system from 1977.
