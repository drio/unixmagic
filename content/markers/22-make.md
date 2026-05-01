---
title: "make"
number: "22"
position:
  left: "83%"
  top: "64%"
description: "Build automation tool -- only recompile what changed"
---

[Make](https://en.wikipedia.org/wiki/Make_(software)) is a build automation tool
that reads a `Makefile` describing targets, their dependencies, and the commands
to build them. Stuart Feldman wrote the first version at Bell Labs in 1976.

Before Make, building a project meant running a shell script that recompiled
everything, every time. Make's key insight is the dependency graph: each target
declares what it depends on, and Make only rebuilds what's out of date. On a
large codebase that distinction mattered enormously -- recompiling a single
changed file instead of the whole tree could save minutes on the hardware of
the time.

The `Makefile` format outlived the era it was designed for. Make is still the
default build tool on most Unix systems, and its tab-indented syntax -- which
Feldman famously regretted -- has been tripping people up ever since.
