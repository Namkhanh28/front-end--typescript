class Student {
    constructor(
        public id: number,
        public age: number,
        public email: string
    ) {}

    displayInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
        console.log('------------------');
    }
}

let students: Student[] = [
    new Student(1, 20, "student1@example.com"),
    new Student(2, 21, "student2@example.com"),
    new Student(3, 22, "student3@example.com")
];

for (let student of students) {
    student.displayInfo();
}