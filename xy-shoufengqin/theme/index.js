!function e(t,n,r){function o(a,c){if(!n[a]){if(!t[a]){var d="function"==typeof require&&require;if(!c&&d)return d(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return o(n?n:e)},s,s.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){(function(e){/*! ready */
var n=function(){function e(){if(!i.isReady){try{document.documentElement.doScroll("left")}catch(t){return void setTimeout(e,1)}i.ready()}}function t(e){i.bindReady();i.type(e);n.done(e)}var n,r,o={};o["[object Boolean]"]="boolean",o["[object Number]"]="number",o["[object String]"]="string",o["[object Function]"]="function",o["[object Array]"]="array",o["[object Date]"]="date",o["[object RegExp]"]="regexp",o["[object Object]"]="object";var i={isReady:!1,readyWait:1,holdReady:function(e){e?i.readyWait++:i.ready(!0)},ready:function(e){if(e===!0&&!--i.readyWait||e!==!0&&!i.isReady){if(!document.body)return setTimeout(i.ready,1);if(i.isReady=!0,e!==!0&&--i.readyWait>0)return;n.resolveWith(document,[i])}},bindReady:function(){if(!n){if(n=i._Deferred(),"complete"===document.readyState)return setTimeout(i.ready,1);if(document.addEventListener)document.addEventListener("DOMContentLoaded",r,!1),window.addEventListener("load",i.ready,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",r),window.attachEvent("onload",i.ready);var t=!1;try{t=null==window.frameElement}catch(o){}document.documentElement.doScroll&&t&&e()}}},_Deferred:function(){var e,t,n,r=[],o={done:function(){if(!n){var t,a,c,d,u,s=arguments;for(e&&(u=e,e=0),t=0,a=s.length;a>t;t++)c=s[t],d=i.type(c),"array"===d?o.done.apply(o,c):"function"===d&&r.push(c);u&&o.resolveWith(u[0],u[1])}return this},resolveWith:function(o,i){if(!n&&!e&&!t){i=i||[],t=1;try{for(;r[0];)r.shift().apply(o,i)}finally{e=[o,i],t=0}}return this},resolve:function(){return o.resolveWith(this,arguments),this},isResolved:function(){return!(!t&&!e)},cancel:function(){return n=1,r=[],this}};return o},type:function(e){return null==e?String(e):o[Object.prototype.toString.call(e)]||"object"}};return document.addEventListener?r=function(){document.removeEventListener("DOMContentLoaded",r,!1),i.ready()}:document.attachEvent&&(r=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",r),i.ready())}),t}(),r={set:function(e,t,n,r,o){var i=new Date,a="",c=typeof t,d="",u="";if(r=r||"/",n&&(i.setTime(i.getTime()+24*n*60*60*1e3),a="; expires="+i.toUTCString()),"object"===c&&"undefined"!==c){if(!("JSON"in window))throw"Bummer, your browser doesn't support JSON parsing.";d=encodeURIComponent(JSON.stringify({v:t}))}else d=encodeURIComponent(t);o&&(u="; secure"),document.cookie=e+"="+d+a+"; path="+r+u},get:function(e){for(var t=e+"=",n=document.cookie.split(";"),r="",o="",i={},a=0;a<n.length;a++){for(var c=n[a];" "==c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t)){if(r=decodeURIComponent(c.substring(t.length,c.length)),o=r.substring(0,1),"{"==o)try{if(i=JSON.parse(r),"v"in i)return i.v}catch(d){return r}return"undefined"==r?void 0:r}}return null},remove:function(e){this.set(e,"",-1)},increment:function(e,t){var n=this.get(e)||0;this.set(e,parseInt(n,10)+1,t)},decrement:function(e,t){var n=this.get(e)||0;this.set(e,parseInt(n,10)-1,t)}},o=o||{};o.css="light.css",o.changeCSS=function(e){"use strict";window.event.preventDefault?window.event.preventDefault():window.event.returnValue=!1,r.set("theme",e,20),window.location.reload()},o.cookie=r.get("theme"),o.cookie&&(o.css=o.cookie),document.write('<link rel="stylesheet" href="theme/'+o.css+'">'),/*!
<div class="dark_light">
	<a class="dark_light__link" onclick="theme.changeCSS('dark.css');" href="#">Ночь</a>
	<a class="dark_light__link" onclick="theme.changeCSS('light.css');" href="#">День</a>
</div>
*/
t.exports=o,e.theme=o,n(function(){console.dir("ready");var e=document.getElementById("page"),t=document.createElement("div");t.className="dark_light",t.innerHTML='<a class="dark_light__link" onclick="theme.changeCSS(\'dark.css\');" href="#">Ночь</a><a class="dark_light__link" onclick="theme.changeCSS(\'light.css\');" href="#">День</a>',e.insertBefore(t,e.childNodes[0])})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);