Bitspeak
========

Converts hex strings to pronounceable words. This may be a good format to print
for small identifiers or data that need to be pronounciated. For example, if we
store the `0x476ffe` as Base64, it may become something like `hS_$`, which is
pronounced as *"height uppercase ess underline dollar sign"*. With Bitspeak,
the same hex becomes "kunizezi", which is much easier to say. That's all...

Usage
-----

```javascript
const bs = require("bitspeak");

console.log(bs.hexToBitspeak6("476ffe")); // "kunizezi"
console.log(bs.bitspeak6ToHex("kunizezi")); // "476ffe"
```

Specification
-------------

Bitspeak has two flavors, 6-bit and 8-bit per syllable. They use the following tables:

### 6-Bit

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

### 8-bit

```javascript
// Consonants:

0000 -> p
0001 -> b
0010 -> t
0011 -> d
0100 -> k
0101 -> g
0110 -> sh
0111 -> j
1000 -> f
1001 -> v
1010 -> l
1011 -> r
1100 -> m
1101 -> y
1110 -> s
1111 -> z

// Vowels:

0000 -> a
0001 -> e
0010 -> i
0011 -> o
0100 -> u
0101 -> an
0110 -> en
0111 -> in
1000 -> un
1001 -> on
1010 -> ai
1011 -> ei
1100 -> oi
1101 -> ui
1110 -> aw
1111 -> ow
```
