(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);i&&o[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:a,d:o,D:d,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=m;var g=function(t){return t instanceof w},b=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(s=r),n&&($[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;$[a]=e,s=a}return!i&&s&&(y=s),s||!i&&y},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},C=_;C.l=b,C.i=g,C.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(C.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return C},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return C.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!C.u(e)||e,p=C.p(t),f=function(t,e){var i=C.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(o)},h=function(t,e){return C.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return c?f(1,0):f(31,11);case l:return c?f(1,v):f(0,v+1);case a:var $=this.$locale().weekStart||0,g=(m<$?m+7:m)-$;return f(c?_-g:_+(6-g),v);case o:case d:return h(y+"Hours",0);case r:return h(y+"Minutes",1);case s:return h(y+"Seconds",2);case i:return h(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,c=C.p(t),p="set"+(this.$u?"UTC":""),f=(a={},a[o]=p+"Date",a[d]=p+"Date",a[l]=p+"Month",a[u]=p+"FullYear",a[r]=p+"Hours",a[s]=p+"Minutes",a[i]=p+"Seconds",a[n]=p+"Milliseconds",a)[c],h=c===o?this.$D+(e-this.$W):e;if(c===l||c===u){var m=this.clone().set(d,1);m.$d[f](h),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[C.p(t)]()},v.add=function(n,c){var d,p=this;n=Number(n);var f=C.p(c),h=function(t){var e=M(p);return C.w(e.date(e.date()+Math.round(t*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===o)return h(1);if(f===a)return h(7);var m=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[f]||1,v=this.$d.getTime()+n*m;return C.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=C.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,u=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return C.s(r%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:C.s(a+1,2,"0"),MMM:u(n.monthsShort,a,c,3),MMMM:u(c,a),D:this.$D,DD:C.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:C.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,o,!0),A:f(r,o,!1),m:String(o),mm:C.s(o,2,"0"),s:String(this.$s),ss:C.s(this.$s,2,"0"),SSS:C.s(this.$ms,3,"0"),Z:s};return i.replace(h,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,p){var f,h=C.p(d),m=M(n),v=(m.utcOffset()-this.utcOffset())*t,_=this-m,y=C.m(this,m);return y=(f={},f[u]=y/12,f[l]=y,f[c]=y/3,f[a]=(_-v)/6048e5,f[o]=(_-v)/864e5,f[r]=_/e,f[s]=_/t,f[i]=_/1e3,f)[h]||_,p?y:C.a(y)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return C.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),D=w.prototype;return M.prototype=D,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",u],["$D",d]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,w,M),t.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=$[y],M.Ls=$,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:a,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof y},p=function(t,e,n){return new y(t,n,e.$l)},f=function(t){return e.p(t)+"s"},h=function(t){return t<0},m=function(t){return h(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},_=function(t,e){return t?h(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function h(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return p(t*u[f(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[f(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(c);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=h.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*u[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=_(o,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,c=s.format||r.format||a.format?"T":"",u=(l?"-":"")+"P"+t.format+e.format+i.format+c+s.format+r.format+a.format;return"P"===u||"-P"===u?"P0D":u},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/u[f(t)]},v.get=function(t){var e=this.$ms,n=f(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/u[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*u[f(e)]:d(t)?t.$ms:p(t,this).$ms,p(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return p(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},h}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return p(t,{$l:n},e)},s.isDuration=d;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},212:function(t){t.exports=function(){"use strict";return function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}}}()},412:function(t){t.exports=function(){"use strict";return function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var p=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=s(f,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:h,references:1})}o.push(d)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),c=0;c<r.length;c++){var u=n(r[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),i=n(795),s=n.n(i),r=n(569),o=n.n(r),a=n(565),l=n.n(a),c=n(216),u=n.n(c),d=n(589),p=n.n(d),f=n(10),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=o().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=u(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m="shake";class v{#t=null;constructor(){if(new.target===v)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),t?.()}),600)}}const _={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function y(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_.BEFOREEND;if(!(t instanceof v))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function $(t,e){if(!(t instanceof v&&e instanceof v))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function g(t){if(null!==t){if(!(t instanceof v))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}const b=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],M=36e5,C="YYYY-MM-DD",w="HH:mm",D="MMM DD",S="DD/MM/YY HH:mm",k="DEFAULT",E="EDITING";var x=n(484),A=n.n(x),O=n(646),P=n.n(O),T=n(412),B=n.n(T),U=n(212),H=n.n(U);A().extend(P()),A().extend(B()),A().extend(H());const I=t=>{const e={};return Object.keys(t).forEach((n=>{var i;e[(i=n,i.toLowerCase().replace(/([-_][a-z])/g,(t=>t.toUpperCase().replace("-","").replace("_",""))))]=t[n]})),e},F=(t,e)=>t?A()(t).format(e):"";class Y extends v{#e;#n;#i;constructor(t){let{tripPoints:e,destinations:n,offers:i}=t;super(),this.#e=e,this.#n=n,this.#i=i}get template(){return t=this.#e,e=this.#n,n=this.#i,`<section class="trip-main__trip-info  trip-info">\n    ${((t,e)=>{t.sort(((t,e)=>((t,e)=>{const n=A()(t.date_from),i=A()(e.date_from),s=n.isBefore(i);return s?-s:n.isAfter(i)})(t,e)));const n=F(t[0].date_from,D),i=F(t[t.length-1].date_to,D);let s,r=t.map((t=>e.find((e=>t.destination===e.id)).name));return r=r.filter(((t,e,n)=>n[e]!==n[e+1])),s=r.length>3?`${r[0]} &mdash; &hellip; &mdash; ${r[r.length-1]}`:r.join(" &mdash; "),`<div class="trip-info__main">\n    <h1 class="trip-info__title">${s}</h1>\n\n    <p class="trip-info__dates">${n}&nbsp;&mdash;&nbsp;${i}</p>\n  </div>`})(t,e)}\n\n    ${((t,e)=>{let n=0;return t.map((t=>{n+=t.base_price?t.base_price:0;const i=e.find((e=>e.type===t.type)).offers;t.offers.map((t=>{const e=i.find((e=>e.id===t));n+=e.price?e.price:0}))})),`<p class="trip-info__cost">\n    Total: &euro;&nbsp;<span class="trip-info__cost-value">${n}</span>\n  </p>`})(t,n)}\n  </section>`;var t,e,n}}class q extends v{#s=null;constructor(t){let{filters:e}=t;super(),this.#s=e}get template(){return(t=>{const e=this.#s.map(((t,e)=>((t,e)=>{const{type:n,count:i}=t;return`<div class="trip-filters__filter">\n      <input\n        id="filter-${n}"\n        class="trip-filters__filter-input\n        visually-hidden"\n        type="radio"\n        name="trip-filter"\n        value="${n}"\n        ${e?"checked":""}\n        ${i?"":"disabled"}>\n      <label\n        class="trip-filters__filter-label"\n        for="filter-${n}">\n        ${n}\n      </label>\n    </div>`})(t,0===e))).join("");return`<form class="trip-filters" action="#" method="get">\n    ${e}\n\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>`})()}}class L extends v{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}}class R extends v{get template(){return'<ul class="trip-events__list">\n  </ul>'}}class j extends v{get template(){return'<p class="trip-events__msg">\n    Click New Event to create your first point\n  </p>'}}class N extends v{#r=null;#i=null;#o=null;#a=null;#l=null;constructor(t){let{tripPoint:e,offers:n,destination:i,onRollupButtonClick:s,onFavoriteClick:r}=t;super(),this.#r=e,this.#i=n,this.#o=i,this.#a=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#c),this.#l=r,this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#u)}get template(){return((t,e,n)=>{const{basePrice:i,dateFrom:s,dateTo:r,isFavorite:o,type:a,offers:l}=I(t),c=F(s,D),u=F(s,"YYYY-MM-DDTHH:mm"),d=F(s,C),p=F(s,w),f=F(r,C),h=F(r,w),m=((t,e)=>{const n=A()(e).diff(A()(t));let i;switch(!0){case n>=864e5:i=A().duration(n).format("DD[D] HH[H] mm[M]");break;case n>=M:i=A().duration(n).format("HH[H] mm[M]");break;case n<M:i=A().duration(n).format("mm[M]")}return i})(s,r),v=o?"event__favorite-btn--active":"";return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime=${d}>${c}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${a}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${a} ${n.name}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime=${u}>${p}</time>\n        &mdash;\n        <time class="event__end-time" datetime=${f}>${h}</time>\n      </p>\n      <p class="event__duration">${m}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${i}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      ${((t,e)=>t.map((t=>{const n=e.find((e=>e.id===t));return`<li class="event__offer">\n        <span class="event__offer-title">${n.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${n.price}</span>\n      </li>`})).join(""))(l,e)}\n    </ul>\n    <button class="event__favorite-btn ${v}" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n</li>`})(this.#r,this.#i,this.#o)}#c=t=>{t.preventDefault(),this.#a()};#u=t=>{t.preventDefault(),this.#l()}}class W extends v{#d=null;constructor(t){let{onFormSubmit:e}=t;super(),this.#d=e,this.element.querySelector("form").addEventListener("submit",this.#p)}get template(){return'<li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n    </form>\n  </li>'}#p=t=>{t.preventDefault(),this.#d()}}class Z extends v{#r=null;#f=null;#o=null;#a=null;constructor(t){let{tripPoint:e,destinationList:n,destination:i,onRollupButtonClick:s}=t;super(),this.#r=e,this.#f=n,this.#o=i,this.#a=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#c)}get template(){return((t,e,n)=>{const{basePrice:i,dateFrom:s,dateTo:r,type:o}=I(t),a=s?F(s,S):"",l=r?F(r,S):"",c=o||b[0],u=n.name?n.name:"",d=i||"";return`<header class="event__header">\n    <div class="event__type-wrapper">\n      <label class="event__type  event__type-btn" for="event-type-toggle-1">\n        <span class="visually-hidden">Choose event type</span>\n        <img class="event__type-icon" width="17" height="17" src="img/icons/${c}.png" alt="Event type icon">\n      </label>\n      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n      <div class="event__type-list">\n        <fieldset class="event__type-group">\n          <legend class="visually-hidden">Event type</legend>\n          ${b.map((t=>{return`<div class="event__type-item">\n      <input id="event-type-${t}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}">\n      <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${e=t,e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}</label>\n    </div>`;var e})).join("")}\n        </fieldset>\n      </div>\n    </div>\n\n    <div class="event__field-group  event__field-group--destination">\n      <label class="event__label  event__type-output" for="event-destination-1">\n        ${c}\n      </label>\n      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${u}" list="destination-list-1">\n      <datalist id="destination-list-1">\n        ${p=e,p.map((t=>`<option value="${t.name}"></option>`)).join("")}\n      </datalist>\n    </div>\n\n    <div class="event__field-group  event__field-group--time">\n      <label class="visually-hidden" for="event-start-time-1">From</label>\n      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${a}">\n      &mdash;\n      <label class="visually-hidden" for="event-end-time-1">To</label>\n      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${l}">\n    </div>\n\n    <div class="event__field-group  event__field-group--price">\n      <label class="event__label" for="event-price-1">\n        <span class="visually-hidden">Price</span>\n        &euro;\n      </label>\n      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${d}">\n    </div>\n\n    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n    <button class="event__reset-btn" type="reset">Delete</button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </header>`;var p})(this.#r,this.#f,this.#o)}#c=t=>{t.preventDefault(),this.#a()}}class z extends v{get template(){return'<section class="event__details">\n  </section>'}}class J extends v{#o;constructor(t){let{destination:e}=t;super(),this.#o=e}get template(){return`<section class="event__section  event__section--destination">\n    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n    <p class="event__destination-description">${(t=this.#o).description?t.description:""}</p>\n\n    <div class="event__photos-container">\n      <div class="event__photos-tape">\n        ${e=t.pictures,e.map((t=>`<img class="event__photo" src="${t.src}" alt="${t.description}">`))}\n      </div>\n    </div>\n  </section>`;var t,e}}class V extends v{#h;#i;constructor(t){let{pointOffers:e,offers:n}=t;super(),this.#h=e,this.#i=n}get template(){return`<section class="event__section  event__section--offers">\n    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n    <div class="event__available-offers">\n      ${((t,e)=>e.map(((e,n)=>`<div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${n}" type="checkbox" name="event-offer-comfort" ${t.filter((t=>t===e.id)).length?"checked":""}>\n        <label class="event__offer-label" for="event-offer-${n}">\n          <span class="event__offer-title">${e.title}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${e.price}</span>\n        </label>\n      </div>`)).join(""))(this.#h,this.#i)}\n    </div>\n  </section>`}}class X{#m=null;#v=null;#_=null;#y=null;#$=null;#g=null;#b=null;#M=null;#C=k;constructor(t){let{parentContainer:e,offersModel:n,destinationsModel:i,onDataChange:s,onModeChange:r}=t;this.#m=e,this.#y=n,this.#$=i,this.#v=s,this.#_=r}#w=()=>{$(this.#b,this.#g),document.addEventListener("keydown",this.#D),this.#_(),this.#C=E};#S=()=>{$(this.#g,this.#b),document.removeEventListener("keydown",this.#D),this.#C=k};#D=t=>{"Escape"===t.key&&(t.preventDefault(),this.#S())};#k=()=>{this.#w()};#E=()=>{this.#S()};#l=()=>{this.#v({...this.#M,is_favorite:!this.#M.is_favorite})};#d=()=>{this.#S()};destroy=()=>{g(this.#g),g(this.#b)};resetView=()=>{this.#C!==k&&this.#S()};init(t){this.#M=t;const e=this.#y.getByType(this.#M.type),n=this.#$.getById(this.#M.destination),i=this.#$.destinations,s=this.#g,r=this.#b;this.#g=new N({tripPoint:this.#M,offers:e,destination:n,onRollupButtonClick:this.#k,onFavoriteClick:this.#l}),this.#b=new W({onFormSubmit:this.#d});const o=this.#b.element.querySelector(".event"),a=new z;y(new Z({tripPoint:this.#M,destinationList:i,destination:n,onRollupButtonClick:this.#E}),o),y(a,o),n&&y(new J({destination:n}),a.element),e.length&&y(new V({pointOffers:t.offers,offers:e}),a.element),null!==s&&null!==r?(this.#C===k&&$(this.#g,s),this.#C===E&&$(this.#b,r),g(s),g(r)):y(this.#g,this.#m)}}const G={everything:t=>t,future:t=>t.filter((t=>{return(e=t.date_from)&&A()(e).isAfter(A()());var e})),present:t=>t.filter((t=>{return e=t.date_from,n=t.date_to,e&&n&&A()(e).isSameOrBefore(A()())&&A()(n).isSameOrAfter(A()());var e,n})),past:t=>t.filter((t=>{return(e=t.date_to)&&A()(e).isBefore(A()());var e}))},K=["Geneva","Tokio","London","Kazan","Madrid","Rim","Moscow"],Q=["Compellavisseque adfantur, pro et sociavisset ex ex recusavistis, expectabisque, creuissetque.","Oravissetisque ad sanguisque effodamus ob in moveamus institueram. Helica foedentque declinavisse, dicavisseque, in confligis patrii ab caucasus descenderatisque, ad exorti profereminique, vocabantque uicissetque portaveris exaudiamque.","Iis exquiratisque praestaremus aut villa devolvit dolore, cum latinorum compellabatisque, aut refixaque ob vastarique, caritatisque sentirentque existimemusque resonavere multares detrudes.","Rediveratis cum ueniet, cognovissetis, ex affixus constavisse aut cum detrudo. Devolveremusque abibo intererimus et cupitis a bellumque hircus.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante."],tt=t=>t[Math.floor(Math.random()*t.length)],et=()=>"https://loremflickr.com/248/152?random="+crypto.randomUUID(),nt=t=>new Date(t).toISOString(),it=[{id:crypto.randomUUID(),base_price:1100,date_from:nt("05 October 2011 12:36"),date_to:nt("06 October 2011 16:48"),destination:2,is_favorite:!1,offers:[],type:b[1]},{id:crypto.randomUUID(),base_price:200,date_from:nt("11 April 2011 1:51"),date_to:nt("13 April 2011 1:18"),destination:1,is_favorite:!0,offers:[1],type:b[2]},{id:crypto.randomUUID(),base_price:700,date_from:nt("04 October 2011 14:48"),date_to:nt("05 October 2011 5:48"),destination:3,is_favorite:!1,offers:[],type:b[7]},{id:crypto.randomUUID(),base_price:100,date_from:nt("16 October 2011 12:11"),date_to:nt("16 October 2011 12:48"),destination:4,is_favorite:!0,offers:[1,2,4,5],type:b[5]}],st=()=>tt(it),rt=[{type:"taxi",offers:[{id:1,title:"Upgrade to a business class",price:66},{id:2,title:"Drive slowly",price:48}]},{type:"bus",offers:[{id:1,title:"Order meal",price:191},{id:2,title:"Choose seats",price:94}]},{type:"train",offers:[{id:1,title:"Book a taxi at the arrival point",price:190}]},{type:"flight",offers:[{id:1,title:"Choose meal",price:135},{id:2,title:"Choose seats",price:57},{id:3,title:"Upgrade to comfort class",price:32},{id:4,title:"Upgrade to business class",price:48},{id:5,title:"Add luggage",price:162}]},{type:"check-in",offers:[{id:1,title:"Choose the time of check-in",price:166},{id:2,title:"Choose the time of check-out",price:158}]},{type:"sightseeing",offers:[]},{type:"ship",offers:[{id:1,title:"Upgrade to comfort class",price:183},{id:2,title:"Upgrade to business class",price:194}]},{type:"drive",offers:[{id:1,title:"With automatic transmission",price:137},{id:2,title:"With air conditioning",price:99}]},{type:"restaurant",offers:[{id:1,title:"Choose live music",price:200},{id:2,title:"Choose VIP area",price:127}]}],ot=[{id:1,description:tt(Q),name:tt(K),pictures:[{src:et(),description:crypto.randomUUID()},{src:et(),description:crypto.randomUUID()}]},{id:2,description:tt(Q),name:tt(K),pictures:[{src:et(),description:crypto.randomUUID()},{src:et(),description:crypto.randomUUID()}]},{id:3,description:tt(Q),name:tt(K),pictures:[{src:et(),description:crypto.randomUUID()},{src:et(),description:crypto.randomUUID()},{src:et(),description:crypto.randomUUID()}]},{id:4,description:tt(Q),name:tt(K),pictures:[{src:et(),description:crypto.randomUUID()},{src:et(),description:crypto.randomUUID()},{src:et(),description:crypto.randomUUID()}]}],at=document.querySelector(".page-body"),lt=new class{#e;constructor(){this.#e=Array.from({length:3},st)}get points(){return this.#e}},ct=new class{#i;constructor(){this.#i=rt}get offers(){return this.#i}getByType(t){return this.#i.find((e=>e.type===t)).offers}},ut=new class{#n;constructor(){this.#n=ot}get destinations(){return this.#n}getById(t){return this.#n.find((e=>e.id===t))}},dt=new class{#x=new R;#m=null;#A=null;#y=null;#$=null;#O=[];#n=[];#i=[];#P=new Map;constructor(t){let{parentContainer:e,pointsModel:n,offersModel:i,destinationsModel:s}=t;this.#m=e,this.#A=n,this.#y=i,this.#$=s}#T=t=>{const e=new X({parentContainer:this.#x.element,offersModel:this.#y,destinationsModel:this.#$,onDataChange:this.#B,onModeChange:this.#_});e.init(t),this.#P.set(t.id,e)};#B=t=>{var e,n;this.#O=(e=this.#O,n=t,e.map((t=>t.id===n.id?n:t))),this.#P.get(t.id).init(t)};#_=()=>{this.#P.forEach((t=>t.resetView()))};init(){const t=this.#m.querySelector(".trip-main"),e=t.querySelector(".trip-controls__filters"),n=this.#m.querySelector(".trip-events");this.#O=this.#A.points,this.#n=this.#$.destinations,this.#i=this.#y.offers;const i=(s=this.#O,Object.entries(G).map((t=>{let[e,n]=t;return{type:e,count:n(s).length}})));var s;if(y(new q({filters:i}),e),this.#O.length){y(new Y({tripPoints:this.#O,destinations:this.#n,offers:this.#i}),t,_.AFTERBEGIN),y(new L,n),y(this.#x,n);for(let t=0;t<this.#O.length;t++)this.#T(this.#O[t])}else y(new j,n)}}({parentContainer:at,pointsModel:lt,offersModel:ct,destinationsModel:ut});dt.init()})()})();
//# sourceMappingURL=bundle.8c2452996eedce1272c2.js.map