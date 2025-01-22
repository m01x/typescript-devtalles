(() => {

    type Vengadores = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

  const avengers: Vengadores = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.8777467478
  }

  /**
   * *Desestructuracion : Poder acceder a las propiedades de los arreglos y objetos directamente, de una forma mucho mas limpia.
   */

  const {nick, vision} = avengers;
  //console.log(nick, vision);

  /**
   * *Desestructuracion con rest operator, una utilidad más 💡
   */

  const printAvenger = ({ ironman, ...restoAvengers}: Vengadores) => { //Desestructuramos las propiedades ironman y todo lo demás, desde avengers (de tipado Vengadores)
    console.log(ironman, restoAvengers.poder);
  }

  printAvenger(  avengers ); //Aqui mandamos lo que será destructurado

  /**
   * *Desestructuracion de arreglo
   * 
   * const array:string[] = [ 'a', 'b', 'c'];
   * 
   * const [ variableA ,, variableC] = array; // Aqui se coloca el nombre, donde quiero guardar el valor de cierta posicion en mi array
   * Estas comillas ,, son porque no queremos saber la posicion 1 , que corresponde a 'b' , pero hay que respetar la posicion.
   */
})()