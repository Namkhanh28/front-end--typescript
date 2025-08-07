let input = "hello world apple banana orange pumpkin cucumber";

function checkWord(inputString: string): string {
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