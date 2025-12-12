function mincost(arr) {
    if (!arr || arr.length <= 1) return 0;

    // Use a Min-Heap to always extract the two smallest elements efficiently
    const minHeap = new MinHeap();
    for (let length of arr) {
        minHeap.insert(length);
    }

    let totalCost = 0;

    // Process until only one rope remains
    while (minHeap.size() > 1) {
        let first = minHeap.extractMin();
        let second = minHeap.extractMin();

        let cost = first + second;
        totalCost += cost;

        // Push the combined rope back into the heap
        minHeap.insert(cost);
    }

    return totalCost;
}

// Minimalist Min-Heap implementation for competitive coding
class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() { return this.heap.length; }
    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }
    extractMin() {
        if (this.size() === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return min;
    }
    sinkDown(index) {
        while (true) {
            let left = 2 * index + 1, right = 2 * index + 2, smallest = index;
            if (left < this.size() && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < this.size() && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}