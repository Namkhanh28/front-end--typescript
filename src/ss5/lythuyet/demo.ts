class Animal{
    private name: string;
    protected age: number;
    public species: string;
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speak(): void{
        console.log(`random noise.`);
    }
    getName(): string {
        return this.name;

    }
    setName(name: string): void {
        this.name = name;
    }
    get Age(): number {
        return this.age;
    }
    set Age (age: number) {
        this.age = age;
    }
}
// let randomAnimal = new Animal("Lion", 5, "Mammal");
// console.log(randomAnimal.getName());
// ramdomAnimal.setName("Tiger");
// console.log(randomAnimal.getName());
class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age, "Dog");
    }
    speak(): void {
        console.log("Woof Woof!");
    }
}