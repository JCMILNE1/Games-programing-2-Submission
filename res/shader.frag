
#version 120

varying vec2 texCoord0;
varying vec3 normal0;

uniform sampler2D diffuselight;

void main()
{
	gl_FragColor = texture2D(diffuselight, texCoord0)* clamp(dot(-vec3(0,0,1), normal0), 0.0, 1.0);
}
