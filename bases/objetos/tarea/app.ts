
// Objetos
(() => {
  type Vehiculos = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros?:number;
    disparar?:()=> void;
  }
  
  const batimovil: Vehiculos = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };
  
  const bumblebee: Vehiculos = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };
  
  type Villano = 
    {
      nombre: string,
      edad: (number|undefined),
      mutante: boolean
    }
  // Villanos debe de ser un arreglo de objetos personalizados
  const villanos:Villano[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];
  
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  type Charles = {
    poder: string;
    estatura: number;
  }
  
  type Apocalipsos = {
    lider: boolean;
    miembros: string[]
  }
  
  
  const charles:Charles = {
    poder:"psiquico",
    estatura: 1.78
  };
  
  const apocalipsis:Apocalipsos = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }
  
  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: (Charles | Apocalipsos);
  
  mystique = charles;
  mystique = apocalipsis;
  
})()
