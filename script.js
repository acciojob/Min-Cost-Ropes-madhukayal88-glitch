function mincost(arr) {
    // If only one or no rope, cost is 0
    if (arr.length <= 1) return 0;

    // Work on a copy to avoid modifying input
    let ropes = [...arr];
    let totalCost = 0;

    // Initial sort
    ropes.sort((a, b) => a - b);

    while (ropes.length > 1) {
        // Pick two smallest ropes
        let first = ropes.shift();
        let second = ropes.shift();

        let sum = first + second;
        totalCost += sum;

        // Insert sum back and keep array sorted
        let i = 0;
        while (i < ropes.length && ropes[i] < sum) {
            i++;
        }
        ropes.splice(i, 0, sum);
    }

    return totalCost;
}
