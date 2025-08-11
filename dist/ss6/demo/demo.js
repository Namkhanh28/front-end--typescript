class Dog {
    constructor(name, age, category) {
        this.name = name;
        this.age = age;
        this.category = category;
    }
    sound() {
        return "Sủa";
    }
    getDetails() {
        return `Tên: ${this.name}, Tuổi: ${this.age}, Thể loại: ${this.category}`;
    }
    move() {
        return "Chạy bằng 4 chân";
    }
    feed() {
        return "Ăn thịt";
    }
}
class Bird {
    constructor(name, age, category) {
        this.name = name;
        this.age = age;
        this.category = category;
    }
    sound() {
        return "Hót";
    }
    getDetails() {
        return `Tên: ${this.name}, Tuổi: ${this.age}, Thể loại: ${this.category}`;
    }
    move() {
        return "Bay bằng cánh";
    }
    feed() {
        return "Ăn côn trùng và hạt";
    }
}
let animals = [
    new Dog("Chó", 3, "Thú có vú"),
    new Bird("Chim sẻ", 1, "Chim")
];
for (let animal of animals) {
    console.log(animal.getDetails());
    console.log("Âm thanh:", animal.sound());
    console.log("Di chuyển:", animal.move());
    console.log("Chế độ ăn:", animal.feed());
    console.log("----------------------------");
}
export {};
//# sourceMappingURL=demo.js.map