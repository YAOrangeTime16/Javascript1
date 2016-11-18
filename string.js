//string checker
/*function strCount (str) {
    var strLength = str.length;
    document.write('Strängen du matade in är ' + strLength + ' tecken lång');
}

strCount('How many words?');
*/


//string converter  .toUpperCaseの後、最後のカッコを忘れないで！！
/*function convertString (prm1, prm2) {
    if (prm2 == 'small'){
        document.write(prm1.toLowerCase());
    }
    else if (prm2 == 'big'){
        document.write(prm1.toUpperCase());
    }
}

convertString('Hello, World! TGIF!', 'big');
*/

//String extractor
/* function stringSubstract (ord) {
    ord = ord.toString();
    ordLength = ord.length;
    document.write(ord.substr(ordLength-1));
}

stringSubstract('Mölk');
*/

//スペースもカウントされる
/*var ord1 = '12345  6';
var ordCount = ord1.length;
document.write(ordCount);
*/

//concat
/*
var text = "Hello".concat('-', 'World');
document.write(text.concat('11','77'));
*/

//Replace
var text1 = 'I want to eat an apple today.'

document.write(text1.replace('apple', 'orange'));
