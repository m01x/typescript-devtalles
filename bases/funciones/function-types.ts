( () => {

    const addNumber = (a: number, b: number) => a + b;
    
    const greet = ( name: string ) =>  `Hola ${ name }`;

    const saveTheWorld = () => `El mundo está salvado`;

    /**
     * Para que la variable myFunction pueda ser tipada como tipo funcion, hay que identificarla;
     * Osea, explicitamente indicar que es tipo funcion, que variables espera y que va a retornar.🚨
     */
    
    //let myFunction; Esto es de tipo Any
    let myFunction: (y: number, z: number) => number
    myFunction = addNumber;
    console.log(myFunction(1,2));


} ) ()