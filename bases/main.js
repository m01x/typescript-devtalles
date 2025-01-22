"use strict";
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
//# sourceMappingURL=main.js.map