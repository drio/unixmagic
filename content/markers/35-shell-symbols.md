---
title: "Shell's symbols"
number: "35"
position:
  left: "25%"
  top: "46%"
description: "The runes on the wizard's cloak — shell metacharacters"
---

The wizard's cloak is decorated with shell metacharacters. Each of them
gives the shell a different superpower: chaining commands, redirecting
I/O, expanding variables, matching filenames. A handful of these
symbols is most of what separates a GUI user from a shell user.

| Symbol    | Name                 | Example                              |
|-----------|----------------------|--------------------------------------|
| `%`       | Job control          | `fg %1` — foreground job 1           |
| `$`       | Variable expansion   | `echo $HOME`, `$?` (last exit code)  |
| `>` `>>`  | Output redirection   | `ls > files.txt` (overwrite / append)|
| `<`       | Input redirection    | `sort < input.txt`                   |
| `*` `?`   | Glob / wildcard      | `ls *.txt`                           |
| `!`       | History expansion    | `!!` (last command), `!$` (last arg) |
| `[ ]`     | Test / conditionals  | `[ -f file.txt ]`                    |
| `|`       | Pipe                 | `ls | wc -l`                         |
| `&`       | Run in background    | `long-job &`                         |
| `;`       | Command separator    | `cd /tmp; ls`                        |
| `` ` ``   | Command substitution | `` echo `date` `` (also `$(...)`)    |

Put together, you get things like:

```sh
if [ -f file.txt ]; then
    echo "file exists: $(wc -l < file.txt) lines"
fi
```

Nothing magical — it just looks that way the first time you see it.
