import{n as i,e as r}from"./index-d51d56cb.js";var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:s.showLoading,expression:"showLoading"}],staticClass:"loadingManager-container"},[a("div",{staticClass:"loadingManage-main"},[s.loadError?a("div",{staticClass:"loadingManager-close",on:{click:s.close}},[a("vis-icon",{attrs:{code:"#iconguanbi"}})],1):s._e(),a("div",{staticClass:"progress-title"},[a("vis-icon",{attrs:{code:"#iconwenjian"}}),s._v(" 正在加载："+s._s(s.title)+" ")],1),a("div",{staticClass:"overall-progress-box"},[a("div",{staticClass:"overall-progress"},[a("div",{staticClass:"overall-progress-main",style:{width:`${s.overllProgress}%`,backgroundColor:s.loadError?"#FF4C4C":null}})]),a("span",{staticClass:"overall-number",domProps:{textContent:s._s(`${s.loadSuccess}/${s.loadTotal}`)}})]),a("div",{staticClass:"detail-progress-box"},[a("div",{staticClass:"detail-title",on:{click:function(){s.showDetail=!s.showDetail}}},[a("span",[s._v("展示详情")]),a("vis-icon",{style:{transform:s.showDetail?"rotate(0)":"rotate(-90deg)"},attrs:{code:"#iconxiala"}})],1),s.showDetail?a("div",{staticClass:"detail-message"},s._l(s.loadDetailMap,function(o,l){return a("div",{key:l,staticClass:"detail-item",style:{color:o.error?"#FF4C4C":null}},[a("span",{staticClass:"detail-url",domProps:{textContent:s._s(o.url)}}),o.error?a("span",{domProps:{textContent:s._s(o.message)}}):[a("span",{staticClass:"detail-seat"}),a("span",{staticClass:"detail-number",domProps:{textContent:s._s(`${o.progress*100}%`)}})]],2)}),0):s._e()])])])},d=[];const c={data(){return{showLoading:!1,showDetail:!0,title:"",loadTotal:0,loadSuccess:0,loadError:0,loadDetailMap:{}}},computed:{overllProgress(){return this.loadTotal===0?0:this.loadSuccess/this.loadTotal*100}},methods:{close(){this.showLoading=!1}},mounted(){const s=r.loaderManager;s.addEventListener("beforeLoad",t=>{!this.showLoading&&(this.showLoading=!0)}),s.addEventListener("loading",t=>{!this.showLoading&&(this.showLoading=!0),this.loadTotal=t.loadTotal,this.loadSuccess=t.loadSuccess,this.loadError=t.loadError}),s.addEventListener("loaded",t=>{this.loadTotal=t.loadTotal,this.loadSuccess=t.loadSuccess,this.loadError=t.loadError,setTimeout(()=>{this.showLoading=!1},1e3)}),s.addEventListener("detailLoaded",t=>{this.title=t.url,this.loadDetailMap=s.getLoadDetailMap()})}},e={};var u=i(c,n,d,!1,g,"64e951de",null,null);function g(s){for(let t in e)this[t]=e[t]}const v=function(){return u.exports}();export{v as default};
