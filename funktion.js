//Multiply
function multi(a, b){
    console.log(a*b);
}

multi(8,4);

//Calculate
function calculate (param1, param2, param3) {
    console.log(param1 * param2 / param3);
}

calculate(3, 4, 3);

//Maxing, relaxing, acting all cool
function hightestNumber (tal1, tal2) {
    if (tal1 > tal2) {
        return tal1;
        //console.log(tal1);    
    }
    return tal2;
    
    /*else if (tal1 < tal2) {
        console.log(tal2);
    }
}*/
hightestNumber(233, 564);

//Mazing, not relaxing
function hightestNumber (tal1, tal2) {
    if (tal1 > tal2) {
        console.log(tal1);    
    }
    else if (tal1 < tal2) {
        console.log(tal2);
    }
    else if (tal1 === tal2) {
        console.log('samma värde');
    }
    else if (isNaN(tal1) || isNaN(tal2))//if (isNaN(tal1) == true || isNaN(tal2) == true) {
        //console.log('inte ett number');
    }
}
hightestNumber(233, 564);

//Refaktorera
function multiply(a, b){
    return a*b;
}

function calculate (param1, param2, param3) {
    return param1 * param2 / param3;
}


function hightestNumber (tal1, tal2) {
    if (tal1 > tal2) {
        return tal1;    
    }
    else if (tal1 < tal2) {
        return tal2;
    }
    else if (tal1 === tal2) {
        return 'samma värde';
    }
    else if (isNaN(tal1) == true || isNaN(tal2) == true) {
        return false;
    }
}

var multiplyAnswer = multiply(24.2, 5);
var calculateAsnswer = calculate(3, 54, 16);
var highestNumberAnswer = hightestNumber(24.1, 24.1);

console.log(multiplyAnswer);
console.log(calculateAsnswer);
console.log(highestNumberAnswer);

//mjau machine med return

function mjau (numberOfMjau) {
    
    if(numberOfMjau >= 1){
        for (var i = 1; i <= numberOfMjau; i++){
            document.write('mjau');
        }   
    }
}
    
//deklarera innan:
theHorror();
// > Uncaught TypeError: theHorror is not a function(…)
    
    var theHorror = function () {
        console.log('hi');
};
    
theHorro('hello');
    
//Even and Odd
var num = 0;
while (num < 10) {
    
    for (var i = 0; i < 100; i++){
        num += 1;

        if (num % 2 == 0) {
            console.log(num);
        }
    }
}

    
    

    
//med funktion


    
function loopEvenOdd (a, b) {
    //Function--1 'even'
    function evenNum () {
        for(var i = 0; i < a; i++){
            if (i%2 == 0){
                return i;
            }
        }

    }
    //Function--2 'odd'
    function oddNum () {
        for(var j = 0; j < a; j++){
            if (j%2 != 0){
                    return j;
            }   
        }
    }
    
    while (a >= 1) {
        
         if ( b == 'even') {
            evenNum();
        }
        else if ( b == 'odd'){
            oddNum();
        }
    }
   
}
    
loopEvenOdd(30, 'even');