import Address from './address';
/*
*
* Essa entidade é um dominio rico, contem regras de negocio
* 1- É necessario garantir a integridade dos dados, preciso ter todos os dados obrigatorios ao inicializar
* o objeto precisa ser confiavel 100% das vezes
* 2- Uma entidade por padrao sempre tera que se autovalidar 
* 3- Esta entidade é focada em negocio, no ORM a entidade e focada em persistencia, sao coisas separadas
* e com responsabilidades diferentes, por isso devem ser classes separadas, entity e model por exemplo
*
*/

export default class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    get name(): string {
        return this._name;
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
    }

    // motivo de negocio, nao apenas um set
    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    isActive(): boolean {
        return this._active;
    }

    // expressa o negocio
    activate(){
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
        }

        this._active = true;
    }

    // expressa o negocio
    deactivate() {
        this._active = false;
    }

    set Address(address: Address) {
        this._address = address;
    }
}