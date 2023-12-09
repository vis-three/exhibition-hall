(function(t,e){typeof exports=="object"&&typeof module<"u"?module.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self,t["uv-diffuse-shader"]=e())})(this,function(){"use strict";var t=e;function e(n,r){var x=i();return e=function(a,f){a=a-254;var o=x[a];return o},e(n,r)}function i(){var n=["uvDiffuseShader",`
    uniform float width;
    uniform float time;
    uniform vec3 color;
    uniform vec2 center;
    uniform float multiply;

    varying vec2 vUv;

    void main () {

      float offset = distance(center, vUv);
      float percent = (sin(offset * multiply * 10.0 - time) + 1.0) / 2.0;

      if (percent < 0.0) {
        discard;
      }


      float opacity = percent < 0.2 ? 0.2 : percent;

 
      gl_FragColor = vec4(color, opacity);
    }`,"5637606kwDHuq","1369714RAkPXB","5HNiTpG","3yOFnic","6811376BbteiO","1288328wOATNv","1931553CSWwrb","7UePRqG","15277710OtzDMb","4993768qCdBnA",`
    varying vec2 vUv;

    void main () {

      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`];return i=function(){return n},i()}return function(n,r){for(var x=e,a=n();[];)try{var f=-parseInt(x(259))/1+parseInt(x(255))/2*(parseInt(x(257))/3)+-parseInt(x(258))/4+-parseInt(x(256))/5*(-parseInt(x(254))/6)+parseInt(x(261))/7*(parseInt(x(263))/8)+parseInt(x(260))/9+parseInt(x(262))/10;if(f===r)break;a.push(a.shift())}catch{a.push(a.shift())}}(i,999895),{name:t(265),uniforms:{time:{value:0},width:{value:.5},color:{value:{r:1,g:1,b:1}},center:{value:{x:.5,y:.5}},multiply:{value:2}},vertexShader:t(264),fragmentShader:t(266)}});
