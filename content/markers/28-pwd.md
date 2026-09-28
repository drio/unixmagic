---
title: "pwd"
number: "28"
position:
  left: "79%"
  top: "33%"
description: "Print the current working directory"
---

[`pwd`](https://man7.org/linux/man-pages/man1/pwd.1.html) -- "print
working directory" -- tells you where you are in the filesystem. Every process
has a current directory, and every relative path starts from it.

The Version 7 kernel kept that directory as an inode, not a path, so `pwd` had
to work the name out. It stepped into `..` again and again, searching each
parent for the entry that matched the directory it had just left, until it
reached `/`. Then it printed the collected names in reverse.

The current directory also explains why `cd` is built into the shell. Dennis
Ritchie
[recalled](https://web.archive.org/web/2010/http://cm.bell-labs.com/cm/cs/who/dmr/hist.html)
that when `fork` arrived, `chdir` stopped working: the command changed the
directory of the child process created to run it, and that child promptly
exited. `pwd` can be a separate program; `cd` can't.

Today `pwd` is usually a shell builtin that remembers the path you walked,
symlinks and all. `pwd -P` resolves them.
