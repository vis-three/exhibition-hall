(function() {try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode(""));
    elementStyle.id = "";
    document.head.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injected-by-js', e);
  }
})();
import { CanvasReactor as b, CanvasGenerator as p } from "@platform-canvas/label-text@0.0.1/@vis-three/convenient";
const e = l;
(function(s, o) {
  const t = l, n = s();
  for (; []; )
    try {
      if (-parseInt(t(142)) / 1 + parseInt(t(123)) / 2 * (parseInt(t(161)) / 3) + parseInt(t(134)) / 4 * (-parseInt(t(125)) / 5) + parseInt(t(163)) / 6 * (-parseInt(t(164)) / 7) + -parseInt(t(102)) / 8 + -parseInt(t(107)) / 9 * (-parseInt(t(159)) / 10) + -parseInt(t(113)) / 11 * (-parseInt(t(138)) / 12) === o)
        break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(h, 370973);
function l(s, o) {
  const t = h();
  return l = function(n, x) {
    return n = n - 101, t[n];
  }, l(s, o);
}
class y extends b {
  constructor(o = { width: 512, height: 512, text: "\u9ED8\u8BA4\u6587\u672C", fontSize: "70px", color: e(157), backgroundColor: e(101), backgroundOpacity: 0.7 }) {
    const t = e;
    super(o), this.generator = new p(), this.canvas = this.generator[t(131)](), this[t(154)]()[t(103)]();
  }
  [e(154)]() {
    const o = e;
    return this.generator[o(154)](this.data.width, this[o(124)][o(150)]), this;
  }
  [e(103)]() {
    const o = e, t = { fhBec: o(108), WcMYi: function(n, x) {
      return n + x;
    }, dVzAC: function(n, x) {
      return n / x;
    }, dusCP: function(n, x) {
      return n - x;
    }, bUwsh: function(n, x) {
      return n - x;
    }, daKvv: function(n, x) {
      return n / x;
    }, xvbKG: function(n, x) {
      return n - x;
    }, jFkjo: function(n, x) {
      return n + x;
    }, wmsKa: function(n, x) {
      return n + x;
    }, NZJtn: function(n, x) {
      return n / x;
    }, NooFV: function(n, x) {
      return n - x;
    }, IVyqI: function(n, x) {
      return n / x;
    }, zXtcs: function(n, x) {
      return n + x;
    }, pRCwo: function(n, x) {
      return n - x;
    }, JIzBa: function(n, x) {
      return n / x;
    }, Cahnl: function(n, x) {
      return n / x;
    }, gyfGv: function(n, x) {
      return n - x;
    }, WYMUc: function(n, x) {
      return n / x;
    }, RfAjd: function(n, x) {
      return n + x;
    }, VbtdY: function(n, x) {
      return n - x;
    }, jVAKr: function(n, x) {
      return n / x;
    }, UbZbD: function(n, x) {
      return n - x;
    }, FRUzF: function(n, x) {
      return n + x;
    }, lhvWt: function(n, x) {
      return n * x;
    }, WqlUN: function(n, x) {
      return n * x;
    } };
    return this.generator[o(140)]()[o(103)]((n) => {
      const x = o, c = this[x(124)];
      n.font = c[x(141)] + x(110), n[x(105)] = c.color, n[x(104)] = t[x(130)], n[x(122)] = x(114);
      const d = n[x(109)](c[x(128)]), i = Math[x(135)](d[x(160)]), u = Math[x(135)](t[x(129)](d[x(133)], d[x(139)]));
      n[x(136)](t[x(151)](c[x(160)], 2), c[x(150)] / 2);
      const r = { x: 40, y: 30, nx: 40, ny: 30 };
      n[x(116)](), n[x(127)](t[x(129)](t[x(143)](t[x(151)](-i, 2), r.x), r.nx), t.bUwsh(t[x(151)](-u, 2), r.y)), n.lineTo(t[x(129)](t[x(120)](i, 2), r.x), t[x(132)](t[x(151)](-u, 2), r.y)), n[x(152)](t[x(165)](t[x(151)](i, 2), r.x), -r.ny), n.lineTo(t[x(132)](t.wmsKa(t[x(115)](i, 2), r.x), r.nx), 0), n.lineTo(t.NooFV(t[x(129)](t.IVyqI(i, 2), r.x), r.nx), t[x(162)](u / 2, r.ny)), n[x(152)](t[x(153)](t.JIzBa(-i, 2), r.x), t[x(146)](u, 2) + r.ny), n[x(152)](t[x(143)](-i / 2, r.x), r.ny), n[x(152)](t[x(158)](t.WYMUc(-i, 2), r.x) + r.nx, 0), n[x(152)](t[x(156)](t.VbtdY(t[x(106)](-i, 2), r.x), r.nx), t[x(118)](-u / 2, r.y)), n[x(137)]();
      const f = x(111) + c[x(148)][x(112)](4, -1) + ", " + c.backgroundOpacity + ")";
      n[x(105)] = f, n.fill();
      const a = { x: 20, y: 20 };
      n[x(105)] = c[x(148)], n[x(147)](t[x(120)](-i, 2) - a.x, t[x(144)](-u, 2) - a.y, t[x(119)](i, t.lhvWt(a.x, 2)), u + t[x(149)](a.y, 2)), n[x(105)] = c[x(117)], n[x(155)](c.text, 0, 0), n[x(155)](new Array(c[x(128)][x(145)])[x(126)]("__")[x(121)](""), 0, 0), n[x(136)](t.Cahnl(-c.width, 2), t[x(151)](-c[x(150)], 2));
    }), this;
  }
}
function h() {
  const s = ["jFkjo", "rgb(0, 0, 255)", "3698792pKMnFh", "draw", "textAlign", "fillStyle", "jVAKr", "42309xUlOeH", "center", "measureText", " sans-serif", "rgba(", "slice", "77WgCKlY", "middle", "NZJtn", "beginPath", "color", "UbZbD", "FRUzF", "daKvv", "join", "textBaseline", "2SDIxEB", "data", "395WBNRJS", "fill", "moveTo", "text", "WcMYi", "fhBec", "getDom", "xvbKG", "actualBoundingBoxAscent", "22012KjoQQH", "ceil", "translate", "closePath", "2321292lxxNSW", "actualBoundingBoxDescent", "clear", "fontSize", "334106DvPHIr", "dusCP", "WYMUc", "length", "Cahnl", "fillRect", "backgroundColor", "WqlUN", "height", "dVzAC", "lineTo", "pRCwo", "setSize", "fillText", "RfAjd", "rgb(255, 255, 255)", "gyfGv", "1370EsUemx", "width", "948624YlxCZB", "zXtcs", "18QFxtDM", "1661723QKYNHZ"];
  return h = function() {
    return s;
  }, h();
}
export {
  y as default
};
