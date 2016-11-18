var numberOfSheep = 4;
var monthNumber = 1;
var monthToPrint = 12;

for (; monthNumber <= monthToPrint; monthNumber++){
    numberOfSheep *= 4;
    document.write("There will be " + numberOfSheep + "sheep after " + monthNumber + " months! <br>");
}