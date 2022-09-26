import OrderItem from './order_item';

export default class Order {
    private _id: string;
    // se esta em diferentes agregado a relacao é por id
    private _customerId: string;
    // se esta em mesmo agregado a relacao é pelo objeto
    private _items: OrderItem[] = [];
    private _total: number;

    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item._price, 0);
    }

    validate(): boolean {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._customerId.length === 0) {
            throw new Error("CustomerId is required");
        }
        if (this._items.length === 0) {
            throw new Error("Items are required");
        }

        return true;
    }

}