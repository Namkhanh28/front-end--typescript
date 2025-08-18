class Customer{
    id : number;
    name: string;
    email: string;
    shippingAddress: string;
    constructor(id: number, name: string, email: string, shippingAddress: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Shipping Address: ${this.shippingAddress}`;
    }
}

abstract class Product {
    id: number;
    name: string;
    price: number;
    stock: number = 0;
    constructor(id: number, name: string, price: number ,stock ?: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    abstract getDetails(): string;
    addStock(quantity: number): void {
        this.stock += quantity;
    }
    removeStock(quantity: number): void {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        } else {
            console.log("Not enough stock to remove");
        }
    }
    getStock(): number {
        return this.stock;
    }
}
class ElectronicsProduct extends Product {
    warrantyPeriod: number; // in months
    constructor(id: number, name: string, price: number, warrantyPeriod: number, stock?: number) {
        super(id, name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getDetails(): string {
        return `Electronics - ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Warranty Period: ${this.warrantyPeriod} months, Stock: ${this.stock}`;
    }
}
class ClothingProduct extends Product {
    size: string;
    constructor(id: number, name: string, price: number, size: string, stock?: number) {
        super(id, name, price, stock);
        this.size = size;
    }
    getDetails(): string {
        return `Clothing - ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Size: ${this.size}, Stock: ${this.stock}`;
    }
}
class Order {
    orderId: number;
    customer: Customer;
    products: Product[];
    constructor(orderId: number, customer: Customer) {
        this.orderId = orderId;
        this.customer = customer;
        this.products = [];
    }
    addProduct(product: Product): void {
        this.products.push(product);
    }
    getOrderDetails(): string {
        let productDetails = this.products.map(product => product.getDetails()).join('\n');
        return `Order ID: ${this.orderId}, Customer: ${this.customer.getDetails()}, Products:\n${productDetails}`;
    }
}
class ShoppingCart {
    customer: Customer;
    products: Product[];
    constructor(customer: Customer) {
        this.customer = customer;
        this.products = [];
    }
    addProduct(product: Product): void {
        this.products.push(product);
    }
    removeProduct(productId: number): void {
        this.products = this.products.filter(product => product.id !== productId);
    }
    getCartDetails(): string {
        let productDetails = this.products.map(product => product.getDetails()).join('\n');
        return `Customer: ${this.customer.getDetails()}, Products in Cart:\n${productDetails}`;
    }
}
class Store {
    customers: Customer[];
    products: Product[];
    orders: Order[];
    shoppingCarts: ShoppingCart[];

    constructor() {
        this.customers = [];
        this.products = [];
        this.orders = [];
        this.shoppingCarts = [];
    }

    addCustomer(customer: Customer): void {
        this.customers.push(customer);
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    createOrder(order: Order): void {
        this.orders.push(order);
    }

    createShoppingCart(cart: ShoppingCart): void {
        this.shoppingCarts.push(cart);
    }
} 