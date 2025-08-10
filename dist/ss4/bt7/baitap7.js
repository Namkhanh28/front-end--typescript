function processInput(input) {
    if (typeof input === 'string') {
        if (/^\d+$/.test(input)) {
            const num = parseInt(input);
            console.log(Math.pow(num, 2));
        }
        else {
            const letters = input.match(/[a-zA-Z]/g);
            const count = letters ? letters.length : 0;
            console.log(`${count} ký tự chữ cái`);
        }
    }
    else if (typeof input === 'number') {
        if (isPrime(input)) {
            console.log("Là số nguyên tố");
        }
        else {
            console.log("Không phải số nguyên tố");
        }
    }
    else if (typeof input === 'boolean') {
        console.log(input ? "Giá trị là true - tiến hành xử lý" : "Giá trị là false - dừng xử lý");
    }
}
function isPrime(n) {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
processInput("123");
processInput("abc123!");
processInput(7);
processInput(10);
processInput(true);
processInput(false);
export {};
//# sourceMappingURL=baitap7.js.map