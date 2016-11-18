var a = window.prompt("Hur gammal är du?");
var age = Number(a);

if (age < 12){
    document.write("Du är för ung för att tävla!");
}
else if (age >= 12){
    var w = window.prompt("Hur mychet väger du? 'kg'");
    var weight = Number(w);
        if(weight <= 30){
            document.write("A-ponny");
        }
        else if (weight > 30 && weight <= 50){
            document.write("B-ponny");
        }
        else if (weight > 50 && weight <= 65){
            document.write("C-ponny");
        }
        else {
            document.write("Det finns inga ponnys för denna viktklass");
        }
}