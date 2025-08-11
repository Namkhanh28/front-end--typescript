abstract class shape {
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    abstract getSize():void;
    getName():void {
        console.log(`Ten Hinh: ${this.name}`);
    }
}
class Rectangle extends shape {
    width:number;
    height:number;
    constructor(name:string,width:number,height:number) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize():void {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
}
const rect = new Rectangle("Hinh chu nhat", 10, 5);
rect.getName();
rect.getSize();