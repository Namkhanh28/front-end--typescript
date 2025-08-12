class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Tên động vật: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gâu gâu");
    }
}
const myCat = new Cat("Mèo Cam");
const myDog = new Dog("Chó Vàng");
myCat.printName();
myCat.makeNoise();
myDog.printName();
myDog.makeNoise();
export {};
//# sourceMappingURL=baitap3.js.map