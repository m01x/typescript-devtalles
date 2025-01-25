(() => {
/**
 * Las clases con constructor privado, me sirven para hacer singletons.
 * Cuando static instance de tipo Apocalipsis, sea null, creara la instancia.
 * Si en la app se vuelve a requerir una instancia nueva, no la va a hacer porque
 * ya existe.
 * 
 *! ESTE ES UN EJEMPLO DEL PATRON SINGLETON, NO ES UNA PRACTICA ACTUALIZADA
 */

    class Apocalipsis {

        static instance:Apocalipsis;

        private constructor(public name: string) { }

        static callApocalipsis(): Apocalipsis {
            if( !Apocalipsis.instance ){ //si no existe una instancia de apocalipsis
                Apocalipsis.instance = new Apocalipsis(' Soy apocalipsis, el unico!');
            }

            return Apocalipsis.instance;
        }

        changeName( newName: string):void{
            this.name = newName;
        }
    }

    // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el único!');
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el único!');
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único!');

    
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Xavier');

    console.log(apocalipsis1, apocalipsis2, apocalipsis3); //Todas devuelven LA MISMA instancia.
})()