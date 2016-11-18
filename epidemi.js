var numberOfSheep = 4;
var monthNumber = 1;
var monthToPrint = 12;

for (; monthNumber <= monthToPrint; monthNumber++){

        if(monthNumber%4 === 0){
            var rmNum = numberOfSheep*(75/100);
            document.write("Removing" + rmNum + " sheep from the population.<br>");
            numberOfSheep -= rmNum;
        }
        else if(numberOfSheep > 10000){
            document.write("Removing" + numberOfSheep/2 + " sheep from the population. <br>");
            numberOfSheep -= numberOfSheep/2;
        }
    
    numberOfSheep *= 4;
    document.write("There will be " + numberOfSheep + "sheep after " + monthNumber + " months! <br>");
    
}