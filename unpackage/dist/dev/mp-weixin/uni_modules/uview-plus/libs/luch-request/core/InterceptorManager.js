"use strict";function n(){this.handlers=[]}n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1};n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};n.prototype.forEach=function(t){this.handlers.forEach(e=>{e!==null&&t(e)})};exports.InterceptorManager=n;