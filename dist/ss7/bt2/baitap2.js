class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed -= 1;
        console.log(`Toc do xe giam ${this.speed}`);
    }
    showSpeed() {
        console.log(`Toc do hien tai: ${this.speed}`);
    }
    speedUp() {
        this.speed += 1;
        console.log(`Toc do xe tang ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Ten xe: ${this.name}`);
        console.log(`Toc do: ${this.speed}`);
        console.log(`ID: ${this.id}`);
        console.log(`So so: ${this.gear}`);
    }
}
const bicycle = new Bicycle("Xe dap", 10, 1, 5);
bicycle.showInfo();
export {};
//# sourceMappingURL=baitap2.js.map