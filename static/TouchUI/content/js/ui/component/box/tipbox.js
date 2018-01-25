/*!
 * TipBox
 * http://www.wadecn.com/
 * auth:xiedx@asiainfo.com
 * Copyright 2015, WADE
 */
!function(t,e,i){"use strict";function o(t){if(t&&t.nodeType){for(var e=0,o=t,n=!1;o&&o.nodeType&&o!=i.body&&e<50;){if(1==o.nodeType&&"none"!=o.style.display&&o.attributes&&"tip"in o.attributes){n=!0;break}o=o.parentNode,e++}return n?o:void 0}}function n(e){if(e&&e.nodeType){for(var o=0,n=e,r=!1;n&&n.nodeType&&n!=i.body&&o<5;){if(1==n.nodeType&&t.nodeName(n,"div")&&t.inArray(t.attr(n,"id"),v)>-1){r=!0;break}n=n.parentNode,o++}return r?n:void 0}}function r(t){return u&&t.touchs&&t.touchs.length?t.touchs[0].target:t.target?t.target:t.srcElement}function l(o,n){if(o&&1==o.nodeType&&"none"!=o.style.display){var r=t.attr(o,p);r||(r="wade_tipbox-"+ ++c,t.attr(o,p,r));var l=o.getBoundingClientRect(),a={targetLeft:l.left,targetTop:l.top,targetWidth:o.offsetWidth,targetHeight:o.offsetHeight,color:n?n:""};return e[r]?t.extend(e[r],a):(t(i.body).append('<div id="'+r+'" class="c_tooltip c_tooltip-top" style="left:-99999px;top:-99999px;max-width:28.5em;display:none">\t<div id="'+r+'_content" class="content">'+t.attr(o,"tip")+"\t</div></div>"),e[r]=new b(r,a))}}if(t&&"undefined"==typeof t.TipBox){var a,d=(Object.prototype.toString,Array.prototype.push),s=Array.prototype.splice,p=(Wade.support.deleteExpando,"TipBox"+(new Date).valueOf()),c=0,u="undefined"!=typeof t.hasTouch?t.hasTouch:"ontouchstart"in e,f=u?"touchstart":"mouseover",y=13.2,h=7.2,g=1100,v=[],b=function(e,o){var n=this;n.el=e&&1==e.nodeType?e:i.getElementById(e),n.el&&n.el.nodeType&&(n.id=t.attr(n.el,"id"))&&(o&&t.isObject(o)&&t.extend(n,o),t.attr(n.el,"x-wade-uicomponent","tipbox"),n._init(),n.constructor.call(n))};b.prototype=t.extend(new t.UIComponent,{update:function(e,i){var o=this;if(i&&t.isString(i)&&(o.color=i),void 0!=e&&t.isString(e)&&o.ctEl){if(e=e.replace(/\n|\\n/gi,"<br />"),e==o.ctEl.innerHTML)return;o.ctEl.innerHTML=e,!0===o.visible&&o.adjust()}},show:function(){var e=this;!0!==e.visible&&(e.adjust(),e.el.style.zIndex=g+t.inArray(e.id,v),e.el.style.display="",e.visible=!0)},hide:function(){var t=this;t.el.style.display="none",t.visible=!1},adjust:function(){var o,n,r=this;!0!==r.visible&&(r.el.style.visibility="hidden",r.el.style.display=""),o=r.ctEl.offsetHeight,n=r.ctEl.offsetWidth,!0!==r.visible&&(r.el.style.visibility="",r.el.style.display="none");var l=i.body.offsetHeight,a=i.body.offsetWidth,d="",s="",p=r.targetLeft+r.targetWidth/2,c=r.targetTop+r.targetHeight/2;d=c>l/3*2?"top":c<l/3?"bottom":"",s=p>a/3*2?"left":p<a/3?"right":"";var u=p,f=c;"bottom"==d?f=r.targetTop+r.targetHeight+h:"top"==d?f=r.targetTop-o-h:""==d&&(f=""==s?r.targetTop+r.targetHeight+h:r.targetTop+r.targetHeight/2-o/2),"left"==s?u=""==d?r.targetLeft-n-h:r.targetLeft+r.targetWidth/2-n+y:"right"==s?u=""==d?r.targetLeft+r.targetWidth+h:r.targetLeft+r.targetWidth/2-y:""==s&&(u=r.targetLeft+r.targetWidth/2-n/2);var g="c_tooltip";(d||s)&&(g+=" c_tooltip",g+=d?"-"+d:"",g+=s?"-"+s:""),r.color&&(g+=" c_tooltip-"+r.color),r.el.className=g,t.browser.msie&&document.documentMode<10?(r.el.style.visibility="hidden",r.el.className="",r.flushTimer&&(e.clearTimeout(r.flushTimer),r.flushTimer=null),r.flushTimer=e.setTimeout("var el = document.getElementById('"+r.id+"'); if(el && el.nodeType){el.className='"+g+"';el.style.left='"+u+"px';el.style.top='"+f+"px';el.style.visibility = '';}el = null;",0)):(r.el.style.left=u+"px",r.el.style.top=f+"px")},destroy:function(){var e=this;e.ctEl=null,e.el=null,s.call(v,t.inArray(e.id,v),1)},_init:function(){var e=this;e.ctEl=i.getElementById(e.id+"_content"),e.visible=!1,t.inArray(e.id,v)<0&&d.call(v,e.id)}}),t(function(){u&&t(i.body).bind("longTap",function(e){var i=r(e);if(i){var n,d=o(i);d&&(n=l(d),n&&(n.update(t.attr(d,"tip"),t.attr(d,"tipcolor")),n.show())),n&&(a=n.id)}}),t(i.body).bind(f,function(i){i.originalEvent&&(i=i.originalEvent);var d=r(i);if(d){var s;if(!u){var p=o(d);p&&(s=l(p),s&&(s.update(t.attr(p,"tip"),t.attr(p,"tipcolor")),s.show()))}a&&e[a]&&(!s&&!n(d)||s&&s.id!=a)&&(e[a].hide(),a=null),s&&(a=s.id)}}),t(e).bind("onorientationchange"in e?"orientationchange":"resize",function(){a&&e[a]&&(e[a].hide(),a=null)})}),t.extend(b,{make:l,show:function(t,i,o){var n=l(t,o);return n&&(n.update(i,o),n.show()),a&&e[a]&&n&&n.id!=a&&(e[a].hide(),a=null),n&&(a=n.id),n}}),t.TipBox=b,e.showTipBox=b.show}}(window.Wade,window,document);