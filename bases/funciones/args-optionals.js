"use strict";
(() => {
    const fullName = (firstName, lastName = 'montana') => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony');
    console.log(name);
})();
