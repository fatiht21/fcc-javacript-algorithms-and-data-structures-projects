/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

convertToRoman(2) should return the string II.
convertToRoman(3) should return the string III.
convertToRoman(4) should return the string IV.
convertToRoman(5) should return the string V.
convertToRoman(9) should return the string IX.
convertToRoman(12) should return the string XII.
convertToRoman(16) should return the string XVI.
convertToRoman(29) should return the string XXIX. 
convertToRoman(44) should return the string XLIV.
convertToRoman(45) should return the string XLV.
convertToRoman(68) should return the string LXVIII
convertToRoman(83) should return the string LXXXIII
convertToRoman(97) should return the string XCVII
convertToRoman(99) should return the string XCIX
convertToRoman(400) should return the string CD
convertToRoman(500) should return the string D
convertToRoman(501) should return the string DI
convertToRoman(649) should return the string DCXLIX
convertToRoman(798) should return the string DCCXCVIII
convertToRoman(891) should return the string DCCCXCI
convertToRoman(1000) should return the string M
convertToRoman(1004) should return the string MIV
convertToRoman(1006) should return the string MVI
convertToRoman(1023) should return the string MXXIII
convertToRoman(2014) should return the string MMXIV
convertToRoman(3999) should return the string MMMCMXCIX
*/
//s1
function convertToRoman(num) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";

  for (let x in map) {
    const counter = Math.floor(num / map[x]);
    if (counter !== 0) {
      result += x.repeat(counter);
    }
    num %= map[x];
    if (num === 0) return result;
  }
  return result;
}

console.log(convertToRoman(5));

//s2
function convertToRoman(num) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";

  for (let x in map) {
   result += x.repeat(Math.floor(num / map[x]));
   num %= map[x];
  }
  return result;
}

console.log(convertToRoman(6));

//s3 
function convertToRoman(num) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";

  for (let x in map) {
    let value = map[x];
    while(value <= num) {
      num -= value;
      result += x;
    }
  }
  return result;
}

console.log(convertToRoman(36));