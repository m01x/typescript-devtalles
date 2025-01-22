(() => {

    class Avenger {
        private name: string;
        private team: string;
        public realName?: string;
        static avgAge: number = 35;

        constructor(name: string, team: string, realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    const antman: Avenger = new Avenger('Black Panther', 'Ironman');
    console.log(antman);


    /**
     * ! Nueva forma ( o resumida)
     * En este caso, vamos a omitir el paso de asignacion de lo que llega al constructor
     * hacia los atributos de la clase...es algo mas agil nada mas.
     */

    class newAvenger {
        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;

        constructor(private name: string, private team: string, public realName?: string) {}

        //Metodos⚙️
        public bio(){
            return `En Civil wars ${ this.name }, optó por el bando de ${ this.team }!`
        }
    }

    const starLord: newAvenger = new newAvenger('Black Panther', 'Ironman');
    console.log(starLord);



})()