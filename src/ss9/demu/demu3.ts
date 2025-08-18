// ===== 1. Lớp Customer =====
class Customer {
    private static nextId = 1;
    public id: number;
    public name: string;
    public email: string;
    public shippingAddress: string;

    constructor(name: string, email: string, address: string) {
        this.id = Customer.nextId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = address;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Address: ${this.shippingAddress}`;
    }
}

// ===== 2. Lớp Product (abstract) =====
abstract class Product {
    private static nextId = 1;
    public id: number;
    public name: string;
    public price: number;
    public stock: number;

    constructor(name: string, price: number, stock: number) {
        this.id = Product.nextId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    sell(quantity: number): void {
        if (quantity > 0 && this.stock >= quantity) {
            this.stock -= quantity;
        } else {
            console.log(`Không đủ hàng cho sản phẩm ${this.name}`);
        }
    }

    restock(quantity: number): void {
        if (quantity > 0) {
            this.stock += quantity;
        }
    }

    abstract getProductInfo(): string;
    abstract getShippingCost(distance: number): number;
    abstract getCategory(): string;
}

// ===== 3. Lớp con ElectronicsProduct =====
class ElectronicsProduct extends Product {
    public warrantyPeriod: number;

    constructor(name: string, price: number, stock: number, warrantyPeriod: number) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }

    getProductInfo(): string {
        return `Electronics: ${this.name}, Giá: ${this.price} VND, Bảo hành: ${this.warrantyPeriod} tháng, Tồn kho: ${this.stock}`;
    }

    getShippingCost(distance: number): number {
        return 50000; // Cố định
    }

    getCategory(): string {
        return "Electronics";
    }
}

// ===== 4. Lớp con ClothingProduct =====
class ClothingProduct extends Product {
    public size: string;
    public color: string;

    constructor(name: string, price: number, stock: number, size: string, color: string) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }

    getProductInfo(): string {
        return `Clothing: ${this.name}, Giá: ${this.price} VND, Size: ${this.size}, Màu: ${this.color}, Tồn kho: ${this.stock}`;
    }

    getShippingCost(distance: number): number {
        return 25000; // Cố định
    }

    getCategory(): string {
        return "Clothing";
    }
}

// ===== 5. Lớp Order =====
class Order {
    private static nextId = 1;
    public orderId: number;
    public customer: Customer;
    public products: { product: Product; quantity: number }[];
    public totalAmount: number;

    constructor(customer: Customer) {
        this.orderId = Order.nextId++;
        this.customer = customer;
        this.products = [];
        this.totalAmount = 0;
    }

    addProduct(product: Product, quantity: number): void {
        if (product.stock >= quantity) {
            product.sell(quantity);
            this.products.push({ product, quantity });
            this.totalAmount += product.price * quantity;
        } else {
            console.log(`Không đủ hàng cho sản phẩm ${product.name}`);
        }
    }

    getDetails(): string {
        const productList = this.products
            .map(item => `${item.product.name} x${item.quantity}`)
            .join(", ");
        return `OrderID: ${this.orderId}, Customer: ${this.customer.name}, Products: [${productList}], Total: ${this.totalAmount} VND`;
    }
}

// ===== 6. Lớp Store =====
class Store {
    public products: Product[];
    public customers: Customer[];
    public orders: Order[];

    constructor() {
        this.products = [];
        this.customers = [];
        this.orders = [];
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    addCustomer(name: string, email: string, address: string): void {
        this.customers.push(new Customer(name, email, address));
    }

    createOrder(customerId: number, productQuantities: { productId: number; quantity: number }[]): Order | null {
        const customer = this.findEntityById(this.customers, customerId);
        if (!customer) {
            console.log("Không tìm thấy khách hàng");
            return null;
        }
        const order = new Order(customer);
        productQuantities.forEach(item => {
            const product = this.findEntityById(this.products, item.productId);
            if (product) {
                order.addProduct(product, item.quantity);
            }
        });
        this.orders.push(order);
        return order;
    }

    cancelOrder(orderId: number): void {
        const index = this.orders.findIndex(o => o.orderId === orderId);
        if (index !== -1) {
            const order = this.orders[index];
            order.products.forEach(item => {
                item.product.restock(item.quantity);
            });
            this.orders.splice(index, 1);
        }
    }

    listAvailableProducts(): void {
        const available = this.products.filter(p => p.stock > 0);
        available.forEach(p => console.log(p.getProductInfo()));
    }

    listCustomerOrders(customerId: number): void {
        const orders = this.orders.filter(o => o.customer.id === customerId);
        orders.forEach(o => console.log(o.getDetails()));
    }

    calculateTotalRevenue(): number {
        return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    }

    countProductsByCategory(): void {
        const counts = this.products.reduce((acc: Record<string, number>, p) => {
            const cat = p.getCategory();
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {});
        console.log(counts);
    }

    updateProductStock(productId: number, newStock: number): void {
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.products[index].stock = newStock;
        }
    }

    findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined {
        return collection.find(item => item.id === id);
    }

    viewProductDetails(productId: number): void {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            console.log(product.getProductInfo());
        }
    }
}

// ===== 7. Demo chạy thử =====
const store = new Store();

// Thêm khách hàng
store.addCustomer("Nguyễn Văn A", "a@example.com", "Hà Nội");
store.addCustomer("Trần Thị B", "b@example.com", "HCM");

// Thêm sản phẩm
store.addProduct(new ElectronicsProduct("Laptop", 15000000, 5, 24));
store.addProduct(new ClothingProduct("Áo Thun", 200000, 10, "L", "Đỏ"));

// Tạo đơn hàng
store.createOrder(1, [
    { productId: 1, quantity: 1 },
    { productId: 2, quantity: 2 }
]);

// Hiển thị sản phẩm còn hàng
store.listAvailableProducts();

// Hiển thị đơn hàng của khách hàng 1
store.listCustomerOrders(1);

// Doanh thu
console.log("Tổng doanh thu:", store.calculateTotalRevenue(), "VND");

// Thống kê theo danh mục
store.countProductsByCategory();

// Cập nhật tồn kho
store.updateProductStock(2, 20);

// Tìm kiếm bằng generic
console.log("Tìm khách hàng ID=1:", store.findEntityById(store.customers, 1)?.getDetails());

// Xem chi tiết sản phẩm
store.viewProductDetails(1);
