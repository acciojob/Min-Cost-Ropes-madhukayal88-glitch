function mincost(arr) {
    let heap = [...arr];
    let cost = 0;

    heap.sort((a, b) => a - b);

    while (heap.length > 1) {
        let a = heap.shift();
        let b = heap.shift();

        let sum = a + b;
        cost += sum;

        heap.push(sum);
        heap.sort((x, y) => x - y);
    }
    return cost;
}
