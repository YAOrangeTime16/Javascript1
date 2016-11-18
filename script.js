/*
function sayMyName(){
    var name = 'Yoko';
    function logMyName () {
        console.log('hello my name is ' + name);
    }
    return logMyName();
}

var greeting = sayMyName();
greeting();
*/

/*
//Closure
//利点：グローバル変数を減らし、さらに関数でReturnされた値を記憶して、次のLogに活かせる。またプライベート変数としての役割もできる


function func () {
    
    var inc = 0;
    
    function counter () {
        inc += 1;
        console.log(inc);
    }
    return counter;  // return counter();ではないことに注意！関数を返すのであって、関数の値を返すのではない！
}
var f = func();

f();　//1
f(); //2
f(); //3
*/


