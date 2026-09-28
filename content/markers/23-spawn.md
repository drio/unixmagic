---
title: "spawn"
number: "23"
position:
  left: "66%"
  top: "39%"
description: "Starting a new program in a child process"
---

Spawning means starting a child process that runs a different program. Unix
splits it in two: `fork` copies the current process, then the child calls
`exec` to become the new program. The parent usually calls `wait` to collect
the child's exit status. [#13](#annotation-13-fork) explains why the split
matters.

POSIX also defines `posix_spawn`, which does both steps in one call, the way
VMS and Windows always have. It helps where `fork` is expensive: on hardware
without an MMU, which can't do copy-on-write, or when the parent is so large
that even setting up copy-on-write mappings is slow.
