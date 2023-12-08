"use strict";function u(t){return/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(t)}function s(t){return/^1[23456789]\d{9}$/.test(t)}function f(t){return/^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(t)}function g(t){return t?(o(t)&&(t=+t),!/Invalid|NaN/.test(new Date(t).toString())):!1}function a(t){return/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)}function o(t){return/^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(t)}function d(t){return typeof t=="string"}function p(t){return/^\d+$/.test(t)}function A(t){return/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(t)}function $(t){const n=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/,e=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;return t.length===7?e.test(t):t.length===8?n.test(t):!1}function b(t){return/^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(t)}function m(t){return/^[\u4e00-\u9fa5]+$/gi.test(t)}function Z(t){return/^[a-zA-Z]*$/.test(t)}function y(t){return/^[0-9a-zA-Z]*$/g.test(t)}function E(t,n){return t.indexOf(n)>=0}function j(t,n){return t>=n[0]&&t<=n[1]}function h(t,n){return t.length>=n[0]&&t.length<=n[1]}function l(t){return/^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(t)}function i(t){switch(typeof t){case"undefined":return!0;case"string":if(t.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g,"").length==0)return!0;break;case"boolean":if(!t)return!0;break;case"number":if(t===0||isNaN(t))return!0;break;case"object":if(t===null||t.length===0)return!0;for(const n in t)return!1;return!0}return!1}function z(t){if(typeof t=="string")try{const n=JSON.parse(t);return!!(typeof n=="object"&&n)}catch{return!1}return!1}function N(t){return typeof Array.isArray=="function"?Array.isArray(t):Object.prototype.toString.call(t)==="[object Array]"}function c(t){return Object.prototype.toString.call(t)==="[object Object]"}function O(t,n=6){return new RegExp(`^\\d{${n}}$`).test(t)}function r(t){return typeof t=="function"}function w(t){return c(t)&&r(t.then)&&r(t.catch)}function _(t){const n=t.split("?")[0];return/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i.test(n)}function P(t){return/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i.test(t)}function S(t){return t&&Object.prototype.toString.call(t)==="[object RegExp]"}const G={email:u,mobile:s,url:f,date:g,dateISO:a,number:o,digits:p,idCard:A,carNo:$,amount:b,chinese:m,letter:Z,enOrNum:y,contains:E,range:j,rangeLength:h,empty:i,isEmpty:i,jsonString:z,landline:l,object:c,array:N,code:O,func:r,promise:w,video:P,image:_,regExp:S,string:d};exports.test=G;