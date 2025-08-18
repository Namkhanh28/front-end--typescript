class Customer {
    constructor(id, name, email, shippingAddress) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Shipping Address: ${this.shippingAddress}`;
    }
}
class Product {
    constructor(id, name, price, stock) {
        this.stock = 0;
        this.id = id;
        this.name = name;
        this.price = price;
    }
    addStock(quantity) {
        this.stock += quantity;
    }
    removeStock(quantity) {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        }
        else {
            console.log("Not enough stock to remove");
        }
    }
    getStock() {
        return this.stock;
    }
}
class ElectronicsProduct extends Product {
    constructor(id, name, price, warrantyPeriod, stock) {
        super(id, name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getDetails() {
        return `Electronics - ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Warranty Period: ${this.warrantyPeriod} months, Stock: ${this.stock}`;
    }
}
class ClothingProduct extends Product {
    constructor(id, name, price, size, stock) {
        super(id, name, price, stock);
        this.size = size;
    }
    getDetails() {
        return `Clothing - ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Size: ${this.size}, Stock: ${this.stock}`;
    }
}
class Order {
    constructor(orderId, customer) {
        this.orderId = orderId;
        this.customer = customer;
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getOrderDetails() {
        let productDetails = this.products.map(product => product.getDetails()).join('\n');
        return `Order ID: ${this.orderId}, Customer: ${this.customer.getDetails()}, Products:\n${productDetails}`;
    }
}
class ShoppingCart {
    constructor(customer) {
        this.customer = customer;
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId);
    }
    getCartDetails() {
        let productDetails = this.products.map(product => product.getDetails()).join('\n');
        return `Customer: ${this.customer.getDetails()}, Products in Cart:\n${productDetails}`;
    }
}
class Store {
    constructor() {
        this.customers = [];
        this.products = [];
        this.orders = [];
        this.shoppingCarts = [];
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    addProduct(product) {
        this.products.push(product);
    }
    createOrder(order) {
        this.orders.push(order);
    }
    createShoppingCart(cart) {
        this.shoppingCarts.push(cart);
    }
}
export {};
//# sourceMappingURL=demo9.js.map