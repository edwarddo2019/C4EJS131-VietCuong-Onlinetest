function printPrime() {
    "use strict";

    var i, j, c, a, b;

    //Điền a và b
    a = parseInt(document.getElementById('a').value);                
    b = parseInt(document.getElementById('b').value);

    
    document.getElementById("result").innerHTML = '';

    //Lặp cho tới khi i bằng b
    for (i = a; i <= b; i++) {                    
        c = 0;
        for (j = 1; j <= i; j++) {
           
            if (i % j == 0) {
                
                c++;
            }
        }

        
        if (c == 2) {
            document.getElementById("result").insertAdjacentHTML('beforeend', i + '<br>');
        }
    }
}