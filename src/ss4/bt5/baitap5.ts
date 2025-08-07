
interface Person {
  name: string;
  age: number;
}
interface Employee {
  employeeId: string;
  department: string;
}
type StaffMember = Person & Employee;
function displayStaffInfo(staff: StaffMember): void {
  console.log(`Tên: ${staff.name}, Tuổi: ${staff.age}, Mã nhân viên: ${staff.employeeId}, Phòng ban: ${staff.department}`);
}
const staff1: StaffMember = {
  name: "Nguyễn Văn A",
  age: 28,
  employeeId: "EMP001",
  department: "Kế toán"
};
displayStaffInfo(staff1);

