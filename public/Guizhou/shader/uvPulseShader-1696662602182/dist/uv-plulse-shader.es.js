const e = {
  name: "uvPulseShader",
  uniforms: {
    time: { value: 0 },
    width: { value: 0.5 },
    color: {
      value: {
        r: 1,
        g: 0,
        b: 0
      }
    },
    center: {
      value: {
        x: 0.5,
        y: 0.5
      }
    },
    fade: {
      value: !0
    },
    outFade: {
      value: !1
    }
  },
  vertexShader: `
    varying vec2 vUv;

    void main () {

      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: `
    uniform float width;
    uniform float time;
    uniform vec3 color;
    uniform vec2 center;
    uniform bool fade;
    uniform bool outFade;

    varying vec2 vUv;

    void main () {
      // 根据uTime求出百分比
      float deg = mod(degrees(time), 360.0);
      if (deg > 0.0 && deg < 180.0) {
        discard;
      }

      float percent = cos(time);
      float distancePercent = distance(center, vUv);

      // 从外向里
      if (distancePercent > 0.5) {
        discard;
      }

      if (distancePercent < percent) {
        discard;
      }

      if (distancePercent - percent > width) {
        discard;
      }

      float opacity = 1.0;

      if (fade) {
        opacity = 1.0 - (width - (distancePercent - percent)) / width;
      }

      if (outFade) {
        opacity = 1.0 - opacity;
      }
 
      gl_FragColor = vec4(color, opacity);
    }`
};
export {
  e as default
};
