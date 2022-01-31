import Shader from './Shader';
import Matrix4 from './Matrix4';
export default class ShaderProgram {
    handle: WebGLProgram;
    shaders: Shader[];
    constructor(
        gl: WebGL2RenderingContext,
        shaders: Shader[]
    ) {
        this.handle = gl.createProgram();
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
    setMatrix4(gl: WebGL2RenderingContext, name: string, transpose: boolean, data: Matrix4) {
        gl.uniformMatrix4fv(gl.getUniformLocation(this.handle, name), transpose, data.values);
    }
}
