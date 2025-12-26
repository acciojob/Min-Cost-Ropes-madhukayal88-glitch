function mincost(arr) {
    if (arr.length <= 1) return 0;

    let totalCost = 0;

    // Sort the initial array
    arr.sort((a, b) => a - b);

    while (arr.length > 1) {
        // 1. Take the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        // 2. Connect them and add to total cost
        let cost = first + second;
        totalCost += cost;

        // 3. Insert the new rope back and keep the array sorted
        // For N=1000, we can find the correct index to keep it efficient
        let inserted = false;
        for (let i = 0; i < arr.length; i++) {
            if (cost < arr[i]) {
                arr.splice(i, 0, cost);
                inserted = true;
                break;
            }
        }
        if (!inserted) arr.push(cost);
    }

    return totalCost;
}

// Testing the examples
console.log(mincost([4, 3, 2, 6]));    // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33