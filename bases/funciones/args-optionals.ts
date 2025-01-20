(() => {

    const fullName = ( firstName: string, lastName:string ='montana' ):string => {
      return `${ firstName } ${ lastName }`;
    }
  
    const name:string = fullName('Tony');
    console.log(name);

  })()