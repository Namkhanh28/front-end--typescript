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
    abstract login(password: string): void {
        logout(): void {
            if(this.password === password) {
            this.isLogin = false;
            console.log("Đăng nhập  khôngthành công");

        }
    }
}

class UserAccount extends Account {
    status: string;
    constructor(id: string, userName: string, password: string, role: string, status: "active" | "banned") {
        super(id, userName, password, role, `User`);
    }
    login():void{
        if (this.stratus=== Activie){
            `console.log("Tài khoản đang hoạt động");`
        }else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
            return;
        }
    }
}
user1 = new UserAccount("U001", "Nguyễn Văn A", "123456", ");
user2 = new UserAccount("U002", "Trần Thị B", "abc123", "banned");
user1.login("123456");
