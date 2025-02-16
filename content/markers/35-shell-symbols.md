---
title: "Shell's symbols"
number: "35"
position:
  left: "25%"
  top: "46%"
description: "Symbols of the shell"
---

### Shell Symbols on the Wizard's Cloak

The wizard’s cloak is decorated with symbols that represent some of the most
important special characters used in the UNIX shell. These symbols are the
"runes" of UNIX power, allowing users to combine commands, redirect input and
output, and control processes with precision. Mastery of these symbols is part
of what transforms a regular user into a "UNIX wizard."

#### `%` – Job Control
Used to **refer to background jobs in the shell**.
- `jobs` → List background jobs.
- `fg %1` → Bring **job 1 to the foreground**.
- `bg %2` → Resume **job 2 in the background**.

#### `$` – Variable Expansion & Shell Prompt
Represents **variables and parameter substitution**.
- `$HOME` → Expands to **the value of the `HOME` environment variable**.
- `$?` → Shows **the exit status of the last command**.

Also often **appears as the shell prompt** for **a regular user**.

#### `>` – Output Redirection
Redirects **standard output to a file**.
- `ls > files.txt` → Writes the **output of `ls` into `files.txt`** (overwriting it).

#### `<` – Input Redirection
Redirects **standard input from a file**.
- `sort < input.txt` → Reads **input from `input.txt` instead of the keyboard**.

#### `*` – Wildcard (Glob)
**Matches any number of characters** in filenames.
- `ls *.txt` → Lists **all files ending in `.txt`**.
- `rm *` → **Deletes all files in the current directory** (Dangerous!).

#### `!` – History Expansion
**Expands to previously executed commands**.
- `!!` → Repeats **the last command**.
- `!ls` → Repeats **the last command starting with `ls`**.
- `!$` → Expands **to the last argument of the previous command**.

#### `[` `]` – Test / Conditional Expressions
Used **in shell conditionals** and **`if` statements**.
- `[ -f file.txt ]` → **Tests if `file.txt` is a regular file**.
- Common **in shell scripting**:
  ```bash
  if [ -f file.txt ]; then
      echo "File exists!"
  fi


