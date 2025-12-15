function minCost(arr) {
    let totalCost = 0;

    // Continue until only one rope remains
    while (arr.length > 1) {

        // Sort ropes to get the two smallest lengths
        arr.sort((a, b) => a - b);

        // Pick the two smallest ropes
        let first = arr[0];
        let second = arr[1];

        // Remove the two ropes from the array
        arr.splice(0, 2);

        // Cost of connecting these two ropes
        let cost = first + second;
        totalCost += cost;

        // Push the new rope back into the array
        arr.push(cost);
    }

    return totalCost;
}

function main() {
    let ropes = [4, 3, 2, 6];
    console.log(minCost(ropes));
}

main();