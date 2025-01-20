"use strict";
(() => {
    const fullName = (firstName, ...otrosArgumentos) => {
        return `${firstName} ${otrosArgumentos.join(' ')}`;
    };
    const superman = fullName('Clark', 'Kent', 'Ortiz');
    console.log({ superman });
})();
