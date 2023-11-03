import Product from "../interface/product"
import Storage from "./storage";
export default class Cart {
    db:Product[] = [];
    storage:Storage;
    constructor(storage: Storage) {
        this.storage = storage;
    }
    addProduct = (product: Product, qty: number):Product|null => {
        let x: number|null = this.storage.getProductQuantity(product.name);
        if (x && x >= qty) {
            product.quantity = qty;
            this.db.push(product)
            return product;
        } 
        return null
    }
}