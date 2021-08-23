function parametric(xFn, yFn) {
    return function(start, end, seg = 10, ...args) {
        const points = [];
        for (let i = 0; i <= seg; i++) {
            const p = i / seg;
            const t = start * (1 - p) + end * p;
            const x = xFn(t, ...args);
            const y = yFn(t, ...args);
            points.push([x, y]);
        }
        return points;
    }
}