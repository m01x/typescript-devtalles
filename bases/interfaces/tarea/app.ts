// Crear interfaces
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar():void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface Ciudad {
  (ciudadanos:string[]):number;
}

const ciudadGotica:Ciudad = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Ciudadano {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: boolean;
  imprimirBio():void;
}
class Persona implements Ciudadano{

  constructor(
    public nombre:string,
    public edad:number,
    public sexo: string,
    public estadoCivil: boolean
  ){}

  imprimirBio(): void {
    console.log('blablabla')
  }
}