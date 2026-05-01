---
title: "fork"
number: "13"
position:
  left: "25%"
  top: "90%"
description: "The system call that creates a new process"
---

[`fork(2)`](https://en.wikipedia.org/wiki/Fork_(system_call)) is how Unix
makes a new process: the kernel duplicates the calling process, and now
there are two of them running the same code. They only differ in the
return value of `fork` itself — zero in the child, the child's PID in the
parent — which is how each copy knows who it is.

What made this radical at the time was how *cheap* it could be. Early
Unix leaned on it for everything, and modern kernels use copy-on-write so
the duplicated address space costs almost nothing until one side writes
to it. The shell runs every command by forking and then calling `exec`
in the child to replace itself with the target program. That fork/exec
split is unusual — VMS and Windows went with a single "spawn" call that
creates a process already running a different program — but it's what
lets the shell set up redirections, pipes, and environment changes in
the child after `fork` and before `exec`, using ordinary code. Most of
Unix's composability comes from that split.

Melvin Conway described the idea under the name "fork" in *A
Multiprocessor System Design* in the early 1960s, years before Unix existed.
