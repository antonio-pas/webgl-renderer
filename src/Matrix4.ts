import Vector3 from "./Vector3";
export default class Matrix4 {
    values: Float32Array;
    constructor() {
        this.values = new Float32Array([
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ]);
    }
    // [ 0,  1,  2,  3,
    //   4,  5,  6,  7
    //   8,  9,  10, 11,
    //   12, 13, 14, 15
    // ]

    // [ x, 0, 0, 0,
    //   0, y, 0, 0,
    //   0, 0, z, 0,
    //   0, 0, 0, w
    // ]
    scale(scalar: Vector3) {
        this.values[0] = scalar.x;
        this.values[5] = scalar.y;
        this.values[10] = scalar.z;
    }
    // [ 0, 0, 0, x,
    //   0, 0, 0, y,
    //   0, 0, 0, z,
    //   0, 0, 0, w
    // ]
    translate(position: Vector3) {
        this.values[3] = position.x;
        this.values[7] = position.y;
        this.values[12] = position.z;
    }
}
