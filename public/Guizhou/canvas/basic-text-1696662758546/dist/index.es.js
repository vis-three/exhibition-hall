(function() {try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode(""));
    elementStyle.id = "";
    document.head.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injected-by-js', e);
  }
})();
import { CanvasReactor as i, CanvasGenerator as r } from "@platform-canvas/basic-text@0.0.1/@vis-three/convenient";
class n extends i {
  constructor(e = {
    width: 512,
    height: 512,
    text: "\u9ED8\u8BA4\u6587\u672C",
    fontSize: "80px",
    color: "rgb(0, 0, 0)",
    backgroundColor: "rgb(255, 255, 255)",
    textAlign: "center",
    textBaseline: "middle"
  }) {
    super(e), this.generator = new r(), this.canvas = this.generator.getDom(), this.setSize().draw();
  }
  setSize() {
    return this.generator.setSize(this.data.width, this.data.height), this;
  }
  draw() {
    return this.generator.clear().draw((e) => {
      const t = this.data;
      e.fillStyle = t.backgroundColor, e.fillRect(0, 0, t.width, t.height), e.font = `${t.fontSize} sans-serif`, e.fillStyle = t.color, e.textAlign = t.textAlign, e.textBaseline = t.textBaseline, e.fillText(t.text, t.width / 2, t.height / 2);
    }), this;
  }
}
export {
  n as default
};
