/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
*/
!function(t,e,i){var n=t.L,o={};o.version="0.7.3","object"==typeof module&&"object"==typeof module.exports?module.exports=o:"function"==typeof define&&define.amd&&define(o),o.noConflict=function(){return t.L=n,this},t.L=o,o.Util={extend:function(t){var e,i,n,o,s=Array.prototype.slice.call(arguments,1);for(i=0,n=s.length;n>i;i++){o=s[i]||{};for(e in o)o.hasOwnProperty(e)&&(t[e]=o[e])}return t},bind:function(t,e){var i=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return t.apply(e,i||arguments)}},stamp:function(){var t=0,e="_leaflet_id";return function(i){return i[e]=i[e]||++t,i[e]}}(),invokeEach:function(t,e,i){var n,o;if("object"==typeof t){o=Array.prototype.slice.call(arguments,3);for(n in t)e.apply(i,[n,t[n]].concat(o));return!0}return!1},limitExecByInterval:function(t,e,i){var n,o;return function s(){var a=arguments;return n?void(o=!0):(n=!0,setTimeout(function(){n=!1,o&&(s.apply(i,a),o=!1)},e),void t.apply(i,a))}},falseFn:function(){return!1},formatNum:function(t,e){var i=Math.pow(10,e||5);return Math.round(t*i)/i},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},splitWords:function(t){return o.Util.trim(t).split(/\s+/)},setOptions:function(t,e){return t.options=o.extend({},t.options,e),t.options},getParamString:function(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")},template:function(t,e){return t.replace(/\{ *([\w_]+) *\}/g,function(t,n){var o=e[n];if(o===i)throw new Error("No value provided for variable "+t);return"function"==typeof o&&(o=o(e)),o})},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function e(e){var i,n,o=["webkit","moz","o","ms"];for(i=0;i<o.length&&!n;i++)n=t[o[i]+e];return n}function i(e){var i=+new Date,o=Math.max(0,16-(i-n));return n=i+o,t.setTimeout(e,o)}var n=0,s=t.requestAnimationFrame||e("RequestAnimationFrame")||i,a=t.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){t.clearTimeout(e)};o.Util.requestAnimFrame=function(e,n,a,r){return e=o.bind(e,n),a&&s===i?void e():s.call(t,e,r)},o.Util.cancelAnimFrame=function(e){e&&a.call(t,e)}}(),o.extend=o.Util.extend,o.bind=o.Util.bind,o.stamp=o.Util.stamp,o.setOptions=o.Util.setOptions,o.Class=function(){},o.Class.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this._initHooks&&this.callInitHooks()},i=function(){};i.prototype=this.prototype;var n=new i;n.constructor=e,e.prototype=n;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&(e[s]=this[s]);t.statics&&(o.extend(e,t.statics),delete t.statics),t.includes&&(o.Util.extend.apply(null,[n].concat(t.includes)),delete t.includes),t.options&&n.options&&(t.options=o.extend({},n.options,t.options)),o.extend(n,t),n._initHooks=[];var a=this;return e.__super__=a.prototype,n.callInitHooks=function(){if(!this._initHooksCalled){a.prototype.callInitHooks&&a.prototype.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=n._initHooks.length;e>t;t++)n._initHooks[t].call(this)}},e},o.Class.include=function(t){o.extend(this.prototype,t)},o.Class.mergeOptions=function(t){o.extend(this.prototype.options,t)},o.Class.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i)};var s="_leaflet_events";o.Mixin={},o.Mixin.Events={addEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d=this[s]=this[s]||{},p=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)r={action:e,context:i||this},h=t[n],p?(l=h+"_idx",u=l+"_len",c=d[l]=d[l]||{},c[p]||(c[p]=[],d[u]=(d[u]||0)+1),c[p].push(r)):(d[h]=d[h]||[],d[h].push(r));return this},hasEventListeners:function(t){var e=this[s];return!!e&&(t in e&&e[t].length>0||t+"_idx"in e&&e[t+"_idx_len"]>0)},removeEventListener:function(t,e,i){if(!this[s])return this;if(!t)return this.clearAllEventListeners();if(o.Util.invokeEach(t,this.removeEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d,p,_=this[s],m=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)if(r=t[n],u=r+"_idx",c=u+"_len",d=_[u],e){if(h=m&&d?d[m]:_[r]){for(l=h.length-1;l>=0;l--)h[l].action!==e||i&&h[l].context!==i||(p=h.splice(l,1),p[0].action=o.Util.falseFn);i&&d&&0===h.length&&(delete d[m],_[c]--)}}else delete _[r],delete _[u],delete _[c];return this},clearAllEventListeners:function(){return delete this[s],this},fireEvent:function(t,e){if(!this.hasEventListeners(t))return this;var i,n,a,r,h,l=o.Util.extend({},e,{type:t,target:this}),u=this[s];if(u[t])for(i=u[t].slice(),n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);r=u[t+"_idx"];for(h in r)if(i=r[h].slice())for(n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);return this},addOneTimeEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addOneTimeEventListener,this,e,i))return this;var n=o.bind(function(){this.removeEventListener(t,e,i).removeEventListener(t,n,i)},this);return this.addEventListener(t,e,i).addEventListener(t,n,i)}},o.Mixin.Events.on=o.Mixin.Events.addEventListener,o.Mixin.Events.off=o.Mixin.Events.removeEventListener,o.Mixin.Events.once=o.Mixin.Events.addOneTimeEventListener,o.Mixin.Events.fire=o.Mixin.Events.fireEvent,function(){var n="ActiveXObject"in t,s=n&&!e.addEventListener,a=navigator.userAgent.toLowerCase(),r=-1!==a.indexOf("webkit"),h=-1!==a.indexOf("chrome"),l=-1!==a.indexOf("phantom"),u=-1!==a.indexOf("android"),c=-1!==a.search("android [23]"),d=-1!==a.indexOf("gecko"),p=typeof orientation!=i+"",_=t.navigator&&t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints&&!t.PointerEvent,m=t.PointerEvent&&t.navigator.pointerEnabled&&t.navigator.maxTouchPoints||_,f="devicePixelRatio"in t&&t.devicePixelRatio>1||"matchMedia"in t&&t.matchMedia("(min-resolution:144dpi)")&&t.matchMedia("(min-resolution:144dpi)").matches,g=e.documentElement,v=n&&"transition"in g.style,y="WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix&&!c,P="MozPerspective"in g.style,L="OTransition"in g.style,x=!t.L_DISABLE_3D&&(v||y||P||L)&&!l,w=!t.L_NO_TOUCH&&!l&&function(){var t="ontouchstart";if(m||t in g)return!0;var i=e.createElement("div"),n=!1;return i.setAttribute?(i.setAttribute(t,"return;"),"function"==typeof i[t]&&(n=!0),i.removeAttribute(t),i=null,n):!1}();o.Browser={ie:n,ielt9:s,webkit:r,gecko:d&&!r&&!t.opera&&!n,android:u,android23:c,chrome:h,ie3d:v,webkit3d:y,gecko3d:P,opera3d:L,any3d:x,mobile:p,mobileWebkit:p&&r,mobileWebkit3d:p&&y,mobileOpera:p&&t.opera,touch:w,msPointer:_,pointer:m,retina:f}}(),o.Point=function(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e},o.Point.prototype={clone:function(){return new o.Point(this.x,this.y)},add:function(t){return this.clone()._add(o.point(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(o.point(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},distanceTo:function(t){t=o.point(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=o.point(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=o.point(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+o.Util.formatNum(this.x)+", "+o.Util.formatNum(this.y)+")"}},o.point=function(t,e,n){return t instanceof o.Point?t:o.Util.isArray(t)?new o.Point(t[0],t[1]):t===i||null===t?t:new o.Point(t,e,n)},o.Bounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.Bounds.prototype={extend:function(t){return t=o.point(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new o.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new o.Point(this.min.x,this.max.y)},getTopRight:function(){return new o.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return t="number"==typeof t[0]||t instanceof o.Point?o.point(t):o.bounds(t),t instanceof o.Bounds?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=o.bounds(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>=e.x&&n.x<=i.x,r=s.y>=e.y&&n.y<=i.y;return a&&r},isValid:function(){return!(!this.min||!this.max)}},o.bounds=function(t,e){return!t||t instanceof o.Bounds?t:new o.Bounds(t,e)},o.Transformation=function(t,e,i,n){this._a=t,this._b=e,this._c=i,this._d=n},o.Transformation.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new o.Point((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}},o.DomUtil={get:function(t){return"string"==typeof t?e.getElementById(t):t},getStyle:function(t,i){var n=t.style[i];if(!n&&t.currentStyle&&(n=t.currentStyle[i]),(!n||"auto"===n)&&e.defaultView){var o=e.defaultView.getComputedStyle(t,null);n=o?o[i]:null}return"auto"===n?null:n},getViewportOffset:function(t){var i,n=0,s=0,a=t,r=e.body,h=e.documentElement;do{if(n+=a.offsetTop||0,s+=a.offsetLeft||0,n+=parseInt(o.DomUtil.getStyle(a,"borderTopWidth"),10)||0,s+=parseInt(o.DomUtil.getStyle(a,"borderLeftWidth"),10)||0,i=o.DomUtil.getStyle(a,"position"),a.offsetParent===r&&"absolute"===i)break;if("fixed"===i){n+=r.scrollTop||h.scrollTop||0,s+=r.scrollLeft||h.scrollLeft||0;break}if("relative"===i&&!a.offsetLeft){var l=o.DomUtil.getStyle(a,"width"),u=o.DomUtil.getStyle(a,"max-width"),c=a.getBoundingClientRect();("none"!==l||"none"!==u)&&(s+=c.left+a.clientLeft),n+=c.top+(r.scrollTop||h.scrollTop||0);break}a=a.offsetParent}while(a);a=t;do{if(a===r)break;n-=a.scrollTop||0,s-=a.scrollLeft||0,a=a.parentNode}while(a);return new o.Point(s,n)},documentIsLtr:function(){return o.DomUtil._docIsLtrCached||(o.DomUtil._docIsLtrCached=!0,o.DomUtil._docIsLtr="ltr"===o.DomUtil.getStyle(e.body,"direction")),o.DomUtil._docIsLtr},create:function(t,i,n){var o=e.createElement(t);return o.className=i,n&&n.appendChild(o),o},hasClass:function(t,e){if(t.classList!==i)return t.classList.contains(e);var n=o.DomUtil._getClass(t);return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)},addClass:function(t,e){if(t.classList!==i)for(var n=o.Util.splitWords(e),s=0,a=n.length;a>s;s++)t.classList.add(n[s]);else if(!o.DomUtil.hasClass(t,e)){var r=o.DomUtil._getClass(t);o.DomUtil._setClass(t,(r?r+" ":"")+e)}},removeClass:function(t,e){t.classList!==i?t.classList.remove(e):o.DomUtil._setClass(t,o.Util.trim((" "+o.DomUtil._getClass(t)+" ").replace(" "+e+" "," ")))},_setClass:function(t,e){t.className.baseVal===i?t.className=e:t.className.baseVal=e},_getClass:function(t){return t.className.baseVal===i?t.className:t.className.baseVal},setOpacity:function(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(o){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}},testProp:function(t){for(var i=e.documentElement.style,n=0;n<t.length;n++)if(t[n]in i)return t[n];return!1},getTranslateString:function(t){var e=o.Browser.webkit3d,i="translate"+(e?"3d":"")+"(",n=(e?",0":"")+")";return i+t.x+"px,"+t.y+"px"+n},getScaleString:function(t,e){var i=o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1*t))),n=" scale("+t+") ";return i+n},setPosition:function(t,e,i){t._leaflet_pos=e,!i&&o.Browser.any3d?t.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(e):(t.style.left=e.x+"px",t.style.top=e.y+"px")},getPosition:function(t){return t._leaflet_pos}},o.DomUtil.TRANSFORM=o.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),o.DomUtil.TRANSITION=o.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),o.DomUtil.TRANSITION_END="webkitTransition"===o.DomUtil.TRANSITION||"OTransition"===o.DomUtil.TRANSITION?o.DomUtil.TRANSITION+"End":"transitionend",function(){if("onselectstart"in e)o.extend(o.DomUtil,{disableTextSelection:function(){o.DomEvent.on(t,"selectstart",o.DomEvent.preventDefault)},enableTextSelection:function(){o.DomEvent.off(t,"selectstart",o.DomEvent.preventDefault)}});else{var i=o.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);o.extend(o.DomUtil,{disableTextSelection:function(){if(i){var t=e.documentElement.style;this._userSelect=t[i],t[i]="none"}},enableTextSelection:function(){i&&(e.documentElement.style[i]=this._userSelect,delete this._userSelect)}})}o.extend(o.DomUtil,{disableImageDrag:function(){o.DomEvent.on(t,"dragstart",o.DomEvent.preventDefault)},enableImageDrag:function(){o.DomEvent.off(t,"dragstart",o.DomEvent.preventDefault)}})}(),o.LatLng=function(t,e,n){if(t=parseFloat(t),e=parseFloat(e),isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=t,this.lng=e,n!==i&&(this.alt=parseFloat(n))},o.extend(o.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),o.LatLng.prototype={equals:function(t){if(!t)return!1;t=o.latLng(t);var e=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return e<=o.LatLng.MAX_MARGIN},toString:function(t){return"LatLng("+o.Util.formatNum(this.lat,t)+", "+o.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){t=o.latLng(t);var e=6378137,i=o.LatLng.DEG_TO_RAD,n=(t.lat-this.lat)*i,s=(t.lng-this.lng)*i,a=this.lat*i,r=t.lat*i,h=Math.sin(n/2),l=Math.sin(s/2),u=h*h+l*l*Math.cos(a)*Math.cos(r);return 2*e*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))},wrap:function(t,e){var i=this.lng;return t=t||-180,e=e||180,i=(i+e)%(e-t)+(t>i||i===e?e:t),new o.LatLng(this.lat,i)}},o.latLng=function(t,e){return t instanceof o.LatLng?t:o.Util.isArray(t)?"number"==typeof t[0]||"string"==typeof t[0]?new o.LatLng(t[0],t[1],t[2]):null:t===i||null===t?t:"object"==typeof t&&"lat"in t?new o.LatLng(t.lat,"lng"in t?t.lng:t.lon):e===i?null:new o.LatLng(t,e)},o.LatLngBounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.LatLngBounds.prototype={extend:function(t){if(!t)return this;var e=o.latLng(t);return t=null!==e?e:o.latLngBounds(t),t instanceof o.LatLng?this._southWest||this._northEast?(this._southWest.lat=Math.min(t.lat,this._southWest.lat),this._southWest.lng=Math.min(t.lng,this._southWest.lng),this._northEast.lat=Math.max(t.lat,this._northEast.lat),this._northEast.lng=Math.max(t.lng,this._northEast.lng)):(this._southWest=new o.LatLng(t.lat,t.lng),this._northEast=new o.LatLng(t.lat,t.lng)):t instanceof o.LatLngBounds&&(this.extend(t._southWest),this.extend(t._northEast)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new o.LatLngBounds(new o.LatLng(e.lat-n,e.lng-s),new o.LatLng(i.lat+n,i.lng+s))},getCenter:function(){return new o.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new o.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new o.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof o.LatLng?o.latLng(t):o.latLngBounds(t);var e,i,n=this._southWest,s=this._northEast;return t instanceof o.LatLngBounds?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=s.lat&&e.lng>=n.lng&&i.lng<=s.lng},intersects:function(t){t=o.latLngBounds(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>=e.lat&&n.lat<=i.lat,r=s.lng>=e.lng&&n.lng<=i.lng;return a&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t){return t?(t=o.latLngBounds(t),this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast())):!1},isValid:function(){return!(!this._southWest||!this._northEast)}},o.latLngBounds=function(t,e){return!t||t instanceof o.LatLngBounds?t:new o.LatLngBounds(t,e)},o.Projection={},o.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=t.lng*e,a=n*e;return a=Math.log(Math.tan(Math.PI/4+a/2)),new o.Point(s,a)},unproject:function(t){var e=o.LatLng.RAD_TO_DEG,i=t.x*e,n=(2*Math.atan(Math.exp(t.y))-Math.PI/2)*e;return new o.LatLng(n,i)}},o.Projection.LonLat={project:function(t){return new o.Point(t.lng,t.lat)},unproject:function(t){return new o.LatLng(t.y,t.x)}},o.CRS={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},scale:function(t){return 256*Math.pow(2,t)},getSize:function(t){var e=this.scale(t);return o.point(e,e)}},o.CRS.Simple=o.extend({},o.CRS,{projection:o.Projection.LonLat,transformation:new o.Transformation(1,0,-1,0),scale:function(t){return Math.pow(2,t)}}),o.CRS.EPSG3857=o.extend({},o.CRS,{code:"EPSG:3857",projection:o.Projection.SphericalMercator,transformation:new o.Transformation(.5/Math.PI,.5,-.5/Math.PI,.5),project:function(t){var e=this.projection.project(t),i=6378137;return e.multiplyBy(i)}}),o.CRS.EPSG900913=o.extend({},o.CRS.EPSG3857,{code:"EPSG:900913"}),o.CRS.EPSG4326=o.extend({},o.CRS,{code:"EPSG:4326",projection:o.Projection.LonLat,transformation:new o.Transformation(1/360,.5,-1/360,.5)}),o.Map=o.Class.extend({includes:o.Mixin.Events,options:{crs:o.CRS.EPSG3857,fadeAnimation:o.DomUtil.TRANSITION&&!o.Browser.android23,trackResize:!0,markerZoomAnimation:o.DomUtil.TRANSITION&&o.Browser.any3d},initialize:function(t,e){e=o.setOptions(this,e),this._initContainer(t),this._initLayout(),this._onResize=o.bind(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.center&&e.zoom!==i&&this.setView(o.latLng(e.center),e.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._tileLayersNum=0,this.callInitHooks(),this._addLayers(e.layers)},setView:function(t,e){return e=e===i?this.getZoom():e,this._resetView(o.latLng(t),this._limitZoom(e)),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=this._limitZoom(t),this)},zoomIn:function(t,e){return this.setZoom(this._zoom+(t||1),e)},zoomOut:function(t,e){return this.setZoom(this._zoom-(t||1),e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),a=t instanceof o.Point?t:this.latLngToContainerPoint(t),r=a.subtract(s).multiplyBy(1-1/n),h=this.containerPointToLatLng(s.add(r));return this.setView(h,e,{zoom:i})},fitBounds:function(t,e){e=e||{},t=t.getBounds?t.getBounds():o.latLngBounds(t);var i=o.point(e.paddingTopLeft||e.padding||[0,0]),n=o.point(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n)),a=n.subtract(i).divideBy(2),r=this.project(t.getSouthWest(),s),h=this.project(t.getNorthEast(),s),l=this.unproject(r.add(h).divideBy(2).add(a),s);return s=e&&e.maxZoom?Math.min(e.maxZoom,s):s,this.setView(l,s,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t){return this.fire("movestart"),this._rawPanBy(o.point(t)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(t){return t=o.latLngBounds(t),this.options.maxBounds=t,t?(this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds,this)):this.off("moveend",this._panInsideMaxBounds,this)},panInsideBounds:function(t,e){var i=this.getCenter(),n=this._limitCenter(i,this._zoom,t);return i.equals(n)?this:this.panTo(n,e)},addLayer:function(t){var e=o.stamp(t);return this._layers[e]?this:(this._layers[e]=t,!t.options||isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[e]=t,this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,t.on("load",this._onTileLayerLoad,this)),this._loaded&&this._layerAdd(t),this)},removeLayer:function(t){var e=o.stamp(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&this.fire("layerremove",{layer:t}),this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,t.off("load",this._onTileLayerLoad,this)),this):this},hasLayer:function(t){return t?o.stamp(t)in this._layers:!1},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},invalidateSize:function(t){if(!this._loaded)return this;t=o.extend({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._initialCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),a=n.subtract(s);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o.bind(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){this._loaded&&this.fire("unload"),this._initEvents("off");try{delete this._container._leaflet}catch(t){this._container._leaflet=i}return this._clearPanes(),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this},getCenter:function(){return this._checkIfLoaded(),this._initialCenter&&!this._moved()?this._initialCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new o.LatLngBounds(e,i)},getMinZoom:function(){return this.options.minZoom===i?this._layersMinZoom===i?0:this._layersMinZoom:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===i?this._layersMaxZoom===i?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=o.latLngBounds(t);var n,s=this.getMinZoom()-(e?1:0),a=this.getMaxZoom(),r=this.getSize(),h=t.getNorthWest(),l=t.getSouthEast(),u=!0;i=o.point(i||[0,0]);do s++,n=this.project(l,s).subtract(this.project(h,s)).add(i),u=e?n.x<r.x||n.y<r.y:r.contains(n);while(u&&a>=s);return u&&e?null:e?s:s-1},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new o.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(){var t=this._getTopLeftPoint();return new o.Bounds(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t){var e=this.options.crs;return e.scale(t)/e.scale(this._zoom)},getScaleZoom:function(t){return this._zoom+Math.log(t)/Math.LN2},project:function(t,e){return e=e===i?this._zoom:e,this.options.crs.latLngToPoint(o.latLng(t),e)},unproject:function(t,e){return e=e===i?this._zoom:e,this.options.crs.pointToLatLng(o.point(t),e)},layerPointToLatLng:function(t){var e=o.point(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(o.latLng(t))._round();return e._subtract(this.getPixelOrigin())},containerPointToLayerPoint:function(t){return o.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return o.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(o.point(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))},mouseEventToContainerPoint:function(t){return o.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=o.DomUtil.get(t);if(!e)throw new Error("Map container not found.");if(e._leaflet)throw new Error("Map container is already initialized.");e._leaflet=!0},_initLayout:function(){var t=this._container;o.DomUtil.addClass(t,"leaflet-container"+(o.Browser.touch?" leaflet-touch":"")+(o.Browser.retina?" leaflet-retina":"")+(o.Browser.ielt9?" leaflet-oldie":"")+(this.options.fadeAnimation?" leaflet-fade-anim":""));var e=o.DomUtil.getStyle(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._mapPane=t.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=t.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),t.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),t.shadowPane=this._createPane("leaflet-shadow-pane"),t.overlayPane=this._createPane("leaflet-overlay-pane"),t.markerPane=this._createPane("leaflet-marker-pane"),t.popupPane=this._createPane("leaflet-popup-pane");var e=" leaflet-zoom-hide";this.options.markerZoomAnimation||(o.DomUtil.addClass(t.markerPane,e),o.DomUtil.addClass(t.shadowPane,e),o.DomUtil.addClass(t.popupPane,e))},_createPane:function(t,e){return o.DomUtil.create("div",t,e||this._panes.objectsPane)},_clearPanes:function(){this._container.removeChild(this._mapPane)},_addLayers:function(t){t=t?o.Util.isArray(t)?t:[t]:[];for(var e=0,i=t.length;i>e;e++)this.addLayer(t[e])},_resetView:function(t,e,i,n){var s=this._zoom!==e;n||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=e,this._initialCenter=t,this._initialTopLeftPoint=this._getNewTopLeftPoint(t),i?this._initialTopLeftPoint._add(this._getMapPanePos()):o.DomUtil.setPosition(this._mapPane,new o.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum;var a=!this._loaded;this._loaded=!0,this.fire("viewreset",{hard:!i}),a&&(this.fire("load"),this.eachLayer(this._layerAdd,this)),this.fire("move"),(s||n)&&this.fire("zoomend"),this.fire("moveend",{hard:!i})},_rawPanBy:function(t){o.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_updateZoomLevels:function(){var t,e=1/0,n=-1/0,o=this._getZoomSpan();for(t in this._zoomBoundLayers){var s=this._zoomBoundLayers[t];isNaN(s.options.minZoom)||(e=Math.min(e,s.options.minZoom)),isNaN(s.options.maxZoom)||(n=Math.max(n,s.options.maxZoom))}t===i?this._layersMaxZoom=this._layersMinZoom=i:(this._layersMaxZoom=n,this._layersMinZoom=e),o!==this._getZoomSpan()&&this.fire("zoomlevelschange")},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(e){if(o.DomEvent){e=e||"on",o.DomEvent[e](this._container,"click",this._onMouseClick,this);var i,n,s=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"];for(i=0,n=s.length;n>i;i++)o.DomEvent[e](this._container,s[i],this._fireMouseEvent,this);this.options.trackResize&&o.DomEvent[e](t,"resize",this._onResize,this)}},_onResize:function(){o.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=o.Util.requestAnimFrame(function(){this.invalidateSize({debounceMoveend:!0})},this,!1,this._container)},_onMouseClick:function(t){!this._loaded||!t._simulated&&(this.dragging&&this.dragging.moved()||this.boxZoom&&this.boxZoom.moved())||o.DomEvent._skipped(t)||(this.fire("preclick"),this._fireMouseEvent(t))},_fireMouseEvent:function(t){if(this._loaded&&!o.DomEvent._skipped(t)){var e=t.type;if(e="mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,this.hasEventListeners(e)){"contextmenu"===e&&o.DomEvent.preventDefault(t);var i=this.mouseEventToContainerPoint(t),n=this.containerPointToLayerPoint(i),s=this.layerPointToLatLng(n);this.fire(e,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t})}}},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this.fire("tilelayersload")},_clearHandlers:function(){for(var t=0,e=this._handlers.length;e>t;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,this):this.on("load",t,e),this},_layerAdd:function(t){t.onAdd(this),this.fire("layeradd",{layer:t})},_getMapPanePos:function(){return o.DomUtil.getPosition(this._mapPane)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(){return this.getPixelOrigin().subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewTopLeftPoint(i,e).add(this._getMapPanePos());return this.project(t,e)._subtract(n)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),a=new o.Bounds(n.subtract(s),n.add(s)),r=this._getBoundsOffset(a,i,e);return this.unproject(n.add(r),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new o.Bounds(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=this.project(e.getNorthWest(),i).subtract(t.min),s=this.project(e.getSouthEast(),i).subtract(t.max),a=this._rebound(n.x,-s.x),r=this._rebound(n.y,-s.y);return new o.Point(a,r)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom();return Math.max(e,Math.min(i,t))}}),o.map=function(t,e){return new o.Map(t,e)},o.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.314245179,R_MAJOR:6378137,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=this.R_MAJOR,a=this.R_MINOR,r=t.lng*e*s,h=n*e,l=a/s,u=Math.sqrt(1-l*l),c=u*Math.sin(h);c=Math.pow((1-c)/(1+c),.5*u);var d=Math.tan(.5*(.5*Math.PI-h))/c;return h=-s*Math.log(d),new o.Point(r,h)},unproject:function(t){for(var e,i=o.LatLng.RAD_TO_DEG,n=this.R_MAJOR,s=this.R_MINOR,a=t.x*i/n,r=s/n,h=Math.sqrt(1-r*r),l=Math.exp(-t.y/n),u=Math.PI/2-2*Math.atan(l),c=15,d=1e-7,p=c,_=.1;Math.abs(_)>d&&--p>0;)e=h*Math.sin(u),_=Math.PI/2-2*Math.atan(l*Math.pow((1-e)/(1+e),.5*h))-u,u+=_;
return new o.LatLng(u*i,a)}},o.CRS.EPSG3395=o.extend({},o.CRS,{code:"EPSG:3395",projection:o.Projection.Mercator,transformation:function(){var t=o.Projection.Mercator,e=t.R_MAJOR,i=.5/(Math.PI*e);return new o.Transformation(i,.5,-i,.5)}()}),o.TileLayer=o.Class.extend({includes:o.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:o.Browser.mobile,updateWhenIdle:o.Browser.mobile},initialize:function(t,e){e=o.setOptions(this,e),e.detectRetina&&o.Browser.retina&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomOffset++,e.minZoom>0&&e.minZoom--,this.options.maxZoom--),e.bounds&&(e.bounds=o.latLngBounds(e.bounds)),this._url=t;var i=this.options.subdomains;"string"==typeof i&&(this.options.subdomains=i.split(""))},onAdd:function(t){this._map=t,this._animated=t._zoomAnimated,this._initContainer(),t.on({viewreset:this._reset,moveend:this._update},this),this._animated&&t.on({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||(this._limitedUpdate=o.Util.limitExecByInterval(this._update,150,this),t.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this._container.parentNode.removeChild(this._container),t.off({viewreset:this._reset,moveend:this._update},this),this._animated&&t.off({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||t.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var t=this._map._panes.tilePane;return this._container&&(t.appendChild(this._container),this._setAutoZIndex(t,Math.max)),this},bringToBack:function(){var t=this._map._panes.tilePane;return this._container&&(t.insertBefore(this._container,t.firstChild),this._setAutoZIndex(t,Math.min)),this},getAttribution:function(){return this.options.attribution},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},setUrl:function(t,e){return this._url=t,e||this.redraw(),this},redraw:function(){return this._map&&(this._reset({hard:!0}),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==i&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t,e){var i,n,o,s=t.children,a=-e(1/0,-1/0);for(n=0,o=s.length;o>n;n++)s[n]!==this._container&&(i=parseInt(s[n].style.zIndex,10),isNaN(i)||(a=e(a,i)));this.options.zIndex=this._container.style.zIndex=(isFinite(a)?a:0)+e(1,-1)},_updateOpacity:function(){var t,e=this._tiles;if(o.Browser.ielt9)for(t in e)o.DomUtil.setOpacity(e[t],this.options.opacity);else o.DomUtil.setOpacity(this._container,this.options.opacity)},_initContainer:function(){var t=this._map._panes.tilePane;if(!this._container){if(this._container=o.DomUtil.create("div","leaflet-layer"),this._updateZIndex(),this._animated){var e="leaflet-tile-container";this._bgBuffer=o.DomUtil.create("div",e,this._container),this._tileContainer=o.DomUtil.create("div",e,this._container)}else this._tileContainer=this._container;t.appendChild(this._container),this.options.opacity<1&&this._updateOpacity()}},_reset:function(t){for(var e in this._tiles)this.fire("tileunload",{tile:this._tiles[e]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),this._tileContainer.innerHTML="",this._animated&&t&&t.hard&&this._clearBgBuffer(),this._initContainer()},_getTileSize:function(){var t=this._map,e=t.getZoom()+this.options.zoomOffset,i=this.options.maxNativeZoom,n=this.options.tileSize;return i&&e>i&&(n=Math.round(t.getZoomScale(e)/t.getZoomScale(i)*n)),n},_update:function(){if(this._map){var t=this._map,e=t.getPixelBounds(),i=t.getZoom(),n=this._getTileSize();if(!(i>this.options.maxZoom||i<this.options.minZoom)){var s=o.bounds(e.min.divideBy(n)._floor(),e.max.divideBy(n)._floor());this._addTilesFromCenterOut(s),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(s)}}},_addTilesFromCenterOut:function(t){var i,n,s,a=[],r=t.getCenter();for(i=t.min.y;i<=t.max.y;i++)for(n=t.min.x;n<=t.max.x;n++)s=new o.Point(n,i),this._tileShouldBeLoaded(s)&&a.push(s);var h=a.length;if(0!==h){a.sort(function(t,e){return t.distanceTo(r)-e.distanceTo(r)});var l=e.createDocumentFragment();for(this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=h,n=0;h>n;n++)this._addTile(a[n],l);this._tileContainer.appendChild(l)}},_tileShouldBeLoaded:function(t){if(t.x+":"+t.y in this._tiles)return!1;var e=this.options;if(!e.continuousWorld){var i=this._getWrapTileNum();if(e.noWrap&&(t.x<0||t.x>=i.x)||t.y<0||t.y>=i.y)return!1}if(e.bounds){var n=e.tileSize,o=t.multiplyBy(n),s=o.add([n,n]),a=this._map.unproject(o),r=this._map.unproject(s);if(e.continuousWorld||e.noWrap||(a=a.wrap(),r=r.wrap()),!e.bounds.intersects([a,r]))return!1}return!0},_removeOtherTiles:function(t){var e,i,n,o;for(o in this._tiles)e=o.split(":"),i=parseInt(e[0],10),n=parseInt(e[1],10),(i<t.min.x||i>t.max.x||n<t.min.y||n>t.max.y)&&this._removeTile(o)},_removeTile:function(t){var e=this._tiles[t];this.fire("tileunload",{tile:e,url:e.src}),this.options.reuseTiles?(o.DomUtil.removeClass(e,"leaflet-tile-loaded"),this._unusedTiles.push(e)):e.parentNode===this._tileContainer&&this._tileContainer.removeChild(e),o.Browser.android||(e.onload=null,e.src=o.Util.emptyImageUrl),delete this._tiles[t]},_addTile:function(t,e){var i=this._getTilePos(t),n=this._getTile();o.DomUtil.setPosition(n,i,o.Browser.chrome),this._tiles[t.x+":"+t.y]=n,this._loadTile(n,t),n.parentNode!==this._tileContainer&&e.appendChild(n)},_getZoomForUrl:function(){var t=this.options,e=this._map.getZoom();return t.zoomReverse&&(e=t.maxZoom-e),e+=t.zoomOffset,t.maxNativeZoom?Math.min(e,t.maxNativeZoom):e},_getTilePos:function(t){var e=this._map.getPixelOrigin(),i=this._getTileSize();return t.multiplyBy(i).subtract(e)},getTileUrl:function(t){return o.Util.template(this._url,o.extend({s:this._getSubdomain(t),z:t.z,x:t.x,y:t.y},this.options))},_getWrapTileNum:function(){var t=this._map.options.crs,e=t.getSize(this._map.getZoom());return e.divideBy(this._getTileSize())._floor()},_adjustTilePoint:function(t){var e=this._getWrapTileNum();this.options.continuousWorld||this.options.noWrap||(t.x=(t.x%e.x+e.x)%e.x),this.options.tms&&(t.y=e.y-t.y-1),t.z=this._getZoomForUrl()},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var t=this._unusedTiles.pop();return this._resetTile(t),t}return this._createTile()},_resetTile:function(){},_createTile:function(){var t=o.DomUtil.create("img","leaflet-tile");return t.style.width=t.style.height=this._getTileSize()+"px",t.galleryimg="no",t.onselectstart=t.onmousemove=o.Util.falseFn,o.Browser.ielt9&&this.options.opacity!==i&&o.DomUtil.setOpacity(t,this.options.opacity),o.Browser.mobileWebkit3d&&(t.style.WebkitBackfaceVisibility="hidden"),t},_loadTile:function(t,e){t._layer=this,t.onload=this._tileOnLoad,t.onerror=this._tileOnError,this._adjustTilePoint(e),t.src=this.getTileUrl(e),this.fire("tileloadstart",{tile:t,url:t.src})},_tileLoaded:function(){this._tilesToLoad--,this._animated&&o.DomUtil.addClass(this._tileContainer,"leaflet-zoom-animated"),this._tilesToLoad||(this.fire("load"),this._animated&&(clearTimeout(this._clearBgBufferTimer),this._clearBgBufferTimer=setTimeout(o.bind(this._clearBgBuffer,this),500)))},_tileOnLoad:function(){var t=this._layer;this.src!==o.Util.emptyImageUrl&&(o.DomUtil.addClass(this,"leaflet-tile-loaded"),t.fire("tileload",{tile:this,url:this.src})),t._tileLoaded()},_tileOnError:function(){var t=this._layer;t.fire("tileerror",{tile:this,url:this.src});var e=t.options.errorTileUrl;e&&(this.src=e),t._tileLoaded()}}),o.tileLayer=function(t,e){return new o.TileLayer(t,e)},o.TileLayer.WMS=o.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(t,e){this._url=t;var i=o.extend({},this.defaultWmsParams),n=e.tileSize||this.options.tileSize;i.width=i.height=e.detectRetina&&o.Browser.retina?2*n:n;for(var s in e)this.options.hasOwnProperty(s)||"crs"===s||(i[s]=e[s]);this.wmsParams=i,o.setOptions(this,e)},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,o.TileLayer.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._map,i=this.options.tileSize,n=t.multiplyBy(i),s=n.add([i,i]),a=this._crs.project(e.unproject(n,t.z)),r=this._crs.project(e.unproject(s,t.z)),h=this._wmsVersion>=1.3&&this._crs===o.CRS.EPSG4326?[r.y,a.x,a.y,r.x].join(","):[a.x,r.y,r.x,a.y].join(","),l=o.Util.template(this._url,{s:this._getSubdomain(t)});return l+o.Util.getParamString(this.wmsParams,l,!0)+"&BBOX="+h},setParams:function(t,e){return o.extend(this.wmsParams,t),e||this.redraw(),this}}),o.tileLayer.wms=function(t,e){return new o.TileLayer.WMS(t,e)},o.TileLayer.Canvas=o.TileLayer.extend({options:{async:!1},initialize:function(t){o.setOptions(this,t)},redraw:function(){this._map&&(this._reset({hard:!0}),this._update());for(var t in this._tiles)this._redrawTile(this._tiles[t]);return this},_redrawTile:function(t){this.drawTile(t,t._tilePoint,this._map._zoom)},_createTile:function(){var t=o.DomUtil.create("canvas","leaflet-tile");return t.width=t.height=this.options.tileSize,t.onselectstart=t.onmousemove=o.Util.falseFn,t},_loadTile:function(t,e){t._layer=this,t._tilePoint=e,this._redrawTile(t),this.options.async||this.tileDrawn(t)},drawTile:function(){},tileDrawn:function(t){this._tileOnLoad.call(t)}}),o.tileLayer.canvas=function(t){return new o.TileLayer.Canvas(t)},o.ImageOverlay=o.Class.extend({includes:o.Mixin.Events,options:{opacity:1},initialize:function(t,e,i){this._url=t,this._bounds=o.latLngBounds(e),o.setOptions(this,i)},onAdd:function(t){this._map=t,this._image||this._initImage(),t._panes.overlayPane.appendChild(this._image),t.on("viewreset",this._reset,this),t.options.zoomAnimation&&o.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._image),t.off("viewreset",this._reset,this),t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},bringToFront:function(){return this._image&&this._map._panes.overlayPane.appendChild(this._image),this},bringToBack:function(){var t=this._map._panes.overlayPane;return this._image&&t.insertBefore(this._image,t.firstChild),this},setUrl:function(t){this._url=t,this._image.src=this._url},getAttribution:function(){return this.options.attribution},_initImage:function(){this._image=o.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&o.Browser.any3d?o.DomUtil.addClass(this._image,"leaflet-zoom-animated"):o.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),o.extend(this._image,{galleryimg:"no",onselectstart:o.Util.falseFn,onmousemove:o.Util.falseFn,onload:o.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(t){var e=this._map,i=this._image,n=e.getZoomScale(t.zoom),s=this._bounds.getNorthWest(),a=this._bounds.getSouthEast(),r=e._latLngToNewLayerPoint(s,t.zoom,t.center),h=e._latLngToNewLayerPoint(a,t.zoom,t.center)._subtract(r),l=r._add(h._multiplyBy(.5*(1-1/n)));i.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(l)+" scale("+n+") "},_reset:function(){var t=this._image,e=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),i=this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);o.DomUtil.setPosition(t,e),t.style.width=i.x+"px",t.style.height=i.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){o.DomUtil.setOpacity(this._image,this.options.opacity)}}),o.imageOverlay=function(t,e,i){return new o.ImageOverlay(t,e,i)},o.Icon=o.Class.extend({options:{className:""},initialize:function(t){o.setOptions(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n;return n=e&&"IMG"===e.tagName?this._createImg(i,e):this._createImg(i),this._setIconStyles(n,t),n},_setIconStyles:function(t,e){var i,n=this.options,s=o.point(n[e+"Size"]);i=o.point("shadow"===e?n.shadowAnchor||n.iconAnchor:n.iconAnchor),!i&&s&&(i=s.divideBy(2,!0)),t.className="leaflet-marker-"+e+" "+n.className,i&&(t.style.marginLeft=-i.x+"px",t.style.marginTop=-i.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,i){return i=i||e.createElement("img"),i.src=t,i},_getIconUrl:function(t){return o.Browser.retina&&this.options[t+"RetinaUrl"]?this.options[t+"RetinaUrl"]:this.options[t+"Url"]}}),o.icon=function(t){return new o.Icon(t)},o.Icon.Default=o.Icon.extend({options:{iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},_getIconUrl:function(t){var e=t+"Url";if(this.options[e])return this.options[e];o.Browser.retina&&"icon"===t&&(t+="-2x");var i=o.Icon.Default.imagePath;if(!i)throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return i+"/marker-"+t+".png"}}),o.Icon.Default.imagePath=function(){var t,i,n,o,s,a=e.getElementsByTagName("script"),r=/[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;for(t=0,i=a.length;i>t;t++)if(n=a[t].src,o=n.match(r))return s=n.split(r)[0],(s?s+"/":"")+"images"}(),o.Marker=o.Class.extend({includes:o.Mixin.Events,options:{icon:new o.Icon.Default,title:"",alt:"",clickable:!0,draggable:!1,keyboard:!0,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250},initialize:function(t,e){o.setOptions(this,e),this._latlng=o.latLng(t)},onAdd:function(t){this._map=t,t.on("viewreset",this.update,this),this._initIcon(),this.update(),this.fire("add"),t.options.zoomAnimation&&t.options.markerZoomAnimation&&t.on("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this.dragging&&this.dragging.disable(),this._removeIcon(),this._removeShadow(),this.fire("remove"),t.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this.update(),this.fire("move",{latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update(),this},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup),this},update:function(){if(this._icon){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e=this._map,i=e.options.zoomAnimation&&e.options.markerZoomAnimation,n=i?"leaflet-zoom-animated":"leaflet-zoom-hide",s=t.icon.createIcon(this._icon),a=!1;s!==this._icon&&(this._icon&&this._removeIcon(),a=!0,t.title&&(s.title=t.title),t.alt&&(s.alt=t.alt)),o.DomUtil.addClass(s,n),t.keyboard&&(s.tabIndex="0"),this._icon=s,this._initInteraction(),t.riseOnHover&&o.DomEvent.on(s,"mouseover",this._bringToFront,this).on(s,"mouseout",this._resetZIndex,this);var r=t.icon.createShadow(this._shadow),h=!1;r!==this._shadow&&(this._removeShadow(),h=!0),r&&o.DomUtil.addClass(r,n),this._shadow=r,t.opacity<1&&this._updateOpacity();var l=this._map._panes;a&&l.markerPane.appendChild(this._icon),r&&h&&l.shadowPane.appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&o.DomEvent.off(this._icon,"mouseover",this._bringToFront).off(this._icon,"mouseout",this._resetZIndex),this._map._panes.markerPane.removeChild(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&this._map._panes.shadowPane.removeChild(this._shadow),this._shadow=null},_setPos:function(t){o.DomUtil.setPosition(this._icon,t),this._shadow&&o.DomUtil.setPosition(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.clickable){var t=this._icon,e=["dblclick","mousedown","mouseover","mouseout","contextmenu"];o.DomUtil.addClass(t,"leaflet-clickable"),o.DomEvent.on(t,"click",this._onMouseClick,this),o.DomEvent.on(t,"keypress",this._onKeyPress,this);for(var i=0;i<e.length;i++)o.DomEvent.on(t,e[i],this._fireMouseEvent,this);o.Handler.MarkerDrag&&(this.dragging=new o.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())}},_onMouseClick:function(t){var e=this.dragging&&this.dragging.moved();(this.hasEventListeners(t.type)||e)&&o.DomEvent.stopPropagation(t),e||(this.dragging&&this.dragging._enabled||!this._map.dragging||!this._map.dragging.moved())&&this.fire(t.type,{originalEvent:t,latlng:this._latlng})},_onKeyPress:function(t){13===t.keyCode&&this.fire("click",{originalEvent:t,latlng:this._latlng})},_fireMouseEvent:function(t){this.fire(t.type,{originalEvent:t,latlng:this._latlng}),"contextmenu"===t.type&&this.hasEventListeners(t.type)&&o.DomEvent.preventDefault(t),"mousedown"!==t.type?o.DomEvent.stopPropagation(t):o.DomEvent.preventDefault(t)},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){o.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&o.DomUtil.setOpacity(this._shadow,this.options.opacity)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}}),o.marker=function(t,e){return new o.Marker(t,e)},o.DivIcon=o.Icon.extend({options:{iconSize:[12,12],className:"leaflet-div-icon",html:!1},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:e.createElement("div"),n=this.options;return i.innerHTML=n.html!==!1?n.html:"",n.bgPos&&(i.style.backgroundPosition=-n.bgPos.x+"px "+-n.bgPos.y+"px"),this._setIconStyles(i,"icon"),i},createShadow:function(){return null}}),o.divIcon=function(t){return new o.DivIcon(t)},o.Map.mergeOptions({closePopupOnClick:!0}),o.Popup=o.Class.extend({includes:o.Mixin.Events,options:{minWidth:50,maxWidth:300,autoPan:!0,closeButton:!0,offset:[0,7],autoPanPadding:[5,5],keepInView:!1,className:"",zoomAnimation:!0},initialize:function(t,e){o.setOptions(this,t),this._source=e,this._animated=o.Browser.any3d&&this.options.zoomAnimation,this._isOpen=!1},onAdd:function(t){this._map=t,this._container||this._initLayout();var e=t.options.fadeAnimation;e&&o.DomUtil.setOpacity(this._container,0),t._panes.popupPane.appendChild(this._container),t.on(this._getEvents(),this),this.update(),e&&o.DomUtil.setOpacity(this._container,1),this.fire("open"),t.fire("popupopen",{popup:this}),this._source&&this._source.fire("popupopen",{popup:this})},addTo:function(t){return t.addLayer(this),this},openOn:function(t){return t.openPopup(this),this},onRemove:function(t){t._panes.popupPane.removeChild(this._container),o.Util.falseFn(this._container.offsetWidth),t.off(this._getEvents(),this),t.options.fadeAnimation&&o.DomUtil.setOpacity(this._container,0),this._map=null,this.fire("close"),t.fire("popupclose",{popup:this}),this._source&&this._source.fire("popupclose",{popup:this})},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},_getEvents:function(){var t={viewreset:this._updatePosition};return this._animated&&(t.zoomanim=this._zoomAnimation),("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t,e="leaflet-popup",i=e+" "+this.options.className+" leaflet-zoom-"+(this._animated?"animated":"hide"),n=this._container=o.DomUtil.create("div",i);this.options.closeButton&&(t=this._closeButton=o.DomUtil.create("a",e+"-close-button",n),t.href="#close",t.innerHTML="&#215;",o.DomEvent.disableClickPropagation(t),o.DomEvent.on(t,"click",this._onCloseButtonClick,this));var s=this._wrapper=o.DomUtil.create("div",e+"-content-wrapper",n);o.DomEvent.disableClickPropagation(s),this._contentNode=o.DomUtil.create("div",e+"-content",s),o.DomEvent.disableScrollPropagation(this._contentNode),o.DomEvent.on(s,"contextmenu",o.DomEvent.stopPropagation),this._tipContainer=o.DomUtil.create("div",e+"-tip-container",n),this._tip=o.DomUtil.create("div",e+"-tip",this._tipContainer)},_updateContent:function(){if(this._content){if("string"==typeof this._content)this._contentNode.innerHTML=this._content;else{for(;this._contentNode.hasChildNodes();)this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,a="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",o.DomUtil.addClass(t,a)):o.DomUtil.removeClass(t,a),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=this._animated,i=o.point(this.options.offset);e&&o.DomUtil.setPosition(this._container,t),this._containerBottom=-i.y-(e?0:t.y),this._containerLeft=-Math.round(this._containerWidth/2)+i.x+(e?0:t.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"}},_zoomAnimation:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);o.DomUtil.setPosition(this._container,e)},_adjustPan:function(){if(this.options.autoPan){var t=this._map,e=this._container.offsetHeight,i=this._containerWidth,n=new o.Point(this._containerLeft,-e-this._containerBottom);this._animated&&n._add(o.DomUtil.getPosition(this._container));var s=t.layerPointToContainerPoint(n),a=o.point(this.options.autoPanPadding),r=o.point(this.options.autoPanPaddingTopLeft||a),h=o.point(this.options.autoPanPaddingBottomRight||a),l=t.getSize(),u=0,c=0;s.x+i+h.x>l.x&&(u=s.x+i-l.x+h.x),s.x-u-r.x<0&&(u=s.x-r.x),s.y+e+h.y>l.y&&(c=s.y+e-l.y+h.y),s.y-c-r.y<0&&(c=s.y-r.y),(u||c)&&t.fire("autopanstart").panBy([u,c])}},_onCloseButtonClick:function(t){this._close(),o.DomEvent.stop(t)}}),o.popup=function(t,e){return new o.Popup(t,e)},o.Map.include({openPopup:function(t,e,i){if(this.closePopup(),!(t instanceof o.Popup)){var n=t;t=new o.Popup(i).setLatLng(e).setContent(n)}return t._isOpen=!0,this._popup=t,this.addLayer(t)},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&(this.removeLayer(t),t._isOpen=!1),this}}),o.Marker.include({openPopup:function(){return this._popup&&this._map&&!this._map.hasLayer(this._popup)&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(){return this._popup&&(this._popup._isOpen?this.closePopup():this.openPopup()),this},bindPopup:function(t,e){var i=o.point(this.options.icon.options.popupAnchor||[0,0]);return i=i.add(o.Popup.prototype.options.offset),e&&e.offset&&(i=i.add(e.offset)),e=o.extend({offset:i},e),this._popupHandlersAdded||(this.on("click",this.togglePopup,this).on("remove",this.closePopup,this).on("move",this._movePopup,this),this._popupHandlersAdded=!0),t instanceof o.Popup?(o.setOptions(t,e),this._popup=t):this._popup=new o.Popup(e,this).setContent(t),this},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.togglePopup,this).off("remove",this.closePopup,this).off("move",this._movePopup,this),this._popupHandlersAdded=!1),this},getPopup:function(){return this._popup},_movePopup:function(t){this._popup.setLatLng(t.latlng)}}),o.LayerGroup=o.Class.extend({initialize:function(t){this._layers={};var e,i;if(t)for(e=0,i=t.length;i>e;e++)this.addLayer(t[e])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){return t?t in this._layers||this.getLayerId(t)in this._layers:!1},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)i=this._layers[e],i[t]&&i[t].apply(i,n);return this},onAdd:function(t){this._map=t,this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t),this._map=null},addTo:function(t){return t.addLayer(this),this},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];for(var e in this._layers)t.push(this._layers[e]);return t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return o.stamp(t)}}),o.layerGroup=function(t){return new o.LayerGroup(t)},o.FeatureGroup=o.LayerGroup.extend({includes:o.Mixin.Events,statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},addLayer:function(t){return this.hasLayer(t)?this:("on"in t&&t.on(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.addLayer.call(this,t),this._popupContent&&t.bindPopup&&t.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.off(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.removeLayer.call(this,t),this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:t})):this},bindPopup:function(t,e){return this._popupContent=t,this._popupOptions=e,this.invoke("bindPopup",t,e)},openPopup:function(t){for(var e in this._layers){this._layers[e].openPopup(t);break}return this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new o.LatLngBounds;return this.eachLayer(function(e){t.extend(e instanceof o.Marker?e.getLatLng():e.getBounds())}),t},_propagateEvent:function(t){t=o.extend({layer:t.target,target:this},t),this.fire(t.type,t)}}),o.featureGroup=function(t){return new o.FeatureGroup(t)},o.Path=o.Class.extend({includes:[o.Mixin.Events],statics:{CLIP_PADDING:function(){var e=o.Browser.mobile?1280:2e3,i=(e/Math.max(t.outerWidth,t.outerHeight)-1)/2;return Math.max(0,Math.min(.5,i))}()},options:{stroke:!0,color:"#0033ff",dashArray:null,lineCap:null,lineJoin:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(t){o.setOptions(this,t)},onAdd:function(t){this._map=t,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),this.fire("add"),t.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){t._pathRoot.removeChild(this._container),this.fire("remove"),this._map=null,o.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),t.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(t){return o.setOptions(this,t),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),o.Map.include({_updatePathViewport:function(){var t=o.Path.CLIP_PADDING,e=this.getSize(),i=o.DomUtil.getPosition(this._mapPane),n=i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),s=n.add(e.multiplyBy(1+2*t)._round());this._pathViewport=new o.Bounds(n,s)}}),o.Path.SVG_NS="http://www.w3.org/2000/svg",o.Browser.svg=!(!e.createElementNS||!e.createElementNS(o.Path.SVG_NS,"svg").createSVGRect),o.Path=o.Path.extend({statics:{SVG:o.Browser.svg},bringToFront:function(){var t=this._map._pathRoot,e=this._container;return e&&t.lastChild!==e&&t.appendChild(e),this},bringToBack:function(){var t=this._map._pathRoot,e=this._container,i=t.firstChild;return e&&i!==e&&t.insertBefore(e,i),this},getPathString:function(){},_createElement:function(t){return e.createElementNS(o.Path.SVG_NS,t)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this.options.className&&o.DomUtil.addClass(this._path,this.options.className),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this.options.pointerEvents&&this._path.setAttribute("pointer-events",this.options.pointerEvents),this.options.clickable||this.options.pointerEvents||this._path.setAttribute("pointer-events","none"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray"),this.options.lineCap&&this._path.setAttribute("stroke-linecap",this.options.lineCap),this.options.lineJoin&&this._path.setAttribute("stroke-linejoin",this.options.lineJoin)):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var t=this.getPathString();t||(t="M0 0"),this._path.setAttribute("d",t)},_initEvents:function(){if(this.options.clickable){(o.Browser.svg||!o.Browser.vml)&&o.DomUtil.addClass(this._path,"leaflet-clickable"),o.DomEvent.on(this._container,"click",this._onMouseClick,this);for(var t=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"],e=0;e<t.length;e++)o.DomEvent.on(this._container,t[e],this._fireMouseEvent,this)}},_onMouseClick:function(t){this._map.dragging&&this._map.dragging.moved()||this._fireMouseEvent(t)},_fireMouseEvent:function(t){if(this.hasEventListeners(t.type)){var e=this._map,i=e.mouseEventToContainerPoint(t),n=e.containerPointToLayerPoint(i),s=e.layerPointToLatLng(n);this.fire(t.type,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t}),"contextmenu"===t.type&&o.DomEvent.preventDefault(t),"mousemove"!==t.type&&o.DomEvent.stopPropagation(t)}}}),o.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=o.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&o.Browser.any3d?(o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-animated"),this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())
},_animatePathZoom:function(t){var e=this.getZoomScale(t.zoom),i=this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);this._pathRoot.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(i)+" scale("+e+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max,n=i.x-e.x,s=i.y-e.y,a=this._pathRoot,r=this._panes.overlayPane;o.Browser.mobileWebkit&&r.removeChild(a),o.DomUtil.setPosition(a,e),a.setAttribute("width",n),a.setAttribute("height",s),a.setAttribute("viewBox",[e.x,e.y,n,s].join(" ")),o.Browser.mobileWebkit&&r.appendChild(a)}}}),o.Path.include({bindPopup:function(t,e){return t instanceof o.Popup?this._popup=t:((!this._popup||e)&&(this._popup=new o.Popup(e,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on("click",this._openPopup,this).on("remove",this.closePopup,this),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this._openPopup).off("remove",this.closePopup),this._popupHandlersAdded=!1),this},openPopup:function(t){return this._popup&&(t=t||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:t})),this},closePopup:function(){return this._popup&&this._popup._close(),this},_openPopup:function(t){this._popup.setLatLng(t.latlng),this._map.openPopup(this._popup)}}),o.Browser.vml=!o.Browser.svg&&function(){try{var t=e.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(n){return!1}}(),o.Path=o.Browser.svg||!o.Browser.vml?o.Path:o.Path.extend({statics:{VML:!0,CLIP_PADDING:.02},_createElement:function(){try{return e.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return e.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var t=this._container=this._createElement("shape");o.DomUtil.addClass(t,"leaflet-vml-shape"+(this.options.className?" "+this.options.className:"")),this.options.clickable&&o.DomUtil.addClass(t,"leaflet-clickable"),t.coordsize="1 1",this._path=this._createElement("path"),t.appendChild(this._path),this._map._pathRoot.appendChild(t)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var t=this._stroke,e=this._fill,i=this.options,n=this._container;n.stroked=i.stroke,n.filled=i.fill,i.stroke?(t||(t=this._stroke=this._createElement("stroke"),t.endcap="round",n.appendChild(t)),t.weight=i.weight+"px",t.color=i.color,t.opacity=i.opacity,t.dashStyle=i.dashArray?o.Util.isArray(i.dashArray)?i.dashArray.join(" "):i.dashArray.replace(/( *, *)/g," "):"",i.lineCap&&(t.endcap=i.lineCap.replace("butt","flat")),i.lineJoin&&(t.joinstyle=i.lineJoin)):t&&(n.removeChild(t),this._stroke=null),i.fill?(e||(e=this._fill=this._createElement("fill"),n.appendChild(e)),e.color=i.fillColor||i.color,e.opacity=i.fillOpacity):e&&(n.removeChild(e),this._fill=null)},_updatePath:function(){var t=this._container.style;t.display="none",this._path.v=this.getPathString()+" ",t.display=""}}),o.Map.include(o.Browser.svg||!o.Browser.vml?{}:{_initPathRoot:function(){if(!this._pathRoot){var t=this._pathRoot=e.createElement("div");t.className="leaflet-vml-container",this._panes.overlayPane.appendChild(t),this.on("moveend",this._updatePathViewport),this._updatePathViewport()}}}),o.Browser.canvas=function(){return!!e.createElement("canvas").getContext}(),o.Path=o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?o.Path:o.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(t){return o.setOptions(this,t),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(t){t.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this.options.clickable&&(this._map.off("click",this._onClick,this),this._map.off("mousemove",this._onMouseMove,this)),this._requestUpdate(),this.fire("remove"),this._map=null},_requestUpdate:function(){this._map&&!o.Path._updateRequest&&(o.Path._updateRequest=o.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){o.Path._updateRequest=null,this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var t=this.options;t.stroke&&(this._ctx.lineWidth=t.weight,this._ctx.strokeStyle=t.color),t.fill&&(this._ctx.fillStyle=t.fillColor||t.color)},_drawPath:function(){var t,e,i,n,s,a;for(this._ctx.beginPath(),t=0,i=this._parts.length;i>t;t++){for(e=0,n=this._parts[t].length;n>e;e++)s=this._parts[t][e],a=(0===e?"move":"line")+"To",this._ctx[a](s.x,s.y);this instanceof o.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(!this._checkIfEmpty()){var t=this._ctx,e=this.options;this._drawPath(),t.save(),this._updateStyle(),e.fill&&(t.globalAlpha=e.fillOpacity,t.fill()),e.stroke&&(t.globalAlpha=e.opacity,t.stroke()),t.restore()}},_initEvents:function(){this.options.clickable&&(this._map.on("mousemove",this._onMouseMove,this),this._map.on("click",this._onClick,this))},_onClick:function(t){this._containsPoint(t.layerPoint)&&this.fire("click",t)},_onMouseMove:function(t){this._map&&!this._map._animatingZoom&&(this._containsPoint(t.layerPoint)?(this._ctx.canvas.style.cursor="pointer",this._mouseInside=!0,this.fire("mouseover",t)):this._mouseInside&&(this._ctx.canvas.style.cursor="",this._mouseInside=!1,this.fire("mouseout",t)))}}),o.Map.include(o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?{}:{_initPathRoot:function(){var t,i=this._pathRoot;i||(i=this._pathRoot=e.createElement("canvas"),i.style.position="absolute",t=this._canvasCtx=i.getContext("2d"),t.lineCap="round",t.lineJoin="round",this._panes.overlayPane.appendChild(i),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max.subtract(e),n=this._pathRoot;o.DomUtil.setPosition(n,e),n.width=i.x,n.height=i.y,n.getContext("2d").translate(-e.x,-e.y)}}}),o.LineUtil={simplify:function(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=this._reducePoints(t,i),t=this._simplifyDP(t,i)},pointToSegmentDistance:function(t,e,i){return Math.sqrt(this._sqClosestPointOnSegment(t,e,i,!0))},closestPointOnSegment:function(t,e,i){return this._sqClosestPointOnSegment(t,e,i)},_simplifyDP:function(t,e){var n=t.length,o=typeof Uint8Array!=i+""?Uint8Array:Array,s=new o(n);s[0]=s[n-1]=1,this._simplifyDPStep(t,s,e,0,n-1);var a,r=[];for(a=0;n>a;a++)s[a]&&r.push(t[a]);return r},_simplifyDPStep:function(t,e,i,n,o){var s,a,r,h=0;for(a=n+1;o-1>=a;a++)r=this._sqClosestPointOnSegment(t[a],t[n],t[o],!0),r>h&&(s=a,h=r);h>i&&(e[s]=1,this._simplifyDPStep(t,e,i,n,s),this._simplifyDPStep(t,e,i,s,o))},_reducePoints:function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;s>n;n++)this._sqDist(t[n],t[o])>e&&(i.push(t[n]),o=n);return s-1>o&&i.push(t[s-1]),i},clipSegment:function(t,e,i,n){var o,s,a,r=n?this._lastCode:this._getBitCode(t,i),h=this._getBitCode(e,i);for(this._lastCode=h;;){if(!(r|h))return[t,e];if(r&h)return!1;o=r||h,s=this._getEdgeIntersection(t,e,o,i),a=this._getBitCode(s,i),o===r?(t=s,r=a):(e=s,h=a)}},_getEdgeIntersection:function(t,e,i,n){var s=e.x-t.x,a=e.y-t.y,r=n.min,h=n.max;return 8&i?new o.Point(t.x+s*(h.y-t.y)/a,h.y):4&i?new o.Point(t.x+s*(r.y-t.y)/a,r.y):2&i?new o.Point(h.x,t.y+a*(h.x-t.x)/s):1&i?new o.Point(r.x,t.y+a*(r.x-t.x)/s):void 0},_getBitCode:function(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},_sqClosestPointOnSegment:function(t,e,i,n){var s,a=e.x,r=e.y,h=i.x-a,l=i.y-r,u=h*h+l*l;return u>0&&(s=((t.x-a)*h+(t.y-r)*l)/u,s>1?(a=i.x,r=i.y):s>0&&(a+=h*s,r+=l*s)),h=t.x-a,l=t.y-r,n?h*h+l*l:new o.Point(a,r)}},o.Polyline=o.Path.extend({initialize:function(t,e){o.Path.prototype.initialize.call(this,e),this._latlngs=this._convertLatLngs(t)},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var t=0,e=this._latlngs.length;e>t;t++)this._originalPoints[t]=this._map.latLngToLayerPoint(this._latlngs[t])},getPathString:function(){for(var t=0,e=this._parts.length,i="";e>t;t++)i+=this._getPathPartStr(this._parts[t]);return i},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._latlngs=this._convertLatLngs(t),this.redraw()},addLatLng:function(t){return this._latlngs.push(o.latLng(t)),this.redraw()},spliceLatLngs:function(){var t=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs,!0),this.redraw(),t},closestLayerPoint:function(t){for(var e,i,n=1/0,s=this._parts,a=null,r=0,h=s.length;h>r;r++)for(var l=s[r],u=1,c=l.length;c>u;u++){e=l[u-1],i=l[u];var d=o.LineUtil._sqClosestPointOnSegment(t,e,i,!0);n>d&&(n=d,a=o.LineUtil._sqClosestPointOnSegment(t,e,i))}return a&&(a.distance=Math.sqrt(n)),a},getBounds:function(){return new o.LatLngBounds(this.getLatLngs())},_convertLatLngs:function(t,e){var i,n,s=e?t:[];for(i=0,n=t.length;n>i;i++){if(o.Util.isArray(t[i])&&"number"!=typeof t[i][0])return;s[i]=o.latLng(t[i])}return s},_initEvents:function(){o.Path.prototype._initEvents.call(this)},_getPathPartStr:function(t){for(var e,i=o.Path.VML,n=0,s=t.length,a="";s>n;n++)e=t[n],i&&e._round(),a+=(n?"L":"M")+e.x+" "+e.y;return a},_clipPoints:function(){var t,e,i,n=this._originalPoints,s=n.length;if(this.options.noClip)return void(this._parts=[n]);this._parts=[];var a=this._parts,r=this._map._pathViewport,h=o.LineUtil;for(t=0,e=0;s-1>t;t++)i=h.clipSegment(n[t],n[t+1],r,t),i&&(a[e]=a[e]||[],a[e].push(i[0]),(i[1]!==n[t+1]||t===s-2)&&(a[e].push(i[1]),e++))},_simplifyPoints:function(){for(var t=this._parts,e=o.LineUtil,i=0,n=t.length;n>i;i++)t[i]=e.simplify(t[i],this.options.smoothFactor)},_updatePath:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),o.Path.prototype._updatePath.call(this))}}),o.polyline=function(t,e){return new o.Polyline(t,e)},o.PolyUtil={},o.PolyUtil.clipPolygon=function(t,e){var i,n,s,a,r,h,l,u,c,d=[1,4,2,8],p=o.LineUtil;for(n=0,l=t.length;l>n;n++)t[n]._code=p._getBitCode(t[n],e);for(a=0;4>a;a++){for(u=d[a],i=[],n=0,l=t.length,s=l-1;l>n;s=n++)r=t[n],h=t[s],r._code&u?h._code&u||(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)):(h._code&u&&(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)),i.push(r));t=i}return t},o.Polygon=o.Polyline.extend({options:{fill:!0},initialize:function(t,e){o.Polyline.prototype.initialize.call(this,t,e),this._initWithHoles(t)},_initWithHoles:function(t){var e,i,n;if(t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0])for(this._latlngs=this._convertLatLngs(t[0]),this._holes=t.slice(1),e=0,i=this._holes.length;i>e;e++)n=this._holes[e]=this._convertLatLngs(this._holes[e]),n[0].equals(n[n.length-1])&&n.pop();t=this._latlngs,t.length>=2&&t[0].equals(t[t.length-1])&&t.pop()},projectLatlngs:function(){if(o.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[],this._holes){var t,e,i,n;for(t=0,i=this._holes.length;i>t;t++)for(this._holePoints[t]=[],e=0,n=this._holes[t].length;n>e;e++)this._holePoints[t][e]=this._map.latLngToLayerPoint(this._holes[t][e])}},setLatLngs:function(t){return t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0]?(this._initWithHoles(t),this.redraw()):o.Polyline.prototype.setLatLngs.call(this,t)},_clipPoints:function(){var t=this._originalPoints,e=[];if(this._parts=[t].concat(this._holePoints),!this.options.noClip){for(var i=0,n=this._parts.length;n>i;i++){var s=o.PolyUtil.clipPolygon(this._parts[i],this._map._pathViewport);s.length&&e.push(s)}this._parts=e}},_getPathPartStr:function(t){var e=o.Polyline.prototype._getPathPartStr.call(this,t);return e+(o.Browser.svg?"z":"x")}}),o.polygon=function(t,e){return new o.Polygon(t,e)},function(){function t(t){return o.FeatureGroup.extend({initialize:function(t,e){this._layers={},this._options=e,this.setLatLngs(t)},setLatLngs:function(e){var i=0,n=e.length;for(this.eachLayer(function(t){n>i?t.setLatLngs(e[i++]):this.removeLayer(t)},this);n>i;)this.addLayer(new t(e[i++],this._options));return this},getLatLngs:function(){var t=[];return this.eachLayer(function(e){t.push(e.getLatLngs())}),t}})}o.MultiPolyline=t(o.Polyline),o.MultiPolygon=t(o.Polygon),o.multiPolyline=function(t,e){return new o.MultiPolyline(t,e)},o.multiPolygon=function(t,e){return new o.MultiPolygon(t,e)}}(),o.Rectangle=o.Polygon.extend({initialize:function(t,e){o.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=o.latLngBounds(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}}),o.rectangle=function(t,e){return new o.Rectangle(t,e)},o.Circle=o.Path.extend({initialize:function(t,e,i){o.Path.prototype.initialize.call(this,i),this._latlng=o.latLng(t),this._mRadius=e},options:{fill:!0},setLatLng:function(t){return this._latlng=o.latLng(t),this.redraw()},setRadius:function(t){return this._mRadius=t,this.redraw()},projectLatlngs:function(){var t=this._getLngRadius(),e=this._latlng,i=this._map.latLngToLayerPoint([e.lat,e.lng-t]);this._point=this._map.latLngToLayerPoint(e),this._radius=Math.max(this._point.x-i.x,1)},getBounds:function(){var t=this._getLngRadius(),e=this._mRadius/40075017*360,i=this._latlng;return new o.LatLngBounds([i.lat-e,i.lng-t],[i.lat+e,i.lng+t])},getLatLng:function(){return this._latlng},getPathString:function(){var t=this._point,e=this._radius;return this._checkIfEmpty()?"":o.Browser.svg?"M"+t.x+","+(t.y-e)+"A"+e+","+e+",0,1,1,"+(t.x-.1)+","+(t.y-e)+" z":(t._round(),e=Math.round(e),"AL "+t.x+","+t.y+" "+e+","+e+" 0,23592600")},getRadius:function(){return this._mRadius},_getLatRadius:function(){return this._mRadius/40075017*360},_getLngRadius:function(){return this._getLatRadius()/Math.cos(o.LatLng.DEG_TO_RAD*this._latlng.lat)},_checkIfEmpty:function(){if(!this._map)return!1;var t=this._map._pathViewport,e=this._radius,i=this._point;return i.x-e>t.max.x||i.y-e>t.max.y||i.x+e<t.min.x||i.y+e<t.min.y}}),o.circle=function(t,e,i){return new o.Circle(t,e,i)},o.CircleMarker=o.Circle.extend({options:{radius:10,weight:2},initialize:function(t,e){o.Circle.prototype.initialize.call(this,t,null,e),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_updateStyle:function(){o.Circle.prototype._updateStyle.call(this),this.setRadius(this.options.radius)},setLatLng:function(t){return o.Circle.prototype.setLatLng.call(this,t),this._popup&&this._popup._isOpen&&this._popup.setLatLng(t),this},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius}}),o.circleMarker=function(t,e){return new o.CircleMarker(t,e)},o.Polyline.include(o.Path.CANVAS?{_containsPoint:function(t,e){var i,n,s,a,r,h,l,u=this.options.weight/2;for(o.Browser.touch&&(u+=10),i=0,a=this._parts.length;a>i;i++)for(l=this._parts[i],n=0,r=l.length,s=r-1;r>n;s=n++)if((e||0!==n)&&(h=o.LineUtil.pointToSegmentDistance(t,l[s],l[n]),u>=h))return!0;return!1}}:{}),o.Polygon.include(o.Path.CANVAS?{_containsPoint:function(t){var e,i,n,s,a,r,h,l,u=!1;if(o.Polyline.prototype._containsPoint.call(this,t,!0))return!0;for(s=0,h=this._parts.length;h>s;s++)for(e=this._parts[s],a=0,l=e.length,r=l-1;l>a;r=a++)i=e[a],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(u=!u);return u}}:{}),o.Circle.include(o.Path.CANVAS?{_drawPath:function(){var t=this._point;this._ctx.beginPath(),this._ctx.arc(t.x,t.y,this._radius,0,2*Math.PI,!1)},_containsPoint:function(t){var e=this._point,i=this.options.stroke?this.options.weight/2:0;return t.distanceTo(e)<=this._radius+i}}:{}),o.CircleMarker.include(o.Path.CANVAS?{_updateStyle:function(){o.Path.prototype._updateStyle.call(this)}}:{}),o.GeoJSON=o.FeatureGroup.extend({initialize:function(t,e){o.setOptions(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,s=o.Util.isArray(t)?t:t.features;if(s){for(e=0,i=s.length;i>e;e++)n=s[e],(n.geometries||n.geometry||n.features||n.coordinates)&&this.addData(s[e]);return this}var a=this.options;if(!a.filter||a.filter(t)){var r=o.GeoJSON.geometryToLayer(t,a.pointToLayer,a.coordsToLatLng,a);return r.feature=o.GeoJSON.asFeature(t),r.defaultOptions=r.options,this.resetStyle(r),a.onEachFeature&&a.onEachFeature(t,r),this.addLayer(r)}},resetStyle:function(t){var e=this.options.style;e&&(o.Util.extend(t.options,t.defaultOptions),this._setLayerStyle(t,e))},setStyle:function(t){this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){"function"==typeof e&&(e=e(t.feature)),t.setStyle&&t.setStyle(e)}}),o.extend(o.GeoJSON,{geometryToLayer:function(t,e,i,n){var s,a,r,h,l="Feature"===t.type?t.geometry:t,u=l.coordinates,c=[];switch(i=i||this.coordsToLatLng,l.type){case"Point":return s=i(u),e?e(t,s):new o.Marker(s);case"MultiPoint":for(r=0,h=u.length;h>r;r++)s=i(u[r]),c.push(e?e(t,s):new o.Marker(s));return new o.FeatureGroup(c);case"LineString":return a=this.coordsToLatLngs(u,0,i),new o.Polyline(a,n);case"Polygon":if(2===u.length&&!u[1].length)throw new Error("Invalid GeoJSON object.");return a=this.coordsToLatLngs(u,1,i),new o.Polygon(a,n);case"MultiLineString":return a=this.coordsToLatLngs(u,1,i),new o.MultiPolyline(a,n);case"MultiPolygon":return a=this.coordsToLatLngs(u,2,i),new o.MultiPolygon(a,n);case"GeometryCollection":for(r=0,h=l.geometries.length;h>r;r++)c.push(this.geometryToLayer({geometry:l.geometries[r],type:"Feature",properties:t.properties},e,i,n));return new o.FeatureGroup(c);default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(t){return new o.LatLng(t[1],t[0],t[2])},coordsToLatLngs:function(t,e,i){var n,o,s,a=[];for(o=0,s=t.length;s>o;o++)n=e?this.coordsToLatLngs(t[o],e-1,i):(i||this.coordsToLatLng)(t[o]),a.push(n);return a},latLngToCoords:function(t){var e=[t.lng,t.lat];return t.alt!==i&&e.push(t.alt),e},latLngsToCoords:function(t){for(var e=[],i=0,n=t.length;n>i;i++)e.push(o.GeoJSON.latLngToCoords(t[i]));return e},getFeature:function(t,e){return t.feature?o.extend({},t.feature,{geometry:e}):o.GeoJSON.asFeature(e)},asFeature:function(t){return"Feature"===t.type?t:{type:"Feature",properties:{},geometry:t}}});var a={toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"Point",coordinates:o.GeoJSON.latLngToCoords(this.getLatLng())})}};o.Marker.include(a),o.Circle.include(a),o.CircleMarker.include(a),o.Polyline.include({toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"LineString",coordinates:o.GeoJSON.latLngsToCoords(this.getLatLngs())})}}),o.Polygon.include({toGeoJSON:function(){var t,e,i,n=[o.GeoJSON.latLngsToCoords(this.getLatLngs())];if(n[0].push(n[0][0]),this._holes)for(t=0,e=this._holes.length;e>t;t++)i=o.GeoJSON.latLngsToCoords(this._holes[t]),i.push(i[0]),n.push(i);return o.GeoJSON.getFeature(this,{type:"Polygon",coordinates:n})}}),function(){function t(t){return function(){var e=[];return this.eachLayer(function(t){e.push(t.toGeoJSON().geometry.coordinates)}),o.GeoJSON.getFeature(this,{type:t,coordinates:e})}}o.MultiPolyline.include({toGeoJSON:t("MultiLineString")}),o.MultiPolygon.include({toGeoJSON:t("MultiPolygon")}),o.LayerGroup.include({toGeoJSON:function(){var e,i=this.feature&&this.feature.geometry,n=[];if(i&&"MultiPoint"===i.type)return t("MultiPoint").call(this);var s=i&&"GeometryCollection"===i.type;return this.eachLayer(function(t){t.toGeoJSON&&(e=t.toGeoJSON(),n.push(s?e.geometry:o.GeoJSON.asFeature(e)))}),s?o.GeoJSON.getFeature(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}})}(),o.geoJson=function(t,e){return new o.GeoJSON(t,e)},o.DomEvent={addListener:function(t,e,i,n){var s,a,r,h=o.stamp(i),l="_leaflet_"+e+h;return t[l]?this:(s=function(e){return i.call(n||t,e||o.DomEvent._getEvent())},o.Browser.pointer&&0===e.indexOf("touch")?this.addPointerListener(t,e,s,h):(o.Browser.touch&&"dblclick"===e&&this.addDoubleTapListener&&this.addDoubleTapListener(t,s,h),"addEventListener"in t?"mousewheel"===e?(t.addEventListener("DOMMouseScroll",s,!1),t.addEventListener(e,s,!1)):"mouseenter"===e||"mouseleave"===e?(a=s,r="mouseenter"===e?"mouseover":"mouseout",s=function(e){return o.DomEvent._checkMouse(t,e)?a(e):void 0},t.addEventListener(r,s,!1)):"click"===e&&o.Browser.android?(a=s,s=function(t){return o.DomEvent._filterClick(t,a)},t.addEventListener(e,s,!1)):t.addEventListener(e,s,!1):"attachEvent"in t&&t.attachEvent("on"+e,s),t[l]=s,this))},removeListener:function(t,e,i){var n=o.stamp(i),s="_leaflet_"+e+n,a=t[s];return a?(o.Browser.pointer&&0===e.indexOf("touch")?this.removePointerListener(t,e,n):o.Browser.touch&&"dblclick"===e&&this.removeDoubleTapListener?this.removeDoubleTapListener(t,n):"removeEventListener"in t?"mousewheel"===e?(t.removeEventListener("DOMMouseScroll",a,!1),t.removeEventListener(e,a,!1)):"mouseenter"===e||"mouseleave"===e?t.removeEventListener("mouseenter"===e?"mouseover":"mouseout",a,!1):t.removeEventListener(e,a,!1):"detachEvent"in t&&t.detachEvent("on"+e,a),t[s]=null,this):this},stopPropagation:function(t){return t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,o.DomEvent._skipped(t),this},disableScrollPropagation:function(t){var e=o.DomEvent.stopPropagation;return o.DomEvent.on(t,"mousewheel",e).on(t,"MozMousePixelScroll",e)},disableClickPropagation:function(t){for(var e=o.DomEvent.stopPropagation,i=o.Draggable.START.length-1;i>=0;i--)o.DomEvent.on(t,o.Draggable.START[i],e);return o.DomEvent.on(t,"click",o.DomEvent._fakeStop).on(t,"dblclick",e)},preventDefault:function(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this},stop:function(t){return o.DomEvent.preventDefault(t).stopPropagation(t)},getMousePosition:function(t,e){if(!e)return new o.Point(t.clientX,t.clientY);var i=e.getBoundingClientRect();return new o.Point(t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop)},getWheelDelta:function(t){var e=0;return t.wheelDelta&&(e=t.wheelDelta/120),t.detail&&(e=-t.detail/3),e},_skipEvents:{},_fakeStop:function(t){o.DomEvent._skipEvents[t.type]=!0},_skipped:function(t){var e=this._skipEvents[t.type];return this._skipEvents[t.type]=!1,e},_checkMouse:function(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(n){return!1}return i!==t},_getEvent:function(){var e=t.event;if(!e)for(var i=arguments.callee.caller;i&&(e=i.arguments[0],!e||t.Event!==e.constructor);)i=i.caller;return e},_filterClick:function(t,e){var i=t.timeStamp||t.originalEvent.timeStamp,n=o.DomEvent._lastClick&&i-o.DomEvent._lastClick;return n&&n>100&&500>n||t.target._simulatedClick&&!t._simulated?void o.DomEvent.stop(t):(o.DomEvent._lastClick=i,e(t))}},o.DomEvent.on=o.DomEvent.addListener,o.DomEvent.off=o.DomEvent.removeListener,o.Draggable=o.Class.extend({includes:o.Mixin.Events,statics:{START:o.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"}},initialize:function(t,e){this._element=t,this._dragStartTarget=e||t},enable:function(){if(!this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.on(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!0}},disable:function(){if(this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.off(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!1,this._moved=!1}},_onDown:function(t){if(this._moved=!1,!(t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(o.DomEvent.stopPropagation(t),o.Draggable._disabled||(o.DomUtil.disableImageDrag(),o.DomUtil.disableTextSelection(),this._moving)))){var i=t.touches?t.touches[0]:t;this._startPoint=new o.Point(i.clientX,i.clientY),this._startPos=this._newPos=o.DomUtil.getPosition(this._element),o.DomEvent.on(e,o.Draggable.MOVE[t.type],this._onMove,this).on(e,o.Draggable.END[t.type],this._onUp,this)}},_onMove:function(t){if(t.touches&&t.touches.length>1)return void(this._moved=!0);var i=t.touches&&1===t.touches.length?t.touches[0]:t,n=new o.Point(i.clientX,i.clientY),s=n.subtract(this._startPoint);(s.x||s.y)&&(o.Browser.touch&&Math.abs(s.x)+Math.abs(s.y)<3||(o.DomEvent.preventDefault(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=o.DomUtil.getPosition(this._element).subtract(s),o.DomUtil.addClass(e.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,o.DomUtil.addClass(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(s),this._moving=!0,o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget)))},_updatePosition:function(){this.fire("predrag"),o.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(){o.DomUtil.removeClass(e.body,"leaflet-dragging"),this._lastTarget&&(o.DomUtil.removeClass(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var t in o.Draggable.MOVE)o.DomEvent.off(e,o.Draggable.MOVE[t],this._onMove).off(e,o.Draggable.END[t],this._onUp);o.DomUtil.enableImageDrag(),o.DomUtil.enableTextSelection(),this._moved&&this._moving&&(o.Util.cancelAnimFrame(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1}}),o.Handler=o.Class.extend({initialize:function(t){this._map=t},enable:function(){this._enabled||(this._enabled=!0,this.addHooks())},disable:function(){this._enabled&&(this._enabled=!1,this.removeHooks())},enabled:function(){return!!this._enabled}}),o.Map.mergeOptions({dragging:!0,inertia:!o.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,inertiaThreshold:o.Browser.touch?32:18,easeLinearity:.25,worldCopyJump:!1}),o.Map.Drag=o.Handler.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new o.Draggable(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),t.on("viewreset",this._onViewReset,this),t.whenReady(this._onViewReset,this))}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var t=this._map;t._panAnim&&t._panAnim.stop(),t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var t=this._lastTime=+new Date,e=this._lastPos=this._draggable._newPos;this._positions.push(e),this._times.push(t),t-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var t=this._map.getSize()._divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.project([0,180]).x},_onPreDrag:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,a=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._newPos.x=a},_onDragEnd:function(t){var e=this._map,i=e.options,n=+new Date-this._lastTime,s=!i.inertia||n>i.inertiaThreshold||!this._positions[0];if(e.fire("dragend",t),s)e.fire("moveend");else{var a=this._lastPos.subtract(this._positions[0]),r=(this._lastTime+n-this._times[0])/1e3,h=i.easeLinearity,l=a.multiplyBy(h/r),u=l.distanceTo([0,0]),c=Math.min(i.inertiaMaxSpeed,u),d=l.multiplyBy(c/u),p=c/(i.inertiaDeceleration*h),_=d.multiplyBy(-p/2).round();_.x&&_.y?(_=e._limitOffset(_,e.options.maxBounds),o.Util.requestAnimFrame(function(){e.panBy(_,{duration:p,easeLinearity:h,noMoveStart:!0})})):e.fire("moveend")}}}),o.Map.addInitHook("addHandler","dragging",o.Map.Drag),o.Map.mergeOptions({doubleClickZoom:!0}),o.Map.DoubleClickZoom=o.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom()+(t.originalEvent.shiftKey?-1:1);"center"===e.options.doubleClickZoom?e.setZoom(i):e.setZoomAround(t.containerPoint,i)}}),o.Map.addInitHook("addHandler","doubleClickZoom",o.Map.DoubleClickZoom),o.Map.mergeOptions({scrollWheelZoom:!0}),o.Map.ScrollWheelZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),o.DomEvent.on(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault),this._delta=0},removeHooks:function(){o.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll),o.DomEvent.off(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault)},_onWheelScroll:function(t){var e=o.DomEvent.getWheelDelta(t);this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var i=Math.max(40-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o.bind(this._performZoom,this),i),o.DomEvent.preventDefault(t),o.DomEvent.stopPropagation(t)},_performZoom:function(){var t=this._map,e=this._delta,i=t.getZoom();e=e>0?Math.ceil(e):Math.floor(e),e=Math.max(Math.min(e,4),-4),e=t._limitZoom(i+e)-i,this._delta=0,this._startTime=null,e&&("center"===t.options.scrollWheelZoom?t.setZoom(i+e):t.setZoomAround(this._lastMousePos,i+e))}}),o.Map.addInitHook("addHandler","scrollWheelZoom",o.Map.ScrollWheelZoom),o.extend(o.DomEvent,{_touchstart:o.Browser.msPointer?"MSPointerDown":o.Browser.pointer?"pointerdown":"touchstart",_touchend:o.Browser.msPointer?"MSPointerUp":o.Browser.pointer?"pointerup":"touchend",addDoubleTapListener:function(t,i,n){function s(t){var e;if(o.Browser.pointer?(_.push(t.pointerId),e=_.length):e=t.touches.length,!(e>1)){var i=Date.now(),n=i-(r||i);h=t.touches?t.touches[0]:t,l=n>0&&u>=n,r=i}}function a(t){if(o.Browser.pointer){var e=_.indexOf(t.pointerId);if(-1===e)return;_.splice(e,1)}if(l){if(o.Browser.pointer){var n,s={};for(var a in h)n=h[a],s[a]="function"==typeof n?n.bind(h):n;h=s}h.type="dblclick",i(h),r=null}}var r,h,l=!1,u=250,c="_leaflet_",d=this._touchstart,p=this._touchend,_=[];t[c+d+n]=s,t[c+p+n]=a;var m=o.Browser.pointer?e.documentElement:t;return t.addEventListener(d,s,!1),m.addEventListener(p,a,!1),o.Browser.pointer&&m.addEventListener(o.DomEvent.POINTER_CANCEL,a,!1),this},removeDoubleTapListener:function(t,i){var n="_leaflet_";return t.removeEventListener(this._touchstart,t[n+this._touchstart+i],!1),(o.Browser.pointer?e.documentElement:t).removeEventListener(this._touchend,t[n+this._touchend+i],!1),o.Browser.pointer&&e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL,t[n+this._touchend+i],!1),this}}),o.extend(o.DomEvent,{POINTER_DOWN:o.Browser.msPointer?"MSPointerDown":"pointerdown",POINTER_MOVE:o.Browser.msPointer?"MSPointerMove":"pointermove",POINTER_UP:o.Browser.msPointer?"MSPointerUp":"pointerup",POINTER_CANCEL:o.Browser.msPointer?"MSPointerCancel":"pointercancel",_pointers:[],_pointerDocumentListener:!1,addPointerListener:function(t,e,i,n){switch(e){case"touchstart":return this.addPointerListenerStart(t,e,i,n);case"touchend":return this.addPointerListenerEnd(t,e,i,n);case"touchmove":return this.addPointerListenerMove(t,e,i,n);default:throw"Unknown touch event type"}},addPointerListenerStart:function(t,i,n,s){var a="_leaflet_",r=this._pointers,h=function(t){o.DomEvent.preventDefault(t);for(var e=!1,i=0;i<r.length;i++)if(r[i].pointerId===t.pointerId){e=!0;
break}e||r.push(t),t.touches=r.slice(),t.changedTouches=[t],n(t)};if(t[a+"touchstart"+s]=h,t.addEventListener(this.POINTER_DOWN,h,!1),!this._pointerDocumentListener){var l=function(t){for(var e=0;e<r.length;e++)if(r[e].pointerId===t.pointerId){r.splice(e,1);break}};e.documentElement.addEventListener(this.POINTER_UP,l,!1),e.documentElement.addEventListener(this.POINTER_CANCEL,l,!1),this._pointerDocumentListener=!0}return this},addPointerListenerMove:function(t,e,i,n){function o(t){if(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons){for(var e=0;e<a.length;e++)if(a[e].pointerId===t.pointerId){a[e]=t;break}t.touches=a.slice(),t.changedTouches=[t],i(t)}}var s="_leaflet_",a=this._pointers;return t[s+"touchmove"+n]=o,t.addEventListener(this.POINTER_MOVE,o,!1),this},addPointerListenerEnd:function(t,e,i,n){var o="_leaflet_",s=this._pointers,a=function(t){for(var e=0;e<s.length;e++)if(s[e].pointerId===t.pointerId){s.splice(e,1);break}t.touches=s.slice(),t.changedTouches=[t],i(t)};return t[o+"touchend"+n]=a,t.addEventListener(this.POINTER_UP,a,!1),t.addEventListener(this.POINTER_CANCEL,a,!1),this},removePointerListener:function(t,e,i){var n="_leaflet_",o=t[n+e+i];switch(e){case"touchstart":t.removeEventListener(this.POINTER_DOWN,o,!1);break;case"touchmove":t.removeEventListener(this.POINTER_MOVE,o,!1);break;case"touchend":t.removeEventListener(this.POINTER_UP,o,!1),t.removeEventListener(this.POINTER_CANCEL,o,!1)}return this}}),o.Map.mergeOptions({touchZoom:o.Browser.touch&&!o.Browser.android23,bounceAtZoomLimits:!0}),o.Map.TouchZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var n=i.mouseEventToLayerPoint(t.touches[0]),s=i.mouseEventToLayerPoint(t.touches[1]),a=i._getCenterLayerPoint();this._startCenter=n.add(s)._divideBy(2),this._startDist=n.distanceTo(s),this._moved=!1,this._zooming=!0,this._centerOffset=a.subtract(this._startCenter),i._panAnim&&i._panAnim.stop(),o.DomEvent.on(e,"touchmove",this._onTouchMove,this).on(e,"touchend",this._onTouchEnd,this),o.DomEvent.preventDefault(t)}},_onTouchMove:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&this._zooming){var i=e.mouseEventToLayerPoint(t.touches[0]),n=e.mouseEventToLayerPoint(t.touches[1]);this._scale=i.distanceTo(n)/this._startDist,this._delta=i._add(n)._divideBy(2)._subtract(this._startCenter),1!==this._scale&&(e.options.bounceAtZoomLimits||!(e.getZoom()===e.getMinZoom()&&this._scale<1||e.getZoom()===e.getMaxZoom()&&this._scale>1))&&(this._moved||(o.DomUtil.addClass(e._mapPane,"leaflet-touching"),e.fire("movestart").fire("zoomstart"),this._moved=!0),o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),o.DomEvent.preventDefault(t))}},_updateOnMove:function(){var t=this._map,e=this._getScaleOrigin(),i=t.layerPointToLatLng(e),n=t.getScaleZoom(this._scale);t._animateZoom(i,n,this._startCenter,this._scale,this._delta,!1,!0)},_onTouchEnd:function(){if(!this._moved||!this._zooming)return void(this._zooming=!1);var t=this._map;this._zooming=!1,o.DomUtil.removeClass(t._mapPane,"leaflet-touching"),o.Util.cancelAnimFrame(this._animRequest),o.DomEvent.off(e,"touchmove",this._onTouchMove).off(e,"touchend",this._onTouchEnd);var i=this._getScaleOrigin(),n=t.layerPointToLatLng(i),s=t.getZoom(),a=t.getScaleZoom(this._scale)-s,r=a>0?Math.ceil(a):Math.floor(a),h=t._limitZoom(s+r),l=t.getZoomScale(h)/this._scale;t._animateZoom(n,h,i,l)},_getScaleOrigin:function(){var t=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(t)}}),o.Map.addInitHook("addHandler","touchZoom",o.Map.TouchZoom),o.Map.mergeOptions({tap:!0,tapTolerance:15}),o.Map.Tap=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(o.DomEvent.preventDefault(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new o.Point(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.addClass(n,"leaflet-active"),this._holdTimeout=setTimeout(o.bind(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),o.DomEvent.on(e,"touchmove",this._onMove,this).on(e,"touchend",this._onUp,this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),o.DomEvent.off(e,"touchmove",this._onMove,this).off(e,"touchend",this._onUp,this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],n=i.target;n&&n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.removeClass(n,"leaflet-active"),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var e=t.touches[0];this._newPos=new o.Point(e.clientX,e.clientY)},_simulateEvent:function(i,n){var o=e.createEvent("MouseEvents");o._simulated=!0,n.target._simulatedClick=!0,o.initMouseEvent(i,!0,!0,t,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(o)}}),o.Browser.touch&&!o.Browser.pointer&&o.Map.addInitHook("addHandler","tap",o.Map.Tap),o.Map.mergeOptions({boxZoom:!0}),o.Map.BoxZoom=o.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._moved=!1},addHooks:function(){o.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){o.DomEvent.off(this._container,"mousedown",this._onMouseDown),this._moved=!1},moved:function(){return this._moved},_onMouseDown:function(t){return this._moved=!1,!t.shiftKey||1!==t.which&&1!==t.button?!1:(o.DomUtil.disableTextSelection(),o.DomUtil.disableImageDrag(),this._startLayerPoint=this._map.mouseEventToLayerPoint(t),void o.DomEvent.on(e,"mousemove",this._onMouseMove,this).on(e,"mouseup",this._onMouseUp,this).on(e,"keydown",this._onKeyDown,this))},_onMouseMove:function(t){this._moved||(this._box=o.DomUtil.create("div","leaflet-zoom-box",this._pane),o.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",this._map.fire("boxzoomstart"));var e=this._startLayerPoint,i=this._box,n=this._map.mouseEventToLayerPoint(t),s=n.subtract(e),a=new o.Point(Math.min(n.x,e.x),Math.min(n.y,e.y));o.DomUtil.setPosition(i,a),this._moved=!0,i.style.width=Math.max(0,Math.abs(s.x)-4)+"px",i.style.height=Math.max(0,Math.abs(s.y)-4)+"px"},_finish:function(){this._moved&&(this._pane.removeChild(this._box),this._container.style.cursor=""),o.DomUtil.enableTextSelection(),o.DomUtil.enableImageDrag(),o.DomEvent.off(e,"mousemove",this._onMouseMove).off(e,"mouseup",this._onMouseUp).off(e,"keydown",this._onKeyDown)},_onMouseUp:function(t){this._finish();var e=this._map,i=e.mouseEventToLayerPoint(t);if(!this._startLayerPoint.equals(i)){var n=new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint),e.layerPointToLatLng(i));e.fitBounds(n),e.fire("boxzoomend",{boxZoomBounds:n})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}}),o.Map.addInitHook("addHandler","boxZoom",o.Map.BoxZoom),o.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),o.Map.Keyboard=o.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,173]},initialize:function(t){this._map=t,this._setPanOffset(t.options.keyboardPanOffset),this._setZoomOffset(t.options.keyboardZoomOffset)},addHooks:function(){var t=this._map._container;-1===t.tabIndex&&(t.tabIndex="0"),o.DomEvent.on(t,"focus",this._onFocus,this).on(t,"blur",this._onBlur,this).on(t,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var t=this._map._container;o.DomEvent.off(t,"focus",this._onFocus,this).off(t,"blur",this._onBlur,this).off(t,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){if(!this._focused){var i=e.body,n=e.documentElement,o=i.scrollTop||n.scrollTop,s=i.scrollLeft||n.scrollLeft;this._map._container.focus(),t.scrollTo(s,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;i>e;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;i>e;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;i>e;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;i>e;e++)n[o.up[e]]=[0,-1*t]},_setZoomOffset:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;i>e;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;i>e;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){o.DomEvent.on(e,"keydown",this._onKeyDown,this)},_removeHooks:function(){o.DomEvent.off(e,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){var e=t.keyCode,i=this._map;if(e in this._panKeys){if(i._panAnim&&i._panAnim._inProgress)return;i.panBy(this._panKeys[e]),i.options.maxBounds&&i.panInsideBounds(i.options.maxBounds)}else{if(!(e in this._zoomKeys))return;i.setZoom(i.getZoom()+this._zoomKeys[e])}o.DomEvent.stop(t)}}),o.Map.addInitHook("addHandler","keyboard",o.Map.Keyboard),o.Handler.MarkerDrag=o.Handler.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new o.Draggable(t,t)),this._draggable.on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this),this._draggable.enable(),o.DomUtil.addClass(this._marker._icon,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off("dragstart",this._onDragStart,this).off("drag",this._onDrag,this).off("dragend",this._onDragEnd,this),this._draggable.disable(),o.DomUtil.removeClass(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(){var t=this._marker,e=t._shadow,i=o.DomUtil.getPosition(t._icon),n=t._map.layerPointToLatLng(i);e&&o.DomUtil.setPosition(e,i),t._latlng=n,t.fire("move",{latlng:n}).fire("drag")},_onDragEnd:function(t){this._marker.fire("moveend").fire("dragend",t)}}),o.Control=o.Class.extend({options:{position:"topright"},initialize:function(t){o.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return o.DomUtil.addClass(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this},removeFrom:function(t){var e=this.getPosition(),i=t._controlCorners[e];return i.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(t),this},_refocusOnMap:function(){this._map&&this._map.getContainer().focus()}}),o.control=function(t){return new o.Control(t)},o.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.removeFrom(this),this},_initControlPos:function(){function t(t,s){var a=i+t+" "+i+s;e[t+s]=o.DomUtil.create("div",a,n)}var e=this._controlCorners={},i="leaflet-",n=this._controlContainer=o.DomUtil.create("div",i+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){this._container.removeChild(this._controlContainer)}}),o.Control.Zoom=o.Control.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=o.DomUtil.create("div",e+" leaflet-bar");return this._map=t,this._zoomInButton=this._createButton(this.options.zoomInText,this.options.zoomInTitle,e+"-in",i,this._zoomIn,this),this._zoomOutButton=this._createButton(this.options.zoomOutText,this.options.zoomOutTitle,e+"-out",i,this._zoomOut,this),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},_zoomIn:function(t){this._map.zoomIn(t.shiftKey?3:1)},_zoomOut:function(t){this._map.zoomOut(t.shiftKey?3:1)},_createButton:function(t,e,i,n,s,a){var r=o.DomUtil.create("a",i,n);r.innerHTML=t,r.href="#",r.title=e;var h=o.DomEvent.stopPropagation;return o.DomEvent.on(r,"click",h).on(r,"mousedown",h).on(r,"dblclick",h).on(r,"click",o.DomEvent.preventDefault).on(r,"click",s,a).on(r,"click",this._refocusOnMap,a),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";o.DomUtil.removeClass(this._zoomInButton,e),o.DomUtil.removeClass(this._zoomOutButton,e),t._zoom===t.getMinZoom()&&o.DomUtil.addClass(this._zoomOutButton,e),t._zoom===t.getMaxZoom()&&o.DomUtil.addClass(this._zoomInButton,e)}}),o.Map.mergeOptions({zoomControl:!0}),o.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new o.Control.Zoom,this.addControl(this.zoomControl))}),o.control.zoom=function(t){return new o.Control.Zoom(t)},o.Control.Attribution=o.Control.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){o.setOptions(this,t),this._attributions={}},onAdd:function(t){this._container=o.DomUtil.create("div","leaflet-control-attribution"),o.DomEvent.disableClickPropagation(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return t.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(t){t.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):void 0},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):void 0},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(" | ")}},_onLayerAdd:function(t){t.layer.getAttribution&&this.addAttribution(t.layer.getAttribution())},_onLayerRemove:function(t){t.layer.getAttribution&&this.removeAttribution(t.layer.getAttribution())}}),o.Map.mergeOptions({attributionControl:!0}),o.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new o.Control.Attribution).addTo(this))}),o.control.attribution=function(t){return new o.Control.Attribution(t)},o.Control.Scale=o.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(t){this._map=t;var e="leaflet-control-scale",i=o.DomUtil.create("div",e),n=this.options;return this._addScales(n,e,i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=o.DomUtil.create("div",e+"-line",i)),t.imperial&&(this._iScale=o.DomUtil.create("div",e+"-line",i))},_update:function(){var t=this._map.getBounds(),e=t.getCenter().lat,i=6378137*Math.PI*Math.cos(e*Math.PI/180),n=i*(t.getNorthEast().lng-t.getSouthWest().lng)/180,o=this._map.getSize(),s=this.options,a=0;o.x>0&&(a=n*(s.maxWidth/o.x)),this._updateScales(s,a)},_updateScales:function(t,e){t.metric&&e&&this._updateMetric(e),t.imperial&&e&&this._updateImperial(e)},_updateMetric:function(t){var e=this._getRoundNum(t);this._mScale.style.width=this._getScaleWidth(e/t)+"px",this._mScale.innerHTML=1e3>e?e+" m":e/1e3+" km"},_updateImperial:function(t){var e,i,n,o=3.2808399*t,s=this._iScale;o>5280?(e=o/5280,i=this._getRoundNum(e),s.style.width=this._getScaleWidth(i/e)+"px",s.innerHTML=i+" mi"):(n=this._getRoundNum(o),s.style.width=this._getScaleWidth(n/o)+"px",s.innerHTML=n+" ft")},_getScaleWidth:function(t){return Math.round(this.options.maxWidth*t)-10},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),o.control.scale=function(t){return new o.Control.Scale(t)},o.Control.Layers=o.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(t,e,i){o.setOptions(this,i),this._layers={},this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){return this._initLayout(),this._update(),t.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this),this._container},onRemove:function(t){t.off("layeradd",this._onLayerChange,this).off("layerremove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._update(),this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._update(),this},removeLayer:function(t){var e=o.stamp(t);return delete this._layers[e],this._update(),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=o.DomUtil.create("div",t);e.setAttribute("aria-haspopup",!0),o.Browser.touch?o.DomEvent.on(e,"click",o.DomEvent.stopPropagation):o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);var i=this._form=o.DomUtil.create("form",t+"-list");if(this.options.collapsed){o.Browser.android||o.DomEvent.on(e,"mouseover",this._expand,this).on(e,"mouseout",this._collapse,this);var n=this._layersLink=o.DomUtil.create("a",t+"-toggle",e);n.href="#",n.title="Layers",o.Browser.touch?o.DomEvent.on(n,"click",o.DomEvent.stop).on(n,"click",this._expand,this):o.DomEvent.on(n,"focus",this._expand,this),o.DomEvent.on(i,"click",function(){setTimeout(o.bind(this._onInputClick,this),0)},this),this._map.on("click",this._collapse,this)}else this._expand();this._baseLayersList=o.DomUtil.create("div",t+"-base",i),this._separator=o.DomUtil.create("div",t+"-separator",i),this._overlaysList=o.DomUtil.create("div",t+"-overlays",i),e.appendChild(i)},_addLayer:function(t,e,i){var n=o.stamp(t);this._layers[n]={layer:t,name:e,overlay:i},this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex))},_update:function(){if(this._container){this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var t,e,i=!1,n=!1;for(t in this._layers)e=this._layers[t],this._addItem(e),n=n||e.overlay,i=i||!e.overlay;this._separator.style.display=n&&i?"":"none"}},_onLayerChange:function(t){var e=this._layers[o.stamp(t.layer)];if(e){this._handlingClick||this._update();var i=e.overlay?"layeradd"===t.type?"overlayadd":"overlayremove":"layeradd"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)}},_createRadioElement:function(t,i){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"';i&&(n+=' checked="checked"'),n+="/>";var o=e.createElement("div");return o.innerHTML=n,o.firstChild},_addItem:function(t){var i,n=e.createElement("label"),s=this._map.hasLayer(t.layer);t.overlay?(i=e.createElement("input"),i.type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=s):i=this._createRadioElement("leaflet-base-layers",s),i.layerId=o.stamp(t.layer),o.DomEvent.on(i,"click",this._onInputClick,this);var a=e.createElement("span");a.innerHTML=" "+t.name,n.appendChild(i),n.appendChild(a);var r=t.overlay?this._overlaysList:this._baseLayersList;return r.appendChild(n),n},_onInputClick:function(){var t,e,i,n=this._form.getElementsByTagName("input"),o=n.length;for(this._handlingClick=!0,t=0;o>t;t++)e=n[t],i=this._layers[e.layerId],e.checked&&!this._map.hasLayer(i.layer)?this._map.addLayer(i.layer):!e.checked&&this._map.hasLayer(i.layer)&&this._map.removeLayer(i.layer);this._handlingClick=!1,this._refocusOnMap()},_expand:function(){o.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),o.control.layers=function(t,e,i){return new o.Control.Layers(t,e,i)},o.PosAnimation=o.Class.extend({includes:o.Mixin.Events,run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._newPos=e,this.fire("start"),t.style[o.DomUtil.TRANSITION]="all "+(i||.25)+"s cubic-bezier(0,0,"+(n||.5)+",1)",o.DomEvent.on(t,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),o.DomUtil.setPosition(t,e),o.Util.falseFn(t.offsetWidth),this._stepTimer=setInterval(o.bind(this._onStep,this),50)},stop:function(){this._inProgress&&(o.DomUtil.setPosition(this._el,this._getPos()),this._onTransitionEnd(),o.Util.falseFn(this._el.offsetWidth))},_onStep:function(){var t=this._getPos();return t?(this._el._leaflet_pos=t,void this.fire("step")):void this._onTransitionEnd()},_transformRe:/([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,_getPos:function(){var e,i,n,s=this._el,a=t.getComputedStyle(s);if(o.Browser.any3d){if(n=a[o.DomUtil.TRANSFORM].match(this._transformRe),!n)return;e=parseFloat(n[1]),i=parseFloat(n[2])}else e=parseFloat(a.left),i=parseFloat(a.top);return new o.Point(e,i,!0)},_onTransitionEnd:function(){o.DomEvent.off(this._el,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),this._inProgress&&(this._inProgress=!1,this._el.style[o.DomUtil.TRANSITION]="",this._el._leaflet_pos=this._newPos,clearInterval(this._stepTimer),this.fire("step").fire("end"))}}),o.Map.include({setView:function(t,e,n){if(e=e===i?this._zoom:this._limitZoom(e),t=this._limitCenter(o.latLng(t),e,this.options.maxBounds),n=n||{},this._panAnim&&this._panAnim.stop(),this._loaded&&!n.reset&&n!==!0){n.animate!==i&&(n.zoom=o.extend({animate:n.animate},n.zoom),n.pan=o.extend({animate:n.animate},n.pan));var s=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(s)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e),this},panBy:function(t,e){if(t=o.point(t).round(),e=e||{},!t.x&&!t.y)return this;if(this._panAnim||(this._panAnim=new o.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){o.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t);this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){o.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._floor();return(e&&e.animate)===!0||this.getSize().contains(i)?(this.panBy(i,e),!0):!1}}),o.PosAnimation=o.DomUtil.TRANSITION?o.PosAnimation:o.PosAnimation.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=o.DomUtil.getPosition(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(),this._complete())},_animate:function(){this._animId=o.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(){var t=+new Date-this._startTime,e=1e3*this._duration;e>t?this._runFrame(this._easeOut(t/e)):(this._runFrame(1),this._complete())},_runFrame:function(t){var e=this._startPos.add(this._offset.multiplyBy(t));o.DomUtil.setPosition(this._el,e),this.fire("step")},_complete:function(){o.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),o.Map.mergeOptions({zoomAnimation:!0,zoomAnimationThreshold:4}),o.DomUtil.TRANSITION&&o.Map.addInitHook(function(){this._zoomAnimated=this.options.zoomAnimation&&o.DomUtil.TRANSITION&&o.Browser.any3d&&!o.Browser.android23&&!o.Browser.mobileOpera,this._zoomAnimated&&o.DomEvent.on(this._mapPane,o.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)}),o.Map.include(o.DomUtil.TRANSITION?{_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n),s=this._getCenterLayerPoint()._add(o);return i.animate===!0||this.getSize().contains(o)?(this.fire("movestart").fire("zoomstart"),this._animateZoom(t,e,s,n,null,!0),!0):!1},_animateZoom:function(t,e,i,n,s,a,r){r||(this._animatingZoom=!0),o.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this._animateToCenter=t,this._animateToZoom=e,o.Draggable&&(o.Draggable._disabled=!0),o.Util.requestAnimFrame(function(){this.fire("zoomanim",{center:t,zoom:e,origin:i,scale:n,delta:s,backwards:a})},this)},_onZoomTransitionEnd:function(){this._animatingZoom=!1,o.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),o.Draggable&&(o.Draggable._disabled=!1)}}:{}),o.TileLayer.include({_animateZoom:function(t){this._animating||(this._animating=!0,this._prepareBgBuffer());var e=this._bgBuffer,i=o.DomUtil.TRANSFORM,n=t.delta?o.DomUtil.getTranslateString(t.delta):e.style[i],s=o.DomUtil.getScaleString(t.scale,t.origin);e.style[i]=t.backwards?s+" "+n:n+" "+s},_endZoomAnim:function(){var t=this._tileContainer,e=this._bgBuffer;t.style.visibility="",t.parentNode.appendChild(t),o.Util.falseFn(e.offsetWidth),this._animating=!1},_clearBgBuffer:function(){var t=this._map;!t||t._animatingZoom||t.touchZoom._zooming||(this._bgBuffer.innerHTML="",this._bgBuffer.style[o.DomUtil.TRANSFORM]="")},_prepareBgBuffer:function(){var t=this._tileContainer,e=this._bgBuffer,i=this._getLoadedTilesPercentage(e),n=this._getLoadedTilesPercentage(t);return e&&i>.5&&.5>n?(t.style.visibility="hidden",void this._stopLoadingImages(t)):(e.style.visibility="hidden",e.style[o.DomUtil.TRANSFORM]="",this._tileContainer=e,e=this._bgBuffer=t,this._stopLoadingImages(e),void clearTimeout(this._clearBgBufferTimer))},_getLoadedTilesPercentage:function(t){var e,i,n=t.getElementsByTagName("img"),o=0;for(e=0,i=n.length;i>e;e++)n[e].complete&&o++;return o/i},_stopLoadingImages:function(t){var e,i,n,s=Array.prototype.slice.call(t.getElementsByTagName("img"));for(e=0,i=s.length;i>e;e++)n=s[e],n.complete||(n.onload=o.Util.falseFn,n.onerror=o.Util.falseFn,n.src=o.Util.emptyImageUrl,n.parentNode.removeChild(n))}}),o.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:1/0,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(t){if(t=this._locateOptions=o.extend(this._defaultLocateOptions,t),!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=o.bind(this._handleGeolocationResponse,this),i=o.bind(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=t.coords.latitude,i=t.coords.longitude,n=new o.LatLng(e,i),s=180*t.coords.accuracy/40075017,a=s/Math.cos(o.LatLng.DEG_TO_RAD*e),r=o.latLngBounds([e-s,i-a],[e+s,i+a]),h=this._locateOptions;if(h.setView){var l=Math.min(this.getBoundsZoom(r),h.maxZoom);this.setView(n,l)}var u={latlng:n,bounds:r,timestamp:t.timestamp};for(var c in t.coords)"number"==typeof t.coords[c]&&(u[c]=t.coords[c]);this.fire("locationfound",u)}})}(window,document);
/*! Esri-Leaflet - v0.0.1-beta.5 - 2014-06-16
*   Copyright (c) 2014 Environmental Systems Research Institute, Inc.
*   Apache License*/
L.esri={VERSION:"0.0.1-beta.5",Layers:{},Services:{},Controls:{},Tasks:{},Util:{},Support:{CORS:!!(window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest),pointerEvents:""===document.documentElement.style.pointerEvents}},function(L){function a(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}function b(a){return c(a[0],a[a.length-1])||a.push(a[0]),a}function c(a,b){for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0}function d(a){var b,c=0,d=0,e=a.length,f=a[d];for(d;e-1>d;d++)b=a[d+1],c+=(b[0]-f[0])*(b[1]+f[1]),f=b;return c>=0}function e(a,b,c,d){var e=(d[0]-c[0])*(a[1]-c[1])-(d[1]-c[1])*(a[0]-c[0]),f=(b[0]-a[0])*(a[1]-c[1])-(b[1]-a[1])*(a[0]-c[0]),g=(d[1]-c[1])*(b[0]-a[0])-(d[0]-c[0])*(b[1]-a[1]);if(0!==g){var h=e/g,i=f/g;if(h>=0&&1>=h&&i>=0&&1>=i)return!0}return!1}function f(a,b){for(var c=0;c<a.length-1;c++)for(var d=0;d<b.length-1;d++)if(e(a[c],a[c+1],b[d],b[d+1]))return!0;return!1}function g(a,b){for(var c=!1,d=-1,e=a.length,f=e-1;++d<e;f=d)(a[d][1]<=b[1]&&b[1]<a[f][1]||a[f][1]<=b[1]&&b[1]<a[d][1])&&b[0]<(a[f][0]-a[d][0])*(b[1]-a[d][1])/(a[f][1]-a[d][1])+a[d][0]&&(c=!c);return c}function h(a,b){var c=f(a,b),d=g(a,b[0]);return!c&&d?!0:!1}function i(a){for(var c=[],e=[],f=0;f<a.length;f++){var g=b(a[f].slice(0));if(!(g.length<4))if(d(g)){var i=[g];c.push(i)}else e.push(g)}for(;e.length;){for(var j=e.pop(),k=!1,l=c.length-1;l>=0;l--){var m=c[l][0];if(h(m,j)){c[l].push(j),k=!0;break}}k||c.push([j.reverse()])}return 1===c.length?{type:"Polygon",coordinates:c[0]}:{type:"MultiPolygon",coordinates:c}}function j(a){var c=[],e=a.slice(0),f=b(e.shift().slice(0));if(f.length>=4){d(f)||f.reverse(),c.push(f);for(var g=0;g<e.length;g++){var h=b(e[g].slice(0));h.length>=4&&(d(h)&&h.reverse(),c.push(h))}}return c}function k(a){for(var b=[],c=0;c<a.length;c++)for(var d=j(a[c]),e=d.length-1;e>=0;e--){var f=d[e].slice(0);b.push(f)}return b}L.esri.Util.extentToBounds=function(a){var b=new L.LatLng(a.ymin,a.xmin),c=new L.LatLng(a.ymax,a.xmax);return new L.LatLngBounds(b,c)},L.esri.Util.boundsToExtent=function(a){return{xmin:a.getSouthWest().lng,ymin:a.getSouthWest().lat,xmax:a.getNorthEast().lng,ymax:a.getNorthEast().lat,spatialReference:{wkid:4326}}},L.esri.Util.arcgisToGeojson=function(b,c){var d={};return"number"==typeof b.x&&"number"==typeof b.y&&(d.type="Point",d.coordinates=[b.x,b.y]),b.points&&(d.type="MultiPoint",d.coordinates=b.points.slice(0)),b.paths&&(1===b.paths.length?(d.type="LineString",d.coordinates=b.paths[0].slice(0)):(d.type="MultiLineString",d.coordinates=b.paths.slice(0))),b.rings&&(d=i(b.rings.slice(0))),(b.geometry||b.attributes)&&(d.type="Feature",d.geometry=b.geometry?L.esri.Util.arcgisToGeojson(b.geometry):null,d.properties=b.attributes?a(b.attributes):null,b.attributes&&(d.id=b.attributes[c]||b.attributes.OBJECTID||b.attributes.FID)),d},L.esri.Util.geojsonToArcGIS=function(b,c){c=c||"OBJECTID";var d,e={wkid:4326},f={};switch(b.type){case"Point":f.x=b.coordinates[0],f.y=b.coordinates[1],f.spatialReference=e;break;case"MultiPoint":f.points=b.coordinates.slice(0),f.spatialReference=e;break;case"LineString":f.paths=[b.coordinates.slice(0)],f.spatialReference=e;break;case"MultiLineString":f.paths=b.coordinates.slice(0),f.spatialReference=e;break;case"Polygon":f.rings=j(b.coordinates.slice(0)),f.spatialReference=e;break;case"MultiPolygon":f.rings=k(b.coordinates.slice(0)),f.spatialReference=e;break;case"Feature":b.geometry&&(f.geometry=L.esri.Util.geojsonToArcGIS(b.geometry,c)),f.attributes=b.properties?a(b.properties):{},b.id&&(f.attributes[c]=b.id);break;case"FeatureCollection":for(f=[],d=0;d<b.features.length;d++)f.push(L.esri.Util.geojsonToArcGIS(b.features[d],c));break;case"GeometryCollection":for(f=[],d=0;d<b.geometries.length;d++)f.push(L.esri.Util.geojsonToArcGIS(b.geometries[d],c))}return f},L.esri.Util.responseToFeatureCollection=function(a,b){var c;if(b)c=b;else if(a.objectIdFieldName)c=a.objectIdFieldName;else if(a.fields){for(var d=0;d<=a.fields.length-1;d++)if("esriFieldTypeOID"===a.fields[d].type){c=a.fields[d].name;break}}else c="OBJECTID";var e={type:"FeatureCollection",features:[]},f=a.features||a.results;if(f.length)for(var g=f.length-1;g>=0;g--)e.features.push(L.esri.Util.arcgisToGeojson(f[g],c));return e},L.esri.Util.cleanUrl=function(a){return a=a.replace(/\s\s*/g,""),"/"!==a[a.length-1]&&(a+="/"),a}}(L),function(L){function a(a){var b="";a.f="json";for(var c in a)if(a.hasOwnProperty(c)){var d,e=a[c],f=Object.prototype.toString.call(e);b.length&&(b+="&"),d="[object Array]"===f||"[object Object]"===f?JSON.stringify(e):"[object Date]"===f?e.valueOf():e,b+=encodeURIComponent(c)+"="+encodeURIComponent(d)}return b}function b(a,b){var c=new XMLHttpRequest;return c.onerror=function(){a.call(b,{error:{code:500,message:"XMLHttpRequest error"}},null)},c.onreadystatechange=function(){var d,e;if(4===c.readyState){try{d=JSON.parse(c.responseText)}catch(f){d=null,e={code:500,message:"Could not parse response as JSON."}}!e&&d.error&&(e=d.error,d=null),a.call(b,e,d)}},c}var c=0;L.esri.Request={post:{XMLHTTP:function(c,d,e,f){var g=b(e,f);return g.open("POST",c),g.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),g.send(a(d)),g}},get:{CORS:function(c,d,e,f){var g=b(e,f);return g.open("GET",c+"?"+a(d),!0),g.send(null),g},JSONP:function(b,d,e,f){L.esri._callback=L.esri._callback||{};var g="c"+c;d.callback="L.esri._callback."+g;var h=L.DomUtil.create("script",null,document.body);return h.type="text/javascript",h.src=b+"?"+a(d),h.id=g,L.esri._callback[g]=function(a){if(L.esri._callback[g]!==!0){var b,c=Object.prototype.toString.call(a);"[object Object]"!==c&&"[object Array]"!==c&&(b={error:{code:500,message:"Expected array or object as JSONP response"}},a=null),!b&&a.error&&(b=a,a=null),e.call(f,b,a),L.esri._callback[g]=!0}},c++,L.esri._callback[g]}}},L.esri.get=L.esri.Support.CORS?L.esri.Request.get.CORS:L.esri.Request.get.JSONP,L.esri.post=L.esri.Request.post.XMLHTTP}(L),L.esri.Services.Service=L.Class.extend({includes:L.Mixin.Events,options:{proxy:!1,useCors:!0},initialize:function(a,b){this.url=L.esri.Util.cleanUrl(a),this._requestQueue=[],this._authenticating=!1,b=L.Util.setOptions(this,b)},get:function(a,b,c,d){return this._request("get",a,b,c,d)},post:function(a,b,c,d){return this._request("post",a,b,c,d)},metadata:function(a,b){return this._request("get","",{},a,b)},authenticate:function(a){return this._authenticating=!1,this.options.token=a,this._runQueue(),this},_request:function(a,b,c,d,e){this.fire("requeststart",{url:this.url+b,params:c,method:a});var f=this._createServiceCallback(a,b,c,d,e);if(this.options.token&&(c.token=this.options.token),!this._authenticating){var g=this.options.proxy?this.options.proxy+"?"+this.url+b:this.url+b;return"get"!==a||this.options.useCors?L.esri[a](g,c,f):L.esri.Request.get.JSONP(g,c,f)}this._requestQueue.push([a,b,c,d,e])},_createServiceCallback:function(a,b,c,d,e){var f=[a,b,c,d,e];return L.Util.bind(function(g,h){!g||499!==g.code&&498!==g.code?(d.call(e,g,h),g?this.fire("requesterror",{url:this.url+b,params:c,message:g.message,code:g.code,method:a}):this.fire("requestsuccess",{url:this.url+b,params:c,response:h,method:a}),this.fire("requestend",{url:this.url+b,params:c,method:a})):(this._authenticating=!0,this._requestQueue.push(f),this.fire("authenticationrequired",{authenticate:L.Util.bind(this.authenticate,this)}))},this)},_runQueue:function(){for(var a=this._requestQueue.length-1;a>=0;a--){var b=this._requestQueue[a],c=b.shift();this[c].apply(this,b)}this._requestQueue=[]}}),L.esri.Services.service=function(a,b){return new L.esri.Services.Service(a,b)},L.esri.Services.FeatureLayer=L.esri.Services.Service.extend({options:{idAttribute:"OBJECTID"},query:function(){return new L.esri.Tasks.Query(this)},addFeature:function(a,b,c){return delete a.id,a=L.esri.Util.geojsonToArcGIS(a),this.post("addFeatures",{features:[a]},function(a,c){b.call(this,a||c.addResults[0].error,c.addResults[0])},c)},updateFeature:function(a,b,c){return a=L.esri.Util.geojsonToArcGIS(a,this.options.idAttribute),this.post("updateFeatures",{features:[a]},function(a,d){b.call(c,a||d.updateResults[0].error,d.updateResults[0])},c)},deleteFeature:function(a,b,c){return this.post("deleteFeatures",{objectIds:a},function(a,d){b.call(c,a||d.deleteResults[0].error,d.deleteResults[0])},c)}}),L.esri.Services.featureLayer=function(a,b){return new L.esri.Services.FeatureLayer(a,b)},L.esri.Services.MapService=L.esri.Services.Service.extend({identify:function(){return new L.esri.Tasks.Identify(this)}}),L.esri.Services.mapService=function(a,b){return new L.esri.Services.MapService(a,b)},L.esri.Tasks.Identify=L.Class.extend({initialize:function(a){a.url&&a.get?(this._service=a,this.url=a.url):this.url=L.esri.Util.cleanUrl(a),this._params={sr:4326,layers:"all",tolerance:3}},on:function(a){var b=L.esri.Util.boundsToExtent(a.getBounds()),c=a.getSize();return this._params.imageDisplay=[c.x,c.y,96].join(","),this._params.mapExtent=[b.xmin,b.ymin,b.xmax,b.ymax].join(","),this},at:function(a){return this._params.geometry=[a.lng,a.lat].join(","),this._params.geometryType="esriGeometryPoint",this},layerDef:function(a,b){return this._params.layerDefs=this._params.layerDefs?this._params.layerDefs+";":"",this._params.layerDefs+=[a,b].join(":"),this},between:function(a,b){return this._params.time=[a.valueOf(),b.valueOf()].join(","),this},layers:function(a){return this._params.layers=a,this},precision:function(a){return this._params.geometryPrecision=a,this},simplify:function(a,b){var c=Math.abs(a.getBounds().getWest()-a.getBounds().getEast());return this._params.maxAllowableOffset=c/a.getSize().y*(1-b),this},token:function(a){return this._params.token=a,this},tolerance:function(a){return this._params.tolerance=a,this},run:function(a,b){this._request(function(c,d){a.call(b,c,d&&L.esri.Util.responseToFeatureCollection(d),d)},b)},_request:function(a,b){this._service?this._service.get("identify",this._params,a,b):L.esri.get(this.url+"identify",this._params,a,b)}}),L.esri.Tasks.identify=function(a,b){return new L.esri.Tasks.Identify(a,b)},L.esri.Tasks.Query=L.Class.extend({initialize:function(a){a.url&&a.get?(this._service=a,this.url=a.url):this.url=L.esri.Util.cleanUrl(a),this._params={where:"1=1",outSr:4326,outFields:"*"}},within:function(a){return this._params.geometry=L.esri.Util.boundsToExtent(a),this._params.geometryType="esriGeometryEnvelope",this._params.spatialRel="esriSpatialRelIntersects",this},nearby:function(a,b){return this._params.geometry=[a.lng,a.lat].join(","),this._params.geometryType="esriGeometryPoint",this._params.spatialRel="esriSpatialRelIntersects",this._params.units="esriSRUnit_Meter",this._params.distance=b,this._params.inSr=4326,this},where:function(a){return this._params.where=a.replace(/"/g,"'"),this},offset:function(a){return this._params.offset=a,this},limit:function(a){return this._params.limit=a,this},between:function(a,b){return this._params.time=[a.valueOf(),b.valueOf()].join(),this},fields:function(a){return this._params.outFields=a.join(","),this},precision:function(a){return this._params.geometryPrecision=a,this},simplify:function(a,b){var c=Math.abs(a.getBounds().getWest()-a.getBounds().getEast());return this._params.maxAllowableOffset=c/a.getSize().y*b,this},orderBy:function(a,b){return b=b||"ASC",this._params.orderByFields=this._params.orderByFields?this._params.orderByFields+",":"",this._params.orderByFields+=[a,b].join(" "),this},featureIds:function(a){return this._params.objectIds=a.join(","),this},token:function(a){return this._params.token=a,this},run:function(a,b){return this._cleanParams(),this._request(function(c,d){a.call(b,c,d&&L.esri.Util.responseToFeatureCollection(d),d)},b),this},count:function(a,b){return this._cleanParams(),this._params.returnCountOnly=!0,this._request(function(b,c){a.call(this,b,c&&c.count,c)},b),this},ids:function(a,b){return this._cleanParams(),this._params.returnIdsOnly=!0,this._request(function(b,c){a.call(this,b,c&&c.objectIds,c)},b),this},bounds:function(a,b){return this._cleanParams(),this._params.returnExtentOnly=!0,this._request(function(c,d){a.call(b,c,d&&d.extent&&L.esri.Util.extentToBounds(d.extent),d)},b),this},_cleanParams:function(){delete this._params.returnIdsOnly,delete this._params.returnExtentOnly,delete this._params.returnCountOnly},_request:function(a,b){this._service?this._service.get("query",this._params,a,b):L.esri.get(this.url+"query",this._params,a,b)}}),L.esri.Tasks.query=function(a,b){return new L.esri.Tasks.Query(a,b)},function(L){var a="https:"!==window.location.protocol?"http:":"https:";L.esri.Layers.BasemapLayer=L.TileLayer.extend({statics:{TILES:{Streets:{urlTemplate:a+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",attributionUrl:"https://static.arcgis.com/attribution/World_Street_Map",options:{minZoom:1,maxZoom:19,subdomains:["server","services"],attribution:"Esri"}},Topographic:{urlTemplate:a+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",attributionUrl:"https://static.arcgis.com/attribution/World_Topo_Map",options:{minZoom:1,maxZoom:19,subdomains:["server","services"],attribution:"Esri"}},Oceans:{urlTemplate:a+"//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}",attributionUrl:"https://static.arcgis.com/attribution/Ocean_Basemap",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"Esri"}},OceansLabels:{urlTemplate:a+"//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"]}},NationalGeographic:{urlTemplate:a+"//{s}.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"Esri"}},DarkGray:{urlTemplate:a+"//tiles{s}.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Dark_Gray_Base_Beta/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:10,subdomains:["1","2"],attribution:"Esri, DeLorme, HERE"}},DarkGrayLabels:{urlTemplate:a+"//tiles{s}.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Dark_Gray_Reference_Beta/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:10,subdomains:["1","2"]}},Gray:{urlTemplate:a+"//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"Esri, NAVTEQ, DeLorme"}},GrayLabels:{urlTemplate:a+"//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"]}},Imagery:{urlTemplate:a+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,subdomains:["server","services"],attribution:"Esri, DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community"}},ImageryLabels:{urlTemplate:a+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,subdomains:["server","services"]}},ImageryTransportation:{urlTemplate:a+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,subdomains:["server","services"]}},ShadedRelief:{urlTemplate:a+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:13,subdomains:["server","services"],attribution:"ESRI, NAVTEQ, DeLorme"}},ShadedReliefLabels:{urlTemplate:a+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:12,subdomains:["server","services"]}},Terrain:{urlTemplate:a+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:13,subdomains:["server","services"],attribution:"Esri, USGS, NOAA"}},TerrainLabels:{urlTemplate:a+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:13,subdomains:["server","services"]}}}},initialize:function(a,b){var c;if("object"==typeof a&&a.urlTemplate&&a.options)c=a;else{if("string"!=typeof a||!L.esri.BasemapLayer.TILES[a])throw new Error('L.esri.BasemapLayer: Invalid parameter. Use one of "Streets", "Topographic", "Oceans", "OceansLabels", "NationalGeographic", "Gray", "GrayLabels", "DarkGray", "DarkGrayLabels", "Imagery", "ImageryLabels", "ImageryTransportation", "ShadedRelief", "ShadedReliefLabels", "Terrain" or "TerrainLabels"');c=L.esri.BasemapLayer.TILES[a]}var d=L.Util.extend(c.options,b);L.TileLayer.prototype.initialize.call(this,c.urlTemplate,L.Util.setOptions(this,d)),c.attributionUrl&&this._getAttributionData(c.attributionUrl)},onAdd:function(a){L.TileLayer.prototype.onAdd.call(this,a),a.on("moveend",this._updateMapAttribution,this)},onRemove:function(a){L.TileLayer.prototype.onRemove.call(this,a),a.off("moveend",this._updateMapAttribution,this)},getAttribution:function(){var a='<a href="https://developers.arcgis.com"><img src="https://js.arcgis.com/3.9/js/esri/images/map/logo-med.png" style="position:absolute; top:-38px; right:2px;"></a>',b='<span class="esri-attributions" style="line-height:14px; vertical-align: -3px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden; display:inline-block;">'+this.options.attribution+"</span>"+a;return b},_getAttributionData:function(a){L.esri.get(a,{},function(a,b){this._attributions=[];for(var c=0;c<b.contributors.length;c++)for(var d=b.contributors[c],e=0;e<d.coverageAreas.length;e++){var f=d.coverageAreas[e],g=new L.LatLng(f.bbox[0],f.bbox[1]),h=new L.LatLng(f.bbox[2],f.bbox[3]);this._attributions.push({attribution:d.attribution,score:f.score,bounds:new L.LatLngBounds(g,h),minZoom:f.zoomMin,maxZoom:f.zoomMax})}this._attributions.sort(function(a,b){return b.score-a.score}),this._updateMapAttribution()},this)},_updateMapAttribution:function(){if(this._map&&this._map.attributionControl&&this._attributions){for(var a="",b=this._map.getBounds(),c=this._map.getZoom(),d=0;d<this._attributions.length;d++){var e=this._attributions[d],f=e.attribution;!a.match(f)&&b.intersects(e.bounds)&&c>=e.minZoom&&c<=e.maxZoom&&(a+=", "+f)}a=a.substr(2);var g=this._map.attributionControl._container.querySelector(".esri-attributions");g.innerHTML=a,g.style.maxWidth=.65*this._map.getSize().x+"px",this.fire("attributionupdated",{attribution:a})}}}),L.esri.BasemapLayer=L.esri.Layers.BasemapLayer,L.esri.Layers.basemapLayer=function(a,b){return new L.esri.Layers.BasemapLayer(a,b)},L.esri.basemapLayer=function(a,b){return new L.esri.Layers.BasemapLayer(a,b)}}(L),L.esri.Layers.DynamicMapLayer=L.Class.extend({includes:L.Mixin.Events,options:{opacity:1,position:"front",updateInterval:150,layers:!1,layerDefs:!1,timeOptions:!1,format:"png24",transparent:!0,f:"image"},initialize:function(a,b){this.url=L.esri.Util.cleanUrl(a),this._service=new L.esri.Services.MapService(this.url,b),this._service.on("authenticationrequired requeststart requestend requesterror requestsuccess",this._propagateEvent,this),L.Util.setOptions(this,b)},onAdd:function(a){if(this._map=a,this._update=L.Util.limitExecByInterval(this._update,this.options.updateInterval,this),a.options.crs&&a.options.crs.code){var b=a.options.crs.code.split(":")[1];this.options.bboxSR=b,this.options.imageSR=b}this._popup&&(this._map.on("click",this._getPopupData,this),this._map.on("dblclick",this._resetPopupState,this)),this._map.addEventListener(this.getEvents(),this),this._update()},onRemove:function(){this._currentImage&&this._map.removeLayer(this._currentImage),this._popup&&(this._map.off("click",this._getPopupData,this),this._map.off("dblclick",this._resetPopupState,this)),this._map.removeEventListener(this.getEvents(),this)},addTo:function(a){return a.addLayer(this),this},removeFrom:function(a){return a.removeLayer(this),this},getEvents:function(){var a={moveend:this._update};return a},bringToFront:function(){return this.options.position="front",this._currentImage&&this._currentImage.bringToFront(),this},bringToBack:function(){return this.options.position="back",this._currentImage&&this._currentImage.bringToBack(),this},bindPopup:function(a,b){return this._shouldRenderPopup=!1,this._lastClick=!1,this._popup=L.popup(b),this._popupFunction=a,this._map&&(this._map.on("click",this._getPopupData,this),this._map.on("dblclick",this._resetPopupState,this)),this},unbindPopup:function(){return this._map&&(this._map.closePopup(this._popup),this._map.off("click",this._getPopupData,this),this._map.off("dblclick",this._resetPopupState,this)),this._popup=!1,this},getOpacity:function(){return this.options.opacity},setOpacity:function(a){return this.options.opacity=a,this._currentImage.setOpacity(a),this},getLayers:function(){return this.options.layers},setLayers:function(a){return this.options.layers=a,this._update(),this},getLayerDefs:function(){return this.options.layerDefs},setLayerDefs:function(a){return this.options.layerDefs=a,this._update(),this},getTimeOptions:function(){return this.options.timeOptions},setTimeOptions:function(a){return this.options.timeOptions=a,this._update(),this},getTimeRange:function(){return[this.options.from,this.options.to]},setTimeRange:function(a,b){return this.options.from=a,this.options.to=b,this._update(),this},metadata:function(a,b){return this._service.metadata(a,b),this},identify:function(){return this._service.identify()},authenticate:function(a){return this._service.authenticate(a),this},_getPopupData:function(a){var b=L.Util.bind(function(b,c,d){setTimeout(L.Util.bind(function(){this._renderPopup(a.latlng,b,c,d)},this),300)},this),c=this.identify().on(this._map).at(a.latlng);this.options.layers&&c.layers("visible:"+this.options.layers.join(",")),c.run(b),this._shouldRenderPopup=!0,this._lastClick=a.latlng},_renderPopup:function(a,b,c,d){if(this._shouldRenderPopup&&this._lastClick.equals(a)){var e=this._popupFunction(b,c,d);e&&this._popup.setLatLng(a).setContent(e).openOn(this._map)}},_resetPopupState:function(a){this._shouldRenderPopup=!1,this._lastClick=a.latlng},_buildExportParams:function(){var a=this._map.getBounds(),b=this._map.getSize(),c=this._map.options.crs.project(a._northEast),d=this._map.options.crs.project(a._southWest),e={bbox:[d.x,d.y,c.x,c.y].join(","),size:b.x+","+b.y,dpi:96,format:this.options.format,transparent:this.options.transparent,bboxSR:this.options.bboxSR,imageSR:this.options.imageSR};return this.options.layers&&(e.layers="show:"+this.options.layers.join(",")),this.options.layerDefs&&(e.layerDefs=JSON.stringify(this.options.layerDefs)),this.options.timeOptions&&(e.timeOptions=JSON.stringify(this.options.timeOptions)),this.options.from&&this.options.to&&(e.time=this.options.from.valueOf()+","+this.options.to.valueOf()),this._service.options.token&&(e.token=this._service.options.token),e},_renderImage:function(a,b){var c=new L.ImageOverlay(a,b,{opacity:0}).addTo(this._map);c.once("load",function(a){var c=a.target,d=this._currentImage;c._bounds.equals(b)?(this._currentImage=c,"front"===this.options.position?this.bringToFront():this.bringToBack(),this._currentImage.setOpacity(this.options.opacity),d&&this._map.removeLayer(d)):this._map.removeLayer(c),this.fire("load",{bounds:b})},this),this.fire("loading",{bounds:b})},_update:function(){if(this._map){var a=this._map.getZoom(),b=this._map.getBounds();if(!this._animatingZoom&&!(this._map._panTransition&&this._map._panTransition._inProgress||a>this.options.maxZoom||a<this.options.minZoom)){var c=this._buildExportParams();"json"===this.options.f?this._service.get("export",c,function(a,c){this._renderImage(c.href,b)},this):(c.f="image",this._renderImage(this.url+"export"+L.Util.getParamString(c),b))}}},_propagateEvent:function(a){a=L.extend({layer:a.target,target:this},a),this.fire(a.type,a)}}),L.esri.DynamicMapLayer=L.esri.Layers.DynamicMapLayer,L.esri.Layers.dynamicMapLayer=function(a,b){return new L.esri.Layers.DynamicMapLayer(a,b)},L.esri.dynamicMapLayer=function(a,b){return new L.esri.Layers.DynamicMapLayer(a,b)},L.esri.Layers.TiledMapLayer=L.TileLayer.extend({initialize:function(a,b){b=L.Util.setOptions(this,b),this.url=L.esri.Util.cleanUrl(a),this.tileUrl=L.esri.Util.cleanUrl(a)+"tile/{z}/{y}/{x}",this._service=new L.esri.Services.MapService(this.url,b),this._service.on("authenticationrequired requeststart requestend requesterror requestsuccess",this._propagateEvent,this),this.tileUrl.match("://tiles.arcgisonline.com")&&(this.tileUrl=this.tileUrl.replace("://tiles.arcgisonline.com","://tiles{s}.arcgisonline.com"),b.subdomains=["1","2","3","4"]),L.TileLayer.prototype.initialize.call(this,this.tileUrl,b)},metadata:function(a,b){return this._service.metadata(a,b),this},identify:function(){return this._service.identify()},authenticate:function(a){return this._service.authenticate(a),this},_propagateEvent:function(a){a=L.extend({layer:a.target,target:this},a),this.fire(a.type,a)}}),L.esri.TiledMapLayer=L.esri.Layers.tiledMapLayer,L.esri.Layers.tiledMapLayer=function(a,b){return new L.esri.Layers.TiledMapLayer(a,b)},L.esri.tiledMapLayer=function(a,b){return new L.esri.Layers.TiledMapLayer(a,b)},L.esri.Layers.FeatureGrid=L.Class.extend({includes:L.Mixin.Events,options:{cellSize:512,updateInterval:150},initialize:function(a){a=L.setOptions(this,a)},onAdd:function(a){this._map=a,this._update=L.Util.limitExecByInterval(this._update,this.options.updateInterval,this),this._map.addEventListener(this.getEvents(),this),this._reset(),this._update()},onRemove:function(){this._map.removeEventListener(this.getEvents(),this),this._removeCells()},getEvents:function(){var a={viewreset:this._reset,moveend:this._update};return a},addTo:function(a){return a.addLayer(this),this},removeFrom:function(a){return a.removeLayer(this),this},_reset:function(){this._removeCells(),this._cells={},this._activeCells={},this._cellsToLoad=0,this._cellsTotal=0,this._resetWrap()},_resetWrap:function(){var a=this._map,b=a.options.crs;if(!b.infinite){var c=this._getCellSize();b.wrapLng&&(this._wrapLng=[Math.floor(a.project([0,b.wrapLng[0]]).x/c),Math.ceil(a.project([0,b.wrapLng[1]]).x/c)]),b.wrapLat&&(this._wrapLat=[Math.floor(a.project([b.wrapLat[0],0]).y/c),Math.ceil(a.project([b.wrapLat[1],0]).y/c)])}},_getCellSize:function(){return this.options.cellSize},_update:function(){if(this._map){var a=this._map.getPixelBounds(),b=this._map.getZoom(),c=this._getCellSize();if(!(b>this.options.maxZoom||b<this.options.minZoom)){var d=L.bounds(a.min.divideBy(c).floor(),a.max.divideBy(c).floor());this._addCells(d),this._removeOtherCells(d)}}},_addCells:function(a){var b,c,d,e=[],f=a.getCenter(),g=this._map.getZoom();for(b=a.min.y;b<=a.max.y;b++)for(c=a.min.x;c<=a.max.x;c++)d=new L.Point(c,b),d.z=g,e.push(d);var h=e.length;if(0!==h)for(this._cellsToLoad+=h,this._cellsTotal+=h,e.sort(function(a,b){return a.distanceTo(f)-b.distanceTo(f)}),c=0;h>c;c++)this._addCell(e[c])},_cellCoordsToBounds:function(a){var b=this._map,c=this.options.cellSize,d=a.multiplyBy(c),e=d.add([c,c]),f=b.unproject(d,a.z).wrap(),g=b.unproject(e,a.z).wrap();return new L.LatLngBounds(f,g)},_cellCoordsToKey:function(a){return a.x+":"+a.y},_keyToCellCoords:function(a){var b=a.split(":"),c=parseInt(b[0],10),d=parseInt(b[1],10);return new L.Point(c,d)},_removeOtherCells:function(a){for(var b in this._cells)a.contains(this._keyToCellCoords(b))||this._removeCell(b)},_removeCell:function(a){var b=this._activeCells[a];b&&(delete this._activeCells[a],this.cellLeave&&this.cellLeave(b.bounds,b.coords),this.fire("cellleave",{bounds:b.bounds,coords:b.coords}))},_removeCells:function(){for(var a in this._cells){var b=this._cells[a].bounds,c=this._cells[a].coords;this.cellLeave&&this.cellLeave(b,c),this.fire("cellleave",{bounds:b,coords:c})}},_addCell:function(a){this._wrapCoords(a);var b=this._cellCoordsToKey(a),c=this._cells[b];c&&!this._activeCells[b]&&(this.cellEnter&&this.cellEnter(c.bounds,a),this.fire("cellenter",{bounds:c.bounds,coords:a}),this._activeCells[b]=c),c||(c={coords:a,bounds:this._cellCoordsToBounds(a)},this._cells[b]=c,this._activeCells[b]=c,this.createCell&&this.createCell(c.bounds,a),this.fire("cellcreate",{bounds:c.bounds,coords:a}))},_wrapCoords:function(a){a.x=this._wrapLng?L.Util.wrapNum(a.x,this._wrapLng):a.x,a.y=this._wrapLat?L.Util.wrapNum(a.y,this._wrapLat):a.y}}),function(L){function a(a){this.values=a||[]}L.esri.Layers.FeatureManager=L.esri.Layers.FeatureGrid.extend({options:{where:"1=1",fields:["*"],from:!1,to:!1,timeField:!1,timeFilterMode:"server",simplifyFactor:0,precision:6},initialize:function(b,c){L.esri.Layers.FeatureGrid.prototype.initialize.call(this,c),c=L.setOptions(this,c),this.url=L.esri.Util.cleanUrl(b),this._service=new L.esri.Services.FeatureLayer(this.url,c),this._service.on("authenticationrequired requeststart requestend requesterror requestsuccess",function(a){a=L.extend({target:this},a),this.fire(a.type,a)},this),this.options.timeField.start&&this.options.timeField.end?(this._startTimeIndex=new a,this._endTimeIndex=new a):this.options.timeField&&(this._timeIndex=new a),this._cache={},this._currentSnapshot=[],this._activeRequests=0},onAdd:function(a){return L.esri.Layers.FeatureGrid.prototype.onAdd.call(this,a)},onRemove:function(a){return L.esri.Layers.FeatureGrid.prototype.onRemove.call(this,a)},createCell:function(a,b){this._requestFeatures(a,b)},_requestFeatures:function(a,b,c){this._activeRequests++,1===this._activeRequests&&this.fire("loading",{bounds:a}),this._buildQuery(a).run(function(d,e,f){f&&f.exceededTransferLimit&&this.fire("drawlimitexceeded"),this._activeRequests--,!d&&e.features.length&&this._addFeatures(e.features,b),c&&c.call(this,d,e),this._activeRequests<=0&&this.fire("load",{bounds:a})},this)},_addFeatures:function(a,b){this._cache[b]=this._cache[b]||[];for(var c=a.length-1;c>=0;c--){var d=a[c].id;this._cache[b].push(d),this._currentSnapshot.push(d)}this.options.timeField&&this._buildTimeIndexes(a),this.createLayers(a)},_buildQuery:function(a){var b=this._service.query().within(a).where(this.options.where).fields(this.options.fields).precision(this.options.precision);return this.options.simplifyFactor&&b.simplify(this._map,this.options.simplifyFactor),"server"===this.options.timeFilterMode&&this.options.from&&this.options.to&&b.between(this.options.from,this.options.to),b},setWhere:function(a){this.options.where=a&&a.length?a:"1=1";for(var b=[],c=[],d=0,e=L.Util.bind(function(a,e){if(e)for(var f=e.features.length-1;f>=0;f--)c.push(e.features[f].id);d--,0>=d&&(this._currentSnapshot=c,this.removeLayers(b),this.addLayers(c))},this),f=this._currentSnapshot.length-1;f>=0;f--)b.push(this._currentSnapshot[f]);for(var g in this._activeCells){d++;var h=this._keyToCellCoords(g),i=this._cellCoordsToBounds(h);this._requestFeatures(i,g,e)}return this},getWhere:function(){return this.options.where},getTimeRange:function(){return[this.options.from,this.options.to]},setTimeRange:function(a,b){var c=this.options.from,d=this.options.to,e=L.Util.bind(function(){this._filterExistingFeatures(c,d,a,b)},this);if(this.options.from=a,this.options.to=b,this._filterExistingFeatures(c,d,a,b),"server"===this.options.timeFilterMode)for(var f in this._activeCells){var g=this._keyToCellCoords(f),h=this._cellCoordsToBounds(g);this._requestFeatures(h,f,e)}},refresh:function(){for(var a in this._activeCells){var b=this._keyToCellCoords(a),c=this._cellCoordsToBounds(b);this._requestFeatures(c,a)}},_filterExistingFeatures:function(a,b,c,d){var e=a&&b?this._getFeaturesInTimeRange(a,b):this._currentSnapshot,f=this._getFeaturesInTimeRange(c,d);if(f.indexOf)for(var g=0;g<f.length;g++){var h=e.indexOf(f[g]);h>=0&&e.splice(h,1)}this.removeLayers(e),this.addLayers(f)},_getFeaturesInTimeRange:function(a,b){var c,d=[];if(this.options.timeField.start&&this.options.timeField.end){var e=this._startTimeIndex.between(a,b),f=this._endTimeIndex.between(a,b);
c=e.concat(f)}else c=this._timeIndex.between(a,b);for(var g=c.length-1;g>=0;g--)d.push(c[g].id);return d},_buildTimeIndexes:function(a){var b,c;if(this.options.timeField.start&&this.options.timeField.end){var d=[],e=[];for(b=a.length-1;b>=0;b--)c=a[b],d.push({id:c.id,value:new Date(c.properties[this.options.timeField.start])}),e.push({id:c.id,value:new Date(c.properties[this.options.timeField.end])});this._startTimeIndex.bulkAdd(d),this._endTimeIndex.bulkAdd(e)}else{var f=[];for(b=a.length-1;b>=0;b--)c=a[b],f.push({id:c.id,value:new Date(c.properties[this.options.timeField])});this._timeIndex.bulkAdd(f)}},_featureWithinTimeRange:function(a){if(!this.options.from||!this.options.to)return!0;var b=+this.options.from.valueOf(),c=+this.options.to.valueOf();if("string"==typeof this.options.timeField){var d=+a.properties[this.options.timeField];return d>=b&&c>=d}if(this.options.timeField.start&&this.options.timeField.end){var e=+a.properties[this.options.timeField.start],f=+a.properties[this.options.timeField.end];return e>=b&&c>=e||f>=b&&c>=f}},authenticate:function(a){return this._service.authenticate(a),this},metadata:function(a,b){return this._service.metadata(a,b),this},query:function(){return this._service.query()},addFeature:function(a,b,c){return this._service.addFeature(a,function(a,d){this.refresh(),b.call(c,a,d)},this),this},updateFeature:function(a,b,c){return this._service.updateFeature(a,function(a,d){this.refresh(),b.call(c,a,d)},this)},deleteFeature:function(a,b,c){return this._service.deleteFeature(a,function(a,d){this.removeLayers([d.objectId]),b.call(c,a,d)},this)}}),a.prototype._query=function(a){for(var b,c,d,e=0,f=this.values.length-1;f>=e;)if(d=b=(e+f)/2|0,c=this.values[Math.round(b)],+c.value<+a)e=b+1;else{if(!(+c.value>+a))return b;f=b-1}return~f},a.prototype.sort=function(){this.values.sort(function(a,b){return+b.value-+a.value}).reverse(),this.dirty=!1},a.prototype.between=function(a,b){this.dirty&&this.sort();var c=this._query(a),d=this._query(b);return 0===c&&0===d?[]:(c=Math.abs(c),d=0>d?Math.abs(d):d+1,this.values.slice(c,d))},a.prototype.bulkAdd=function(a){this.dirty=!0,this.values=this.values.concat(a)}}(L),L.esri.Layers.FeatureLayer=L.esri.Layers.FeatureManager.extend({statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},initialize:function(a,b){L.esri.Layers.FeatureManager.prototype.initialize.call(this,a,b),b=L.setOptions(this,b),this._layers={},this._leafletIds={},this._key="c"+(1e9*Math.random()).toString(36).replace(".","_")},onAdd:function(a){return L.esri.Layers.FeatureManager.prototype.onAdd.call(this,a)},onRemove:function(a){for(var b in this._layers)a.removeLayer(this._layers[b]);return L.esri.Layers.FeatureManager.prototype.onRemove.call(this,a)},createLayers:function(a){for(var b=a.length-1;b>=0;b--){var c,d=a[b],e=this._layers[d.id];if(e&&!this._map.hasLayer(e)&&this._map.addLayer(e),e&&e.setLatLngs){var f=L.GeoJSON.geometryToLayer(d,this.options.pointToLayer,L.GeoJSON.coordsToLatLng,this.options);e.setLatLngs(f.getLatLngs())}e||(c=L.GeoJSON.geometryToLayer(d,this.options.pointToLayer,L.GeoJSON.coordsToLatLng,this.options),c.feature=d,c.defaultOptions=c.options,c._leaflet_id=this._key+"_"+d.id,this._leafletIds[c._leaflet_id]=d.id,c.on(L.esri.Layers.FeatureLayer.EVENTS,this._propagateEvent,this),this._popup&&c.bindPopup&&c.bindPopup(this._popup(c.feature,c)),this.options.onEachFeature&&this.options.onEachFeature(c.feature,c),this._layers[c.feature.id]=c,this.resetStyle(c.feature.id),(!this.options.timeField||this.options.timeField&&this._featureWithinTimeRange(d))&&this._map.addLayer(c))}},cellEnter:function(a,b){var c=this._cellCoordsToKey(b),d=this._cache[c];if(d)for(var e=d.length-1;e>=0;e--){var f=this.getFeature(d[e]);this._map.hasLayer(f)||this._map.addLayer(f)}},cellLeave:function(a,b){var c=this._cellCoordsToKey(b),d=this._cache[c];if(d)for(var e=d.length-1;e>=0;e--){var f=this.getFeature(d[e]);this._map.hasLayer(f)&&this._map.removeLayer(f)}},addLayers:function(a){for(var b=a.length-1;b>=0;b--){var c=this._layers[a[b]];c&&this._map.addLayer(c)}},removeLayers:function(a){for(var b=a.length-1;b>=0;b--){var c=this._layers[a[b]];c&&this._map.removeLayer(c)}},resetStyle:function(a){var b=this._layers[a];return b&&(b.options=b.defaultOptions,this.setFeatureStyle(b.feature.id,this.options.style)),this},setStyle:function(a){return this.eachFeature(function(b){this.setFeatureStyle(b.feature.id,a)},this),this},setFeatureStyle:function(a,b){var c=this._layers[a];"function"==typeof b&&(b=b(c.feature)),c.setStyle&&c.setStyle(b)},bindPopup:function(a,b){this._popup=a;for(var c in this._layers){var d=this._layers[c],e=this._popup(d.feature,d);d.bindPopup(e,b)}return this},unbindPopup:function(){this._popup=!1;for(var a in this._layers)this._layers[a].unbindPopup();return this},eachFeature:function(a,b){for(var c in this._layers)a.call(b,this._layers[c]);return this},getFeature:function(a){return this._layers[a]},_propagateEvent:function(a){a.layer=this._layers[this._leafletIds[a.target._leaflet_id]],a.target=this,this.fire(a.type,a)}}),L.esri.FeatureLayer=L.esri.Layers.FeatureLayer,L.esri.Layers.featureLayer=function(a,b){return new L.esri.Layers.FeatureLayer(a,b)},L.esri.featureLayer=function(a,b){return new L.esri.Layers.FeatureLayer(a,b)};
//! moment.js
//! version : 2.8.2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return yb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){sb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return m(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){pc[a]||(e(b),pc[a]=!0)}function h(a,b){return function(c){return p(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(){}function k(a,b){b!==!1&&F(a),n(this,a),this._d=new Date(+a._d)}function l(a){var b=y(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=sb.localeData(),this._bubble()}function m(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function n(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Hb.length>0)for(c in Hb)d=Hb[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function o(a){return 0>a?Math.ceil(a):Math.floor(a)}function p(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function q(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function r(a,b){var c;return b=K(b,a),a.isBefore(b)?c=q(a,b):(c=q(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function s(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=sb.duration(c,d),t(this,e,a),this}}function t(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&mb(a,"Date",lb(a,"Date")+f*c),g&&kb(a,lb(a,"Month")+g*c),d&&sb.updateOffset(a,f||g)}function u(a){return"[object Array]"===Object.prototype.toString.call(a)}function v(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function w(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&A(a[d])!==A(b[d]))&&g++;return g+f}function x(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=ic[a]||jc[b]||b}return a}function y(a){var b,d,e={};for(d in a)c(a,d)&&(b=x(d),b&&(e[b]=a[d]));return e}function z(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}sb[b]=function(e,f){var g,h,i=sb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=sb().utc().set(d,a);return i.call(sb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function A(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function B(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function C(a,b,c){return gb(sb([a,11,31+b-c]),b,c).week}function D(a){return E(a)?366:365}function E(a){return a%4===0&&a%100!==0||a%400===0}function F(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Ab]<0||a._a[Ab]>11?Ab:a._a[Bb]<1||a._a[Bb]>B(a._a[zb],a._a[Ab])?Bb:a._a[Cb]<0||a._a[Cb]>23?Cb:a._a[Db]<0||a._a[Db]>59?Db:a._a[Eb]<0||a._a[Eb]>59?Eb:a._a[Fb]<0||a._a[Fb]>999?Fb:-1,a._pf._overflowDayOfYear&&(zb>b||b>Bb)&&(b=Bb),a._pf.overflow=b)}function G(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function H(a){return a?a.toLowerCase().replace("_","-"):a}function I(a){for(var b,c,d,e,f=0;f<a.length;){for(e=H(a[f]).split("-"),b=e.length,c=H(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=J(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&w(e,c,!0)>=b-1)break;b--}f++}return null}function J(a){var b=null;if(!Gb[a]&&Ib)try{b=sb.locale(),require("./locale/"+a),sb.locale(b)}catch(c){}return Gb[a]}function K(a,b){return b._isUTC?sb(a).zone(b._offset||0):sb(a).local()}function L(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function M(a){var b,c,d=a.match(Mb);for(b=0,c=d.length;c>b;b++)d[b]=oc[d[b]]?oc[d[b]]:L(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function N(a,b){return a.isValid()?(b=O(b,a.localeData()),kc[b]||(kc[b]=M(b)),kc[b](a)):a.localeData().invalidDate()}function O(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Nb.lastIndex=0;d>=0&&Nb.test(a);)a=a.replace(Nb,c),Nb.lastIndex=0,d-=1;return a}function P(a,b){var c,d=b._strict;switch(a){case"Q":return Yb;case"DDDD":return $b;case"YYYY":case"GGGG":case"gggg":return d?_b:Qb;case"Y":case"G":case"g":return bc;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?ac:Rb;case"S":if(d)return Yb;case"SS":if(d)return Zb;case"SSS":if(d)return $b;case"DDD":return Pb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Tb;case"a":case"A":return b._locale._meridiemParse;case"X":return Wb;case"Z":case"ZZ":return Ub;case"T":return Vb;case"SSSS":return Sb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Zb:Ob;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Ob;case"Do":return Xb;default:return c=new RegExp(Y(X(a.replace("\\","")),"i"))}}function Q(a){a=a||"";var b=a.match(Ub)||[],c=b[b.length-1]||[],d=(c+"").match(gc)||["-",0,0],e=+(60*d[1])+A(d[2]);return"+"===d[0]?-e:e}function R(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Ab]=3*(A(b)-1));break;case"M":case"MM":null!=b&&(e[Ab]=A(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b),null!=d?e[Ab]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Bb]=A(b));break;case"Do":null!=b&&(e[Bb]=A(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=A(b));break;case"YY":e[zb]=sb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[zb]=A(b);break;case"a":case"A":c._isPm=c._locale.isPM(b);break;case"H":case"HH":case"h":case"hh":e[Cb]=A(b);break;case"m":case"mm":e[Db]=A(b);break;case"s":case"ss":e[Eb]=A(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Fb]=A(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=Q(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=A(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=sb.parseTwoDigitYear(b)}}function S(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[zb],gb(sb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[zb],gb(sb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=hb(d,e,f,h,g),a._a[zb]=i.year,a._dayOfYear=i.dayOfYear}function T(a){var c,d,e,f,g=[];if(!a._d){for(e=V(a),a._w&&null==a._a[Bb]&&null==a._a[Ab]&&S(a),a._dayOfYear&&(f=b(a._a[zb],e[zb]),a._dayOfYear>D(f)&&(a._pf._overflowDayOfYear=!0),d=cb(f,0,a._dayOfYear),a._a[Ab]=d.getUTCMonth(),a._a[Bb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];a._d=(a._useUTC?cb:bb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm)}}function U(a){var b;a._d||(b=y(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],T(a))}function V(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function W(a){if(a._f===sb.ISO_8601)return void $(a);a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=""+a._i,h=g.length,i=0;for(d=O(a._f,a._locale).match(Mb)||[],b=0;b<d.length;b++)e=d[b],c=(g.match(P(e,a))||[])[0],c&&(f=g.substr(0,g.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),g=g.slice(g.indexOf(c)+c.length),i+=c.length),oc[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),R(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=h-i,g.length>0&&a._pf.unusedInput.push(g),a._isPm&&a._a[Cb]<12&&(a._a[Cb]+=12),a._isPm===!1&&12===a._a[Cb]&&(a._a[Cb]=0),T(a),F(a)}function X(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function Y(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Z(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=n({},a),b._pf=d(),b._f=a._f[f],W(b),G(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));m(a,c||b)}function $(a){var b,c,d=a._i,e=cc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=ec.length;c>b;b++)if(ec[b][1].exec(d)){a._f=ec[b][0]+(e[6]||" ");break}for(b=0,c=fc.length;c>b;b++)if(fc[b][1].exec(d)){a._f+=fc[b][0];break}d.match(Ub)&&(a._f+="Z"),W(a)}else a._isValid=!1}function _(a){$(a),a._isValid===!1&&(delete a._isValid,sb.createFromInputFallback(a))}function ab(b){var c,d=b._i;d===a?b._d=new Date:v(d)?b._d=new Date(+d):null!==(c=Jb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?_(b):u(d)?(b._a=d.slice(0),T(b)):"object"==typeof d?U(b):"number"==typeof d?b._d=new Date(d):sb.createFromInputFallback(b)}function bb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function cb(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function db(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function eb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function fb(a,b,c){var d=sb.duration(a).abs(),e=xb(d.as("s")),f=xb(d.as("m")),g=xb(d.as("h")),h=xb(d.as("d")),i=xb(d.as("M")),j=xb(d.as("y")),k=e<lc.s&&["s",e]||1===f&&["m"]||f<lc.m&&["mm",f]||1===g&&["h"]||g<lc.h&&["hh",g]||1===h&&["d"]||h<lc.d&&["dd",h]||1===i&&["M"]||i<lc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,eb.apply({},k)}function gb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=sb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function hb(a,b,c,d,e){var f,g,h=cb(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:D(a-1)+g}}function ib(b){var c=b._i,d=b._f;return b._locale=b._locale||sb.localeData(b._l),null===c||d===a&&""===c?sb.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=b._locale.preparse(c)),sb.isMoment(c)?new k(c,!0):(d?u(d)?Z(b):W(b):ab(b),new k(b)))}function jb(a,b){var c,d;if(1===b.length&&u(b[0])&&(b=b[0]),!b.length)return sb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function kb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),B(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function lb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function mb(a,b,c){return"Month"===b?kb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function nb(a,b){return function(c){return null!=c?(mb(this,a,c),sb.updateOffset(this,b),this):lb(this,a)}}function ob(a){return 400*a/146097}function pb(a){return 146097*a/400}function qb(a){sb.duration.fn[a]=function(){return this._data[a]}}function rb(a){"undefined"==typeof ender&&(tb=wb.moment,wb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",sb):sb)}for(var sb,tb,ub,vb="2.8.2",wb="undefined"!=typeof global?global:this,xb=Math.round,yb=Object.prototype.hasOwnProperty,zb=0,Ab=1,Bb=2,Cb=3,Db=4,Eb=5,Fb=6,Gb={},Hb=[],Ib="undefined"!=typeof module&&module.exports,Jb=/^\/?Date\((\-?\d+)/i,Kb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Lb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Mb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Nb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Ob=/\d\d?/,Pb=/\d{1,3}/,Qb=/\d{1,4}/,Rb=/[+\-]?\d{1,6}/,Sb=/\d+/,Tb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Ub=/Z|[\+\-]\d\d:?\d\d/gi,Vb=/T/i,Wb=/[\+\-]?\d+(\.\d{1,3})?/,Xb=/\d{1,2}/,Yb=/\d/,Zb=/\d\d/,$b=/\d{3}/,_b=/\d{4}/,ac=/[+-]?\d{6}/,bc=/[+-]?\d+/,cc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,dc="YYYY-MM-DDTHH:mm:ssZ",ec=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],fc=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],gc=/([\+\-]|\d\d)/gi,hc=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),ic={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},jc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},kc={},lc={s:45,m:45,h:22,d:26,M:11},mc="DDD w W M D d".split(" "),nc="M D H h m s w W".split(" "),oc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+p(Math.abs(a),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return A(this.milliseconds()/100)},SS:function(){return p(A(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+":"+p(A(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+p(A(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},pc={},qc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];mc.length;)ub=mc.pop(),oc[ub+"o"]=i(oc[ub],ub);for(;nc.length;)ub=nc.pop(),oc[ub+ub]=h(oc[ub],2);oc.DDDD=h(oc.DDD,3),m(j.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=sb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=sb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return gb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),sb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),ib(g)},sb.suppressDeprecationWarnings=!1,sb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),sb.min=function(){var a=[].slice.call(arguments,0);return jb("isBefore",a)},sb.max=function(){var a=[].slice.call(arguments,0);return jb("isAfter",a)},sb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),ib(g).utc()},sb.unix=function(a){return sb(1e3*a)},sb.duration=function(a,b){var d,e,f,g,h=a,i=null;return sb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Kb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:A(i[Bb])*d,h:A(i[Cb])*d,m:A(i[Db])*d,s:A(i[Eb])*d,ms:A(i[Fb])*d}):(i=Lb.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):"object"==typeof h&&("from"in h||"to"in h)&&(g=r(sb(h.from),sb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new l(h),sb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},sb.version=vb,sb.defaultFormat=dc,sb.ISO_8601=function(){},sb.momentProperties=Hb,sb.updateOffset=function(){},sb.relativeTimeThreshold=function(b,c){return lc[b]===a?!1:c===a?lc[b]:(lc[b]=c,!0)},sb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return sb.locale(a,b)}),sb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?sb.defineLocale(a,b):sb.localeData(a),c&&(sb.duration._locale=sb._locale=c)),sb._locale._abbr},sb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Gb[a]||(Gb[a]=new j),Gb[a].set(b),sb.locale(a),Gb[a]):(delete Gb[a],null)},sb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return sb.localeData(a)}),sb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return sb._locale;if(!u(a)){if(b=J(a))return b;a=[a]}return I(a)},sb.isMoment=function(a){return a instanceof k||null!=a&&c(a,"_isAMomentObject")},sb.isDuration=function(a){return a instanceof l};for(ub=qc.length-1;ub>=0;--ub)z(qc[ub]);sb.normalizeUnits=function(a){return x(a)},sb.invalid=function(a){var b=sb.utc(0/0);return null!=a?m(b._pf,a):b._pf.userInvalidated=!0,b},sb.parseZone=function(){return sb.apply(null,arguments).parseZone()},sb.parseTwoDigitYear=function(a){return A(a)+(A(a)>68?1900:2e3)},m(sb.fn=k.prototype,{clone:function(){return sb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=sb(this).utc();return 0<a.year()&&a.year()<=9999?N(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):N(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&w(this._a,(this._isUTC?sb.utc(this._a):sb(this._a)).toArray())>0:!1},parsingFlags:function(){return m({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.zone(0,a)},local:function(a){return this._isUTC&&(this.zone(0,a),this._isUTC=!1,a&&this.add(this._d.getTimezoneOffset(),"m")),this},format:function(a){var b=N(this,a||sb.defaultFormat);return this.localeData().postformat(b)},add:s(1,"add"),subtract:s(-1,"subtract"),diff:function(a,b,c){var d,e,f=K(a,this),g=6e4*(this.zone()-f.zone());return b=x(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-sb(this).startOf("month")-(f-sb(f).startOf("month")))/d,e-=6e4*(this.zone()-sb(this).startOf("month").zone()-(f.zone()-sb(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:o(e)},from:function(a,b){return sb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(sb(),a)},calendar:function(a){var b=a||sb(),c=K(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this))},isLeapYear:function(){return E(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=db(a,this.localeData()),this.add(a-b,"d")):b},month:nb("Month",!0),startOf:function(a){switch(a=x(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=x(a),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+sb(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+sb(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+K(a,this).startOf(b)},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=sb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=sb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c,d=this._offset||0;return null==a?this._isUTC?d:this._d.getTimezoneOffset():("string"==typeof a&&(a=Q(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._d.getTimezoneOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.subtract(c,"m"),d!==a&&(!b||this._changeInProgress?t(this,sb.duration(d-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,sb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?sb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return B(this.year(),this.month())},dayOfYear:function(a){var b=xb((sb(this).startOf("day")-sb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=gb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=gb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=gb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return C(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return C(this.year(),a.dow,a.doy)},get:function(a){return a=x(a),this[a]()},set:function(a,b){return a=x(a),"function"==typeof this[a]&&this[a](b),this},locale:function(b){return b===a?this._locale._abbr:(this._locale=sb.localeData(b),this)},lang:f("moment().lang() is deprecated. Use moment().localeData() instead.",function(b){return b===a?this.localeData():(this._locale=sb.localeData(b),this)}),localeData:function(){return this._locale}}),sb.fn.millisecond=sb.fn.milliseconds=nb("Milliseconds",!1),sb.fn.second=sb.fn.seconds=nb("Seconds",!1),sb.fn.minute=sb.fn.minutes=nb("Minutes",!1),sb.fn.hour=sb.fn.hours=nb("Hours",!0),sb.fn.date=nb("Date",!0),sb.fn.dates=f("dates accessor is deprecated. Use date instead.",nb("Date",!0)),sb.fn.year=nb("FullYear",!0),sb.fn.years=f("years accessor is deprecated. Use year instead.",nb("FullYear",!0)),sb.fn.days=sb.fn.day,sb.fn.months=sb.fn.month,sb.fn.weeks=sb.fn.week,sb.fn.isoWeeks=sb.fn.isoWeek,sb.fn.quarters=sb.fn.quarter,sb.fn.toJSON=sb.fn.toISOString,m(sb.duration.fn=l.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=o(d/1e3),g.seconds=a%60,b=o(a/60),g.minutes=b%60,c=o(b/60),g.hours=c%24,e+=o(c/24),h=o(ob(e)),e-=o(pb(h)),f+=o(e/30),e%=30,h+=o(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*A(this._months/12)},humanize:function(a){var b=fb(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=sb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=sb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=x(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=x(a),b=this._days+this._milliseconds/864e5,"month"===a||"year"===a)return c=this._months+12*ob(b),"month"===a?c:c/12;switch(b+=pb(this._months/12),a){case"week":return b/7;case"day":return b;case"hour":return 24*b;case"minute":return 24*b*60;case"second":return 24*b*60*60;case"millisecond":return 24*b*60*60*1e3;default:throw new Error("Unknown unit "+a)}},lang:sb.fn.lang,locale:sb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale}}),sb.duration.fn.toString=sb.duration.fn.toISOString;for(ub in hc)c(hc,ub)&&qb(ub.toLowerCase());sb.duration.fn.asMilliseconds=function(){return this.as("ms")},sb.duration.fn.asSeconds=function(){return this.as("s")},sb.duration.fn.asMinutes=function(){return this.as("m")},sb.duration.fn.asHours=function(){return this.as("h")},sb.duration.fn.asDays=function(){return this.as("d")},sb.duration.fn.asWeeks=function(){return this.as("weeks")},sb.duration.fn.asMonths=function(){return this.as("M")},sb.duration.fn.asYears=function(){return this.as("y")},sb.locale("en",{ordinal:function(a){var b=a%10,c=1===A(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Ib?module.exports=sb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(wb.moment=tb),sb}),rb(!0)):rb()}).call(this);
  //! moment-timezone.js
