abstract class Job {
    type:string;
    constructor(type:string) {
        this.type = type;
    }
    abstract calculateSalary():number;
    getType():void {
        console.log(`Job Type: ${this.type}`);
    }
}
class PartimeJob extends Job {
    workHours:number;
    constructor(type:string, workHours:number) {
        super(type);
        this.workHours = workHours;
    }
    calculateSalary():number {
        return 30000 * this.workHours;
    }
}
class FullTimeJob extends Job {
    constructor(type:string) {
        super(type);
    }
    calculateSalary():number {
        return 10000000;
    }
}
const partimeJob = new PartimeJob("Part-time", 5);
partimeJob.getType();
console.log(`Salary: ${partimeJob.calculateSalary()}`);

const fullTimeJob = new FullTimeJob("Full-time");
fullTimeJob.getType();
console.log(`Salary: ${fullTimeJob.calculateSalary()}`);