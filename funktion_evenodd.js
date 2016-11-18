/*
function numberEvenOdd (tal, oddOrEven) {
    
        while (typeof tal == 'number') {
            if (str == 'even') {
                for (var i = 1; i < tal; i++){
                    if (i % 2 == 0) {
                        document.write(i + ' ');
                    }
                }
            } 
             else if (str == 'odd'){
                for (var j = 1; j < tal; j++){
                    if (j % 2 !== 0) {

                        document.write(j + ' ');
                    }
                }
            }
            break;
        }       
}        




numberEvenOdd(50, 'odd');
*/
function evenOdd(a,b){
	var numbers = '';

	while(a >= 0){


		if( a % 2 == b){

			numbers = numbers + a + " ";
		}
		a--;
	}

	return numbers;
}

console.log(evenOdd(10,0));