function mincost(arr)
{
  const heap = [...arr].sort((a, b) => a - b);
  let totalCost = 0;

  while (heap.length > 1) {
    const first = heap.shift();
    const second = heap.shift();

    const cost = first + second;
    totalCost += cost;

    let i = 0;
    while (i < heap.length && heap[i] < cost) i++;
    heap.splice(i, 0, cost);
  }

  return totalCost;
}

module.exports = mincost;