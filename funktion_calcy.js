function calcy (prm1, prm2) {
    
    var i = 1;
    var j = prm1;
    
    while (i < prm2) {
        prm1 = prm1 + j;
        i++;
    }
    document.write(prm1);
}

calcy(3, 5);