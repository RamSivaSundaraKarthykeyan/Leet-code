/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const str = text.split(" ");
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let currentWord = str[i];
        let isBroken = false; 
        for (let j = 0; j < brokenLetters.length; j++) {
            let brokenChar = brokenLetters[j];
            if (currentWord.includes(brokenChar)) {
                isBroken = true;
            }
        }
        if (!isBroken) {
            count++; 
        }
    }
    return count; 
};

let text = "hello world";
let bl = "ad";
console.log(canBeTypedWords(text, bl))
