class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 10;
        console.log(`Toc do xe tang ${this.speed}`);
    }
    slowDown() {
        this.speed -= 10;
        console.log(`Toc do xe giam ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`Xe dung lai`);
    }
    getSpeed() {
        return this.speed;
    }
}
const vehicle = new Vehicle(50);
vehicle.speedUp();
console.log(`Trang thai toc do hien tai: ${vehicle.getSpeed()}`);
vehicle.slowDown();
console.log(`Trang thai toc do hien tai: ${vehicle.getSpeed()}`);
vehicle.stop();
console.log(`Trang thai toc do hien tai: ${vehicle.getSpeed()}`);
export {};
//# sourceMappingURL=baitap5.js.map