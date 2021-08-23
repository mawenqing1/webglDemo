export class MathLib2D extends Array {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    };

    set x(v) {
        this[0] = v;
    };

    set y(v) {
        this[1] = v;
    };

    get x() {
        return this[0];
    };

    get y() {
        return this[1];
    };

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    get angle() {
        return Math.atan2(this.y, this.x);
    };

    copy() {
        return new MathLib2D(this.x, this.y);
    };

    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    };

    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    };

    scale(c) {
        this.x *= c;
        this.y *= c;
        return this;
    };

    mul(v) {
        return this.x * v.x + this.y * v.y;
    };

    rotate(rad) {
        const c = Math.cos(rad),
            s = Math.sin(rad);
        const [x, y] = this;

        this.x = x * c + y * -s;
        this.y = x * s + y * c;

        return this;
    }

}