---
title: "cat"
number: "19"
position:
  left: "89%"
  top: "83%"
description: "Concatenate files to standard output"
---

[`cat`](https://en.wikipedia.org/wiki/Cat_(Unix)) takes its name from
(con)*cat*enate. Give it one file and it dumps the contents to stdout;
give it several and it glues them together. It was part of Version 1
Unix, written by Ken Thompson and Dennis Ritchie.

`cat` is also where the "Useless Use of Cat" joke comes from:

```sh
cat file | grep foo   # UUOC
grep foo file         # same thing, one less process
```

Rob Pike's short 1983 note *"cat -v considered harmful"* is worth
reading too — the argument isn't really about `cat`, it's about the Unix
tendency to bolt features onto small tools until they stop being small.
