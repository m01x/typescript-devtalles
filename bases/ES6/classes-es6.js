(() => {

    class Avenger {
        name;
        power;

        constructor( name = 'no name', power = 0 ) {
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger {
        flying;

        constructor(){
            super(name, power); // Aqui estamos invocando al constructor y usando sus atributos requeridos, en este hijo.
            this.flying = true;
        }
    }

    const hulk = new Avenger('Hulk, 9001');
    const falcon = new FlyingAvenger(); //ojo, es un objeto que extiende de una clase, que SI requiere el nombre y el poder, pero no lo exige
    //eso se lograra con la palabra reservada super();

  
})()