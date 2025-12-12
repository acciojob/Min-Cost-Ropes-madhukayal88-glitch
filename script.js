function mincost(arr) {
    if (arr.length <= 1) return 0;

    let totalCost = 0;

    // Sort the initial array
    arr.sort((a, b) => a - b);

    while (arr.length > 1) {
        // Extract the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        let currentCost = first + second;
        totalCost += currentCost;

        // Push the new rope back and keep the array sorted
        // For larger N, a Min-Heap would be O(log N) instead of O(N)
        let inserted = false;
        for (let i = 0; i < arr.length; i++) {
            if (currentCost < arr[i]) {
                arr.splice(i, 0, currentCost);
                inserted = true;
                break;
            }
        }
        if (!inserted) arr.push(currentCost);
    }

    return totalCost;
}

// Test Cases
console.log(mincost([4, 3, 2, 6]));    // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33