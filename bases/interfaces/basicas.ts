(() => {
  
    interface Hero {
        name: string;
        age?: number;
        powers:string[];
        getName?:()=>string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Viajar en el tiempo', 'Super velocidad']
    }


    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad']
    }

})()