(() => {
    const nombre: string = "Flavio";
    
    const getName = () => {
      console.log('viejo getName');
    }

    /**
     * Diferencias principales
        Ámbito:

        let: Tiene ámbito de bloque. Esto significa que solo es accesible dentro del bloque { } donde se declara.
        var: Tiene ámbito de función o global, dependiendo de dónde se declare. Ignora el ámbito de bloque.

        Re-declaración:

        let: No permite re-declarar la misma variable en el mismo ámbito.
        var: Permite re-declarar la misma variable en el mismo ámbito.
        
        Hoisting:

        Tanto let como var son "elevadas" (hoisted) al inicio de su ámbito, pero:
        var: Se inicializa como undefined.
        let: No se inicializa, y acceder a ella antes de la declaración provoca un error de referencia (ReferenceError).
     * 
     */
})()