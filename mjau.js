var userAns = window.prompt("Hur många mjauar vill du ha?");
var mjau = Number(userAns);

if(mjau >= 1){
    for (var m = 1; m <= mjau; mjau--){
        document.write("mjau ");
    }
}