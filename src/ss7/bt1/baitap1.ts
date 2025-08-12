class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
class Manager{
    public teamSize: number;
    constructor(public name: string, public company: string, public phone: string, teamSize: number) {
        this.teamSize = teamSize;
    }
    printInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Team Size: ${this.teamSize}`);
    }
}
const employ = new Employee("Nguyen Van A", "ABC Corp", "0123456789");
employ.printInfo();