"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }
    class Villain extends Mutante {
        conquistarMundo() {
            return 'Mundo Conquistado!';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Magnus');
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(magneto);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Black Panther', 'Ironman');
    console.log(antman);
    class newAvenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `En Civil wars ${this.name}, optó por el bando de ${this.team}!`;
        }
    }
    newAvenger.avgAge = 35;
    const starLord = new newAvenger('Black Panther', 'Ironman');
    console.log(starLord);
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger Llamado!');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log(`Constructor de Xmen llamado!`);
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullname());
        }
        get fullName() {
            return `${this.name} = ${this.realName}`;
        }
        set fullName(name) {
            if (name.length > 3) {
                throw new Error('El nombre debe ser mayor de 3 letras');
            }
            this.name = name;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();
    console.log(wolverine.fullName);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
    }
    const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el único!');
    const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el único!');
    const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único!');
    console.log(apocalipsis1);
})();
//# sourceMappingURL=main.js.map