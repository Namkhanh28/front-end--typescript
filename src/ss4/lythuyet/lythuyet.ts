type Subject = {
    subjectName: string,
    score: number | string
}
type Student = {
    name: string,
    age: number,
    subjects: Subject[]
}
let students: Student[] = []
//B2: Xay dung cac ham
//Thêm mới
function addStudent(student: Student): void {
    
    students.push(student);
}
function updateStudent(name: string, newName: string, newAge: number): void {
    //Tìm đến sinh viên cần sửa
    let student = students.find((student) => student.name === name)
    //Ghi đè thông tin cũ
    if (student) {
        student.name = newName;
        student.age = newAge;
    } else {
        console.log("Không tìm thấy sinh viên");
    }
}
function deleteStudent(name: string): void {
    //Tìm đến sinh viên cần xóa
    let deleteIndex = students.findIndex((student) => student.name === name)
    //xóa sinh viên
    if (deleteIndex != -1) {
        students.splice(deleteIndex, 1);
    } else {
        console.log("Không tìm thấy sinh viên");
    }
}
function convert(score: string): number {
    switch (score) {
        case "A":
            return 10;
        case "B":
            return 8;
        case "C":
            return 6;
        case "D":
            return 4;
        default:
            return 0;
    }
}
function avg(student: Student): number {
    //Tính tổng điểm của tất cả các môn
    let total = student.subjects.reduce((acc, subject) => {
        if (typeof subject.score === "number") {
            return acc + subject.score;
        } else {
            return acc + convert(subject.score);
        }
    }, 0);
    //Trả về điểm trung bình
    return total / student.subjects.length;
}
function rank(student: Student): string {
    let avgScore = avg(student);
    if (avgScore >= 8.5) {
        return "Giỏi"
    }
    if (avgScore >= 6.5) {
        return "Khá"
    }
    if (avgScore >= 5) {
        return "Trung bình"
    }
    return "Yếu"
}
function showStudents() {
    students.forEach((student) => {
        let avgScore = avg(student);
        let studentRank = rank(student);
        console.log(`Tên: ${student.name}, Tuổi: ${student.age}
            ĐTB: ${avgScore}, Xếp loại: ${studentRank}`);

    })
}
//B3: Gọi và kiểm tra
addStudent({
    name: "Nguyen Van A",
    age: 20,
    subjects: [
        { subjectName: "Math", score: 9 },
        { subjectName: "English", score: "A" },
    ]
})
addStudent({
    name: "Nguyen Van B",
    age: 21,
    subjects: [
        { subjectName: "Math", score: "C" },
        { subjectName: "English", score: 7 },
    ]
})
showStudents()