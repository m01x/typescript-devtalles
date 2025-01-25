(() => {
  
    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number ): string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human { //Ahora forzamos a que la clase IMPLEMENTE las interfaces descritas
        public age: number;
        public name: string;
        public realName: string;

        mutantPower( id: number ){
            return this.name + ' ' + this.realName;
        }
    }
})()