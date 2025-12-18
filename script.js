function mincost(arr) {
    if (arr.length <= 1) return 0;

    let ropes = [...arr];
    let totalCost = 0;

    ropes.sort((a, b) => a - b);

    while (ropes.length > 1) {
        let a = ropes.shift();
        let b = ropes.shift();

        let sum = a + b;
        totalCost += sum;

        let i = 0;
        while (i < ropes.length && ropes[i] < sum) {
            i++;
        }
        ropes.splice(i, 0, sum);
    }

    return totalCost;
}
