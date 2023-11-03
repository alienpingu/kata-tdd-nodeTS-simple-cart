import Cart from '../src/model/cart';
import Storage from '../src/model/storage';

describe("Cart 'add' method", () => {
    let cart = new Cart();
    let availableProduct = { name: 'Iceberg 🥬', price: 2.17, quantity: 3 };
    let unavailableProduct = { name: 'top', quantity: 2, price: 2 };

    it("Should return a CartItem for an available product", () => {
        expect(cart.add(availableProduct, 2)).toStrictEqual(expect.any(Object));
    });

    it("Should return a 'null' for an available quantity", () => {
        expect(cart.add(availableProduct, 11)).toBe(null);
    });

    it("Should return 'null' for an unavailable product", () => {
        expect(cart.add(unavailableProduct, 3)).toBe(null);
    });
});

describe("Cart 'price' method", () => {
    let cart = new Cart();
    let emptyCart = new Cart();
    cart.add({ name: 'Iceberg 🥬', price: 2.17, quantity: 3 }, 2);

    it("Should return the sum of all costs in the cart", () => {
        expect(cart.price()).toBe(2.17 * 2);
    });

    it("Should return 0 for an empty cart", () => {
        expect(emptyCart.price()).toBe(0);
    });
});

describe("Cart 'print' method", () => {
    let cart = new Cart();
    let emptyCart = new Cart();
    cart.add({ name: 'Iceberg 🥬', price: 2.17, quantity: 3 }, 2);

    it("Should return a printed cart as an array", () => {
        expect(cart.print()).toStrictEqual(expect.any(Array));
    });

    it("Should return 'Empty' for an empty cart", () => {
        expect(emptyCart.print()).toBe('Empty');
    });
});

describe("Cart 'discount' method", () => {
    let cart = new Cart();
    let emptyCart = new Cart();
    let discountCode = cart.storage.discountCode[0];
    cart.add({ name: 'Iceberg 🥬', price: 2.17, quantity: 3 }, 2);

    it("Should return a discounted price of 0", () => {
        expect(emptyCart.discount(discountCode.data)).toBe(0);
    });

    it("Should return the discount price", () => {
        expect(cart.discount(discountCode.data)).toBe(cart.price() * discountCode.discount / 100);
    });
});

describe("Cart 'reset' method", () => {
    let cart = new Cart();
    cart.add({ name: 'Iceberg 🥬', price: 2.17, quantity: 3 }, 2);

    it("Should return an empty array after a reset", () => {
        expect(cart.reset()).toStrictEqual([]);
    });

    it("Should return 'Empty' after a reset and print", () => {
        expect(cart.print()).toBe('Empty');
    });

    it("Should return a price of zero because the cart is empty", () => {
        expect(cart.price()).toBe(0);
    });
});