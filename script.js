function mincost(arr) {
    if (arr.length <= 1) return 0;

    // Convert to min-heap using sort (simple for this problem)
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    while (arr.length > 1) {
        // take two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        let cost = first + second;
        totalCost += cost;

        // insert back in sorted position
        // push then sort (simple for n <= 1000)
        arr.push(cost);
        arr.sort((a, b) => a - b);
    }

    return totalCost;
}
