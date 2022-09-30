/**
 * Domain Services
 * - devem ser stateless
 * - devem ser usados quando a necessidade de interagir com vários dominios ao mesmo tempo,
 * ou quando precisar aplicar alguma regra em todos objetos de um determinado dominio
 */

import Product from "../entity/product";

export default class ProductService{

    static increasePrice(products: Product[], percentage: number): void {
        products.forEach(product => {
            product.changePrice((product.price * percentage)/100 + product.price);
        });
    }

}