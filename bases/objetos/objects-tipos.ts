(() => {
  
    //Mismo objeto, ahora tipado.

    let flash: { name:string, age?:number, powers:string[], getName?:() => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Viajar en el tiempo', 'Super velocidad']
    }

    flash = {
        name: 'Clark Kent',
        //age:30,
        powers: ['Super fuerza'],
        getName(){
            return this.name;
        }
    }

})()