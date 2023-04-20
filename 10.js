//  Beginning ot the function
function countVowels(string) {
let count = 0;
// using a regex to target the specific letters
const regex = /[aeiou]/gi;
count = string.match(regex);

// return has a ternary operator to make the condition true
return count ? count.length: 0;
}

// The sentence that is being counted
console.log(countVowels('How are you today'))