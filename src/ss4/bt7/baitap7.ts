function processInput(input: string | number | boolean): void {
  if (typeof input === 'string') {
    // Trường hợp string toàn số: dùng regex /^[0-9]+$/
    if (/^\d+$/.test(input)) {
      const num = parseInt(input);
      console.log(num ** 2);
    } else {
      // Đếm số chữ cái (chỉ a-z hoặc A-Z), bỏ qua số và ký tự đặc biệt
      const letters = input.match(/[a-zA-Z]/g);
      const count = letters ? letters.length : 0;
      console.log(`${count} ký tự chữ cái`);
    }

  } else if (typeof input === 'number') {
    if (isPrime(input)) {
      console.log("Là số nguyên tố");
    } else {
      console.log("Không phải số nguyên tố");
    }

  } else if (typeof input === 'boolean') {
    console.log(input ? "Giá trị là true - tiến hành xử lý" : "Giá trị là false - dừng xử lý");
  }
}
function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
processInput("123");       
processInput("abc123!"); 
processInput(7);      
processInput(10);    
processInput(true);     
processInput(false);   
