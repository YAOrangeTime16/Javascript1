var a = window.prompt("Hur många grader är vattnet?");
if(a !== NaN){
    var grad = Number(a);
    
    if(grad == 100){
        document.write("Vattnet kokar!");
    }
    else if (grad == 50){
        document.write("Det är halvägs nu!");
    }
    else {
        document.write("Vattnet kokar inte.");
    }
}