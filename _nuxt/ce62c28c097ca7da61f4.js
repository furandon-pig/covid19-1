(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{307:function(t,e,n){"use strict";e.a=function(data){var t=[],e=new Date,n=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var r=new Date(e["日付"]),o=e["小計"];isNaN(o)||(n+=o,t.push({label:"".concat(r.getMonth()+1,"/").concat(r.getDate()),transition:o,cumulative:n}))})),t}},312:function(t,e,n){"use strict";n(409);var r=n(138),o=(n(34),n(0)),l=n(351),c=o.a.extend({name:"DataSelector",props:{value:{type:String,default:"transition"},targetId:{type:String,default:function(t){return t&&""!==t?t:null}}}}),d=(n(414),n(8)),f=n(44),h=n.n(f),T=n(352),Z=n(493),m=n(420),v=n.n(m),x=n(136),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{staticClass:"DataSelector",attrs:{"aria-controls":t.targetId,value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"transition"===t.value?"true":"false",value:"transition"}},[t._v("\n    "+t._s(t.$t("日別"))+"\n  ")]),t._v(" "),n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"cumulative"===t.value?"true":"false",value:"cumulative"}},[t._v("\n    "+t._s(t.$t("累計"))+"\n  ")])],1)}),[],!1,null,null,null),w=component.exports;h()(component,{VBtn:T.a,VBtnToggle:Z.a}),v()(component,{Ripple:x.a});var y=n(361),D=n(362),V={created:function(){this.canvas=!0},components:{DataView:l.a,DataSelector:w,DataViewBasicInfoPanel:y.a,OpenDataLink:D.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartId:{type:String,default:"time-bar-chart"},chartData:{type:Array,default:function(){return[]}},date:{type:String,required:!0},unit:{type:String,default:""},url:{type:String,default:""}},data:function(){return{dataKind:"transition",canvas:!0}},computed:{displayCumulativeRatio:function(){var t=this.chartData.slice(-1)[0].cumulative,e=this.chartData.slice(-2)[0].cumulative;return this.formatDayBeforeRatio(t-e)},displayTransitionRatio:function(){var t=this.chartData.slice(-1)[0].transition,e=this.chartData.slice(-2)[0].transition;return this.formatDayBeforeRatio(t-e)},displayInfo:function(){return"transition"===this.dataKind?{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:"".concat(this.$t("実績値"),"（").concat(this.$t("前日比"),": ").concat(this.displayTransitionRatio," ").concat(this.unit,"）"),unit:this.unit}:{lText:this.chartData[this.chartData.length-1].cumulative.toLocaleString(),sText:"".concat(this.chartData.slice(-1)[0].label," ").concat(this.$t("累計値"),"（").concat(this.$t("前日比"),": ").concat(this.displayCumulativeRatio," ").concat(this.unit,"）"),unit:this.unit}},displayData:function(){return"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:"#E813A4",borderWidth:0}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:"#E813A4",borderWidth:0}]}},displayOption:function(){var t=this.unit,e={tooltips:{displayColors:!1,callbacks:{label:function(e){return"".concat(parseInt(e.value).toLocaleString()," ").concat(t)},title:function(t,data){return data.labels[t[0].index]}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold",gridLines:{display:!0}},type:"time",time:{unit:"month",parser:"M/D",displayFormats:{month:"MMM"}}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(e,{animation:{duration:0}}),e},scaledTicksYAxisMax:function(){var t="transition"===this.dataKind?"transition":"cumulative",e=this.chartData.map((function(e){return e[t]}));return 1.2*Math.max.apply(Math,Object(r.a)(e))},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"},{text:this.title,value:"0"}]},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign({text:t.displayData.labels[i]},{0:t.displayData.datasets[0].data[i]})}))}},methods:{formatDayBeforeRatio:function(t){var e=t.toLocaleString();switch(Math.sign(t)){case 1:return"+".concat(e);case-1:default:return"".concat(e)}}}},C=o.a.extend(V),_=n(485),k=Object(d.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"button",fn:function(){return[n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),n("bar",{style:{display:t.canvas?"block":"none"},attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,height:240}}),t._v(" "),n("v-data-table",{staticClass:"cardTable",style:{top:"-9999px",position:t.canvas?"fixed":"static"},attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"}})],1)}),[],!1,null,null,null);e.a=k.exports;h()(k,{VDataTable:_.a})},339:function(t){t.exports=JSON.parse('{"date":"2020/04/15 21:00","data":[{"リリース日":"2020-03-22T08:00:00.000Z","居住地":"岡山市","年代":"60代","性別":"女性","退院":"","date":"2020-03-22"},{"リリース日":"2020-03-27T08:00:00.000Z","居住地":"里庄町","年代":"50代","性別":"男性","退院":"◯","date":"2020-03-27"},{"リリース日":"2020-03-28T08:00:00.000Z","居住地":"岡山市","年代":"40代","性別":"男性","退院":"","date":"2020-03-28"},{"リリース日":"2020-03-30T08:00:00.000Z","居住地":"玉野市","年代":"20代","性別":"男性","退院":"","date":"2020-03-30"},{"リリース日":"2020-04-01T08:00:00.000Z","居住地":"早島町","年代":"50代","性別":"男性","退院":"","date":"2020-04-01"},{"リリース日":"2020-04-02T08:00:00.000Z","居住地":"早島町","年代":"40代","性別":"女性","退院":"","date":"2020-04-02"},{"リリース日":"2020-04-02T08:00:00.000Z","居住地":"早島町","年代":"10代","性別":"女性","退院":"","date":"2020-04-02"},{"リリース日":"2020-04-03T08:00:00.000Z","居住地":"岡山市","年代":"60代","性別":"男性","退院":"","date":"2020-04-03"},{"リリース日":"2020-04-03T08:00:00.000Z","居住地":"岡山市","年代":"20代","性別":"女性","退院":"","date":"2020-04-03"},{"リリース日":"2020-04-04T08:00:00.000Z","居住地":"岡山市","年代":"50代","性別":"男性","退院":"","date":"2020-04-04"},{"リリース日":"2020-04-05T08:00:00.000Z","居住地":"岡山市","年代":"50代","性別":"男性","退院":"","date":"2020-04-05"},{"リリース日":"2020-04-07T08:00:00.000Z","居住地":"岡山市","年代":"80代","性別":"男性","退院":"","date":"2020-04-07"},{"リリース日":"2020-04-08T08:00:00.000Z","居住地":"東京都","年代":"30代","性別":"男性","退院":"","date":"2020-04-08"},{"リリース日":"2020-04-08T08:00:00.000Z","居住地":"岡山市","年代":"20代","性別":"男性","退院":"","date":"2020-04-08"},{"リリース日":"2020-04-09T08:00:00.000Z","居住地":"岡山市","年代":"20代","性別":"女性","退院":"","date":"2020-04-09"},{"リリース日":"2020-04-14T08:00:00.000Z","居住地":"岡山市","年代":"70代","性別":"男性","退院":"","date":"2020-04-14"}]}')},340:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));var r=n(18),o=n.n(r),l=function(t){return o()(t).format("YYYY-MM-DDTHH:mm:ss")},c=function(t){return o()(t).format("YYYY-MM-DD")}},341:function(t,e,n){var content=n(411);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("4d5720d6",content,!0,{sourceMap:!1})},342:function(t,e,n){var content=n(415);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("970c2a6c",content,!0,{sourceMap:!1})},343:function(t,e,n){var content=n(422);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("e3e1d1b4",content,!0,{sourceMap:!1})},344:function(t,e,n){var content=n(424);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("08457358",content,!0,{sourceMap:!1})},345:function(t,e,n){var content=n(465);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("435e5f58",content,!0,{sourceMap:!1})},351:function(t,e,n){"use strict";var r=n(0),o=n(340),l=r.a.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},loading:{type:Boolean,required:!1,default:!1}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1}},computed:{formattedDate:function(){return Object(o.b)(this.date)},graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'+this.permalink(!0,!0)+'" frameborder="0"></iframe>';return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/"+this.titleId;return embed&&(e+="?embed=true"),e=this.localePath(e),t&&(e=location.protocol+"//"+location.host+e),e},twitter:function(){var t="https://twitter.com/intent/tweet?text="+this.title+" / "+this.$t("東京都")+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")+"&url="+this.permalink(!0)+"&hashtags=StopCovid19JP,StopCovid19Okayama,岡山コロナ情報";window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u="+this.permalink(!0);window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url="+this.permalink(!0);window.open(t)}}}),c=(n(410),n(8)),d=n(44),f=n.n(d),h=n(296),T=n(492),Z=n(289),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView",attrs:{loading:t.loading}},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header"},[n("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t._t("infoPanel")],2),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-CardText"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("footer-description")],2),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",{staticClass:"Footer-Left"},[t._t("footer"),t._v(" "),n("div",[n("a",{staticClass:"Permalink",attrs:{href:t.permalink()}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.date}))+"\n            ")])])])],2),t._v(" "),"true"!=this.$route.query.embed?n("div",{staticClass:"Footer-Right"},[n("button",{staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n              mdi-close\n            ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v("\n              far fa-clipboard\n            ")]):t._e(),t._v("\n            "+t._s(t.graphEmbedValue)+"\n          ")],1),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[n("picture",[n("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[n("picture",[n("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[n("picture",[n("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])])])]):t._e()]):t._e()])]),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込みコードをコピーしました"))+"\n    ")]),t._v(" "),n("v-footer",{staticClass:"DataView-Footer"},[n("time",{attrs:{datetime:t.date}},[t._v(t._s(t.$t("{date} 更新",{date:t.date})))]),t._v(" "),t._t("footer")],2)],1):t._e()])}),[],!1,null,null,null);e.a=component.exports;f()(component,{VCard:h.a,VFooter:T.a,VIcon:Z.a})},353:function(t){t.exports=JSON.parse('{"date":"2020/04/16 21:00","data":[{"日付":"2020-02-01T08:00:00.000Z","小計":0},{"日付":"2020-02-02T08:00:00.000Z","小計":0},{"日付":"2020-02-03T08:00:00.000Z","小計":1},{"日付":"2020-02-04T08:00:00.000Z","小計":0},{"日付":"2020-02-05T08:00:00.000Z","小計":1},{"日付":"2020-02-06T08:00:00.000Z","小計":0},{"日付":"2020-02-07T08:00:00.000Z","小計":1},{"日付":"2020-02-08T08:00:00.000Z","小計":0},{"日付":"2020-02-09T08:00:00.000Z","小計":1},{"日付":"2020-02-10T08:00:00.000Z","小計":0},{"日付":"2020-02-11T08:00:00.000Z","小計":0},{"日付":"2020-02-12T08:00:00.000Z","小計":0},{"日付":"2020-02-13T08:00:00.000Z","小計":0},{"日付":"2020-02-14T08:00:00.000Z","小計":1},{"日付":"2020-02-15T08:00:00.000Z","小計":0},{"日付":"2020-02-16T08:00:00.000Z","小計":1},{"日付":"2020-02-17T08:00:00.000Z","小計":0},{"日付":"2020-02-18T08:00:00.000Z","小計":1},{"日付":"2020-02-19T08:00:00.000Z","小計":4},{"日付":"2020-02-20T08:00:00.000Z","小計":2},{"日付":"2020-02-21T08:00:00.000Z","小計":4},{"日付":"2020-02-22T08:00:00.000Z","小計":1},{"日付":"2020-02-23T08:00:00.000Z","小計":3},{"日付":"2020-02-24T08:00:00.000Z","小計":1},{"日付":"2020-02-25T08:00:00.000Z","小計":5},{"日付":"2020-02-26T08:00:00.000Z","小計":2},{"日付":"2020-02-27T08:00:00.000Z","小計":3},{"日付":"2020-02-28T08:00:00.000Z","小計":6},{"日付":"2020-02-29T08:00:00.000Z","小計":3},{"日付":"2020-03-01T08:00:00.000Z","小計":3},{"日付":"2020-03-02T08:00:00.000Z","小計":8},{"日付":"2020-03-03T08:00:00.000Z","小計":4},{"日付":"2020-03-04T08:00:00.000Z","小計":15},{"日付":"2020-03-05T08:00:00.000Z","小計":8},{"日付":"2020-03-06T08:00:00.000Z","小計":9},{"日付":"2020-03-07T08:00:00.000Z","小計":7},{"日付":"2020-03-08T08:00:00.000Z","小計":1},{"日付":"2020-03-09T08:00:00.000Z","小計":3},{"日付":"2020-03-10T08:00:00.000Z","小計":9},{"日付":"2020-03-11T08:00:00.000Z","小計":33},{"日付":"2020-03-12T08:00:00.000Z","小計":3},{"日付":"2020-03-13T08:00:00.000Z","小計":9},{"日付":"2020-03-14T08:00:00.000Z","小計":4},{"日付":"2020-03-15T08:00:00.000Z","小計":3},{"日付":"2020-03-16T08:00:00.000Z","小計":6},{"日付":"2020-03-17T08:00:00.000Z","小計":9},{"日付":"2020-03-18T08:00:00.000Z","小計":6},{"日付":"2020-03-19T08:00:00.000Z","小計":9},{"日付":"2020-03-20T08:00:00.000Z","小計":9},{"日付":"2020-03-21T08:00:00.000Z","小計":3},{"日付":"2020-03-22T08:00:00.000Z","小計":4},{"日付":"2020-03-23T08:00:00.000Z","小計":13},{"日付":"2020-03-24T08:00:00.000Z","小計":14},{"日付":"2020-03-25T08:00:00.000Z","小計":6},{"日付":"2020-03-26T08:00:00.000Z","小計":10},{"日付":"2020-03-27T08:00:00.000Z","小計":34},{"日付":"2020-03-28T08:00:00.000Z","小計":15},{"日付":"2020-03-29T08:00:00.000Z","小計":10},{"日付":"2020-03-30T08:00:00.000Z","小計":12},{"日付":"2020-03-31T08:00:00.000Z","小計":20},{"日付":"2020-04-01T08:00:00.000Z","小計":25},{"日付":"2020-04-02T08:00:00.000Z","小計":25},{"日付":"2020-04-03T08:00:00.000Z","小計":36},{"日付":"2020-04-04T08:00:00.000Z","小計":34},{"日付":"2020-04-05T08:00:00.000Z","小計":19},{"日付":"2020-04-06T08:00:00.000Z","小計":17},{"日付":"2020-04-07T08:00:00.000Z","小計":38},{"日付":"2020-04-08T08:00:00.000Z","小計":30},{"日付":"2020-04-09T08:00:00.000Z","小計":31},{"日付":"2020-04-10T08:00:00.000Z","小計":39},{"日付":"2020-04-11T08:00:00.000Z","小計":26},{"日付":"2020-04-12T08:00:00.000Z","小計":9},{"日付":"2020-04-13T08:00:00.000Z","小計":19},{"日付":"2020-04-14T08:00:00.000Z","小計":33},{"日付":"2020-04-15T08:00:00.000Z","小計":27}]}')},354:function(t){t.exports=JSON.parse('{"date":"2020/04/16 21:00","data":[{"日付":"2020-02-01T08:00:00.000Z","小計":0},{"日付":"2020-02-02T08:00:00.000Z","小計":0},{"日付":"2020-02-03T08:00:00.000Z","小計":328},{"日付":"2020-02-04T08:00:00.000Z","小計":171},{"日付":"2020-02-05T08:00:00.000Z","小計":108},{"日付":"2020-02-06T08:00:00.000Z","小計":76},{"日付":"2020-02-07T08:00:00.000Z","小計":0},{"日付":"2020-02-08T08:00:00.000Z","小計":0},{"日付":"2020-02-09T08:00:00.000Z","小計":90},{"日付":"2020-02-10T08:00:00.000Z","小計":0},{"日付":"2020-02-11T08:00:00.000Z","小計":70},{"日付":"2020-02-12T08:00:00.000Z","小計":56},{"日付":"2020-02-13T08:00:00.000Z","小計":53},{"日付":"2020-02-14T08:00:00.000Z","小計":0},{"日付":"2020-02-15T08:00:00.000Z","小計":0},{"日付":"2020-02-16T08:00:00.000Z","小計":187},{"日付":"2020-02-17T08:00:00.000Z","小計":144},{"日付":"2020-02-18T08:00:00.000Z","小計":154},{"日付":"2020-02-19T08:00:00.000Z","小計":106},{"日付":"2020-02-20T08:00:00.000Z","小計":115},{"日付":"2020-02-21T08:00:00.000Z","小計":0},{"日付":"2020-02-22T08:00:00.000Z","小計":0},{"日付":"2020-02-23T08:00:00.000Z","小計":0},{"日付":"2020-02-24T08:00:00.000Z","小計":347},{"日付":"2020-02-25T08:00:00.000Z","小計":242},{"日付":"2020-02-26T08:00:00.000Z","小計":300},{"日付":"2020-02-27T08:00:00.000Z","小計":350},{"日付":"2020-02-28T08:00:00.000Z","小計":0},{"日付":"2020-02-29T08:00:00.000Z","小計":0},{"日付":"2020-03-01T08:00:00.000Z","小計":606},{"日付":"2020-03-02T08:00:00.000Z","小計":330},{"日付":"2020-03-03T08:00:00.000Z","小計":285},{"日付":"2020-03-04T08:00:00.000Z","小計":281},{"日付":"2020-03-05T08:00:00.000Z","小計":271},{"日付":"2020-03-06T08:00:00.000Z","小計":0},{"日付":"2020-03-07T08:00:00.000Z","小計":0},{"日付":"2020-03-08T08:00:00.000Z","小計":624},{"日付":"2020-03-09T08:00:00.000Z","小計":434},{"日付":"2020-03-10T08:00:00.000Z","小計":319},{"日付":"2020-03-11T08:00:00.000Z","小計":254},{"日付":"2020-03-12T08:00:00.000Z","小計":221},{"日付":"2020-03-13T08:00:00.000Z","小計":0},{"日付":"2020-03-14T08:00:00.000Z","小計":0},{"日付":"2020-03-15T08:00:00.000Z","小計":386},{"日付":"2020-03-16T08:00:00.000Z","小計":235},{"日付":"2020-03-17T08:00:00.000Z","小計":199},{"日付":"2020-03-18T08:00:00.000Z","小計":212},{"日付":"2020-03-19T08:00:00.000Z","小計":0},{"日付":"2020-03-20T08:00:00.000Z","小計":0},{"日付":"2020-03-21T08:00:00.000Z","小計":0},{"日付":"2020-03-22T08:00:00.000Z","小計":480},{"日付":"2020-03-23T08:00:00.000Z","小計":428},{"日付":"2020-03-24T08:00:00.000Z","小計":237},{"日付":"2020-03-25T08:00:00.000Z","小計":239},{"日付":"2020-03-26T08:00:00.000Z","小計":260},{"日付":"2020-03-27T08:00:00.000Z","小計":0},{"日付":"2020-03-28T08:00:00.000Z","小計":0},{"日付":"2020-03-29T08:00:00.000Z","小計":728},{"日付":"2020-03-30T08:00:00.000Z","小計":524},{"日付":"2020-03-31T08:00:00.000Z","小計":610},{"日付":"2020-04-01T08:00:00.000Z","小計":567},{"日付":"2020-04-02T08:00:00.000Z","小計":728},{"日付":"2020-04-03T08:00:00.000Z","小計":0},{"日付":"2020-04-04T08:00:00.000Z","小計":0},{"日付":"2020-04-05T08:00:00.000Z","小計":1402},{"日付":"2020-04-06T08:00:00.000Z","小計":1011},{"日付":"2020-04-07T08:00:00.000Z","小計":705},{"日付":"2020-04-08T08:00:00.000Z","小計":766},{"日付":"2020-04-09T08:00:00.000Z","小計":804},{"日付":"2020-04-10T08:00:00.000Z","小計":0},{"日付":"2020-04-11T08:00:00.000Z","小計":0},{"日付":"2020-04-12T08:00:00.000Z","小計":1354},{"日付":"2020-04-13T08:00:00.000Z","小計":959},{"日付":"2020-04-14T08:00:00.000Z","小計":718},{"日付":"2020-04-15T08:00:00.000Z","小計":731}]}')},355:function(t){t.exports=JSON.parse('{"date":"2020/04/16 21:00","data":[{"日付":"2020-02-01T08:00:00.000Z","小計":0},{"日付":"2020-02-02T08:00:00.000Z","小計":0},{"日付":"2020-02-03T08:00:00.000Z","小計":0},{"日付":"2020-02-04T08:00:00.000Z","小計":0},{"日付":"2020-02-05T08:00:00.000Z","小計":0},{"日付":"2020-02-06T08:00:00.000Z","小計":0},{"日付":"2020-02-07T08:00:00.000Z","小計":2},{"日付":"2020-02-08T08:00:00.000Z","小計":0},{"日付":"2020-02-09T08:00:00.000Z","小計":1},{"日付":"2020-02-10T08:00:00.000Z","小計":0},{"日付":"2020-02-11T08:00:00.000Z","小計":0},{"日付":"2020-02-12T08:00:00.000Z","小計":0},{"日付":"2020-02-13T08:00:00.000Z","小計":0},{"日付":"2020-02-14T08:00:00.000Z","小計":0},{"日付":"2020-02-15T08:00:00.000Z","小計":1},{"日付":"2020-02-16T08:00:00.000Z","小計":1},{"日付":"2020-02-17T08:00:00.000Z","小計":3},{"日付":"2020-02-18T08:00:00.000Z","小計":3},{"日付":"2020-02-19T08:00:00.000Z","小計":10},{"日付":"2020-02-20T08:00:00.000Z","小計":10},{"日付":"2020-02-21T08:00:00.000Z","小計":19},{"日付":"2020-02-22T08:00:00.000Z","小計":7},{"日付":"2020-02-23T08:00:00.000Z","小計":7},{"日付":"2020-02-24T08:00:00.000Z","小計":4},{"日付":"2020-02-25T08:00:00.000Z","小計":26},{"日付":"2020-02-26T08:00:00.000Z","小計":41},{"日付":"2020-02-27T08:00:00.000Z","小計":18},{"日付":"2020-02-28T08:00:00.000Z","小計":40},{"日付":"2020-02-29T08:00:00.000Z","小計":35},{"日付":"2020-03-01T08:00:00.000Z","小計":24},{"日付":"2020-03-02T08:00:00.000Z","小計":77},{"日付":"2020-03-03T08:00:00.000Z","小計":53},{"日付":"2020-03-04T08:00:00.000Z","小計":53},{"日付":"2020-03-05T08:00:00.000Z","小計":46},{"日付":"2020-03-06T08:00:00.000Z","小計":60},{"日付":"2020-03-07T08:00:00.000Z","小計":43},{"日付":"2020-03-08T08:00:00.000Z","小計":23},{"日付":"2020-03-09T08:00:00.000Z","小計":84},{"日付":"2020-03-10T08:00:00.000Z","小計":76},{"日付":"2020-03-11T08:00:00.000Z","小計":49},{"日付":"2020-03-12T08:00:00.000Z","小計":64},{"日付":"2020-03-13T08:00:00.000Z","小計":49},{"日付":"2020-03-14T08:00:00.000Z","小計":22},{"日付":"2020-03-15T08:00:00.000Z","小計":25},{"日付":"2020-03-16T08:00:00.000Z","小計":58},{"日付":"2020-03-17T08:00:00.000Z","小計":53},{"日付":"2020-03-18T08:00:00.000Z","小計":51},{"日付":"2020-03-19T08:00:00.000Z","小計":44},{"日付":"2020-03-20T08:00:00.000Z","小計":42},{"日付":"2020-03-21T08:00:00.000Z","小計":40},{"日付":"2020-03-22T08:00:00.000Z","小計":20},{"日付":"2020-03-23T08:00:00.000Z","小計":61},{"日付":"2020-03-24T08:00:00.000Z","小計":55},{"日付":"2020-03-25T08:00:00.000Z","小計":42},{"日付":"2020-03-26T08:00:00.000Z","小計":51},{"日付":"2020-03-27T08:00:00.000Z","小計":64},{"日付":"2020-03-28T08:00:00.000Z","小計":63},{"日付":"2020-03-29T08:00:00.000Z","小計":23},{"日付":"2020-03-30T08:00:00.000Z","小計":100},{"日付":"2020-03-31T08:00:00.000Z","小計":141},{"日付":"2020-04-01T08:00:00.000Z","小計":119},{"日付":"2020-04-02T08:00:00.000Z","小計":106},{"日付":"2020-04-03T08:00:00.000Z","小計":191},{"日付":"2020-04-04T08:00:00.000Z","小計":177},{"日付":"2020-04-05T08:00:00.000Z","小計":125},{"日付":"2020-04-06T08:00:00.000Z","小計":180},{"日付":"2020-04-07T08:00:00.000Z","小計":146},{"日付":"2020-04-08T08:00:00.000Z","小計":127},{"日付":"2020-04-09T08:00:00.000Z","小計":163},{"日付":"2020-04-10T08:00:00.000Z","小計":176},{"日付":"2020-04-11T08:00:00.000Z","小計":65},{"日付":"2020-04-12T08:00:00.000Z","小計":51},{"日付":"2020-04-13T08:00:00.000Z","小計":179},{"日付":"2020-04-14T08:00:00.000Z","小計":150}]}')},356:function(t){t.exports=JSON.parse('{"date":"2020/04/15 21:00","data":[{"日付":"2020-03-22T08:00:00.000Z","小計":1},{"日付":"2020-03-23T08:00:00.000Z","小計":0},{"日付":"2020-03-24T08:00:00.000Z","小計":0},{"日付":"2020-03-25T08:00:00.000Z","小計":0},{"日付":"2020-03-26T08:00:00.000Z","小計":0},{"日付":"2020-03-27T08:00:00.000Z","小計":1},{"日付":"2020-03-28T08:00:00.000Z","小計":1},{"日付":"2020-03-29T08:00:00.000Z","小計":0},{"日付":"2020-03-30T08:00:00.000Z","小計":1},{"日付":"2020-03-31T08:00:00.000Z","小計":0},{"日付":"2020-04-01T08:00:00.000Z","小計":1},{"日付":"2020-04-02T08:00:00.000Z","小計":2},{"日付":"2020-04-03T08:00:00.000Z","小計":2},{"日付":"2020-04-04T08:00:00.000Z","小計":1},{"日付":"2020-04-05T08:00:00.000Z","小計":1},{"日付":"2020-04-06T08:00:00.000Z","小計":0},{"日付":"2020-04-07T08:00:00.000Z","小計":1},{"日付":"2020-04-08T08:00:00.000Z","小計":2},{"日付":"2020-04-09T08:00:00.000Z","小計":1},{"日付":"2020-04-10T08:00:00.000Z","小計":0},{"日付":"2020-04-11T08:00:00.000Z","小計":0},{"日付":"2020-04-12T08:00:00.000Z","小計":0},{"日付":"2020-04-13T08:00:00.000Z","小計":0},{"日付":"2020-04-14T08:00:00.000Z","小計":1}]}')},360:function(t,e,n){"use strict";n(63),n(10),n(6);var r=n(339),o=n(356),l=n(307),c=n(18),d=n.n(c),f=[{text:"公表日",value:"公表日"},{text:"居住地",value:"居住地"},{text:"年代",value:"年代"},{text:"性別",value:"性別"},{text:"退院※",value:"退院",align:"center"}],h=n(0),T=n(351),Z=n(361),m=n(362),v=h.a.extend({components:{DataView:T.a,DataViewBasicInfoPanel:Z.a,OpenDataLink:m.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""}},mounted:function(){this.$refs.displayedTable.$el.querySelectorAll("table").forEach((function(table){table.setAttribute("tabindex","0")}))}}),x=(n(464),n(8)),w=n(44),y=n.n(w),D=n(485),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("span")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])},[t._v(" "),n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0}}),t._v(" "),n("div",{staticClass:"note"},[t._v("\n    "+t._s(t.$t("※退院には、死亡退院を含む"))+"\n  ")])],1)}),[],!1,null,null,null),V=component.exports;y()(component,{VDataTable:D.a});var C={components:{DataTable:V},data:function(){var t=Object(l.a)(o.data),e=function(data){var t={headers:f,datasets:[]};return data.forEach((function(e){var n,r,o,l,c={"公表日":null!==(n=d()(e["リリース日"]).format("MM/DD"))&&void 0!==n?n:"不明","居住地":null!==(r=e["居住地"])&&void 0!==r?r:"不明","年代":null!==(o=e["年代"])&&void 0!==o?o:"不明","性別":null!==(l=e["性別"])&&void 0!==l?l:"不明","退院":e["退院"]};t.datasets.push(c)})),t.datasets.sort((function(a,b){return a===b?0:a<b?1:-1})),t}(r.data),n={lText:t[t.length-1].cumulative.toLocaleString(),sText:this.$t("{date}の累計",{date:t[t.length-1].label}),unit:this.$t("人")},c=!0,h=!1,T=void 0;try{for(var Z,m=e.headers[Symbol.iterator]();!(c=(Z=m.next()).done);c=!0){var header=Z.value;header.text="退院"===header.value?this.$t("退院※"):this.$t(header.value)}}catch(t){h=!0,T=t}finally{try{c||null==m.return||m.return()}finally{if(h)throw T}}var v=!0,x=!1,w=void 0;try{for(var y,D=e.datasets[Symbol.iterator]();!(v=(y=D.next()).done);v=!0){var V=y.value;if(V["居住地"]=this.$t(V["居住地"]),V["性別"]=this.$t(V["性別"]),V["退院"]=this.$t(V["退院"]),"10歳未満"===V["年代"])V["年代"]=this.$t("10歳未満");else if("不明"===V["年代"])V["年代"]=this.$t("不明");else{var C=V["年代"].substring(0,2);V["年代"]=this.$t("{age}代",{age:C})}}}catch(t){x=!0,w=t}finally{try{v||null==D.return||D.return()}finally{if(x)throw w}}var data={Patients:r,patientsTable:e,sumInfoOfPatients:n};return data}},_=n(297),k=Object(x.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-table",{attrs:{title:this.$t("陽性患者の属性"),"title-id":"attributes-of-confirmed-cases","chart-data":this.patientsTable,"chart-option":{},date:this.Patients.date,info:this.sumInfoOfPatients}})],1)}),[],!1,null,null,null);e.a=k.exports;y()(k,{VCol:_.a})},361:function(t,e,n){"use strict";var r=n(0).a.extend({props:{lText:{type:String,required:!0},sText:{type:String,required:!0},unit:{type:String,required:!0}}}),o=(n(421),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataInfo"},[n("span",{staticClass:"DataView-DataInfo-summary"},[t._v("\n    "+t._s(t.lText)+"\n    "),n("small",{staticClass:"DataView-DataInfo-summary-unit"},[t._v(t._s(t.unit))])]),t._v(" "),n("br"),t._v(" "),n("small",{staticClass:"DataView-DataInfo-date"},[t._v(t._s(t.sText))])])}),[],!1,null,null,null);e.a=component.exports},362:function(t,e,n){"use strict";var r=n(0).a.extend({props:{url:{type:String,default:""}}}),o=(n(423),n(8)),l=n(44),c=n.n(l),d=n(289),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"OpenDataLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._v("\n  "+this._s(this.$t("オープンデータを入手"))+"\n  "),e("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:"15","aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VIcon:d.a})},363:function(t,e,n){"use strict";var r=n(356),o=n(307),l={components:{TimeBarChart:n(312).a},data:function(){var t=Object(o.a)(r.data),data={PatientsSummary:r,patientsGraph:t};return data}},c=n(8),d=n(44),f=n.n(d),h=n(297),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("陽性患者数"),"title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":this.patientsGraph,date:this.PatientsSummary.date,unit:this.$t("人")}})],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VCol:h.a})},364:function(t,e,n){"use strict";var r=n(354),o=n(307),l={components:{TimeBarChart:n(312).a},data:function(){var t=Object(o.a)(r.data),data={Contacts:r,contactsGraph:t};return data}},c=n(8),d=n(44),f=n.n(d),h=n(297),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("新型コロナコールセンター相談件数"),"title-id":"number-of-reports-to-covid19-telephone-advisory-center","chart-id":"time-bar-chart-contacts","chart-data":this.contactsGraph,date:this.Contacts.date,unit:this.$t("件.reports"),url:"http://www.okayama-opendata.jp/opendata/ga120PreAction.action?keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761"}})],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VCol:h.a})},365:function(t,e,n){"use strict";var r=n(355),o=n(307),l={components:{TimeBarChart:n(312).a},data:function(){var t=Object(o.a)(r.data),data={Querents:r,querentsGraph:t};return data}},c=n(8),d=n(44),f=n.n(d),h=n(297),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("新型コロナ受診相談窓口相談件数"),"title-id":"number-of-reports-to-covid19-consultation-desk","chart-id":"time-bar-chart-querents","chart-data":this.querentsGraph,date:this.Querents.date,unit:this.$t("件.reports"),url:"http://www.okayama-opendata.jp/opendata/ga120PreAction.action?keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761"}})],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VCol:h.a})},366:function(t,e,n){"use strict";var r=n(353),o=n(307),l={components:{TimeBarChart:n(312).a},data:function(){var t=Object(o.a)(r.data),data={InspectionsSummary:r,patientsGraph:t};return data}},c=n(8),d=n(44),f=n.n(d),h=n(297),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("検査実施件数"),"title-id":"number-of-tested","chart-id":"time-bar-chart-inspections","chart-data":this.patientsGraph,date:this.InspectionsSummary.date,unit:this.$t("件.tested"),url:"http://www.okayama-opendata.jp/opendata/ga120PreAction.action?keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761"}})],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VCol:h.a})},410:function(t,e,n){"use strict";var r=n(341);n.n(r).a},411:function(t,e,n){(e=n(11)(!1)).push([t.i,".DataView{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;height:100%}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width: 769px){.DataView-Header{padding:0 5px}}@media screen and (min-width: 1171px){.DataView-Header{width:100%;flex-flow:row;flex-wrap:wrap;padding:0}}.DataView-DataInfo-summary{color:#4d4d4d;font-family:Hiragino Sans,sans-serif;font-style:normal;font-size:30px;line-height:30px;white-space:nowrap}.DataView-DataInfo-summary-unit{font-size:.6em;width:100%}.DataView-DataInfo-date{font-size:12px;line-height:12px;color:gray;width:100%;display:inline-block}.DataView-Inner{display:flex;flex-flow:column;justify-content:space-between;padding:22px;height:100%}.DataView-Title{width:100%;margin-bottom:10px;font-size:1.25rem;line-height:1.5;font-weight:normal;color:#4d4d4d}@media screen and (min-width: 1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{width:50%}}.DataView-CardText{margin:16px 0}.DataView-Description{margin:10px 0 0;font-size:12px;color:gray}.DataView-Description ul,.DataView-Description ol{list-style-type:none;padding:0}.DataView-Footer{font-size:12px;font-size:0.75rem;padding:0 !important;display:flex;justify-content:space-between;color:gray !important;text-align:right;background-color:#fff !important}.DataView-Footer .Permalink{color:gray !important}.DataView-Footer .OpenDataLink{text-decoration:none}.DataView-Footer .OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}.DataView-Footer .Footer-Left{text-align:left}.DataView-Footer .Footer-Right{position:relative;display:flex;align-items:flex-end}.DataView-Footer .Footer-Right .DataView-Share-Opener{cursor:pointer;margin-right:6px}.DataView-Footer .Footer-Right .DataView-Share-Opener>svg{width:auto !important}.DataView-Footer .Footer-Right .DataView-Share-Opener:focus{outline:dotted gray 1px}.DataView-Footer .Footer-Right .DataView-Share-Buttons{position:absolute;padding:8px;right:-4px;bottom:1.5em;width:240px;border:solid 1px #d9d9d9;background:#fff !important;border-radius:8px;text-align:left;font-size:1rem;z-index:1}.DataView-Footer .Footer-Right .DataView-Share-Buttons>*{padding:4px 0}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:gray}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Close-Button button{border-radius:50%;border:1px solid #fff}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px;padding-right:30px;color:#030303;border:solid 1px #eee;border-radius:8px;font-size:12px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:gray}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode button{border-radius:50%;border:solid 1px #eee}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%;font-size:30px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-left:4px;margin-right:4px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons button:focus{border-radius:50%;border:1px dotted #707070;outline:none}.DataView .overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.DataView .overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#4d4d4d;border-radius:8px;color:#fff !important}textarea{font:400 11px system-ui;width:100%;height:2.4rem}",""]),t.exports=e},414:function(t,e,n){"use strict";var r=n(342);n.n(r).a},415:function(t,e,n){(e=n(11)(!1)).push([t.i,".DataSelector{margin-top:20px;border:1px solid #d9d9d9;background-color:#fff}.DataSelector-Button{border:none !important;margin:2px;border-radius:4px !important;height:24px !important;font-size:12px !important;color:#333 !important;background-color:#fff !important}.DataSelector-Button::before{background-color:inherit}.DataSelector-Button:focus{outline:dotted gray 1px}.DataSelector .v-btn--active{background-color:#4d4d4d !important;color:#fff !important}",""]),t.exports=e},421:function(t,e,n){"use strict";var r=n(343);n.n(r).a},422:function(t,e,n){(e=n(11)(!1)).push([t.i,"@media screen and (min-width: 1171px){.DataView-DataInfo{text-align:right;width:50%}}.DataView-DataInfo-summary{display:inline-block;font-family:Hiragino Sans,sans-serif;font-style:normal;font-size:30px;line-height:30px}.DataView-DataInfo-summary-unit{font-size:.6em}.DataView-DataInfo-date{white-space:wrap;display:inline-block;font-size:12px;line-height:12px;color:gray}",""]),t.exports=e},423:function(t,e,n){"use strict";var r=n(344);n.n(r).a},424:function(t,e,n){(e=n(11)(!1)).push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},464:function(t,e,n){"use strict";var r=n(345);n.n(r).a},465:function(t,e,n){(e=n(11)(!1)).push([t.i,".cardTable.v-data-table th{padding:8px 10px;height:auto;border-bottom:1px solid #d9d9d9;white-space:nowrap;color:#4d4d4d;font-size:12px}.cardTable.v-data-table th.text-center{text-align:center}.cardTable.v-data-table tbody tr{color:#333}.cardTable.v-data-table tbody tr td{padding:8px 10px;height:auto;font-size:12px}.cardTable.v-data-table tbody tr td.text-center{text-align:center}.cardTable.v-data-table tbody tr:nth-child(odd) td{background:rgba(217,217,217,.3)}.cardTable.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row){border:none}.cardTable.v-data-table:focus{outline:dotted gray 1px}.note{padding:8px;font-size:12px;color:gray}",""]),t.exports=e}}]);