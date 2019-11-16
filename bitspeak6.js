const conso = {
  "0000": "p",
  "0001": "b",
  "0010": "t",
  "0011": "d",
  "0100": "k",
  "0101": "g",
  "0110": "x",
  "0111": "j",
  "1000": "f",
  "1001": "v",
  "1010": "l",
  "1011": "r",
  "1100": "m",
  "1101": "n",
  "1110": "s",
  "1111": "z",
};

const vowel = {
  "00": "a",
  "01": "u",
  "10": "i",
  "11": "e",
};

for (var key in conso) {
  conso[conso[key]] = key;
}

for (var key in vowel) {
  vowel[vowel[key]] = key;
}

const hexToBitspeak6 = (hex) => {
  var bits = "";
  for (var i = 0; i < hex.length; ++i) {
    bits += ("0000" + parseInt(hex[i], 16).toString(2)).slice(-4);
  }

  while (bits.length % 6 !== 0) {
    bits = "0" + bits;
  }

  var bitspeak6 = "";
  for (var i = 0; i < bits.length / 6; ++i) {
    bitspeak6 += conso[bits.slice(i * 6 + 0, i * 6 + 4)];
    bitspeak6 += vowel[bits.slice(i * 6 + 4, i * 6 + 6)];
  }

  return bitspeak6;
};

const bitspeak6ToHex = (bitspeak6) => {
  var bits = "";

  for (var i = 0; i < bitspeak6.length / 2; ++i) {
    bits += conso[bitspeak6[i * 2 + 0]];
    bits += vowel[bitspeak6[i * 2 + 1]];
  }

  while (bits.length % 4 !== 0) {
    bits = "0" + bits;
  }

  var hex = "";
  for (var i = 0; i < bits.length / 4; ++i) {
    hex += parseInt(bits.slice(i * 4, (i + 1) * 4), 2).toString(16);
  }

  while (hex[0] === "0") {
    hex = hex.slice(1);
  }

  return hex;
};

module.exports = {hexToBitspeak6, bitspeak6ToHex};
