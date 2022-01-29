import Shader from './Shader'
export default class ShaderProgram {
    handle: WebGLProgram;
    shaders: Shader[];
    constructor(
        gl: WebGL2RenderingContext,
        shaders: Shader[]
    ) {
        this.handle = gl.createProgram();
        gl.useProgram(this.handle);
        this.shaders = shaders;
        for (let i = 0; i < shaders.length; i++) {
            let shader = shaders[i];
            shader.compile(gl);
            gl.attachShader(this.handle, shader.handle);
        }
        gl.linkProgram(this.handle);
    }
    use(gl: WebGL2RenderingContext) {
        gl.useProgram(this.handle);
    }
}
