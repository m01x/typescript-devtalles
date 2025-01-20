(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[ string, string ] = [batman,superman];
    const villano:[ string,number,boolean ] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados : string[]= ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Poder {
      poderFlash=5,
      poderSuperman=100,
      poderBatman=1,
      poderAcuaman=0
    }
    const fuerzaFlash:Poder = Poder.poderFlash;
    const fuerzaSuperman:Poder = Poder.poderSuperman;
    const fuerzaBatman:Poder = Poder.poderBatman;
    const fuerzaAcuaman:Poder = Poder.poderAcuaman;
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  