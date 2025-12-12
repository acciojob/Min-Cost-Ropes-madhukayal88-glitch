class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Helper functions
  parent(i) { return Math.floor((i - 1) / 2); }
  left(i) { return 2 * i + 1; }
  right(i) { return 2 * i + 2; }

  // Insert element
  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(i) {
    while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
      [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
      i = this.parent(i);
    }
  }

  // Extract min
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return root;
  }

  bubbleDown(i) {
    let smallest = i;
    const left = this.left(i);
    const right = this.right(i);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.bubbleDown(smallest);
    }
  }

  size() { return this.heap.length; }
}

function mincost(arr) {
  if (arr.length <= 1) return 0;

  const heap = new MinHeap();
  for (let rope of arr) heap.push(rope);

  let totalCost = 0;
  while (heap.size() > 1) {
    let first = heap.pop();
    let second = heap.pop();
    let cost = first + second;
    totalCost += cost;
    heap.push(cost);
  }

  return totalCost;
}