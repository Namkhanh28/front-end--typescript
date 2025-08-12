class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
}
class AllStudent {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    getAllStudents() {
        return [...this.students];
    }
    removeStudentById(id) {
        const idx = this.students.findIndex(s => s.getId() === id);
        if (idx !== -1) {
            const [removed] = this.students.splice(idx, 1);
            return removed;
        }
        return undefined;
    }
}
class Classroom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    showStudents() {
        if (this.students.length === 0) {
            console.log("(No students)");
            return;
        }
        this.students.forEach(s => console.log(`ID: ${s.getId()}, Name: ${s.getName()}`));
    }
    filterStudent(id) {
        return this.students.filter(s => s.getId() === id);
    }
    addStudentInClass(id, allStudent) {
        const student = allStudent.removeStudentById(id);
        if (student) {
            this.addStudent(student);
        }
        else {
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
export {};
//# sourceMappingURL=baitap6.js.map