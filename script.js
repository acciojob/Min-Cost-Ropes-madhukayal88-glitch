class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < this.size() && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < this.size() && this.heap[right] < this.heap[smallest]) smallest = right;
      if (smallest === index) break;

      [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
      index = smallest;
    }
  }
}

/**
 * @param {number[]} arr
 * @return {number}
 */
function minCost(arr) {
  if (!arr || arr.length <= 1) return 0;

  const heap = new MinHeap();
  // Add all rope lengths to the heap
  arr.forEach(len => heap.push(len));

  let totalCost = 0;

  // While there is more than one rope to connect
  while (heap.size() > 1) {
    // Extract the two shortest ropes
    const first = heap.pop();
    const second = heap.pop();

    const cost = first + second;
    totalCost += cost;

    // Put the combined rope back into the heap
    heap.push(cost);
  }

  return totalCost;
}

// Export for the test runner
module.exports = minCost;