/*
*
* Essa entidade é um dominio rico, contem regras de negocio
* É necessario garantir a integridade dos dados, preciso ter todos os dados obrigatorios ao inicializar
* o objeto precisa ser confiavel 100% das vezes
*
*/

class Customer {
    _id: string;
    _name: string = "";
    _address: string = "";
    _active: boolean = true;

    constructor(id: string) {
        this._id = id;
    }

    set name(name: string) {
        this._name  = name;
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

// nesse o caso o cliente foi criado sem nome
let customer = new Customer("123");