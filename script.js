function mincost(arr) {
    var cost = 0;

    while (arr.length > 1) {
        arr.sort(function(a, b) {
            return a - b;
        });

        var first = arr.shift();
        var second = arr.shift();

        var sum = first + second;
        cost += sum;

        arr.push(sum);
    }

    return cost;
}
