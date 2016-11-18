//Filtrera array efter längd på innehållet
/*
var okArray = [ "fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];
for (var i = 0; i < okArray.length; i++) {
    if (okArray[i].length <= 5) {
        console.log(okArray[i]);
    }
}
*/
//Filtrera array beroende på innehåll
/*
var okArray = [ "fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];
for (var i = 0; i < okArray.length; i++) {
    if (okArray[i].toLowerCase() == 'fine') {
        console.log(okArray[i]);
        
    }
}
*/

//Filtrera array baserad på sträng eller nummer
var worstArrayYet = ["string", true, 42, "another string", 54, null, 12];
for (var i = 0; i < worstArrayYet.length; i++) {
    if (typeof worstArrayYet[i] == 'number') {
        console.log(worstArrayYet[i]);
    }
}