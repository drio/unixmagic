---
title: "whoami"
number: "27"
position:
  left: "71%"
  top: "26%"
description: "Prints the effective user of the current shell"
---

[`whoami`](https://en.wikipedia.org/wiki/Whoami) prints the name of the user
the current process runs as. Bill Joy added it in 2.9BSD as a short form of
`who am i`, but today the two answer different questions, and the difference
shows up right after [`su`](#annotation-09-su).

`who am i` looks your terminal up in the login records, so it reports who
logged in. `whoami` asks the kernel for the process's effective user ID. After
`su`, they disagree:

```sh
$ su
# who am i
alice    pts/0    ...
# whoami
root
```
