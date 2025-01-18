(() => {
    const batman = 'Bruce Wayne';
    const linternaVerde = "Hal Jordan";
    const volcanNegro = `Kate Kane`;

    console.log(`Im' ${batman}`);
    console.log(linternaVerde.toUpperCase());

    console.log(volcanNegro[10]?.toUpperCase() || 'No está presente');
})()