let num1: number = 10;
let num2: number = 3;
let num3: number;
let num4: string = "10";
let num5: boolean = true;

num3 = num1 + num2;
console.log(`Cong: ${num1} + ${num2} = ${num3}`);

num3 = num1 - num2;
console.log(`Tru: ${num1} - ${num2} = ${num3}`);

num3 = num1 * num2;
console.log(`Nhan: ${num1} * ${num2} = ${num3}`);

num3 = num1 / num2;
console.log(`Chia: ${num1} / ${num2} = ${num3}`);

let ketQua = num4 + num5;
console.log(`Ket qua cua "${num4}" + ${num5} la: ${ketQua}`);

console.log(`Giai thich: Khi cong chuoi voi boolean, boolean se bi ep kieu thanh chuoi ("true"), nen ket qua la "10true".`);