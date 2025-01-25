(() => {
  
    //Vamos a restringir o asegurarnos que una funcion luzca de esta manera
    interface addTwoNumbers {
        (a: number, b:number):number;
    }

    let addNumbersFunction: addTwoNumbers;

    addNumbersFunction = (a: number, b: number) => {
      return 10;
    }
})()