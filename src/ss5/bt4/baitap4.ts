class Vehicle {
    public name: string;
    protected year: number;
    private company: string;
    public readonly id: number;

    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    printInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
    }
}

const vehicle = new Vehicle(1, "Toyota Camry", 2022, "Toyota");
vehicle.printInfo();