(() => {
  /**
   * No se puede crear una instancia de una clase abstracta!
   * Para que me sirve? son como cascarones, para crear otras clases que extiendan de ella... y "forzar" el uso de sus metodos y atributos en sus extends.
   */
    abstract class Mutante {

        constructor(
            public name:string,
            public realName: string
        ){}
    }

    //Utilicemos las clase abstracta Mutante

    class Xmen extends Mutante{

        salvarMundo(){
            return 'Mundo a salvo!'
        }
    }
    
    class Villain extends Mutante{

        conquistarMundo(){
            return 'Mundo Conquistado!';
        }
    }


    const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
    const magneto: Villain = new Villain('Magneto', 'Magnus');

    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());

    /**
     * !            OTRO USO DE LA CLASE ABSTRACTA:
     */

    const printName = ( character: Mutante) => {
        console.log( character.realName );
    }

    printName( magneto );
})()