
abstract class Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    displayInfo(): void {
        console.log(`Tên: ${this.name}`);
    }
}
class Student extends Person {
    public id: string;

    constructor(id: string, name: string) {
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`Mã SV: ${this.id}, Tên SV: ${this.name}`);
    }
}
class Teacher extends Person {
    public subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Tên GV: ${this.name}, Môn dạy: ${this.subject}`);
    }
}
const student = new Student("SV001", "Nguyễn Văn A");
const teacher = new Teacher("Trần Thị B", "Toán");

student.displayInfo(); 
teacher.displayInfo(); 