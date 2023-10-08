(function() {try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode(""));
    elementStyle.id = "";
    document.head.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injected-by-js', e);
  }
})();
(function(i,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("@platform-canvas/basic-text@0.0.1/@vis-three/convenient")):typeof define=="function"&&define.amd?define(["@platform-canvas/basic-text@0.0.1/@vis-three/convenient"],n):(i=typeof globalThis<"u"?globalThis:i||self,i.index=n(i.convenient))})(this,function(i){"use strict";class n extends i.CanvasReactor{constructor(t={width:512,height:512,text:"\u9ED8\u8BA4\u6587\u672C",fontSize:"80px",color:"rgb(0, 0, 0)",backgroundColor:"rgb(255, 255, 255)",textAlign:"center",textBaseline:"middle"}){super(t),this.generator=new i.CanvasGenerator,this.canvas=this.generator.getDom(),this.setSize().draw()}setSize(){return this.generator.setSize(this.data.width,this.data.height),this}draw(){return this.generator.clear().draw(t=>{const e=this.data;t.fillStyle=e.backgroundColor,t.fillRect(0,0,e.width,e.height),t.font=`${e.fontSize} sans-serif`,t.fillStyle=e.color,t.textAlign=e.textAlign,t.textBaseline=e.textBaseline,t.fillText(e.text,e.width/2,e.height/2)}),this}}return n});
