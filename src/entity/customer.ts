/*
*
* Essa entidade é um dominio rico, contem regras de negocio
*
*/

class Customer {
    _id: string;
    _name: string;
    _address: string;
    _active: boolean = true;

    constructor(id: string, name: string, address: string) {
        this._id = id;
        this._name = name;
        this._address = address;
    }

    // motivo de negocio, nao apenas um set
    changeName(name: string) {
        this._name = name;
    }

    // expressa o negocio
    activate(){
        this._active = true;
    }

    // expressa o negocio
    deactivate() {
        this._active = false;
    }
 

}