var total=0;
var namn = window.prompt("Skriv ditt namn");
    
var q1 = window.prompt("Vilket är rätt? a: ett äpple, b: en äpple");
    if(q1 == "a"){
        total += 1;
    }

var q2 = window.prompt("Vilket är rätt? a: Sverige höt till Asien b: Japan hör till Asien");
    if(q2 == "b"){
        total += 1;
    }

var q3 = window.prompt("Vilket är rätt? 'javascript är': a: INTE ett programmerings språk, b : är ett programmerings språk");
    if(q3 == "b"){
        total += 1;
    }

var q4 = window.prompt("Vilket är rätt? a: tomat är röd, b: tomat är rött");
    if(q4 == "a"){
        total += 1;
}
var q5 = window.prompt("Vilket ärrätt? a: 1+2=2, b: 2+3=5");
    if(q5 == "b"){
        total += 1;
    }

if(total == 1 || total == 2){
    document.write(namn + " won bronze!");
}
else if (total == 3 || total == 4){
    document.write(namn + " won silver!");
}
else if(total == 5){
    document.write(namn + " won Gold!")
}
else{
    document.write("This is a sad day for sports");
}