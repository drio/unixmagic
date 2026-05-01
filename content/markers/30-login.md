---
title: "login"
number: "30"
position:
  left: "83%"
  top: "57%"
description: "The gateway into the system"
---

`login` authenticates the user, initializes
the environment by changing to the user's home directory, and spawns a process
running as that user (with their `uid` and `gid`), using their shell of choice.

Standard input and output also need to be attached to a terminal:
this could be a **pseudo-terminal** (if you are in a graphical interface or
using `ssh`), or a **physical terminal** (as was common at the time).
