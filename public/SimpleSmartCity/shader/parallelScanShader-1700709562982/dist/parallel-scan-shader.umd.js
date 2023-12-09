(function(i,a){typeof exports=="object"&&typeof module<"u"?module.exports=a():typeof define=="function"&&define.amd?define(a):(i=typeof globalThis<"u"?globalThis:i||self,i["parallel-scan-shader"]=a())})(this,function(){"use strict";var i=a;function a(e,n){var x=t();return a=function(o,r){o=o-178;var l=x[o];return l},a(e,n)}function t(){var e=[`
  varying vec3 vPosition;

  void main() { 
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  } `,"222808iLgWhn","7702712skuZoA","700920GEaimv","7HwqPPy","1140117LOqhAS","3601380EDDexw",`
  uniform float time;
  uniform vec3 color;
  uniform float minRange;
  uniform float maxRange;
  uniform float width;
  uniform float speed;
  uniform float opactiy;
  uniform bool fade;
  varying vec3 vPosition;

  float lerp(float min, float max, float t) {
    return (1.0 - t) * min + t * max;
}
  void main() {

    float iTime = mod(time * speed, 1.0);
    float glowPosition = lerp(minRange, maxRange, iTime); 

    float alpha = 0.0;

    if (vPosition.x > glowPosition && vPosition.x < (glowPosition + width / 2.0)) {
      alpha = fade ? 1.0 - smoothstep(glowPosition, (glowPosition + width / 2.0), vPosition.x) : 1.0;
    } else if (vPosition.x < glowPosition && vPosition.x > (glowPosition - width / 2.0)) {
      alpha = fade ? smoothstep((glowPosition - width / 2.0), glowPosition, vPosition.x) : 1.0;
    }else {
      discard;
    }

      gl_FragColor = vec4(color, alpha * opactiy);
  }
`,"1291005aXELvX","2618702DIkUPt"];return t=function(){return e},t()}return function(e,n){for(var x=a,o=e();[];)try{var r=parseInt(x(186))/1+-parseInt(x(182))/2+-parseInt(x(178))/3+-parseInt(x(184))/4+parseInt(x(181))/5+parseInt(x(179))/6+parseInt(x(187))/7*(parseInt(x(185))/8);if(r===n)break;o.push(o.shift())}catch{o.push(o.shift())}}(t,777098),{name:"parallelScanShader",uniforms:{color:{value:{r:1,g:.95,b:.8}},time:{value:0},opactiy:{value:.8},maxRange:{value:100},minRange:{value:-100},width:{value:60},speed:{value:.5},fade:{value:!![]}},vertexShader:i(183),fragmentShader:i(180)}});