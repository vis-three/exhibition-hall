(function() {try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode(".svg-icon[data-v-2c45ba7c]{width:100%;height:100%}.platform-table-container[data-v-e57d4cec]{width:100%;height:100%;display:flex;position:relative}.render-mask[data-v-e57d4cec]{position:absolute;pointer-events:none;z-index:-1}.guide-box[data-v-e57d4cec]{width:120px;height:100%;display:flex;flex-direction:column;align-items:center}.guid-icon[data-v-e57d4cec]{width:100px;height:100px;border-radius:50%;border:2px solid rgb(255,173,2);background-color:#0d192b;box-sizing:border-box;display:flex;justify-content:center;align-items:center}.guid-line[data-v-e57d4cec]{width:2px;height:calc(100% - 100px);background-color:#ffad02}.guid-point[data-v-e57d4cec]{width:25px;height:25px;border-radius:50%;background-color:#ffad02}.table-box[data-v-e57d4cec]{width:calc(100% - 100px);display:flex;flex-direction:column}.table-title[data-v-e57d4cec]{margin-bottom:24px;color:#ffad02;font-size:36px;font-weight:700}.table-line[data-v-e57d4cec]{width:100%;height:1px;background-color:#ffad02;margin-bottom:24px}.table-main[data-v-e57d4cec]{width:100%;height:70%;position:relative}.table-main>.echarts-main[data-v-e57d4cec]{margin-top:48px;margin-left:24px;width:calc(100% - 24px);height:calc(100% - 48px)}.table-main>.svg-icon[data-v-e57d4cec]{position:absolute;top:0;left:0;pointer-events:none}"));
    elementStyle.id = "";
    document.head.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injected-by-js', e);
  }
})();
import * as g from "@platform-component/table@0.0.1/echarts";
var y = function() {
  var e = this, i = e.$createElement, t = e._self._c || i;
  return [t("svg", {
    staticClass: "svg-icon",
    style: {
      width: e.width,
      height: e.height
    },
    attrs: {
      "aria-hidden": "true"
    }
  }, [t("use", {
    attrs: {
      "xlink:href": `#icon-${e.code}`,
      fill: e.color
    }
  })])];
}, b = [];
function u(e, i, t, c, a, r, d, f) {
  var o = typeof e == "function" ? e.options : e;
  i && (o.render = i, o.staticRenderFns = t, o._compiled = !0), c && (o.functional = !0), r && (o._scopeId = "data-v-" + r);
  var n;
  if (d ? (n = function(s) {
    s = s || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !s && typeof __VUE_SSR_CONTEXT__ < "u" && (s = __VUE_SSR_CONTEXT__), a && a.call(this, s), s && s._registeredComponents && s._registeredComponents.add(d);
  }, o._ssrRegister = n) : a && (n = f ? function() {
    a.call(
      this,
      (o.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), n)
    if (o.functional) {
      o._injectStyles = n;
      var m = o.render;
      o.render = function(p, _) {
        return n.call(_), m(p, _);
      };
    } else {
      var l = o.beforeCreate;
      o.beforeCreate = l ? [].concat(l, n) : [n];
    }
  return {
    exports: e,
    options: o
  };
}
const M = {
  props: {
    code: {
      type: String,
      default: "chain"
    },
    color: {
      type: String,
      default: "white"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    }
  }
}, h = {};
var w = /* @__PURE__ */ u(
  M,
  y,
  b,
  !1,
  L,
  "2c45ba7c",
  null,
  null
);
function L(e) {
  for (let i in h)
    this[i] = h[i];
}
const z = /* @__PURE__ */ function() {
  return w.exports;
}();
var k = function() {
  var e = this, i = e.$createElement, t = e._self._c || i;
  return t("div", {
    ref: "container",
    staticClass: "platform-table-container"
  }, [t("div", {
    staticClass: "guide-box"
  }, [t("div", {
    staticClass: "guid-icon"
  }, [t("svg-icon", {
    attrs: {
      code: e.icon,
      width: "75%",
      height: "75%"
    }
  })], 1), t("div", {
    staticClass: "guid-line"
  }), t("div", {
    staticClass: "guid-point"
  })]), t("div", {
    staticClass: "table-box"
  }, [t("div", {
    staticClass: "table-title"
  }, [e._v(e._s(e.title))]), t("div", {
    staticClass: "table-line"
  }), t("div", {
    staticClass: "table-main"
  }, [t("div", {
    ref: "echartsDom",
    staticClass: "echarts-main"
  }), t("svg-icon", {
    attrs: {
      code: "background",
      color: ""
    }
  })], 1)])]);
}, D = [];
const C = {
  components: {
    svgIcon: z
  },
  data() {
    return {
      title: "\u8868\u683C\u6807\u9898",
      icon: "chain",
      url: "",
      data: {
        title: {
          text: "ECharts \u5165\u95E8\u793A\u4F8B",
          textStyle: {
            color: "white"
          }
        },
        tooltip: {},
        legend: {
          data: ["\u9500\u91CF"],
          textStyle: {
            color: "white"
          }
        },
        xAxis: {
          data: ["\u886C\u886B", "\u7F8A\u6BDB\u886B", "\u96EA\u7EBA\u886B", "\u88E4\u5B50", "\u9AD8\u8DDF\u978B", "\u889C\u5B50"]
        },
        yAxis: {},
        series: [
          {
            name: "\u9500\u91CF",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ],
        textStyle: {
          color: "white"
        }
      },
      cache: {
        data: {
          title: {
            text: "ECharts \u5165\u95E8\u793A\u4F8B",
            textStyle: {
              color: "white"
            }
          },
          tooltip: {},
          legend: {
            data: ["\u9500\u91CF"],
            textStyle: {
              color: "white"
            }
          },
          xAxis: {
            data: ["\u886C\u886B", "\u7F8A\u6BDB\u886B", "\u96EA\u7EBA\u886B", "\u88E4\u5B50", "\u9AD8\u8DDF\u978B", "\u889C\u5B50"]
          },
          yAxis: {},
          series: [
            {
              name: "\u9500\u91CF",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20]
            }
          ],
          textStyle: {
            color: "white"
          }
        }
      }
    };
  },
  methods: {},
  mounted() {
    const e = g.init(this.$refs.echartsDom);
    this.cache.echarts = e, this.$watch(
      "url",
      async (i) => {
        if (!i)
          e.setOption(this.cache.data);
        else
          try {
            const c = await (await fetch(i)).json();
            this.data = c;
          } catch (t) {
            console.warn(t);
          }
      },
      { immediate: !0 }
    ), this.$watch(
      "data",
      async (i) => {
        i ? e.setOption(i) : e.setOption(this.cache.data);
      },
      { immediate: !0 }
    ), new ResizeObserver(() => {
      e.resize();
    }).observe(this.$refs.container);
  },
  beforeDestroy() {
  }
}, v = {};
var I = /* @__PURE__ */ u(
  C,
  k,
  D,
  !1,
  x,
  "e57d4cec",
  null,
  null
);
function x(e) {
  for (let i in v)
    this[i] = v[i];
}
const X = /* @__PURE__ */ function() {
  return I.exports;
}();
if (typeof window < "u") {
  let e = function() {
    var i = document.body, t = document.getElementById("__svg__icons__dom__");
    t || (t = document.createElementNS("http://www.w3.org/2000/svg", "svg"), t.style.position = "absolute", t.style.width = "0", t.style.height = "0", t.id = "__svg__icons__dom__", t.setAttribute("xmlns", "http://www.w3.org/2000/svg"), t.setAttribute("xmlns:link", "http://www.w3.org/1999/xlink")), t.innerHTML = '<symbol  viewBox="0 0 1920 1140" id="icon-background"><style>#icon-background .st1{fill:#f5a817}#icon-background .st2{fill:#71c7d5}</style><radialGradient id="icon-background_XMLID_57_" cx="967.151" cy="588.533" r="731.293" gradientTransform="matrix(1.0451 0 0 1.1188 -51.75 -90.23)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#171c61;stop-opacity:.1" /><stop offset="1" style="stop-color:#171c61;stop-opacity:.1" /></radialGradient><path id="icon-background_XMLID_3_" style="fill:url(#icon-background_XMLID_57_)" d="M1755.5 12.9H763.4l-135 60.6h-527l-90.6 77v861.7l133.7 111.3h1672.1l90.7-81.3V131.8z" /><path id="icon-background_XMLID_1_" class="st1" d="M1907.3 103.7V8.4h-116.2z" /><path id="icon-background_XMLID_2_" class="st1" d="M5 1047.2v80.8h94.2z" /><path id="icon-background_XMLID_4_" class="st1" d="M76.6 69H5v63.8z" /><path id="icon-background_XMLID_6_" class="st1" d="M374.9 51.1H5V8.4h384.8z" /><g id="icon-background_XMLID_13_"><path id="icon-background_XMLID_17_" class="st2" d="m542.1 8.4-17.6 42.7h38l17.6-42.7z" /><path id="icon-background_XMLID_18_" class="st2" d="m585.3 8.4-17.6 42.7h38l17.6-42.7z" /><path id="icon-background_XMLID_19_" class="st2" d="m628.8 8.4-17.6 42.7h38l17.6-42.7z" /><path id="icon-background_XMLID_20_" class="st2" d="m496.1 8.4-17.6 42.7h38l17.6-42.7z" /><path id="icon-background_XMLID_21_" class="st2" d="m451.1 8.4-17.6 42.7h38.1l17.5-42.7z" /><path id="icon-background_XMLID_22_" class="st2" d="m406.2 8.4-17.6 42.7h38l17.6-42.7z" /></g><g id="icon-background_XMLID_5_"><path id="icon-background_XMLID_14_" class="st2" d="M1818.2 1128H142.8l-1-1.1-.4-.4L6.6 1014V148.8l93-79.8h527.8L762.3 8.4h994.9l1.2 1.3 153.1 120.2v914.3l-93.3 83.8zm-1672-9H1815l88.1-78.8V133.7L1753.8 17.4H764.4L629.5 78H103.3L15 152.3v858L146.2 1119z" /></g></symbol><symbol  viewBox="0 0 500 500" id="icon-chain"><path d="M13.8 91.4v317.3h141V91.4h-141zm126 302.2h-111V106.4h111v287.2zM343.6 91.4v317.3h141V91.4h-141zm126 302.2h-111V106.4h111v287.2zM174.1 91.4v317.3h141V91.4h-141zm126 302.2h-111V106.4h111v287.2zM10.3 432.5h89.8v40.7h122.2v-40.7h53.4v40.7h122.2v-40.7h91.6v-15H10.3v15zm197.1 25.7h-92.2v-25.7h92.2v25.7zm175.7 0h-92.2v-25.7h92.2v25.7zM421.6 67.5V37h-15v30.5H252.1V37h-15v30.5H106.5V37h-15v30.5H10.3v15h479.4v-15z" /></symbol><symbol  viewBox="0 0 500 500" id="icon-home"><style>#icon-home .st0,#icon-home .st1{fill:#fff;stroke:#000;stroke-width:15;stroke-miterlimit:10}#icon-home .st1{fill:none}</style><g id="icon-home_XMLID_3_"><path id="icon-home_XMLID_13_" d="M478.4 248.5 250 20.1 21.6 248.5 11 237.9 250-1.2l239 239.1z" /></g><g id="icon-home_XMLID_7_"><path id="icon-home_XMLID_12_" d="M446.3 497.4H53.7V238.1h15v244.3h362.6V238.1h15z" /></g><g id="icon-home_XMLID_10_"><path id="icon-home_XMLID_11_" d="M306.5 458.1h-15V245.6h-83v212.5h-15V230.6h113z" /></g></symbol>', i.insertBefore(t, i.lastChild);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
}
export {
  X as default
};
