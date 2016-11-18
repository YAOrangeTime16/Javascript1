var a = window.prompt("Finns det vatten?, yes or no");

if(a === "yes"){
    var b = window.prompt("Hur många grader är vattnet?");
    var waterC = Number(b);
    
        if (b >= 30){
            document.write("Varsågod och bada");
        }
        else {
            document.write("Det går inte bada");
        }
}
else {
    document.write("Det går inte bada");
}