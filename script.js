function mincost(arr) {
    if (arr.length <= 1) return 0;

    let ropes = [...arr];   // input mutate aagakoodadhu
    let cost = 0;

    ropes.sort((a, b) => a - b);  // sort knowledge use pannrom

    while (ropes.length > 1) {
        let x = ropes.shift();
        let y = ropes.shift();

        let sum = x + y;
        cost += sum;

        let i = 0;
        while (i < ropes.length && ropes[i] < sum) {
            i++;
        }
        ropes.splice(i, 0, sum);
    }

    return cost;
}
