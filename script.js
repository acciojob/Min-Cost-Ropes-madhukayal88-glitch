function mincost(arr) {
    if (arr.length <= 1) return 0;

    // Use a min-heap or sort the array initially
    // For smaller constraints (N=1000), we can re-sort or use a priority queue
    let totalCost = 0;
    
    // Convert array into a sorted list (acting as a min-heap)
    arr.sort((a, b) => a - b);

    while (arr.length > 1) {
        // Take the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        // Calculate the cost to connect them
        let currentCost = first + second;
        totalCost += currentCost;

        // Insert the new rope back into the sorted array
        // Finding the correct index keeps the array sorted (O(N) insertion)
        let index = arr.findIndex(val => val > currentCost);
        if (index === -1) {
            arr.push(currentCost);
        } else {
            arr.splice(index, 0, currentCost);
        }
    }

    return totalCost;
}
