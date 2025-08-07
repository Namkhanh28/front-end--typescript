
let scores: number[] = [8.5, 7.0, 9.2, 6.8, 7.5, 8.0, 6.0, 9.5, 7.8, 8.3];
let total: number = scores.reduce((sum, score) => sum + score, 0);
let average: number = total / scores.length;
average = parseFloat(average.toFixed(2));
console.log("Điểm trung bình của 10 sinh viên là:", average);
