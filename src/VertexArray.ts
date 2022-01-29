export default class VertexArray {
    handle: WebGLVertexArrayObject
    constructor(
        gl: WebGL2RenderingContext
    ) {
        this.handle = gl.createVertexArray();
    }

    bind(gl: WebGL2RenderingContext) {
        gl.bindVertexArray(this.handle);
    }
    enableVertexAttribArray(
        gl: WebGL2RenderingContext,
        index: number) {
        gl.enableVertexAttribArray(index);
    }
}