//! version : 0.2.1
//! author : Tim Wood
//! license : MIT
//! github.com/moment/moment-timezone
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["moment"],b):"object"==typeof exports?module.exports=b(require("moment")):b(a.moment)}(this,function(a){"use strict";function b(a){return a>96?a-87:a>64?a-29:a-48}function c(a){var c,d=0,e=a.split("."),f=e[0],g=e[1]||"",h=1,i=0,j=1;for(45===a.charCodeAt(0)&&(d=1,j=-1),d;d<f.length;d++)c=b(f.charCodeAt(d)),i=60*i+c;for(d=0;d<g.length;d++)h/=60,c=b(g.charCodeAt(d)),i+=c*h;return i*j}function d(a){for(var b=0;b<a.length;b++)a[b]=c(a[b])}function e(a,b){for(var c=0;b>c;c++)a[c]=Math.round((a[c-1]||0)+6e4*a[c]);a[b-1]=1/0}function f(a,b){var c,d=[];for(c=0;c<b.length;c++)d[c]=a[b[c]];return d}function g(a){var b=a.split("|"),c=b[2].split(" "),g=b[3].split(""),h=b[4].split(" ");return d(c),d(g),d(h),e(h,g.length),{name:b[0],abbrs:f(b[1].split(" "),g),offsets:f(c,g),untils:h}}function h(a){a&&this._set(g(a))}function i(a){return(a||"").toLowerCase().replace(/\//g,"_")}function j(a){var b,c,d;for("string"==typeof a&&(a=[a]),b=0;b<a.length;b++)c=new h(a[b]),d=i(c.name),y[d]=c,n(d)}function k(a){return y[i(a)]||null}function l(){var a,b=[];for(a in y)y.hasOwnProperty(a)&&y[a]&&b.push(y[a].name);return b.sort()}function m(a){var b,c;for("string"==typeof a&&(a=[a]),b=0;b<a.length;b++)c=a[b].split("|"),p(c[0],c[1]),p(c[1],c[0])}function n(a){if(z[a]){var b,c=y[a],d=z[a];for(b=0;b<d.length;b++)o(c,d[b]);z[a]=null}}function o(a,b){var c=y[i(b)]=new h;c._set(a),c.name=b}function p(a,b){a=i(a),y[a]?o(y[a],b):(z[a]=z[a]||[],z[a].push(b))}function q(a){j(a.zones),m(a.links),u.dataVersion=a.version}function r(a){return r.didShowError||(r.didShowError=!0,"undefined"!=typeof console&&"function"==typeof console.error&&console.error("moment.tz.zoneExists('"+a+"') has been deprecated in favor of !moment.tz.zone('"+a+"')")),!!k(a)}function s(a){return!(!a._a||void 0!==a._tzm)}function t(a){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(a)}function u(){var b=Array.prototype.slice.call(arguments,0,-1),c=arguments[arguments.length-1],d=k(c),e=a.utc.apply(null,b);return d&&s(e)&&e.add(d.parse(e),"minutes"),e.tz(c),e}function v(a){return function(){return this._z?this._z.abbr(this):a.call(this)}}function w(a){return function(){return this._z=null,a.apply(this,arguments)}}if(void 0!==a.tz)return a;var x="0.2.1",y={},z={};h.prototype={_set:function(a){this.name=a.name,this.abbrs=a.abbrs,this.untils=a.untils,this.offsets=a.offsets},_index:function(a){var b,c=+a,d=this.untils;for(b=0;b<d.length;b++)if(c<d[b])return b},parse:function(a){var b,c,d,e,f=+a,g=this.offsets,h=this.untils,i=h.length-1;for(e=0;i>e;e++)if(b=g[e],c=g[e+1],d=g[e?e-1:e],c>b&&u.moveAmbiguousForward?b=c:b>d&&u.moveInvalidForward&&(b=d),f<h[e]-6e4*b)return g[e];return g[i]},abbr:function(a){return this.abbrs[this._index(a)]},offset:function(a){return this.offsets[this._index(a)]}},u.version=x,u.dataVersion="",u._zones=y,u._links=z,u.add=j,u.link=m,u.load=q,u.zone=k,u.zoneExists=r,u.names=l,u.Zone=h,u.unpack=g,u.unpackBase60=c,u.needsOffset=s,u.moveInvalidForward=!0,u.moveAmbiguousForward=!1;var A=a.fn;a.tz=u,a.updateOffset=function(a,b){var c;a._z&&(c=a._z.offset(a),Math.abs(c)<16&&(c/=60),a.zone(c,b))},A.tz=function(b){return b?(this._z=k(b),this._z?a.updateOffset(this):t("Moment Timezone has no data for "+b+". See http://momentjs.com/timezone/docs/#/data-loading/."),this):this._z?this._z.name:void 0},A.zoneName=v(A.zoneName),A.zoneAbbr=v(A.zoneAbbr),A.utc=w(A.utc);var B=a.momentProperties;return"[object Array]"===Object.prototype.toString.call(B)?(B.push("_z"),B.push("_a")):B._z=null,a});
/*global PushStream WebSocketWrapper EventSourceWrapper EventSource*/
/*jshint evil: true, plusplus: false, regexp: false */
/**
The MIT License (MIT)

Copyright (c) 2010-2014 Wandenberg Peixoto <wandenberg@gmail.com>, Rogério Carvalho Schneider <stockrt@gmail.com>

This file is part of Nginx Push Stream Module.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

pushstream.js

Created: Nov 01, 2011
Authors: Wandenberg Peixoto <wandenberg@gmail.com>, Rogério Carvalho Schneider <stockrt@gmail.com>
 */
(function (window, document, undefined) {
  "use strict";

  /* prevent duplicate declaration */
  if (window.PushStream) { return; }

  var Utils = {};

  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var valueToTwoDigits = function (value) {
    return ((value < 10) ? '0' : '') + value;
  };

  Utils.dateToUTCString = function (date) {
    var time = valueToTwoDigits(date.getUTCHours()) + ':' + valueToTwoDigits(date.getUTCMinutes()) + ':' + valueToTwoDigits(date.getUTCSeconds());
    return days[date.getUTCDay()] + ', ' + valueToTwoDigits(date.getUTCDate()) + ' ' + months[date.getUTCMonth()] + ' ' + date.getUTCFullYear() + ' ' + time + ' GMT';
  };

  var extend = function () {
    var object = arguments[0] || {};
    for (var i = 0; i < arguments.length; i++) {
      var settings = arguments[i];
      for (var attr in settings) {
        if (!settings.hasOwnProperty || settings.hasOwnProperty(attr)) {
          object[attr] = settings[attr];
        }
      }
    }
    return object;
  };

  var validChars  = /^[\],:{}\s]*$/,
      validEscape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
      validTokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      validBraces = /(?:^|:|,)(?:\s*\[)+/g;

  var trim = function(value) {
    return value.replace(/^\s*/, "").replace(/\s*$/, "");
  };

  Utils.parseJSON = function(data) {
    if (!data || !isString(data)) {
      return null;
    }

    // Make sure leading/trailing whitespace is removed (IE can't handle it)
    data = trim(data);

    // Attempt to parse using the native JSON parser first
    if (window.JSON && window.JSON.parse) {
      try {
        return window.JSON.parse( data );
      } catch(e) {
        throw "Invalid JSON: " + data;
      }
    }

    // Make sure the incoming data is actual JSON
    // Logic borrowed from http://json.org/json2.js
    if (validChars.test(data.replace(validEscape, "@").replace( validTokens, "]").replace( validBraces, "")) ) {
      return (new Function("return " + data))();
    }

    throw "Invalid JSON: " + data;
  };

  var getControlParams = function(pushstream) {
    var data = {};
    data[pushstream.tagArgument] = "";
    data[pushstream.timeArgument] = "";
    data[pushstream.eventIdArgument] = "";
    if (pushstream.messagesControlByArgument) {
      data[pushstream.tagArgument] = Number(pushstream._etag);
      if (pushstream._lastModified) {
        data[pushstream.timeArgument] = pushstream._lastModified;
      } else if (pushstream._lastEventId) {
        data[pushstream.eventIdArgument] = pushstream._lastEventId;
      }
    }
    return data;
  };

  var getTime = function() {
    return (new Date()).getTime();
  };

  var currentTimestampParam = function() {
    return { "_" : getTime() };
  };

  var objectToUrlParams = function(settings) {
    var params = settings;
    if (typeof(settings) === 'object') {
      params = '';
      for (var attr in settings) {
        if (!settings.hasOwnProperty || settings.hasOwnProperty(attr)) {
          params += '&' + attr + '=' + window.escape(settings[attr]);
        }
      }
      params = params.substring(1);
    }

    return params || '';
  };

  var addParamsToUrl = function(url, params) {
    return url + ((url.indexOf('?') < 0) ? '?' : '&') + objectToUrlParams(params);
  };

  var isArray = Array.isArray || function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  var isString = function(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
  };

  var isDate = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
  };

  var Log4js = {
    logger: null,
    debug : function() { if  (PushStream.LOG_LEVEL === 'debug')                                         { Log4js._log.apply(Log4js._log, arguments); }},
    info  : function() { if ((PushStream.LOG_LEVEL === 'info')  || (PushStream.LOG_LEVEL === 'debug'))  { Log4js._log.apply(Log4js._log, arguments); }},
    error : function() {                                                                                  Log4js._log.apply(Log4js._log, arguments); },
    _initLogger : function() {
      var console = window.console;
      if (console && console.log) {
        if (console.log.apply) {
          Log4js.logger = console.log;
        } else if ((typeof console.log === "object") && Function.prototype.bind) {
          Log4js.logger = Function.prototype.bind.call(console.log, console);
        } else if ((typeof console.log === "object") && Function.prototype.call) {
          Log4js.logger = function() {
            Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments));
          };
        }
      }
    },
    _log  : function() {
      if (!Log4js.logger) {
        Log4js._initLogger();
      }

      if (Log4js.logger) {
        try {
          Log4js.logger.apply(window.console, arguments);
        } catch(e) {
          Log4js._initLogger();
          if (Log4js.logger) {
            Log4js.logger.apply(window.console, arguments);
          }
        }
      }

      var logElement = document.getElementById(PushStream.LOG_OUTPUT_ELEMENT_ID);
      if (logElement) {
        var str = '';
        for (var i = 0; i < arguments.length; i++) {
          str += arguments[i] + " ";
        }
        logElement.innerHTML += str + '\n';

        var lines = logElement.innerHTML.split('\n');
        if (lines.length > 100) {
          logElement.innerHTML = lines.slice(-100).join('\n');
        }
      }
    }
  };

  var Ajax = {
    _getXHRObject : function(crossDomain) {
      var xhr = false;
      if (crossDomain) {
        try { xhr = new window.XDomainRequest(); } catch (e) { }
        if (xhr) {
          return xhr;
        }
      }

      try { xhr = new window.XMLHttpRequest(); }
      catch (e1) {
        try { xhr = new window.ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e2) {
          try { xhr = new window.ActiveXObject("Microsoft.XMLHTTP"); }
          catch (e3) {
            xhr = false;
          }
        }
      }
      return xhr;
    },

    _send : function(settings, post) {
      settings = settings || {};
      settings.timeout = settings.timeout || 30000;
      var xhr = Ajax._getXHRObject(settings.crossDomain);
      if (!xhr||!settings.url) { return; }

      Ajax.clear(settings);

      settings.xhr = xhr;

      if (window.XDomainRequest && (xhr instanceof window.XDomainRequest)) {
        xhr.onload = function () {
          if (settings.afterReceive) { settings.afterReceive(xhr); }
          if (settings.success) { settings.success(xhr.responseText); }
        };

        xhr.onerror = xhr.ontimeout = function () {
          if (settings.afterReceive) { settings.afterReceive(xhr); }
          if (settings.error) { settings.error(xhr.status); }
        };
      } else {
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            Ajax.clear(settings);
            if (settings.afterReceive) { settings.afterReceive(xhr); }
            if(xhr.status === 200) {
              if (settings.success) { settings.success(xhr.responseText); }
            } else {
              if (settings.error) { settings.error(xhr.status); }
            }
          }
        };
      }

      if (settings.beforeOpen) { settings.beforeOpen(xhr); }

      var params = {};
      var body = null;
      var method = "GET";
      if (post) {
        body = objectToUrlParams(settings.data);
        method = "POST";
      } else {
        params = settings.data || {};
      }

      xhr.open(method, addParamsToUrl(settings.url, extend({}, params, currentTimestampParam())), true);

      if (settings.beforeSend) { settings.beforeSend(xhr); }

      var onerror = function() {
        Ajax.clear(settings);
        try { xhr.abort(); } catch (e) { /* ignore error on closing */ }
        settings.error(304);
      };

      if (post) {
        if (xhr.setRequestHeader) {
          xhr.setRequestHeader("Accept", "application/json");
          xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
      } else {
        settings.timeoutId = window.setTimeout(onerror, settings.timeout + 2000);
      }

      xhr.send(body);
      return xhr;
    },

    _clear_xhr : function(xhr) {
      if (xhr) {
        xhr.onreadystatechange = null;
      }
    },

    _clear_script : function(script) {
      // Handling memory leak in IE, removing and dereference the script
      if (script) {
        script.onerror = script.onload = script.onreadystatechange = null;
        if (script.parentNode) { script.parentNode.removeChild(script); }
      }
    },

    _clear_timeout : function(settings) {
      settings.timeoutId = clearTimer(settings.timeoutId);
    },

    _clear_jsonp : function(settings) {
      var callbackFunctionName = settings.data.callback;
      if (callbackFunctionName) {
        window[callbackFunctionName] = function() { window[callbackFunctionName] = null; };
      }
    },

    clear : function(settings) {
      Ajax._clear_timeout(settings);
      Ajax._clear_jsonp(settings);
      Ajax._clear_script(document.getElementById(settings.scriptId));
      Ajax._clear_xhr(settings.xhr);
    },

    jsonp : function(settings) {
      settings.timeout = settings.timeout || 30000;
      Ajax.clear(settings);

      var head = document.head || document.getElementsByTagName("head")[0];
      var script = document.createElement("script");
      var startTime = getTime();

      var onerror = function() {
        Ajax.clear(settings);
        var endTime = getTime();
        settings.error(((endTime - startTime) > settings.timeout/2) ? 304 : 403);
      };

      var onload = function() {
        Ajax.clear(settings);
        settings.load();
      };

      var onsuccess = function() {
        settings.afterSuccess = true;
        settings.success.apply(null, arguments);
      };

      script.onerror = onerror;
      script.onload = script.onreadystatechange = function(eventLoad) {
        if (!script.readyState || /loaded|complete/.test(script.readyState)) {
          if (settings.afterSuccess) {
            onload();
          } else {
            onerror();
          }
        }
      };

      if (settings.beforeOpen) { settings.beforeOpen({}); }
      if (settings.beforeSend) { settings.beforeSend({}); }

      settings.timeoutId = window.setTimeout(onerror, settings.timeout + 2000);
      settings.scriptId = settings.scriptId || getTime();
      settings.afterSuccess = null;

      settings.data.callback = settings.scriptId + "_onmessage_" + getTime();
      window[settings.data.callback] = onsuccess;

      script.setAttribute("src", addParamsToUrl(settings.url, extend({}, settings.data, currentTimestampParam())));
      script.setAttribute("async", "async");
      script.setAttribute("id", settings.scriptId);

      // Use insertBefore instead of appendChild to circumvent an IE6 bug.
      head.insertBefore(script, head.firstChild);
      return settings;
    },

    load : function(settings) {
      return Ajax._send(settings, false);
    },

    post : function(settings) {
      return Ajax._send(settings, true);
    }
  };

  var escapeText = function(text) {
    return (text) ? window.escape(text) : '';
  };

  var unescapeText = function(text) {
    return (text) ? window.unescape(text) : '';
  };

  Utils.parseMessage = function(messageText, keys) {
    var msg = messageText;
    if (isString(messageText)) {
      msg = Utils.parseJSON(messageText);
    }

    var message = {
        id     : msg[keys.jsonIdKey],
        channel: msg[keys.jsonChannelKey],
        text   : isString(msg[keys.jsonTextKey]) ? unescapeText(msg[keys.jsonTextKey]) : msg[keys.jsonTextKey],
        tag    : msg[keys.jsonTagKey],
        time   : msg[keys.jsonTimeKey],
        eventid: msg[keys.jsonEventIdKey] || ""
    };

    return message;
  };

  var getBacktrack = function(options) {
    return (options.backtrack) ? ".b" + Number(options.backtrack) : "";
  };

  var getChannelsPath = function(channels, withBacktrack) {
    var path = '';
    for (var channelName in channels) {
      if (!channels.hasOwnProperty || channels.hasOwnProperty(channelName)) {
        path += "/" + channelName + (withBacktrack ? getBacktrack(channels[channelName]) : "");
      }
    }
    return path;
  };

  var getSubscriberUrl = function(pushstream, prefix, extraParams, withBacktrack) {
    var websocket = pushstream.wrapper.type === WebSocketWrapper.TYPE;
    var useSSL = pushstream.useSSL;
    var port = normalizePort(useSSL, pushstream.port);
    var url = (websocket) ? ((useSSL) ? "wss://" : "ws://") : ((useSSL) ? "https://" : "http://");
    url += pushstream.host;
    url += (port ? (":" + port) : "");
    url += prefix;

    var channels = getChannelsPath(pushstream.channels, withBacktrack);
    if (pushstream.channelsByArgument) {
      var channelParam = {};
      channelParam[pushstream.channelsArgument] = channels.substring(1);
      extraParams = extend({}, extraParams, channelParam);
    } else {
      url += channels;
    }
    return addParamsToUrl(url, extraParams);
  };

  var getPublisherUrl = function(pushstream) {
    var port = normalizePort(pushstream.useSSL, pushstream.port);
    var url = (pushstream.useSSL) ? "https://" : "http://";
    url += pushstream.host;
    url += (port ? (":" + port) : "");
    url += pushstream.urlPrefixPublisher;
    url += "?id=" + getChannelsPath(pushstream.channels, false);

    return url;
  };

  Utils.extract_xss_domain = function(domain) {
    // if domain is an ip address return it, else return ate least the last two parts of it
    if (domain.match(/^(\d{1,3}\.){3}\d{1,3}$/)) {
      return domain;
    }

    var domainParts = domain.split('.');
    // if the domain ends with 3 chars or 2 chars preceded by more than 4 chars,
    // we can keep only 2 parts, else we have to keep at least 3 (or all domain name)
    var keepNumber = Math.max(domainParts.length - 1, (domain.match(/(\w{4,}\.\w{2}|\.\w{3,})$/) ? 2 : 3));

    return domainParts.slice(-1 * keepNumber).join('.');
  };

  var normalizePort = function (useSSL, port) {
    port = Number(port || (useSSL ? 443 : 80));
    return ((!useSSL && port === 80) || (useSSL && port === 443)) ? "" : port;
  };

  Utils.isCrossDomainUrl = function(url) {
    if (!url) {
      return false;
    }

    var parser = document.createElement('a');
    parser.href = url;

    var srcPort = normalizePort(window.location.protocol === "https:", window.location.port);
    var dstPort = normalizePort(parser.protocol === "https:", parser.port);

    return (window.location.protocol !== parser.protocol) ||
           (window.location.hostname !== parser.hostname) ||
           (srcPort !== dstPort);
  };

  var linker = function(method, instance) {
    return function() {
      return method.apply(instance, arguments);
    };
  };

  var clearTimer = function(timer) {
    if (timer) {
      window.clearTimeout(timer);
    }
    return null;
  };

  /* common callbacks */
  var onmessageCallback = function(event) {
    Log4js.info("[" + this.type + "] message received", arguments);
    var message = Utils.parseMessage(event.data, this.pushstream);
    if (message.tag) { this.pushstream._etag = message.tag; }
    if (message.time) { this.pushstream._lastModified = message.time; }
    if (message.eventid) { this.pushstream._lastEventId = message.eventid; }
    this.pushstream._onmessage(message.text, message.id, message.channel, message.eventid, true);
  };

  var onopenCallback = function() {
    this.pushstream._onopen();
    Log4js.info("[" + this.type + "] connection opened");
  };

  var onerrorCallback = function(event) {
    Log4js.info("[" + this.type + "] error (disconnected by server):", event);
    if ((this.pushstream.readyState === PushStream.OPEN) &&
        (this.type === EventSourceWrapper.TYPE) &&
        (event.type === 'error') &&
        (this.connection.readyState === window.EventSource.CONNECTING)) {
      // EventSource already has a reconnection function using the last-event-id header
      return;
    }
    this._closeCurrentConnection();
    this.pushstream._onerror({type: ((event && ((event.type === "load") || (event.type === "close"))) || (this.pushstream.readyState === PushStream.CONNECTING)) ? "load" : "timeout"});
  };

  /* wrappers */

  var WebSocketWrapper = function(pushstream) {
    if (!window.WebSocket && !window.MozWebSocket) { throw "WebSocket not supported"; }
    this.type = WebSocketWrapper.TYPE;
    this.pushstream = pushstream;
    this.connection = null;
  };

  WebSocketWrapper.TYPE = "WebSocket";

  WebSocketWrapper.prototype = {
    connect: function() {
      this._closeCurrentConnection();
      var params = extend({}, this.pushstream.extraParams(), currentTimestampParam(), getControlParams(this.pushstream));
      var url = getSubscriberUrl(this.pushstream, this.pushstream.urlPrefixWebsocket, params, !this.pushstream._useControlArguments());
      this.connection = (window.WebSocket) ? new window.WebSocket(url) : new window.MozWebSocket(url);
      this.connection.onerror   = linker(onerrorCallback, this);
      this.connection.onclose   = linker(onerrorCallback, this);
      this.connection.onopen    = linker(onopenCallback, this);
      this.connection.onmessage = linker(onmessageCallback, this);
      Log4js.info("[WebSocket] connecting to:", url);
    },

    disconnect: function() {
      if (this.connection) {
        Log4js.debug("[WebSocket] closing connection to:", this.connection.url);
        this.connection.onclose = null;
        this._closeCurrentConnection();
        this.pushstream._onclose();
      }
    },

    _closeCurrentConnection: function() {
      if (this.connection) {
        try { this.connection.close(); } catch (e) { /* ignore error on closing */ }
        this.connection = null;
      }
    },

    sendMessage: function(message) {
      if (this.connection) { this.connection.send(message); }
    }
  };

  var EventSourceWrapper = function(pushstream) {
    if (!window.EventSource) { throw "EventSource not supported"; }
    this.type = EventSourceWrapper.TYPE;
    this.pushstream = pushstream;
    this.connection = null;
  };

  EventSourceWrapper.TYPE = "EventSource";

  EventSourceWrapper.prototype = {
    connect: function() {
      this._closeCurrentConnection();
      var params = extend({}, this.pushstream.extraParams(), currentTimestampParam(), getControlParams(this.pushstream));
      var url = getSubscriberUrl(this.pushstream, this.pushstream.urlPrefixEventsource, params, !this.pushstream._useControlArguments());
      this.connection = new window.EventSource(url);
      this.connection.onerror   = linker(onerrorCallback, this);
      this.connection.onopen    = linker(onopenCallback, this);
      this.connection.onmessage = linker(onmessageCallback, this);
      Log4js.info("[EventSource] connecting to:", url);
    },

    disconnect: function() {
      if (this.connection) {
        Log4js.debug("[EventSource] closing connection to:", this.connection.url);
        this.connection.onclose = null;
        this._closeCurrentConnection();
        this.pushstream._onclose();
      }
    },

    _closeCurrentConnection: function() {
      if (this.connection) {
        try { this.connection.close(); } catch (e) { /* ignore error on closing */ }
        this.connection = null;
      }
    }
  };

  var StreamWrapper = function(pushstream) {
    this.type = StreamWrapper.TYPE;
    this.pushstream = pushstream;
    this.connection = null;
    this.url = null;
    this.frameloadtimer = null;
    this.pingtimer = null;
    this.iframeId = "PushStreamManager_" + pushstream.id;
  };

  StreamWrapper.TYPE = "Stream";

  StreamWrapper.prototype = {
    connect: function() {
      this._closeCurrentConnection();
      var domain = Utils.extract_xss_domain(this.pushstream.host);
      try {
        document.domain = domain;
      } catch(e) {
        Log4js.error("[Stream] (warning) problem setting document.domain = " + domain + " (OBS: IE8 does not support set IP numbers as domain)");
      }
      var params = extend({}, this.pushstream.extraParams(), currentTimestampParam(), {"streamid": this.pushstream.id}, getControlParams(this.pushstream));
      this.url = getSubscriberUrl(this.pushstream, this.pushstream.urlPrefixStream, params, !this.pushstream._useControlArguments());
      Log4js.debug("[Stream] connecting to:", this.url);
      this.loadFrame(this.url);
    },

    disconnect: function() {
      if (this.connection) {
        Log4js.debug("[Stream] closing connection to:", this.url);
        this._closeCurrentConnection();
        this.pushstream._onclose();
      }
    },

    _clear_iframe: function() {
      var oldIframe = document.getElementById(this.iframeId);
      if (oldIframe) {
        oldIframe.onload = null;
        oldIframe.src = "about:blank";
        if (oldIframe.parentNode) { oldIframe.parentNode.removeChild(oldIframe); }
      }
    },

    _closeCurrentConnection: function() {
      this._clear_iframe();
      if (this.connection) {
        this.pingtimer = clearTimer(this.pingtimer);
        this.frameloadtimer = clearTimer(this.frameloadtimer);
        this.connection = null;
        this.transferDoc = null;
        if (typeof window.CollectGarbage === 'function') { window.CollectGarbage(); }
      }
    },

    loadFrame: function(url) {
      this._clear_iframe();

      var ifr = null;
      if ("ActiveXObject" in window) {
        var transferDoc = new window.ActiveXObject("htmlfile");
        transferDoc.open();
        transferDoc.write("<html><script>document.domain='" + document.domain + "';</script><body><iframe id='" + this.iframeId + "' src='" + url + "'></iframe></body></html>");
        transferDoc.parentWindow.PushStream = PushStream;
        transferDoc.close();
        ifr = transferDoc.getElementById(this.iframeId);
        this.transferDoc = transferDoc;
      } else {
        ifr = document.createElement("IFRAME");
        ifr.style.width = "1px";
        ifr.style.height = "1px";
        ifr.style.border = "none";
        ifr.style.position = "absolute";
        ifr.style.top = "-10px";
        ifr.style.marginTop = "-10px";
        ifr.style.zIndex = "-20";
        ifr.PushStream = PushStream;
        document.body.appendChild(ifr);
        ifr.setAttribute("src", url);
        ifr.setAttribute("id", this.iframeId);
      }

      ifr.onload = linker(onerrorCallback, this);
      this.connection = ifr;
      this.frameloadtimer = window.setTimeout(linker(onerrorCallback, this), this.pushstream.timeout);
    },

    register: function(iframeWindow) {
      this.frameloadtimer = clearTimer(this.frameloadtimer);
      iframeWindow.p = linker(this.process, this);
      this.connection.onload = linker(this._onframeloaded, this);
      this.pushstream._onopen();
      this.setPingTimer();
      Log4js.info("[Stream] frame registered");
    },

    process: function(id, channel, text, eventid, time, tag) {
      this.pingtimer = clearTimer(this.pingtimer);
      Log4js.info("[Stream] message received", arguments);
      if (id !== -1) {
        if (tag) { this.pushstream._etag = tag; }
        if (time) { this.pushstream._lastModified = time; }
        if (eventid) { this.pushstream._lastEventId = eventid; }
      }
      this.pushstream._onmessage(unescapeText(text), id, channel, eventid || "", true);
      this.setPingTimer();
    },

    _onframeloaded: function() {
      Log4js.info("[Stream] frame loaded (disconnected by server)");
      this.connection.onload = null;
      this.disconnect();
    },

    setPingTimer: function() {
      if (this.pingtimer) { clearTimer(this.pingtimer); }
      this.pingtimer = window.setTimeout(linker(onerrorCallback, this), this.pushstream.pingtimeout);
    }
  };

  var LongPollingWrapper = function(pushstream) {
    this.type = LongPollingWrapper.TYPE;
    this.pushstream = pushstream;
    this.connection = null;
    this.opentimer = null;
    this.messagesQueue = [];
    this._linkedInternalListen = linker(this._internalListen, this);
    this.xhrSettings = {
        timeout: this.pushstream.timeout,
        data: {},
        url: null,
        success: linker(this.onmessage, this),
        error: linker(this.onerror, this),
        load: linker(this.onload, this),
        beforeSend: linker(this.beforeSend, this),
        afterReceive: linker(this.afterReceive, this)
    };
  };

  LongPollingWrapper.TYPE = "LongPolling";

  LongPollingWrapper.prototype = {
    connect: function() {
      this.messagesQueue = [];
      this._closeCurrentConnection();
      this.urlWithBacktrack = getSubscriberUrl(this.pushstream, this.pushstream.urlPrefixLongpolling, {}, true);
      this.urlWithoutBacktrack = getSubscriberUrl(this.pushstream, this.pushstream.urlPrefixLongpolling, {}, false);
      this.xhrSettings.url = this.urlWithBacktrack;
      this.useJSONP = this.pushstream._crossDomain || this.pushstream.useJSONP;
      this.xhrSettings.scriptId = "PushStreamManager_" + this.pushstream.id;
      if (this.useJSONP) {
        this.pushstream.messagesControlByArgument = true;
      }
      this._listen();
      this.opentimer = window.setTimeout(linker(onopenCallback, this), 150);
      Log4js.info("[LongPolling] connecting to:", this.xhrSettings.url);
    },

    _listen: function() {
      if (this._internalListenTimeout) { clearTimer(this._internalListenTimeout); }
      this._internalListenTimeout = window.setTimeout(this._linkedInternalListen, 100);
    },

    _internalListen: function() {
      if (this.pushstream._keepConnected) {
        this.xhrSettings.url = this.pushstream._useControlArguments() ? this.urlWithoutBacktrack : this.urlWithBacktrack;
        this.xhrSettings.data = extend({}, this.pushstream.extraParams(), this.xhrSettings.data, getControlParams(this.pushstream));
        if (this.useJSONP) {
          this.connection = Ajax.jsonp(this.xhrSettings);
        } else if (!this.connection) {
          this.connection = Ajax.load(this.xhrSettings);
        }
      }
    },

    disconnect: function() {
      if (this.connection) {
        Log4js.debug("[LongPolling] closing connection to:", this.xhrSettings.url);
        this._closeCurrentConnection();
        this.pushstream._onclose();
      }
    },

    _closeCurrentConnection: function() {
      this.opentimer = clearTimer(this.opentimer);
      if (this.connection) {
        try { this.connection.abort(); } catch (e) {
          try { Ajax.clear(this.connection); } catch (e1) { /* ignore error on closing */ }
        }
        this.connection = null;
        this.xhrSettings.url = null;
      }
    },

    beforeSend: function(xhr) {
      if (!this.pushstream.messagesControlByArgument) {
        xhr.setRequestHeader("If-None-Match", this.pushstream._etag);
        xhr.setRequestHeader("If-Modified-Since", this.pushstream._lastModified);
      }
    },

    afterReceive: function(xhr) {
      if (!this.pushstream.messagesControlByArgument) {
        this.pushstream._etag = xhr.getResponseHeader('Etag');
        this.pushstream._lastModified = xhr.getResponseHeader('Last-Modified');
      }
      this.connection = null;
    },

    onerror: function(status) {
      this._closeCurrentConnection();
      if (this.pushstream._keepConnected) { /* abort(), called by disconnect(), call this callback, but should be ignored */
        if (status === 304) {
          this._listen();
        } else {
          Log4js.info("[LongPolling] error (disconnected by server):", status);
          this.pushstream._onerror({type: ((status === 403) || (this.pushstream.readyState === PushStream.CONNECTING)) ? "load" : "timeout"});
        }
      }
    },

    onload: function() {
      this._listen();
    },

    onmessage: function(responseText) {
      if (this._internalListenTimeout) { clearTimer(this._internalListenTimeout); }
      Log4js.info("[LongPolling] message received", responseText);
      var lastMessage = null;
      var messages = isArray(responseText) ? responseText : responseText.replace(/\}\{/g, "}\r\n{").split("\r\n");
      for (var i = 0; i < messages.length; i++) {
        if (messages[i]) {
          lastMessage = Utils.parseMessage(messages[i], this.pushstream);
          this.messagesQueue.push(lastMessage);
          if (this.pushstream.messagesControlByArgument && lastMessage.time) {
            this.pushstream._etag = lastMessage.tag;
            this.pushstream._lastModified = lastMessage.time;
          }
        }
      }

      this._listen();

      while (this.messagesQueue.length > 0) {
        var message = this.messagesQueue.shift();
        this.pushstream._onmessage(message.text, message.id, message.channel, message.eventid, (this.messagesQueue.length === 0));
      }
    }
  };

  /* mains class */

  var PushStreamManager = [];

  var PushStream = function(settings) {
    settings = settings || {};

    this.id = PushStreamManager.push(this) - 1;

    this.useSSL = settings.useSSL || false;
    this.host = settings.host || window.location.hostname;
    this.port = Number(settings.port || (this.useSSL ? 443 : 80));

    this.timeout = settings.timeout || 30000;
    this.pingtimeout = settings.pingtimeout || 30000;
    this.reconnectOnTimeoutInterval = settings.reconnectOnTimeoutInterval || 3000;
    this.reconnectOnChannelUnavailableInterval = settings.reconnectOnChannelUnavailableInterval || 60000;

    this.lastEventId = settings.lastEventId || null;
    this.messagesPublishedAfter = settings.messagesPublishedAfter;
    this.messagesControlByArgument = settings.messagesControlByArgument || false;
    this.tagArgument   = settings.tagArgument  || 'tag';
    this.timeArgument  = settings.timeArgument || 'time';
    this.eventIdArgument  = settings.eventIdArgument || 'eventid';
    this.useJSONP      = settings.useJSONP     || false;

    this._reconnecttimer = null;
    this._etag = 0;
    this._lastModified = null;
    this._lastEventId = null;

    this.urlPrefixPublisher   = settings.urlPrefixPublisher   || '/pub';
    this.urlPrefixStream      = settings.urlPrefixStream      || '/sub';
    this.urlPrefixEventsource = settings.urlPrefixEventsource || '/ev';
    this.urlPrefixLongpolling = settings.urlPrefixLongpolling || '/lp';
    this.urlPrefixWebsocket   = settings.urlPrefixWebsocket   || '/ws';

    this.jsonIdKey      = settings.jsonIdKey      || 'id';
    this.jsonChannelKey = settings.jsonChannelKey || 'channel';
    this.jsonTextKey    = settings.jsonTextKey    || 'text';
    this.jsonTagKey     = settings.jsonTagKey     || 'tag';
    this.jsonTimeKey    = settings.jsonTimeKey    || 'time';
    this.jsonEventIdKey = settings.jsonEventIdKey || 'eventid';

    this.modes = (settings.modes || 'eventsource|websocket|stream|longpolling').split('|');
    this.wrappers = [];
    this.wrapper = null;

    this.onchanneldeleted = settings.onchanneldeleted || null;
    this.onmessage = settings.onmessage || null;
    this.onerror = settings.onerror || null;
    this.onstatuschange = settings.onstatuschange || null;
    this.extraParams    = settings.extraParams    || function() { return {}; };

    this.channels = {};
    this.channelsCount = 0;
    this.channelsByArgument   = settings.channelsByArgument   || false;
    this.channelsArgument     = settings.channelsArgument     || 'channels';

    this._crossDomain = Utils.isCrossDomainUrl(getPublisherUrl(this));

    for (var i = 0; i < this.modes.length; i++) {
      try {
        var wrapper = null;
        switch (this.modes[i]) {
        case "websocket"  : wrapper = new WebSocketWrapper(this);   break;
        case "eventsource": wrapper = new EventSourceWrapper(this); break;
        case "longpolling": wrapper = new LongPollingWrapper(this); break;
        case "stream"     : wrapper = new StreamWrapper(this);      break;
        }
        this.wrappers[this.wrappers.length] = wrapper;
      } catch(e) { Log4js.info(e); }
    }

    this.readyState = 0;
  };

  /* constants */
  PushStream.LOG_LEVEL = 'error'; /* debug, info, error */
  PushStream.LOG_OUTPUT_ELEMENT_ID = 'Log4jsLogOutput';

  /* status codes */
  PushStream.CLOSED        = 0;
  PushStream.CONNECTING    = 1;
  PushStream.OPEN          = 2;

  /* main code */
  PushStream.prototype = {
    addChannel: function(channel, options) {
      if (escapeText(channel) !== channel) {
        throw "Invalid channel name! Channel has to be a set of [a-zA-Z0-9]";
      }
      Log4js.debug("entering addChannel");
      if (typeof(this.channels[channel]) !== "undefined") { throw "Cannot add channel " + channel + ": already subscribed"; }
      options = options || {};
      Log4js.info("adding channel", channel, options);
      this.channels[channel] = options;
      this.channelsCount++;
      if (this.readyState !== PushStream.CLOSED) { this.connect(); }
      Log4js.debug("leaving addChannel");
    },

    removeChannel: function(channel) {
      if (this.channels[channel]) {
        Log4js.info("removing channel", channel);
        delete this.channels[channel];
        this.channelsCount--;
      }
    },

    removeAllChannels: function() {
      Log4js.info("removing all channels");
      this.channels = {};
      this.channelsCount = 0;
    },

    _setState: function(state) {
      if (this.readyState !== state) {
        Log4js.info("status changed", state);
        this.readyState = state;
        if (this.onstatuschange) {
          this.onstatuschange(this.readyState);
        }
      }
    },

    connect: function() {
      Log4js.debug("entering connect");
      if (!this.host)                 { throw "PushStream host not specified"; }
      if (isNaN(this.port))           { throw "PushStream port not specified"; }
      if (!this.channelsCount)        { throw "No channels specified"; }
      if (this.wrappers.length === 0) { throw "No available support for this browser"; }

      this._keepConnected = true;
      this._lastUsedMode = 0;
      this._connect();

      Log4js.debug("leaving connect");
    },

    disconnect: function() {
      Log4js.debug("entering disconnect");
      this._keepConnected = false;
      this._disconnect();
      this._setState(PushStream.CLOSED);
      Log4js.info("disconnected");
      Log4js.debug("leaving disconnect");
    },

    _useControlArguments :function() {
      return this.messagesControlByArgument && ((this._lastModified !== null) || (this._lastEventId !== null));
    },

    _connect: function() {
      if (this._lastEventId === null) {
        this._lastEventId = this.lastEventId;
      }
      if (this._lastModified === null) {
        var date = this.messagesPublishedAfter;
        if (!isDate(date)) {
          var messagesPublishedAfter = Number(this.messagesPublishedAfter);
          if (messagesPublishedAfter > 0) {
            date = new Date();
            date.setTime(date.getTime() - (messagesPublishedAfter * 1000));
          } else if (messagesPublishedAfter < 0) {
            date = new Date(0);
          }
        }

        if (isDate(date)) {
          this._lastModified = Utils.dateToUTCString(date);
        }
      }

      this._disconnect();
      this._setState(PushStream.CONNECTING);
      this.wrapper = this.wrappers[this._lastUsedMode++ % this.wrappers.length];

      try {
        this.wrapper.connect();
      } catch (e) {
        //each wrapper has a cleanup routine at disconnect method
        if (this.wrapper) {
          this.wrapper.disconnect();
        }
      }
    },

    _disconnect: function() {
      this._reconnecttimer = clearTimer(this._reconnecttimer);
      if (this.wrapper) {
        this.wrapper.disconnect();
      }
    },

    _onopen: function() {
      this._reconnecttimer = clearTimer(this._reconnecttimer);
      this._setState(PushStream.OPEN);
      if (this._lastUsedMode > 0) {
        this._lastUsedMode--; //use same mode on next connection
      }
    },

    _onclose: function() {
      this._reconnecttimer = clearTimer(this._reconnecttimer);
      this._setState(PushStream.CLOSED);
      this._reconnect(this.reconnectOnTimeoutInterval);
    },

    _onmessage: function(text, id, channel, eventid, isLastMessageFromBatch) {
      Log4js.debug("message", text, id, channel, eventid, isLastMessageFromBatch);
      if (id === -2) {
        if (this.onchanneldeleted) { this.onchanneldeleted(channel); }
      } else if (id > 0) {
        if (this.onmessage) { this.onmessage(text, id, channel, eventid, isLastMessageFromBatch); }
      }
    },

    _onerror: function(error) {
      this._setState(PushStream.CLOSED);
      this._reconnect((error.type === "timeout") ? this.reconnectOnTimeoutInterval : this.reconnectOnChannelUnavailableInterval);
      if (this.onerror) { this.onerror(error); }
    },

    _reconnect: function(timeout) {
      if (this._keepConnected && !this._reconnecttimer && (this.readyState !== PushStream.CONNECTING)) {
        Log4js.info("trying to reconnect in", timeout);
        this._reconnecttimer = window.setTimeout(linker(this._connect, this), timeout);
      }
    },

    sendMessage: function(message, successCallback, errorCallback) {
      message = escapeText(message);
      if (this.wrapper.type === WebSocketWrapper.TYPE) {
        this.wrapper.sendMessage(message);
        if (successCallback) { successCallback(); }
      } else {
        Ajax.post({url: getPublisherUrl(this), data: message, success: successCallback, error: errorCallback, crossDomain: this._crossDomain});
      }
    }
  };

  PushStream.sendMessage = function(url, message, successCallback, errorCallback) {
    Ajax.post({url: url, data: escapeText(message), success: successCallback, error: errorCallback});
  };

  // to make server header template more clear, it calls register and
  // by a url parameter we find the stream wrapper instance
  PushStream.register = function(iframe) {
    var matcher = iframe.window.location.href.match(/streamid=([0-9]*)&?/);
    if (matcher[1] && PushStreamManager[matcher[1]]) {
      PushStreamManager[matcher[1]].wrapper.register(iframe);
    }
  };

  PushStream.unload = function() {
    for (var i = 0; i < PushStreamManager.length; i++) {
      try { PushStreamManager[i].disconnect(); } catch(e){}
    }
  };

  /* make class public */
  window.PushStream = PushStream;
  window.PushStreamManager = PushStreamManager;

  if (window.attachEvent) { window.attachEvent("onunload", PushStream.unload); }
  if (window.addEventListener) { window.addEventListener.call(window, "unload", PushStream.unload, false); }

})(window, document);

