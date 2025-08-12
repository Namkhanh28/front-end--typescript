class Vehicle {
    protected speed: number;
    protected name: string;
    protected id : number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(): void {
        this.speed -= 1;
        console.log(`Toc do xe giam ${this.speed}`);
    }
    showSpeed(): void {
        console.log(`Toc do hien tai: ${this.speed}`);
    }
    speedUp(): void {
        this.speed += 1;
        console.log(`Toc do xe tang ${this.speed}`);
    }
    
}
class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id); 
        this.gear = gear;
    }
    showInfo(): void {
        console.log(`Ten xe: ${this.name}`);
        console.log(`Toc do: ${this.speed}`);
        console.log(`ID: ${this.id}`);
        console.log(`So so: ${this.gear}`);
    }
}
const bicycle = new Bicycle("Xe dap", 10, 1, 5);
bicycle.showInfo();