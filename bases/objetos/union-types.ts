(() => {
  
    type Hero = {
        name: string;
        age?: number;
        powers:string[];
        getName?:()=>string;
    }

    let myCustomVariable: (string | number | Hero) = "Fernando";

    //O tambien puedo hacer

    myCustomVariable = 20 //typeof number

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers:['dinero']
    }


})()