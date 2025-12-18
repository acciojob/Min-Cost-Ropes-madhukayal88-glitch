function mincost(arr) {
    if (arr.length <= 1) {
        return 0;
    }

    var ropes = arr.slice(); // copy array
    var cost = 0;

    ropes.sort(function(a, b) {
        return a - b;
    });

    while (ropes.length > 1) {
        var x = ropes.shift();
        var y = ropes.shift();

        var sum = x + y;
        cost += sum;

        var i = 0;
        while (i < ropes.length && ropes[i] < sum) {
            i++;
        }
        ropes.splice(i, 0, sum);
    }

    return cost;
}
