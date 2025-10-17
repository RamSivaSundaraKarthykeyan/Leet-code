/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const charIndexMap = new Map(); 
    let maxLength = 0;
    let left = 0; // The left pointer of our sliding window

    // 'right' is the right pointer of our sliding window
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // If we have seen the currentChar before AND its last position is
        // inside our current window (i.e., >= left), we must shrink the window.
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= left) {
            // Move the left pointer to the position right after the last
            // occurrence of the current character.
            left = charIndexMap.get(currentChar) + 1;
        }

        // Update the last seen index of the current character.
        charIndexMap.set(currentChar, right);

        // Calculate the length of the current window and update maxLength if it's bigger.
        const currentLength = right - left + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
