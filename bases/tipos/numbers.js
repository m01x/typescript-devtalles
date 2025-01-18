"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villains = 20;
    if (avengers < villains) {
        console.log('We are doomed');
    }
    else {
        console.log('We are safe');
    }
    //Otro caso
    avengers = Number('55A'); //Esto igualmente devuelve un "Not a Number", que sigue siendo un número
    console.log(avengers); // Por esto, no da error este console log
})();
