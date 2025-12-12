function mincost(arr) {
    if (arr.length <= 1) return 0;

    let totalCost = 0;

    // Sort initially: O(N log N)
    arr.sort((a, b) => a - b);

    while (arr.length > 1) {
        // 1. Take the two smallest (they are at the start)
        let first = arr.shift();
        let second = arr.shift();

        let currentCost = first + second;
        totalCost += currentCost;

        // 2. Instead of sorting the whole array again, 
        // find the correct spot for currentCost to keep the array sorted.
        // This makes the insertion O(N) instead of O(N log N).
        let inserted = false;
        for (let i = 0; i < arr.length; i++) {
            if (currentCost < arr[i]) {
                arr.splice(i, 0, currentCost);
                inserted = true;
                break;
            }
        }
        
        // If it's larger than all existing ropes, put it at the end
        if (!inserted) {
            arr.push(currentCost);
        }
    }

    return totalCost;
}