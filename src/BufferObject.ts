export default class BufferObject {
    handle: WebGLBuffer;
    kind: number;
    constructor(
        gl: WebGL2RenderingContext,
        kind: number) {
        this.handle = gl.createBuffer();
        this.kind = kind;
    }

    bind(gl: WebGL2RenderingContext) {
        gl.bindBuffer(this.kind, this.handle);
    }
    uploadData(
        gl: WebGL2RenderingContext,
        data: BufferSource,
        usage: number) {
        gl.bufferData(this.kind, data, usage);
    }
}
