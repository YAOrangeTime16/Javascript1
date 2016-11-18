/*function hej () {console.log('hej hej');}  
function setIn (func, heltal) {
    
        return setInterval(func, heltal);
    
} 
console.log(setIn(hej, 3000));
*/

/*
function rptHej (enFunktion, heltal) {
    setInterval(enFunktion, heltal);
}
function hej (){
    console.log('hej hej');
}
rptHej(hej, 3000);
*/

/* 
var multiply = function (x,y, callback) {
    var answer = x * y;
    callback(anwer);
};
var divideAnswer = function (answer) {
    console.log(answer / 2);
};
multiply(5, 6, divideAnswer);
*/

/*
var multiply = function (x,y, callback) {
    var answer = x * y;
    callback(answer);
    if (callback){
        console.log('there is a callback');
    }
};

multiply(6, 7, function (answer) {console.log(answer / 2);});
*/

/* Callback

var line1 = function (str1, str2, callback) {
    var sayLine = str1 + str2;
    callback (sayLine);
}

var line2 = function (sayLine) {
    console.log(sayLine);
}

line1('watashi wa ', 'inuga suki', line2);

*/

//Sista parametern är en funktion

/*
var impressiveMath = function(x, y, callback){
  var number = x + y;
  //Kallar på vår funktion som vi skickade med som parameter.
  //Argumentet som vi senare skickar med är vår consoleLogger-funktion
  callback(number);
}

//Funktionen som ska köras som callback, tar ett argument
var consoleLogger = function(number){
  console.log("Gotta callback this number: " + number);
}
//Kalla på båda funktionerna, observera argumenten
impressiveMath(5,5, consoleLogger);

*/



var func1 = function (callback) {
    console.log("1");
    callback();
};

var callb2 = function () {
    console.log("2");
};

func1(callb2);



