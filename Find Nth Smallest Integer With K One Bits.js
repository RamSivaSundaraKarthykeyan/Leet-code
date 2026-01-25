function nthSmallest(n: number, k: number): number {
    let result = 0n;
    let count = BigInt(n);
    let onesLeft = k;

    
    const C = Array.from({ length: 64 }, () => Array(64).fill(0n));
    for (let i = 0; i < 64; i++) {
        C[i][0] = 1n;
        for (let j = 1; j <= i; j++) {
            C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
        }
    }

    
    for (let i = 62; i >= 0 && onesLeft > 0; i--) {
        
        let combinations = C[i][onesLeft];

        if (count > combinations) {
           
            result |= (1n << BigInt(i));
            count -= combinations;
            onesLeft--;
        }
    }

    return Number(result);
}
