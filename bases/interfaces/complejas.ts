(() => {
  
    interface Client {
        name: string;
        age: number;
        address: Address;
        getFullAddress(id: string):string; //Puedes definir clases en la interface, pero prefiere las Clases!
    }

    //interfaz secundaria, van abajo de la principal.
    interface Address {
        id: number;
        zip: string;
        city: string;
    }
    const client: Client = {
        name: 'Flavio',
        age: 25,
        address: {
            id: 125,
            zip:'1100000',
            city:'Iquique'
        },
        getFullAddress(id: string){
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 30,
            city: 'Santiago',
            zip:'5200000'
        },
        getFullAddress(id: string){
            return this.address.city;
        }
    }
})()