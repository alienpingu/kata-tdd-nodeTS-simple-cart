import Product from "../interface/product"
import Storage from "./storage";
export default class Cart {
    products:Product[] = [];
    storage:Storage = new Storage();

    constructor() {}
   
    add = (product: Product, quantity: number):Product|null => {
        let qty: number|null = this.storage.quantity(product.name);
        if (qty && qty >= quantity) {
            product.quantity = quantity;
            this.products.push(product)
            return product;
        } 
        return null
    }
   
    price = ():number => {
        let totalPrice = 0;
        if (this.products.length > 0) {
            this.products.forEach(p => totalPrice+=p.price*p.quantity);
        }
        return totalPrice;

    }
    print = ():Product[]|string => (this.products.length > 0) ? this.products : 'Empty';
   
    reset = () => {this.products = []; return this.products;};
   
    discount = (code:string):number => {
        const discountCode = this.storage.discountCode.find(c => c.data === code);
        const totalPrice = this.price();
        return (discountCode) ? totalPrice*discountCode.discount/100 : totalPrice
    }
}