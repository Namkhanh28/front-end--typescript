class Job {
    constructor(type) {
        this.type = type;
    }
    getType() {
        console.log(`Job Type: ${this.type}`);
    }
}
class PartimeJob extends Job {
    constructor(type, workHours) {
        super(type);
        this.workHours = workHours;
    }
    calculateSalary() {
        return 30000 * this.workHours;
    }
}
class FullTimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
const partimeJob = new PartimeJob("Part-time", 5);
partimeJob.getType();
console.log(`Salary: ${partimeJob.calculateSalary()}`);
const fullTimeJob = new FullTimeJob("Full-time");
fullTimeJob.getType();
console.log(`Salary: ${fullTimeJob.calculateSalary()}`);
export {};
//# sourceMappingURL=baitap2.js.map