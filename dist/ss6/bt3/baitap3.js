// Abstract method:
// Là phương thức không có phần thân (body), chỉ khai báo trong lớp abstract.
// Lớp con bắt buộc phải override (cài đặt lại) phương thức này.
// Dùng khi bạn muốn các lớp con phải định nghĩa lại logic riêng cho phương thức đó.
// Method (phương thức thường):
// Có phần thân, thực hiện một chức năng cụ thể.
// Lớp con có thể sử dụng lại hoặc ghi đè nếu cần.
// Abstract method: Khi bạn muốn tạo một khuôn mẫu cho các lớp con, bắt buộc chúng phải cài đặt phương thức này.
// Method thường: Khi bạn muốn định nghĩa sẵn hành vi cho lớp cha hoặc cho phép lớp con sử dụng lại.
class Animal {
    move() {
        console.log("Animal is moving");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}
const dog = new Dog();
dog.makeSound();
dog.move();
export {};
//# sourceMappingURL=baitap3.js.map