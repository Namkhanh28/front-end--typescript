let firstName: string="thanh";
let lastName: string="nguyen";
function capitalize(word: string): string {
    if (!word || word.length === 0) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
}
firstName = capitalize(firstName);
lastName = capitalize(lastName);

let fullName: string = `${firstName} ${lastName}`;

console.log(fullName); 