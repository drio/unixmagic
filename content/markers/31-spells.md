---
title: "spells"
number: "31"
position:
  left: "75%"
  top: "26%"
description: "The wizard's incantations — and the Unix spell-checker"
---

On the poster, "spells" plays on the wizard imagery: the user as
magician, the shell commands as incantations. There's also a literal
Unix command by that name.

[`spell`](https://en.wikipedia.org/wiki/Spell_(Unix)) is the classic
Unix spell-checker. Stephen C. Johnson wrote the original for Version 6
Unix in 1975, and Doug McIlroy rewrote it soon after. McIlroy had to fit an
English dictionary into a PDP-11 with tens of kilobytes of memory, so
he compressed the word list into a Bloom-filter-like structure of
hash codes. It was famously short, fast, and accurate enough to be
useful. Jon Bentley's *Programming Pearls* tells the story well.

Related tools: `look` (binary-search a sorted word list by prefix) and
`ispell` / `aspell` (interactive checkers that replaced `spell` on most
systems).
