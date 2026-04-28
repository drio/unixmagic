---
title: "traps"
number: "34"
position:
  left: "73%"
  top: "33%"
description: "Signals — the kernel's way of interrupting a process"
---

[Signals](https://en.wikipedia.org/wiki/Signal_(IPC)) (also called
"traps") are short, asynchronous notifications the kernel delivers to a
process: "your child exited", "the user hit Ctrl-C", "your terminal
went away". A program can install a handler for most of them, or let
the kernel's default action happen.

A few that come up constantly:

- **SIGINT** — what Ctrl-C sends. Polite request to stop; programs
  usually catch it to clean up first.
- **SIGTERM** — the default from `kill <pid>`. Also polite, also
  catchable. `systemd`, `init`, and orchestration tools send SIGTERM
  first and wait.
- **SIGKILL** — `kill -9`. Cannot be caught, blocked, or ignored. The
  kernel stops the process immediately. Use when nothing else works.
- **SIGHUP** — originally "the terminal hung up". Many daemons
  repurpose it to mean "reread your config file" because no one's
  dialing in anymore.

The shell's `trap` builtin lets scripts install their own handlers:

```sh
trap 'rm -f "$tmpfile"' EXIT INT TERM
```

That line guarantees the temp file gets cleaned up whether the script
finishes normally or gets interrupted.
