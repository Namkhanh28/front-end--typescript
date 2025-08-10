class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
        console.log('------------------');
    }
}
let students = [
    new Student("Alice", 20, "A"),
    new Student("Bob", 22, "B"),
    new Student("Charlie", 21, "C")
];
for (let i = 0; i < students.length; i++) {
    students[i].displayInfo();
}
export {};
//# sourceMappingURL=baitap2.js.map