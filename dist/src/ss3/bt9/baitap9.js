let input = "hello world apple banana orange pumpkin cucumber";
function checkWord(inputString) {
    let words = inputString.split(" ");
    let result = "";
    words.forEach((word) => {
        let charSet = new Set(word);
        if (charSet.size === word.length) {
            result = word;
        }
    });
    return result;
}
console.log(checkWord(input));
export {};
//# sourceMappingURL=baitap9.js.map