/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
  var registeredInModuleLoader = false;
  if (typeof define === 'function' && define.amd) {
    define(factory);
    registeredInModuleLoader = true;
  }
  if (typeof exports === 'object') {
    module.exports = factory();
    registeredInModuleLoader = true;
  }
  if (!registeredInModuleLoader) {
    var OldCookies = window.Cookies;
    var api = window.Cookies = factory();
    api.noConflict = function () {
      window.Cookies = OldCookies;
      return api;
    };
  }
}(function () {
  function extend () {
    var i = 0;
    var result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[ i ];
      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }

  function init (converter) {
    function api (key, value, attributes) {
      var result;
      if (typeof document === 'undefined') {
        return;
      }

      // Write

      if (arguments.length > 1) {
        attributes = extend({
          path: '/'
        }, api.defaults, attributes);

        if (typeof attributes.expires === 'number') {
          var expires = new Date();
          expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
          attributes.expires = expires;
        }

        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}

        if (!converter.write) {
          value = encodeURIComponent(String(value))
            .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        } else {
          value = converter.write(value, key);
        }

        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);

        return (document.cookie = [
          key, '=', value,
          attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
          attributes.path ? '; path=' + attributes.path : '',
          attributes.domain ? '; domain=' + attributes.domain : '',
          attributes.secure ? '; secure' : ''
        ].join(''));
      }

      // Read

      if (!key) {
        result = {};
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all. Also prevents odd result when
      // calling "get()"
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var rdecode = /(%[0-9A-Z]{2})+/g;
      var i = 0;

      for (; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var cookie = parts.slice(1).join('=');

        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }

        try {
          var name = parts[0].replace(rdecode, decodeURIComponent);
          cookie = converter.read ?
            converter.read(cookie, name) : converter(cookie, name) ||
            cookie.replace(rdecode, decodeURIComponent);

          if (this.json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          }

          if (key === name) {
            result = cookie;
            break;
          }

          if (!key) {
            result[name] = cookie;
          }
        } catch (e) {}
      }

      return result;
    }

    api.set = api;
    api.get = function (key) {
      return api.call(api, key);
    };
    api.getJSON = function () {
      return api.apply({
        json: true
      }, [].slice.call(arguments));
    };
    api.defaults = {};

    api.remove = function (key, attributes) {
      api(key, '', extend(attributes, {
        expires: -1
      }));
    };

    api.withConverter = init;

    return api;
  }

  return init(function () {});
}));
