(() => {
  
    const fullName = ( firstName: string, ...otrosArgumentos: string[] ): string =>{
        return `${ firstName } ${ otrosArgumentos.join(' ') }`;
    }

    const superman = fullName( 'Clark', 'Kent', 'Ortiz');
    console.log({superman});
})()