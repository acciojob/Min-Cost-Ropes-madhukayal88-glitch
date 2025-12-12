function mincost(arr) {
    if (arr.length <= 1) return 0;

    arr.sort((a, b) => a - b);  // sort ascending

    let totalCost = 0;

    while (arr.length > 1) {
        let a = arr.shift();  // smallest
        let b = arr.shift();  // second smallest

        let cost = a + b;
        totalCost += cost;

        // push combined rope back and keep array sorted
        arr.push(cost);
        arr.sort((a, b) => a - b);
    }

    return totalCost;
}
