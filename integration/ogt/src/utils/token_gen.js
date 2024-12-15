function oo(a) {
  for (var b = [], c = 0, d = 0; d < a.length; d++) {
    var e = a.charCodeAt(d);
    128 > e
      ? (b[c++] = e)
      : (2048 > e
          ? (b[c++] = (e >> 6) | 192)
          : (55296 == (e & 64512) &&
            d + 1 < a.length &&
            56320 == (a.charCodeAt(d + 1) & 64512)
              ? ((e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                (b[c++] = (e >> 18) | 240),
                (b[c++] = ((e >> 12) & 63) | 128))
              : (b[c++] = (e >> 12) | 224),
            (b[c++] = ((e >> 6) & 63) | 128)),
        (b[c++] = (e & 63) | 128));
  }
  return b;
}
function jq(a, b) {
  for (var c = 0; c < b.length - 2; c += 3) {
    var d = b.charAt(c + 2);
    d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
    d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
    a = "+" == b.charAt(c) ? (a + d) & 4294967295 : a ^ d;
  }
  return a;
}
function generateFinalToken(sentenceToTranslate) {
  var a = sentenceToTranslate.join("");
  var b = ["471414", "523112976"],
    c = Number(b[0]) || 0;
  a = oo(a);
  for (var d = c, e = 0; e < a.length; e++) (d += a[e]), (d = jq(d, "+-a^+6"));
  d = jq(d, "+-3^+b+-f");
  d ^= Number(b[1]) || 0;
  0 > d && (d = (d & 2147483647) + 2147483648);
  b = d % 1e6;
  return b.toString() + "." + (b ^ c);
}

module.exports = generateFinalToken;
