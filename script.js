function mincost(arr) {
    if (arr.length <= 1) return 0;

    // Min heap using sort
    let heap = [...arr].sort((a, b) => a - b);
    let cost = 0;

    while (heap.length > 1) {
        let first = heap.shift();
        let second = heap.shift();

        let sum = first + second;
        cost += sum;

        heap.push(sum);
        heap.sort((a, b) => a - b);
    }

    return cost;
}
