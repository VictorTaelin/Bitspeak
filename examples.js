const bs = require(".");

console.log("Num | Hex | Bs6 | Bs8");
console.log("--- | --- | --- | ---");

for (var i = 0; i < 24; ++i) {
  var num = Math.floor(Math.random() * (2 ** 24));
  var hex = num.toString(16);
  var bs6 = bs.hexToBitspeak6(hex);
  var bs8 = bs.hexToBitspeak8(hex);
  console.log(num + " | " + hex + " | " + bs6 + " | " + bs8);
};
