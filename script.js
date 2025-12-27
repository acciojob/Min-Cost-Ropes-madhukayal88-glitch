// Function name must match exactly what index.js is calling
function minCost(arr) {
  if (!arr || arr.length <= 1) return 0;

  // Use a greedy approach: always combine the two smallest ropes
  // For N=1000, we can sort in each step or use a priority queue logic
  let totalCost = 0;

  // Sort initially
  arr.sort((a, b) => a - b);

  while (arr.length > 1) {
    // Take the two smallest
    let first = arr.shift();
    let second = arr.shift();

    let currentSum = first + second;
    totalCost += currentSum;

    // Insert the sum back into the array while maintaining sort order
    // This is more efficient than calling .sort() every time
    let inserted = false;
    for (let i = 0; i < arr.length; i++) {
      if (currentSum < arr[i]) {
        arr.splice(i, 0, currentSum);
        inserted = true;
        break;
      }
    }
    if (!inserted) arr.push(currentSum);
  }

  return totalCost;
}

// Ensure you export it if it's in a separate file
module.exports = minCost;