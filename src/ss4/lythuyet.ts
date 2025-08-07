let person :{ name : string, age: number } ={
    name: "John Doe",
    age: 30
};
console.log(`Name: ${person.name}, Age: ${person.age}`);

let personal :{ name : string, [key:string]:any } ={
    name: "John Doe",
    
}
personal.name = "Jane Doe";
personal.age = 25;
console.log(`Name da them: ${personal.name}, Age: ${personal.age}`);
type Person = {
    name: string;
    age: number;
    [key: string]: any; // cho phép thêm các thuộc tính khác
};
type Personal = number | string; // cho phép là số hoặc chuỗi
let person1: Person = {
    name: "Alice",
    age: 28,
    city: "New York"
};
