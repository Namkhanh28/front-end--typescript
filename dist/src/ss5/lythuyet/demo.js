class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speak() {
        console.log(`random noise.`);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    get Age() {
        return this.age;
    }
    set Age(age) {
        this.age = age;
    }
}
// let randomAnimal = new Animal("Lion", 5, "Mammal");
// console.log(randomAnimal.getName());
// ramdomAnimal.setName("Tiger");
// console.log(randomAnimal.getName());
class Dog extends Animal {
    constructor(name, age) {
        super(name, age, "Dog");
    }
    speak() {
        console.log("Woof Woof!");
    }
}
export {};
//# sourceMappingURL=demo.js.map