---
title: "pwd"
number: "28"
position:
  left: "79%"
  top: "33%"
description: "Print the current working directory"
---

[`pwd`](https://man7.org/linux/man-pages/man1/pwd.1.html) -- "print
working directory" -- tells you where you are in the filesystem. It's been
part of Unix from the early days and is a shell builtin on most modern
systems.

That matters because the shell tracks the logical path (honoring symlinks
you traversed), while the external `/bin/pwd` returns the resolved physical
path. Usually they agree; when they don't, `pwd -P` vs `pwd -L` is how you
tell them apart.
