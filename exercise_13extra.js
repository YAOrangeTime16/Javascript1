//palindrom - Övning 1
/*
var nameArray = [];
var hantenArray = [];

var palindrom = function (name){
    
    for(var i = 0; i < name.length; i++){
        nameArray.push(name[i]);
    }
    
    function hanten (){
        for (var j = 0; j < nameArray.length; j++){
                
            hantenArray[j] = nameArray[j];
                
        }
            
        hantenArray.reverse();
        
        
        if ( nameArray.toString() == hantenArray.toString()) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
    
    return hanten();
    
};

palindrom('anders');
*/

//Övning 2
//Skriv en funktion som tar in en sträng och konverterar den första bokstaven i varje nytt ord till stor bokstav.
var everyWordUpper = function (str){
    var strArray = str.split("");
    
    for(var i = 0; i < strArray.length; i++){     
       if (strArray[i] === " "){
            strArray[i+1] = strArray[i+1].toUpperCase();
        }
        
    }
    strArray[0] = strArray[0].toUpperCase();
    
    var changedText = strArray.join("");
    console.log(changedText);

};

everyWordUpper("this is what");

//Övning 6
//Skriv en funktion som tar in en sträng och returnerar det längst ordet i strängen.
var longestWord = function (str){
    var lArray = str.split(" ");
    var l = lArray.length;
    for (var i = 0; i < l-1; i++){
        for (var j = 1; j < l; j++) {
            if (lArray[i].length < lArray[j].length){
                var swap = lArray[i];
                lArray[i] = lArray[j];
                lArray[j] = swap;
            }
        }
    }
    console.log(lArray[0]);
}
longestWord("front end developer");

//Övning 7
//Skriv en funktion som tar in en sträng och returnerar antalet vokaler som finns i strängen.
var antalVok = function (st){
    var vokCount = 0;
    for (var k = 0; k < st.length; k++) {
        if (st[k] == "a" || st[k] == "e" || st[k] == "i" || st[k] == "o" || st[k] == "u"){
            vokCount++;
        }
    }
    console.log(vokCount);
};

antalVok("Hi, my name is Yoko. How many vowels do my lines have?");

//Övning 8
//Quiz med objekt och prototyper!
