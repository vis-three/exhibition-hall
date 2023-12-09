var i = t;
function t(e, n) {
  var x = r();
  return t = function(a, o) {
    a = a - 254;
    var f = x[a];
    return f;
  }, t(e, n);
}
function r() {
  var e = ["uvDiffuseShader", `
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
    }`, "5637606kwDHuq", "1369714RAkPXB", "5HNiTpG", "3yOFnic", "6811376BbteiO", "1288328wOATNv", "1931553CSWwrb", "7UePRqG", "15277710OtzDMb", "4993768qCdBnA", `
    varying vec2 vUv;

    void main () {

      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`];
  return r = function() {
    return e;
  }, r();
}
(function(e, n) {
  for (var x = t, a = e(); []; )
    try {
      var o = -parseInt(x(259)) / 1 + parseInt(x(255)) / 2 * (parseInt(x(257)) / 3) + -parseInt(x(258)) / 4 + -parseInt(x(256)) / 5 * (-parseInt(x(254)) / 6) + parseInt(x(261)) / 7 * (parseInt(x(263)) / 8) + parseInt(x(260)) / 9 + parseInt(x(262)) / 10;
      if (o === n)
        break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(r, 999895);
const v = { name: i(265), uniforms: { time: { value: 0 }, width: { value: 0.5 }, color: { value: { r: 1, g: 1, b: 1 } }, center: { value: { x: 0.5, y: 0.5 } }, multiply: { value: 2 } }, vertexShader: i(264), fragmentShader: i(266) };
export {
  v as default
};
