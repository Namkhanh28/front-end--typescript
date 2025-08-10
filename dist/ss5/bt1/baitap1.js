class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo() {
        console.log(`Tên xe: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng xe: ${this.company}`);
        console.log('------------------');
    }
}
let car1 = new Vehicle("Toyota Camry", 2020, "Toyota");
let car2 = new Vehicle("Honda Civic", 2022, "Honda");
car1.displayInfo();
car2.displayInfo();
export {};
//# sourceMappingURL=baitap1.js.map