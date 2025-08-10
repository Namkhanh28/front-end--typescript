let firstName = "thanh";
let lastName = "nguyen";
function capitalize(word) {
    if (!word || word.length === 0)
        return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
}
firstName = capitalize(firstName);
lastName = capitalize(lastName);
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
export {};
//# sourceMappingURL=baitap5.js.map