class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(password) {
        if (this.password === password) {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else {
            console.log("Sai mật khẩu");
        }
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login(password) {
        if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
        else if (this.status === "active") {
            console.log("Tài khoản đang hoạt động");
        }
        super.login(password);
        if (this.isLogin) {
            console.log(`Chào mừng ${this.userName}, bạn đã đăng nhập với vai trò ${this.role}`);
        }
    }
}
const user1 = new userAcc("U001", "Nguyễn Văn A", "123456", "user", "active");
const user2 = new userAcc("U002", "Trần Thị B", "abc123", "user", "banned");
user1.login("123456");
user1.logout();
user2.login("abc123");
export {};
//# sourceMappingURL=baitap5.js.map