// helpers
// helper
function ordA(a) {
  return a.charCodeAt(0) - 65;
}
 
// vigenere
function vigenere(text, key, decode) {
  let i = 0, b;
  shift = key.toUpperCase().replace(/[^A-Z]/g, '');
  return shift.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
    let b = key[i++ % key.length];
    return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
  });
}
 
// example
var text = "The quick brown fox Jumped over the lazy Dog the lazy dog lazy dog dog";
var key = 'alex';
var enc = vigenere(text,key);
var dec = vigenere(enc,key,true);
 
console.log(enc);
console.log(dec);