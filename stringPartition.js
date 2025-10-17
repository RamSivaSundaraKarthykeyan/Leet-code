var maxPartitionsAfterOperations = function(s, k) {
    const n = s.length;
    const memo = new Map();

    const solve = (index, currentMask, canChange) => {
        if (index === n) {
            return 1; // The last partition
        }
        const key = `${index},${currentMask},${canChange}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        // --- Option 1: Continue current partition ---
        let newMask = currentMask | (1 << (s.charCodeAt(index) - 97));
        let distinctCount = 0;
        for (let i = 0; i < 26; i++) {
            if ((newMask >> i) & 1) {
                distinctCount++;
            }
        }
        
        let res = 0;
        if (distinctCount <= k) {
            // It fits, so we can continue
            res = solve(index + 1, newMask, canChange);
        } else {
            // It doesn't fit, we must start a new partition
            res = 1 + solve(index + 1, (1 << (s.charCodeAt(index) - 97)), canChange);
        }

        // --- Option 2: Use change if available ---
        if (canChange) {
            // Try changing s[index] to all 26 letters
            for (let i = 0; i < 26; i++) {
                newMask = currentMask | (1 << i);
                distinctCount = 0;
                 for (let j = 0; j < 26; j++) {
                    if ((newMask >> j) & 1) distinctCount++;
                }

                if (distinctCount <= k) {
                    res = Math.max(res, solve(index + 1, newMask, false));
                } else {
                    res = Math.max(res, 1 + solve(index + 1, (1 << i), false));
                }
            }
        }
        
        memo.set(key, res);
        return res;
    };

    return solve(0, 0, true);
};
