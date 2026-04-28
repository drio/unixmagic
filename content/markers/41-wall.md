---
title: "wall"
number: "41"
position:
  left: "40%"
  top: "29%"
description: "Broadcast a message to every logged-in user"
---

[`wall`](https://man7.org/linux/man-pages/man1/wall.1.html) — "write to
all" — prints a message on every terminal currently logged into the
system. It reads from a file or stdin and pushes the contents out to
everyone.

The classic use is from root, right before a shutdown:

```sh
echo "System going down in 5 minutes. Save your work." | wall
```

On a multi-user timesharing machine in the 80s, that was how you gave
people a heads-up before pulling the plug.
