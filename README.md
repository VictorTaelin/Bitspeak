DesuHex
=======

Converts hex strings to Japanese-like words. This may be a good format to print
for small identifiers or data that need to be pronounciated. For example, if we
store the `0x476ffe` as Base64, it may become something like `hS_$`, which is
pronounced as *"height uppercase ess underline dollar sign"*. With desubits,
the same hex becomes "kunizezi", which is much easier to say. That's all...

Usage
-----

```javascript
const ds = require("desuhex");

console.log(ds.hexToDesu("476ffe")); // "kunizezi"
console.log(ds.desuToHex("kunizezi")); // "476ffe"
```

Specification
-------------

DesuHex simply slices the hex into chunks of 6 bits (4 bits for a consonant, 2 bits for a vowel), pads, and uses the following conversion table:

```javascript
// Consonants:

0000 -> p
0001 -> b
0010 -> t
0011 -> d
0100 -> k
0101 -> g
0110 -> x
0111 -> j
1000 -> f
1001 -> v
1010 -> l
1011 -> r
1100 -> m
1101 -> n
1110 -> s
1111 -> z

// Vowels:

00 -> a
01 -> u
10 -> i
11 -> e
```
