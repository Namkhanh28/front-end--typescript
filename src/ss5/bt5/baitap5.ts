class Rectangle {
     width: number;
     height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
        return this.width * 2 + this.height * 2;
    }
}
let rect = new Rectangle(5, 10);
console.log(`Diện tích hình chữ nhật: ${rect.getArea()}`);
console.log(`Chu vi hình chữ nhật: ${rect.getPerimeter()}`);
