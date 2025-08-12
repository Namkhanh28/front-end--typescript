// Lớp Account
class Account {
    id: string;
    userName: string;
    private password: string;
    isLogin: boolean;
    role: string;

    constructor(id: string, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(password: string): void {
        if (this.password === password) {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        } else {
            console.log("Sai mật khẩu");
        }
    }
    logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}
class userAcc extends Account {
    public status: "active" | "banned";
    constructor(
        id: string,
        userName: string,
        password: string,
        role: string,
        status: "active" | "banned"
    ) {
        super(id, userName, password, role);
        this.status = status;
    }
    login(password: string): void {
        if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }else if (this.status === "active") {
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

user1.login("123456"); // Đăng nhập thành công
user1.logout();        // Đăng xuất thành công

user2.login("abc123"); // Tài khoản đã bị khóa
