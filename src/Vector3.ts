export default class Vector3 {
    x = 0;
    y = 0;
    z = 0;
    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    normalized(): Vector3 {
        let len = this.length();
        return Vector3.divide(this, new Vector3(len, len, len));
    }

    static add(a: Vector3, b: Vector3) {
        return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
    }
    static addn(a: Vector3, b: number) {
        return new Vector3(a.x + b, a.y + b, a.z + b);
    }

    static subtract(a: Vector3, b: Vector3) {
        return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
    }
    static subtractn(a: Vector3, b: number) {
        return new Vector3(a.x - b, a.y - b, a.z - b);
    }

    static multiply(a: Vector3, b: Vector3) {
        return new Vector3(a.x * b.x, a.y * b.y, a.z * b.z);
    }
    static multiplyn(a: Vector3, b: number) {
        return new Vector3(a.x * b, a.y * b, a.z * b);
    }

    static divide(a: Vector3, b: Vector3) {
        return new Vector3(a.x / b.x, a.y / b.y, a.z / b.z);
    }
    static dividen(a: Vector3, b: number) {
        return new Vector3(a.x / b, a.y / b, a.z / b);
    }
}
