function mincost(arr) {
    if (arr.length <= 1) return 0;

    // Min Heap using sort (acceptable for constraints here)
    arr.sort((a, b) => a - b);

    let cost = 0;

    while (arr.length > 1) {
        let first = arr.shift();
        let second = arr.shift();

        let sum = first + second;
        cost += sum;

        // Insert back and keep sorted
        arr.push(sum);
        arr.sort((a, b) => a - b);
    }

    return cost;
}
