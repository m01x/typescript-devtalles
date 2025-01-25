(() => {
  class Avenger {
    constructor(
        public name: string,
        public realName: string
    ){
        console.log('Constructor Avenger Llamado!');
    }

    protected getFullname() { //Accesible dentro de mi clase y las clases que extiendan de mi.
        return `${ this.name } ${ this.realName }`
    }
  }


  //Clase extendida
  class Xmen extends Avenger{


    constructor(
        name:string,//Sin public/private , porque no es una instancia nueva de xmen, sino que por el super, son propiedades del padre.
        realName:string,
        public isMutant: boolean
    ){
       super( name, realName); 
       console.log(`Constructor de Xmen llamado!`);
    }

    //metodos
    getFullNameDesdeXmen(){
        console.log( super.getFullname());
    }


    /**
     * * SETTERS Y GETTERS
     * se pueden llamar iguales, pero se invocan de forma diferente
     */

    get fullName(){
      return `${ this.name } = ${ this.realName }`;
    }

    set fullName( name: string ){
      if(name.length > 3  ){
        throw new Error('El nombre debe ser mayor de 3 letras');
      }
      this.name = name;
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);
  console.log(wolverine);
  wolverine.getFullNameDesdeXmen();//🆗


  //Llamando al setter y getter
  console.log( wolverine.fullName );
})()