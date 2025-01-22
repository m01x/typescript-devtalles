"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.8777467478
    };
    const { nick, vision } = avengers;
    const printAvenger = (_a) => {
        var { ironman } = _a, restoAvengers = __rest(_a, ["ironman"]);
        console.log(ironman, restoAvengers.poder);
    };
    printAvenger(avengers);
})();
(() => {
    const nombre = "Flavio";
    const getName = () => {
        console.log('viejo getName');
    };
})();
//# sourceMappingURL=main.js.map