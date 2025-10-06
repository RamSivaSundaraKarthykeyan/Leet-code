/**
 * @param {number[][]} grid
 * @return {number}
 */


function swimInWater(grid) {
    const n = grid.length;
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    const minHeap = [[grid[0][0], 0, 0]];
    let maxTime = 0;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (minHeap.length) {
        minHeap.sort((a, b) => a[0] - b[0]);
        const [currentHeight, row, col] = minHeap.shift();
        if (visited[row][col]) continue;
        visited[row][col] = true;
        maxTime = Math.max(maxTime, currentHeight);
        if (row === n - 1 && col === n - 1) return maxTime;
        for (const [dr, dc] of dirs) {
            const newRow = row + dr, newCol = col + dc;
            if (
                newRow >= 0 && newRow < n &&
                newCol >= 0 && newCol < n &&
                !visited[newRow][newCol]
            ) {
                minHeap.push([grid[newRow][newCol], newRow, newCol]);
            }
        }
    }
    return maxTime;
}



const grid = [[0,2],[1,3]];
console.log(swimInWater(grid));
