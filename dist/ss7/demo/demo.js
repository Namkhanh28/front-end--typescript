class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(password) {
        logout();
        void {
            : .password === password
        };
        {
            this.isLogin = false;
            console.log("Đăng nhập  khôngthành công");
        }
    }
}
class UserAccount extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role, `User`);
    }
    login() {
        if (this.stratus === Activie) {
            `console.log("Tài khoản đang hoạt động");`;
        }
        else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
            return;
        }
    }
}
user1 = new UserAccount("U001", "Nguyễn Văn A", "123456", ");, user2 = new UserAccount("U002", "Trần Thị B", "abc123", "banned"));
user1.login("123456");
export {};
//# sourceMappingURL=demo.js.map