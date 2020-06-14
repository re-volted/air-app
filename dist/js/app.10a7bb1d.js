(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},o=[];function i(t){return s.p+"js/"+({details:"details"}[t]||t)+"."+{"chunk-2d0cc3f4":"873195c9",details:"aa5fef8c"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,r[1](u)}n[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"1ebe":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.loader,{tag:"component",style:t.iconStyle})},n=[],o=(r("d3b7"),{name:"svgIcon",props:{icon:{type:String,required:!0},width:{type:String,default:"20px"},height:{type:String,default:"20px"},color:{type:String,default:"currentColor"},strokeColor:{type:String,default:"none"}},computed:{loader:function(){var t=this;return function(){return r("8950")("./".concat(t.icon,".vue"))}},iconStyle:function(){var t=this.width,e=this.height,r=this.color,a=this.strokeColor;return{width:t,height:e,"--fill-color":r,"--stroke-color":a}}}}),i=o,s=(r("49a6"),r("2877")),c=Object(s["a"])(i,a,n,!1,null,"65f89086",null);e["default"]=c.exports},"49a6":function(t,e,r){"use strict";var a=r("7773"),n=r.n(a);n.a},7773:function(t,e,r){},8950:function(t,e,r){var a={"./svgIcon.vue":["1ebe"],"./weather.vue":["4cb1","chunk-2d0cc3f4"]};function n(t){if(!r.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],n=e[0];return Promise.all(e.slice(1).map(r.e)).then((function(){return r(n)}))}n.keys=function(){return Object.keys(a)},n.id="8950",t.exports=n},a638:function(t,e,r){"use strict";function a(t,e){switch(e){case"C":return"".concat(Math.round(t),"°C");case"F":return"".concat(Math.round(1.8*t+32),"°F");default:return""}}r.d(e,"a",(function(){return a}))},af81:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"weather-check-form",attrs:{method:"get"},on:{submit:t.handleSubmit}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.city,expression:"form.city"}],staticClass:"weather-check-form__input",attrs:{type:"search",name:"city",id:"city",placeholder:"Enter a city name..."},domProps:{value:t.form.city},on:{input:function(e){e.target.composing||t.$set(t.form,"city",e.target.value)}}}),r("button",{staticClass:"weather-check-form__btn",attrs:{type:"submit"}},[t._v(" Check! ")])])},n=[],o=r("2b0e"),i=o["a"].extend({name:"WeatherCheckForm",data:function(){return{form:{city:""}}},computed:{hasCoords:function(){return this.$store.state.weather.coords.lat&&this.$store.state.weather.coords.lon}},methods:{handleSubmit:function(t){return t.preventDefault(),this.form.city?(this.$store.dispatch("weather/getWeatherByCity",{city:this.form.city}),void(this.form.city="")):this.hasCoords?this.$store.dispatch("weather/getWeatherByCoords"):void this.$store.commit("SET_ERROR_MSG","Coordinates not available. Please, provide a city name.")}}}),s=i,c=r("2877"),u=Object(c["a"])(s,a,n,!1,null,null,null);e["a"]=u.exports},c1c3:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1),t.loading?r("div",{staticClass:"loader"},[r("loader")],1):t._e(),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"photo-copyright"},[t._v(" photo from "),r("a",{staticClass:"text--bold",attrs:{href:"https://unsplash.com/"}},[t._v("UNSPLASH")])])}],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,stroke:t.color}},[r("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[r("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),r("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[r("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])},s=[],c=(r("a9e3"),{name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}}),u=c,l=r("2877"),d=Object(l["a"])(u,i,s,!1,null,null,null),p=d.exports,h=a["a"].extend({name:"App",components:{Loader:p},computed:{loading:function(){return this.$store.state.loading}},mounted:function(){var t=this;"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(e){if(t.$store.commit("SET_ERROR_MSG",""),t.$store.getters["weather/hasCoords"]||t.$store.dispatch("weather/saveGeoCoords",{lat:e.coords.latitude,lon:e.coords.longitude}),!t.$store.getters["weather/isDataFetched"])return t.$store.dispatch("weather/getWeatherByCoords")}),(function(e){t.$store.commit("SET_ERROR_MSG",e.message)})):this.$store.commit("SET_ERROR_MSG","Geolocation not available.")}}),f=h,m=Object(l["a"])(f,n,o,!1,null,null,null),_=m.exports,v=(r("d3b7"),r("8c4f")),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"home"},[r("app-header"),r("weather-check-form"),r("weather-panel"),t.errorMsg?r("p",{staticClass:"error-message"},[t._v(' An error occurred while fetching data: "'+t._s(t.errorMsg)+'" ')]):t._e()],1)])},y=[],E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("div",{staticClass:"header__logo"},[r("svg-icon",{attrs:{icon:"weather",height:"50px",width:"50px",color:"#fff"}}),r("h1",{staticClass:"header__title"},[t._v(t._s(t.appName))])],1),r("p",{staticClass:"text--light"},[t._v("Check the weather!")]),t._m(0)])},S=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text--light"},[t._v(" Enter the city name or "),r("span",{staticClass:"text--bold"},[t._v("leave empty for geolocation!")])])}],w=r("1ebe"),T=a["a"].extend({name:"AppHeader",components:{SvgIcon:w["default"]},computed:{appName:function(){return this.$store.getters["getAppName"]}}}),C=T,b=Object(l["a"])(C,E,S,!1,null,null,null),O=b.exports,R=r("af81"),M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.hasWeatherData?r("div",{staticClass:"weather-panel"},[r("div",{staticClass:"weather-panel__temperature",on:{click:t.toggleTempUnits}},[r("p",[t._v(t._s(t.temperature))])]),r("div",{staticClass:"weather-panel__data"},[r("div",{staticClass:"weather-panel__data-item"},[r("p",[r("span",[t._v("Date:")]),t._v(" "+t._s(t.date))])]),r("div",{staticClass:"weather-panel__data-item"},[r("p",[r("span",[t._v("Location:")]),t._v(" "+t._s(t.location))])]),r("div",{staticClass:"weather-panel__data-item"},[r("p",[r("span",[t._v("Description:")]),t._v(" "+t._s(t.description))])])]),r("router-link",{staticClass:"weather-panel__more",attrs:{to:"/details"}},[t._v("More")])],1):t._e()},D=[],$=(r("a4d3"),r("e01a"),r("a638")),x=a["a"].extend({data:function(){return{}},computed:{hasWeatherData:function(){return this.$store.getters["weather/isDataFetched"]},tempUnits:function(){return this.$store.state.weather.tempUnits},temperature:function(){return Object($["a"])(this.$store.state.weather.temperature,this.tempUnits)},description:function(){return this.$store.state.weather.description},location:function(){return this.$store.state.weather.city},date:function(){return this.$store.state.weather.date}},methods:{toggleTempUnits:function(){this.$store.commit("weather/TOGGLE_TEMP_UNITS")}}}),A=x,k=Object(l["a"])(A,M,D,!1,null,null,null),N=k.exports,G=a["a"].extend({name:"Home",components:{AppHeader:O,WeatherCheckForm:R["a"],WeatherPanel:N},computed:{errorMsg:function(){return this.$store.state.errorMsg}}}),P=G,I=Object(l["a"])(P,g,y,!1,null,null,null),j=I.exports;a["a"].use(v["a"]);var L=[{path:"/",name:"Home",component:j},{path:"/details",name:"Details",component:function(){return r.e("details").then(r.bind(null,"9f52"))}}],U=new v["a"]({routes:L,mode:"history"}),F=U,W=r("2f62"),q={SET_LOADING:function(t,e){t.loading=e},SET_ERROR_MSG:function(t,e){t.errorMsg=e}},B={getAppName:function(t){return t.appName}},H={hasCoords:function(t){return!!t.coords.lat&&!!t.coords.lon},isDataFetched:function(t){return!!t.temperature&&!!t.description&&!!t.city&&!!t.date}},Y=(r("99af"),r("b0c0"),r("bc3a")),J=r.n(Y),z={url:"http://api.openweathermap.org/data/2.5/forecast?units=metric",key:"1cad71c4e3f3ccbfdd7a40edfd5b2abf"};function K(t){var e;switch(!0){case!!t.lat&&!!t.lon:e="".concat(z.url,"&lat=").concat(t.lat,"&lon=").concat(t.lon,"&appid=").concat(z.key);break;case!!t.city:e="".concat(z.url,"&q=").concat(t.city,"&appid=").concat(z.key);break;default:e=""}return e}var Q={saveGeoCoords:function(t,e){var r=t.commit,a=e.lat,n=e.lon;r("SET_COORDS",{lat:a,lon:n})},getWeatherByCoords:function(t){var e=t.state,r=t.commit;if(r("SET_LOADING",!0,{root:!0}),r("SET_ERROR_MSG","",{root:!0}),!e.coords.lat||!e.coords.lon)throw Error("Coordinates unavailable. Unable to fetch data.");J.a.get(K({lat:e.coords.lat,lon:e.coords.lon})).then((function(t){200===t.status&&(r("SET_TEMP",t.data.list[0].main.temp),r("SET_DESCRIPTION",t.data.list[0].weather[0].description),r("SET_DATE"),r("SET_CITY","".concat(t.data.city.name,", ").concat(t.data.city.country)),r("SET_LOADING",!1,{root:!0}),r("SET_FORECAST_DATA",t.data.list))})).catch((function(t){r("SET_LOADING",!1,{root:!0}),t.response?r("SET_ERROR_MSG",t.response.data.message,{root:!0}):t.request&&r("SET_ERROR_MSG",t.request.data.message,{root:!0})}))},getWeatherByCity:function(t,e){var r=t.commit,a=e.city;r("SET_LOADING",!0,{root:!0}),r("SET_ERROR_MSG","",{root:!0}),J.a.get(K({city:a})).then((function(t){200===t.status&&(r("SET_TEMP",t.data.list[0].main.temp),r("SET_DESCRIPTION",t.data.list[0].weather[0].description),r("SET_DATE"),r("SET_CITY","".concat(t.data.city.name,", ").concat(t.data.city.country)),r("SET_LOADING",!1,{root:!0}),r("SET_FORECAST_DATA",t.data.list))})).catch((function(t){r("SET_LOADING",!1,{root:!0}),t.response?r("SET_ERROR_MSG",t.response.data.message,{root:!0}):t.request&&r("SET_ERROR_MSG",t.request.data.message,{root:!0})}))}},V=(r("4de4"),r("d81d"),r("ac1f"),r("1276"),{RESET_DATA:function(t){t.temperature=null,t.date="",t.city="",t.description=""},SET_COORDS:function(t,e){t.coords.lat=e.lat,t.coords.lon=e.lon},SET_TEMP:function(t,e){t.temperature=e},SET_DATE:function(t){var e=new Date,r=e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,n=e.getFullYear();t.date="".concat(r,".").concat(a,".").concat(n)},SET_CITY:function(t,e){t.city=e},SET_DESCRIPTION:function(t,e){t.description=e},SET_FORECAST_DATA:function(t,e){var r=e,a=r.filter((function(e){var r=e.dt,a=new Date(1e3*r);return a.getDate()===Number(t.date.split(".")[0])})),n=a.map((function(t){var e=new Date(1e3*t.dt);return{hour:"".concat(e.getHours(),":").concat(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()),temperature:Math.round(t.main.temp),description:t.weather[0].description}}));t.forecast=n},TOGGLE_TEMP_UNITS:function(t){"C"===t.tempUnits?t.tempUnits="F":t.tempUnits="C"}}),X={coords:{lat:null,lon:null},temperature:null,tempUnits:"C",date:"",city:"",description:"",forecast:[]},Z=!0,tt={namespaced:Z,state:X,getters:H,actions:Q,mutations:V};a["a"].use(W["a"]);var et={state:{appName:"AirApp",errorMsg:"",loading:!1},getters:B,mutations:q,modules:{weather:tt}},rt=new W["a"].Store(et);a["a"].config.productionTip=!1,r("c1c3"),new a["a"]({router:F,store:rt,render:function(t){return t(_)}}).$mount("#app")}});
//# sourceMappingURL=app.10a7bb1d.js.map