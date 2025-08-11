class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
const employ = new Employee("Nguyen Van A", "ABC Corp", "0123456789");
employ.printInfo();
export {};
//# sourceMappingURL=baitap3.js.map