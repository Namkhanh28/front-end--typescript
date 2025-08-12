class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Tên: ${this.name}`);
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Mã SV: ${this.id}, Tên SV: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Tên GV: ${this.name}, Môn dạy: ${this.subject}`);
    }
}
const student = new Student("SV001", "Nguyễn Văn A");
const teacher = new Teacher("Trần Thị B", "Toán");
student.displayInfo();
teacher.displayInfo();
export {};
//# sourceMappingURL=baitap4.js.map