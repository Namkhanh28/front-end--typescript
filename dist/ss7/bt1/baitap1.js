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
class Manager {
    constructor(name, company, phone, teamSize) {
        this.name = name;
        this.company = company;
        this.phone = phone;
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Team Size: ${this.teamSize}`);
    }
}
const employ = new Employee("Nguyen Van A", "ABC Corp", "0123456789");
employ.printInfo();
export {};
//# sourceMappingURL=baitap1.js.map