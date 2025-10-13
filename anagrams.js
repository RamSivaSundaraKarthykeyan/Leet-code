/**
 * Converts a word into a canonical key by sorting its characters.
 * All anagrams will have the same key.
 * @param {string} word
 * @returns {string} The sorted string key.
 */
function getAnagramKey(word) {
    // O(L log L) where L is the length of the word
    return word.split('').sort().join('');
}

/**
 * Removes adjacent anagrams, keeping only the first word of any contiguous anagram group.
 * @param {string[]} words The input array of words.
 * @returns {string[]} The array after all operations are performed.
 */
function removeAnagrams(words) {
    // We use a result array as a stack to hold the words that survive.
    const result = []; 

    for (const word of words) {
        // 1. If result is empty, or this is the first word, just add it.
        if (result.length === 0) {
            result.push(word);
            continue;
        }

        // 2. Get the last word added to the result (the potential preceding survivor).
        const lastWord = result[result.length - 1];

        // 3. Check for the anagram condition using the canonical keys.
        // If the current word is an anagram of the last kept word, it is 'deleted'
        // by simply being skipped (i.e., not added to the result).
        if (getAnagramKey(word) === getAnagramKey(lastWord)) {
            continue; // Skip (delete) the current word
        }

        // 4. If it's not an anagram, it starts a new block of potential survivors/anagrams.
        result.push(word);
    }

    return result;
}

const words1 = ["abba","baba","bbaa","cd","cd"];
console.log(removeAnagrams(words1));
