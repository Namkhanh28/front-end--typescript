class Student {
    private id: number;
    private name: string;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    getId(): number {
        return this.id;
    }
}

class AllStudent {
    private students: Student[];

    constructor() {
        this.students = [];
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    getAllStudents(): Student[] {
        return [...this.students];
    }

    removeStudentById(id: number): Student | undefined {
        const idx = this.students.findIndex(s => s.getId() === id);
        if (idx !== -1) {
            const [removed] = this.students.splice(idx, 1);
            return removed;
        }
        return undefined;
    }
}

class Classroom {
    private students: Student[];

    constructor() {
        this.students = [];
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    showStudents(): void {
        if (this.students.length === 0) {
            console.log("(No students)");
            return;
        }
        this.students.forEach(s => console.log(`ID: ${s.getId()}, Name: ${s.getName()}`));
    }

    filterStudent(id: number): Student[] {
        return this.students.filter(s => s.getId() === id);
    }

    addStudentInClass(id: number, allStudent: AllStudent): void {
        const student = allStudent.removeStudentById(id);
        if (student) {
            this.addStudent(student);
        } else {
            console.warn(`Student with id=${id} not found in AllStudent.`);
        }
    }
}

const s1 = new Student("Thanh", 1);
const s2 = new Student("Dung", 2);
const s3 = new Student("Phuong", 3);
const s4 = new Student("Khanh", 4);
const s5 = new Student("Chien", 5);
const s6 = new Student("Huy", 6);

const allStudent = new AllStudent();
[s1, s2, s3, s4, s5, s6].forEach(s => allStudent.addStudent(s));

const classA = new Classroom();
const classB = new Classroom();

classA.addStudentInClass(1, allStudent);
classA.addStudentInClass(2, allStudent);
classA.addStudentInClass(3, allStudent);

classB.addStudentInClass(4, allStudent);
classB.addStudentInClass(5, allStudent);
classB.addStudentInClass(6, allStudent);

console.log("Class A:");
classA.showStudents();

console.log("Class B:");
classB.showStudents();