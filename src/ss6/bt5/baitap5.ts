interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}
class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    speedUp(): void {
        this.speed += 10;
        console.log(`Toc do xe tang ${this.speed}`);
    }

    slowDown(): void {
        this.speed -= 10;
        console.log(`Toc do xe giam ${this.speed}`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`Xe dung lai`);
    }

    getSpeed(): number {
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