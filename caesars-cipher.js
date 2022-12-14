/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
rot13("SERR YBIR?") should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/
//s1
function rot13(str) {
  let resultArr = [];
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt();
    if (code >= 65 && code <= 77) {
      resultArr += String.fromCharCode(code + 13);
    } else if (code >= 78 && code <= 90) {
      resultArr += String.fromCharCode(code - 13);
    } else {
      resultArr += str[i];
    }
  }
  return resultArr;
}

console.log(rot13("SERR PBQR PNZC"));

//s2
function rot13(str) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let resultArr = "";
  for (let i = 0; i < str.length; i++) {
    const isALetter = alphabet.includes(str[i]);
    if (isALetter === false) {
      resultArr += str[i];
    } else {
      const charIndex = alphabet.findIndex((c) => c === str[i]);
      resultArr += alphabet[charIndex + 13] || alphabet[charIndex - 13];
    }
  }
  return resultArr;
}

console.log(rot13("SERR PBQR PNZC"));
