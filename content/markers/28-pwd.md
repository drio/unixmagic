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

The shell builtin tracks the logical path you walked through, symlinks and
all. Pass `-P` to get the physical path with symlinks resolved, or `-L` to
force the logical one.
