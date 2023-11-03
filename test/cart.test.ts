import Cart from '../src/model/cart';
import Storage from '../src/model/storage';

let storage = new Storage();
let cart = new Cart(storage);

describe("add Product to cart", () => {
    let p1 = { name: 'Iceberg 🥬', price: 2.17, quantity: 3 };
    let p2 = {name: 'top', quantity: 2, price:2}
    it("Should return CartItem for aviable product", () => expect(cart.addProduct(p1, 2)).toStrictEqual(expect.any(Object)));
    it("Should return false for unaviable product", () => expect(cart.addProduct(p2, 3)).toBe(null));
});