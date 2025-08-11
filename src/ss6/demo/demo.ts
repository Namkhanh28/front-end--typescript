
interface IAnimal {
    name: string;
    age: number;
    category: string;

    sound(): string;
    getDetails(): string;
    move(): string;
    feed(): string;
}
class Dog implements IAnimal {
    constructor(
        public name: string,
        public age: number,
        public category: string
    ) {}

    sound(): string {
        return "Sủa";
    }

    getDetails(): string {
        return `Tên: ${this.name}, Tuổi: ${this.age}, Thể loại: ${this.category}`;
    }

    move(): string {
        return "Chạy bằng 4 chân";
    }

    feed(): string {
        return "Ăn thịt";
    }
}
class Bird implements IAnimal {
    constructor(
        public name: string,
        public age: number,
        public category: string
    ) {}

    sound(): string {
        return "Hót";
    }

    getDetails(): string {
        return `Tên: ${this.name}, Tuổi: ${this.age}, Thể loại: ${this.category}`;
    }

    move(): string {
        return "Bay bằng cánh";
    }

    feed(): string {
        return "Ăn côn trùng và hạt";
    }
}
let animals: IAnimal[] = [
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
