function removeDuplicateChars(input: string): string {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (input[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            result += input[i];
        }
    }
    return result;
}
console.log(removeDuplicateChars("banana"));       
console.log(removeDuplicateChars("hello world")); 