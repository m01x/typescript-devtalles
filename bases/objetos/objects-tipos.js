"use strict";
(() => {
    //Mismo objeto, ahora tipado.
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Viajar en el tiempo', 'Super velocidad']
    };
    flash = {
        name: 'Clark Kent',
        //age:30,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
})();
