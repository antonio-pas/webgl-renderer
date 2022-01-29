export default class Shader {
    kind: number;
    handle: WebGLShader;
    source: string;
    constructor(
        gl: WebGL2RenderingContext,
        kind: number,
        source: string
    ) {
        this.handle = gl.createShader(kind);
        this.kind = kind;
        this.source = source;
        gl.shaderSource(this.handle, this.source);
    }
    compile(
        gl: WebGL2RenderingContext
    ) {
        gl.compileShader(this.handle);
    }
}