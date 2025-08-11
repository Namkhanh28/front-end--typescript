interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Rectangle implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Circle implements Geometry {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
const geometry: Geometry[] = [
    new Rectangle(10, 5),
    new Circle(7)
];

geometry.forEach(shape => {
    console.log(`Area: ${shape.calculateArea()}`);
    console.log(`Perimeter: ${shape.calculatePerimeter()}`);
});