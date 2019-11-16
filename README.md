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

Examples
--------

Bitspeak has two versions, 6-bit and 8-bit per syllable. The 6-bit version is more accurate since syllables don't get mixed up, but the 8-bit one is more round since it matches 1 byte per syllable.

Num | Hex | Bs6 | Bs8
--- | --- | --- | ---
16261014 | f81f96 | zipuzigi | zunbowven
4457519 | 44042f | kupakare | kuputow
2609494 | 27d156 | tuzubugi | tinyegen
1529246 | 17559e | bunugiji | binganvaw
14570023 | de5227 | nevutave | yawgitin
2753998 | 2a05ce | tifagedi | taipanmaw
5519699 | 543953 | gupevuke | gudongo
3870500 | 3b0f24 | dimazava | deipowtu
13033781 | c6e135 | muribanu | mensedan
15789528 | f0edd8 | zadinexa | zasuiyun
147010 | 23e42 | pafesupi | pidawki
7313431 | 6f9817 | xesufage | chowvunbin
2213186 | 21c542 | tajagupi | temanki
2145750 | 20bdd6 | tatenegi | taruiyen
4071640 | 3e20d8 | defipexa | dawtayun
1974352 | 1e2050 | befipuka | bawtaga
9512932 | 9127e4 | vakijeva | vetinsu
4517800 | 44efa8 | kudizila | kusowlun
12793805 | c337cd | mamejedu | modinmui
8649854 | 83fc7e | fazemuzi | fozoijaw
14233703 | d93067 | nikepuve | yondachin
2973685 | 2d5ff5 | teguzenu | tuigowzan
5297893 | 50d6e5 | gaduxevu | gayensan
9990788 | 987284 | vibetiba | vunjifu

Note that the consonants are picked to maintain an unique map between the pronounciation and the writing. Consonants like `x` should be understood as `sh` from `shower`, and consonants like `g` should be read with the `g` sound from `game`, even when they're followed by a `i` or `e`.

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
