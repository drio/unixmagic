---
title: "curses"
number: "32"
position:
  left: "78%"
  top: "27%"
description: "A terminal control library for building text user interfaces"
---

The [`curses`](https://en.wikipedia.org/wiki/Curses_(programming_library))
library hides the ugly details of moving the cursor around a terminal and
repainting regions of the screen. Before curses, programs that wanted to
do anything more than scroll text had to emit raw escape sequences for
whatever terminal they were running on — and every terminal model spoke
a slightly different dialect. Curses reads the terminal's capabilities
from `termcap`/`terminfo` and gives you a portable API.

It's why `vi`, `less`, `top`, `htop`, `mutt`, and countless other TUI
programs look and work the same across terminals. The name is a pun on
"cursor optimization". Ken Arnold wrote the original curses for BSD Unix.
