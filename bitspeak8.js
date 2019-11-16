const conso = {
  "0000": "p",
  "0001": "b",
  "0010": "t",
  "0011": "d",
  "0100": "k",
  "0101": "g",
  "0110": "ch",
  "0111": "j",
  "1000": "f",
  "1001": "v",
  "1010": "l",
  "1011": "r",
  "1100": "m",
  "1101": "y",
  "1110": "s",
  "1111": "z",
};

const vowel = {
  "0000": "a",
  "0001": "e",
  "0010": "i",
  "0011": "o",
  "0100": "u",
  "0101": "an",
  "0110": "en",
  "0111": "in",
  "1000": "un",
  "1001": "on",
  "1010": "ai",
  "1011": "ei",
  "1100": "oi",
  "1101": "ui",
  "1110": "aw",
  "1111": "ow",
};

for (var key in conso) {
  conso[conso[key]] = key;
}

for (var key in vowel) {
  vowel[vowel[key]] = key;
}

const hexToBitspeak8 = (hex) => {
  var bits = "";
  for (var i = 0; i < hex.length; ++i) {
    bits += ("0000" + parseInt(hex[i], 16).toString(2)).slice(-4);
  }

  while (bits.length % 8 !== 0) {
    bits = "0" + bits;
  }

  var bitspeak8 = "";
  for (var i = 0; i < bits.length / 8; ++i) {
    bitspeak8 += conso[bits.slice(i * 8 + 0, i * 8 + 4)];
    bitspeak8 += vowel[bits.slice(i * 8 + 4, i * 8 + 8)];
  }

  return bitspeak8;
};

const bitspeak8ToHex = (bitspeak8) => {
  // Gambiarra parser
  var syls = [];
  for (var i = 0; i <= bitspeak8.length; ++i) {
    var syl = "";
    var con = conso[bitspeak8[i]] || conso[bitspeak8.slice(i,i+2)];
    if (con) {
      for (var j = i + 1; j < bitspeak8.length; ++j) { 
        if (conso[bitspeak8[j]] || conso[bitspeak8.slice(j,j+2)]) {
          break;
        }
      }
      syls.push([conso[con], bitspeak8.slice(i + conso[con].length, j)]);
    }
  };

  var bits = "";
  for (var i = 0; i < syls.length; ++i) {
    bits += conso[syls[i][0]];
    bits += vowel[syls[i][1]];
  }

  while (bits.length % 8 !== 0) {
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

module.exports = {hexToBitspeak8, bitspeak8ToHex};
