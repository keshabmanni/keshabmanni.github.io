(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["certification"],{"44e8":function(t,e,a){"use strict";var i=a("81ef"),n=a.n(i);n.a},"6cbe":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Certifications")]),a("div",{staticClass:"cards"},t._l(t.images,(function(e){return a("div",{key:e.id},[a("md-card",{staticClass:"md-accent md-raised",on:{click:function(a){return t.openFile(e.image_url)}}},[a("md-card-header",[a("md-card-header-text",[a("div",{staticClass:"md-body-2"},[t._v(t._s(e.title))]),a("div",{staticClass:"md-caption"},[t._v(" -"+t._s(e.year)+", "+t._s(e.provider)+" ")])])],1),a("md-card-media",[a("a",{attrs:{href:e.image_url}},[a("md-button",{staticClass:"md-dense md-raised btn-view"},[t._v("View "),a("i",{staticClass:"fas fa-certificate"})])],1)])],1)],1)})),0)])},n=[],d=(a("4160"),a("159b"),a("56d7")),r=(a("51de"),{name:"certification",data:function(){return{images:[]}},methods:{openFile:function(t){window.open(t,"_blank")}},created:function(){var t=this;d["db"].collection("certifications").get().then((function(e){e.forEach((function(e){console.log(e.data().image_url);var a={id:e.id,title:e.data().title,image_url:e.data().image_url,year:e.data().year,provider:e.data().provider};t.images.push(a)}))}))}}),c=r,s=(a("44e8"),a("2877")),o=Object(s["a"])(c,i,n,!1,null,"005a22d8",null);e["default"]=o.exports},"81ef":function(t,e,a){}}]);
//# sourceMappingURL=certification.a4cdf54d.js.map