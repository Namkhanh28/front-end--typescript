let scores = [8.5, 7.0, 9.2, 6.8, 7.5, 8.0, 6.0, 9.5, 7.8, 8.3];
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;
average = parseFloat(average.toFixed(2));
console.log("Điểm trung bình của 10 sinh viên là:", average);
export {};
//# sourceMappingURL=baitap2.js.map