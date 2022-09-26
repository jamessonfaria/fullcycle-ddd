
/**
 * Run script => npx ts-node .\src\main.ts  
 */
import Address from './entity/address';
import Customer from "./entity/customer";
import Order from './entity/order';
import OrderItem from './entity/order_item';

// customer agregado
let customer = new Customer("123", "James Faria");
const address = new Address("Rua dois", 2, "132131233", "Sao Paulo");
customer.Address = address;
customer.activate();

// order agregado
const item1 = new OrderItem("1", "Item 1", 10.0);
const item2 = new OrderItem("2", "Item 2", 15.0);
const order = new Order("1", "123", [item1, item2]);

console.log(order);

