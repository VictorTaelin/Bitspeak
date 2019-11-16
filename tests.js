const bs = require(".");

console.assert(bs.hexToBitspeak6("1234abcd") === "pakidutiredu");
console.assert(bs.bitspeak6ToHex("pakidutiredu") === "1234abcd");

console.assert(bs.hexToBitspeak8("1234abcd") === "biduleimui");
console.assert(bs.bitspeak8ToHex("biduleimui") === "1234abcd");
