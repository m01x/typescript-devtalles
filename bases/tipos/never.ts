(() => {
  
    //Never no es Null ni Undefined, never no puede terminar de forma exitosa.

    const error = (message:string):never => {
      

        throw new Error(message);
        
    }

    error('Auxilio!');
})()