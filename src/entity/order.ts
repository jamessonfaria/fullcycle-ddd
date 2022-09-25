import OrderItem from './order_item';

export default class Order {
    _id: string;
    // se esta em diferentes agregado a relacao é por id
    _customerId: string;
    // se esta em mesmo agregado a relacao é pelo objeto
    _items: OrderItem[] = [];

    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
    }

}