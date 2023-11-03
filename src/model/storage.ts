import Product from "../interface/product"

export default class Storage {
    db:Product[] = [
        { name: 'Iceberg 🥬', price: 2.17, quantity: 3 },
        { name: 'Tomatoe 🍅', price: 0.73, quantity: 15 },
        { name: 'Chicken 🍗', price: 1.83, quantity: 10 },
        { name: 'Bread 🍞', price: 0.88, quantity: 20 },
        { name: 'Corn 🌽', price: 1.50, quantity: 5 }
    ];;

    getProduct = (name: string):Product|null => {
        let p = this.db.find(item => item.name === name)
        return (p) ? p : null
    }
    getProductQuantity = (name: string):number|null => {
        let p = this.db.find(item => item.name === name)
        return (p) ? p.quantity : null
    }
}