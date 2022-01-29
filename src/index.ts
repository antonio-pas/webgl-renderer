import BufferObject from './BufferObject';
import VertexArray from './VertexArray';
import Shader from './Shader';
import ShaderProgram from './ShaderProgram';
const canvas = document.querySelector("#glcanv") as HTMLCanvasElement;
const width  = canvas.width  = window.innerWidth;
const height = canvas.height = window.innerHeight;
const gl     = canvas.getContext('webgl2');

gl.clearColor(0.1, 0.1, 0.1, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.viewport(0, 0, width, height);

const positions = [
    -0.5, -0.5, 0.0,
     0.5, -0.5, 0.0,
     0.0,  0.5, 0.0
];
const vsSource = `#version 300 es
precision highp float;
in vec3 a_position;

void main() {
    gl_Position = vec4(a_position, 1.0);
}
`;
const fsSource = `#version 300 es
precision highp float;
out vec4 fragColor;
void main() {
    fragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`;


const vsh = new Shader(gl, gl.VERTEX_SHADER, vsSource);
const fsh = new Shader(gl, gl.FRAGMENT_SHADER, fsSource);
const shaderProgram = new ShaderProgram(
    gl,
    [vsh, fsh]
);
const vao = new VertexArray(gl);
vao.bind(gl);
const vbo = new BufferObject(gl, gl.ARRAY_BUFFER);
vbo.bind(gl);

vbo.uploadData(gl, new Float32Array(positions), gl.STATIC_DRAW);
vao.enableVertexAttribArray(gl, 0);
vao.vertexAttribPointer(
    gl,
    0,
    3,
    gl.FLOAT,
    false,
    0,
    0
);

shaderProgram.use(gl);
gl.drawArrays(gl.TRIANGLES, 0, 3);
