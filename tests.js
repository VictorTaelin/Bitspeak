const bs = require(".");

function assertRoundtrip6(hex) {
    var bs6 = bs.hexToBitspeak6(hex);
    var roundtrip = bs.bitspeak6ToHex(bs6);

    //console.log("Hex (" + hex + ") -> " + bs6 + " -> " + roundtrip);
    console.assert(hex === roundtrip);
}

//console.assert(bs.hexToBitspeak6("1234abcd") === "pakidutiredu");
//console.assert(bs.bitspeak6ToHex("pakidutiredu") === "1234abcd");

console.assert(bs.hexToBitspeak8("1234abcd") === "biduleimui");
console.assert(bs.bitspeak8ToHex("biduleimui") === "1234abcd");

assertRoundtrip6("ab");
assertRoundtrip6("abcd");
assertRoundtrip6("abcdef");
assertRoundtrip6("abcdef01");
assertRoundtrip6("abcdef0102");
assertRoundtrip6("abcdef010203");