(() => {


    type Avengers = {
        nombre: string;
        weapon: string;
    }

    const ironman: Avengers = {
        nombre: 'Ironman',
        weapon: 'Armorsuit'
    };

    const captainAmerica: Avengers = {
        nombre: 'Capitán America',
        weapon: 'Vibranium Shield'
    }; 
    
    const venom: Avengers = {
        nombre: 'Flash Thompson',
        weapon: 'mati'
    };

    const avengers = [ ironman, captainAmerica, venom ];

    //✨✨ Nueva sintaxis! , for of es de ES6 y ahorra el crear un bucle for comun.
    for (const avenger of avengers) {
        console.log(avenger);   
    }
})()