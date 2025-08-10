class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return this.width * 2 + this.height * 2;
    }
}
let rect = new Rectangle(5, 10);
console.log(`Diện tích hình chữ nhật: ${rect.getArea()}`);
console.log(`Chu vi hình chữ nhật: ${rect.getPerimeter()}`);
export {};
//# sourceMappingURL=baitap5.js.map