function concatenatedBinary(n: number): number {
    const MOD  = BigInt(1e9 + 7);
    let result = 0n;

    for (let i = 1; i <= n; i++) {
        let len: number = i.toString(2).length;
        
        result = ((result << BigInt(len)) + BigInt(i)) % MOD;
    }

    return Number(result);
};
