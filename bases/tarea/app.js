"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Poder;
    (function (Poder) {
        Poder[Poder["poderFlash"] = 5] = "poderFlash";
        Poder[Poder["poderSuperman"] = 100] = "poderSuperman";
        Poder[Poder["poderBatman"] = 1] = "poderBatman";
        Poder[Poder["poderAcuaman"] = 0] = "poderAcuaman";
    })(Poder || (Poder = {}));
    const fuerzaFlash = Poder.poderFlash;
    const fuerzaSuperman = Poder.poderSuperman;
    const fuerzaBatman = Poder.poderBatman;
    const fuerzaAcuaman = Poder.poderAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
