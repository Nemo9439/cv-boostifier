(this["webpackJsonpcv-boostifier"]=this["webpackJsonpcv-boostifier"]||[]).push([[14,92],{101:function(t,e,n){"use strict";n.r(e),n.d(e,"Swagger",(function(){return a}));var r=n(0),o=n.n(r),s=(n(582),n(1266)),c=n.n(s),i=(n(1604),n(70));function a(t){var e=t.profile;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"swagger-wrapper"},o.a.createElement(c.a,{spec:function(t){return Object(i.getSpec)(t)}(e),docExpansion:"list",requestInterceptor:function(t){var e=t.url.split("/").reverse()[0];return t.url="https://api.flickr.com/services/rest?format=json&t=".concat(e),t},responseInterceptor:function(t){var n=t.url.split("=").reverse()[0];return t.body=t.text=t.data=t.obj=JSON.stringify(e[n],null,2),t}})))}},1594:function(t,e){},1596:function(t,e){},582:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e),n.d(e,"getSpec",(function(){return o}));var r=n(934),o=function(t){var e=Object.keys(t),n=t.basics&&t.basics.name;return{swagger:"2.0",host:"https://cv.boostifier.io",basePath:"",info:{description:"Fully working Swagger API for ".concat(n," Resume"),version:"1.0.3",title:"".concat(n," Resume API")},tags:{name:"/api",description:""},paths:e.reduce((function(t,e){return Object.assign(t,Object(r.a)({},"/".concat(e),function(t){var e,n=(e=t)[0].toUpperCase()+e.substring(1).toLowerCase();return{get:{tags:["/api"],summary:"".concat(n," info"),description:"Returns an object with my ".concat(n," info"),operationId:"get".concat(n,"Data"),produces:["application/json"],responses:{200:{description:"successful operation"}}}}}(e)))}),{})}}}}]);
//# sourceMappingURL=14.ceb549c2.chunk.js.map