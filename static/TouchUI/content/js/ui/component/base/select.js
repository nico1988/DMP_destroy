/*!
 * select component
 * http://www.wadecn.com/
 * auth:xiedx@asiainfo.com
 * Copyright 2015, WADE
 */
!function(e,t,l){"use strict";function i(i,n,s,a){if(i&&e.isString(i)&&(i=l.getElementById(i)),i&&i.nodeType){var r=e.extend({},s);if(r.name&&e.isString(r.name)){if(r.id&&e.isString(r.id)||(r.id=r.name),t[r.id]&&t[r.id]instanceof N)return void MessageBox.error('Select component "'+r.id+'" is exist!');var o=r.className&&e.isString(r.className)?r.className:"e_select",d=r.style&&e.isString(r.style)?r.style:"",c=r.textField&&e.isString(r.textField)?r.textField:"TEXT",u=r.valueField&&e.isString(r.valueField)?r.valueField:"VALUE",f=r.titleField&&e.isString(r.titleField)?r.titleField:"TITLE",p=r.defaultText&&e.isString(r.defaultText)?r.defaultText:e.lang.get("ui.component.select.default-text"),v="",x=-1,h=[];if(h.push('\r\n<div id="'+r.id+'_float" class="c_float" style="'+(e.isNumeric(r.optionWidth)&&r.optionWidth>0?"width:"+r.optionWidth+"em;":"")+'display:none">'),h.push('\r\n<div class="bg"></div>'),h.push('\r\n<div class="content">\r\n<div class="c_scrollContent">'),h.push('\r\n<div class="c_list c_list-pc-s c_list-phone-line '+(e.isNumeric(r.optionColumn)&&r.optionColumn>1?" c_list-col-"+r.optionColumn+" ":"")+'">\r\n<ul>'),a&&a.length){var E=a instanceof Array,m=a instanceof e.DatasetList;if(E||m){if(!1!==r.addDefault&&!0!==r.inputable){var g={};g[c]=p,g[u]="",m?a.splice(0,0,new e.DataMap(g)):E&&a.splice(0,0,g)}var y,b,T,I,k,_,C=!1,w=0;e.each(a,function(t){if(T=m?a.get(t):a[t]){if(I=m?T.get(c):T[c],k=m?T.get(u):T[u],_=m?T.get(f):T[f],0==w&&(y=I,b=k),_||(_=I),C=x<0&&void 0!=typeof r.value&&null!=r.value&&""!=r.value&&r.value==k,C&&(p=I,v=k,x=w),h.push('\r\n<li class="link'+(C?" on":"")+'" idx="'+w+'" title="'+_+'" val="'+k+'"'),r.attributeField&&e.isString(r.attributeField)){var l;e.each(r.attributeField.split(","),function(t,i){l=m?T.get(i):T[i],void 0!=typeof l&&h.push(" "+attr+'="'+e.xss(l)+'" ')})}h.push(">"),h.push('\r\n<div class="main">'+I+"</div>"),h.push("\r\n</li>"),w++}}),!1!==r.addDefault&&!0!==r.inputable&&(m||E)&&a.splice(0,1)}}return h.push("\r\n</ul>\r\n</div>"),h.push("\r\n</div>\r\n</div>"),h.push("\r\n</div>"),e(l.body).append(h.join("")),!1===r.addDefault&&x<0&&(v=b,p=y),h=[],h.push('<span class="'+o+'"'+(d?' style="'+d+'" ':"")+">"),!0===r.inputable?h.push('<input type="text" autocomplete="off" name="'+r.name+'_TEXT" placeholder="'+e.lang.get("ui.component.select.textinput-placeholder")+'" '+(x>-1&&p?'"value="'+p+'"':"")+" />"):h.push("<span>"+p+"</span>"),h.push('<input type="hidden" x-wade-uicomponent="select" name="'+r.name+'" id="'+r.id+'" value="'+v+'" '+(r.desc&&e.isString(r.desc)?' desc="'+r.desc+'" ':"")+(r.nullable&&e.isString(r.nullable)?' nullable="'+r.nullable+'" ':"")+" />"),h.push("</span>"),e(i)[n](h.join("")),h=null,t[r.id]=new Wade.Select(r.id,{value:v,disabled:!0===r.disabled,inputable:!0===r.inputable,addDefault:!1!==r.addDefault,optionColumn:r.optionColumn?r.optionColumn:null,optionWidth:r.optionWidth?r.optionWidth:null,optionAlign:r.optionAlign?r.optionAlign:null,selectedIndex:x,defaultText:p,selectedText:p}),t[r.id]}}}function n(e){return""===a?e:(e=e.charAt(0).toUpperCase()+e.substr(1),a+e)}if(e&&"undefined"==typeof e.Select){var s=(Math,l.createElement("div").style),a=function(){for(var e,t="t,webkitT,MozT,msT,OT".split(","),l=0,i=t.length;l<i;l++)if(e=t[l]+"ransform",e in s)return t[l].substr(0,t[l].length-1);return!1}(),r=a?"-"+a.toLowerCase()+"-":"",o=n("transform"),d=n("transitionProperty"),c=n("transitionDuration"),u=(n("transformOrigin"),n("transitionTimingFunction")),f=(n("transitionDelay"),n("perspective")in s),p="undefined"!=typeof e.hasTouch?e.hasTouch:"ontouchstart"in t,v=a!==!1,x=(n("transition")in s,function(){if(a===!1)return!1;var e={"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"};return e[a]}()),h=f?" translateZ(0)":"";s[o]=h;var E="ActiveXObject"in t,m=l.createElement("input"),g="oninput"in m;m=null;var p="undefined"!=typeof e.hasTouch?e.hasTouch:"ontouchstart"in t,y=e.os.phone||!0===e.ratioPhone,b=p?"touchstart":"mousedown",T=200,I=null,N=function(t,i){var n=this;n.el=t&&1==t.nodeType?t:l.getElementById(t),n.el&&n.el.nodeType&&(n.id=e.attr(n.el,"id"))&&(i&&e.isObject(i)&&e.extend(n,i),e.attr(n.el,"x-wade-uicomponent")||e.attr(n.el,"x-wade-uicomponent","select"),n._init(),n.constructor.call(n))};N.prototype=e.extend(new e.UIComponent,{handleEvent:function(e){var t=this;switch(e.type){case x:t._transitionEnd(e)}},val:function(t){var l=this;if(void 0==t)return l.value;if(E&&l.inputable&&(l.valSetter=!0),""==t&&l.inputable)l.el.value="",l.value="",l.textEl.value="",l.selectedIndex>-1&&e("li[idx="+l.selectedIndex+"]",l.listUlEl).removeClass("on"),l.selectedIndex=-1,l.ctrlIndex=-1;else{var i,n,s;e("li",l.listUlEl).each(function(){if(i=this,t==e.attr(i,"val"))return n=e.attr(i,"idx"),s=e.trim(e.text(i)),l.selectedIndex!=n&&(!0===l.inputable?e(l.textEl).val(s):e(l.textEl).text(s),l.el.value=t,l.value=t,e("li[idx="+l.selectedIndex+"]",l.listUlEl).removeClass("on"),e(i).addClass("on"),l.selectedIndex=n,l.selectedText=s),!1}),i=n=s=null}E&&l.inputable&&setTimeout(function(){l.valSetter=!1},T+100)},text:function(e){var t=this;if(void 0==e)return t.selectedText},insert:function(t,l,i,n,s){var a=this;if((e.isNumeric(t)||e.isString(t))&&(e.isNumeric(l)||e.isString(l))){t=e.xss(t,!0),l=e.xss(l,!0),i&&(i=e.xss(i,!0));var r=a.listUlEl.getElementsByTagName("li"),o=r?r.length:0;r=null;var d='<li title="'+(i?i:"")+'" class="link" idx="'+o+'" val="'+l+'"><div class="main">'+t+"</div></li>";("before"==n||"after"==n)&&s&&s.nodeType?e(s)[n](d):"prepend"!=n&&"append"!=n||e(a.listUlEl)[n](d),d=null,1==a.visible&&a.refresh()}},before:function(e,t,l,i){var n=this;n.insert(e,t,l,"before",i)},after:function(e,t,l,i){var n=this;n.insert(e,t,l,"after",i)},prepend:function(e,t,l){var i=this;i.insert(e,t,l,"prepend")},append:function(e,t,l){var i=this;i.insert(e,t,l,"append")},remove:function(t){var l=this;if(void 0!=t&&null!=t){var i,n,s,a=0;e("li",l.listUlEl).each(function(){i=this,s||t!=e.attr(i,"val")||(n=e.attr(i,"idx"),s=!0,l.selectedIndex==n?(!0===l.inputable?e(l.textEl).val(""):e(l.textEl).text(""),l.el.value="",l.value="",l.selectedIndex=-1,l.selectedText=null):l.selectedIndex>n&&l.selectedIndex--,l.ctrlIndex=-1,e(i).remove()),s&&e.attr(i,"idx",a),a++}),i=n=s=a=null,1==l.visible&&l.refresh()}},empty:function(){var t=this;!0===t.inputable?e(t.textEl).val(""):e(t.textEl).text(""),t.el.value="",t.value="",!0!==t.addDefault?e(t.listUlEl).empty():(t.val(""),e("li",t.listUlEl).each(function(t){t>0?e(this).remove():this.className="link"})),t.selectedIndex=-1,t.ctrlIndex=-1,t.selectedText=null,1==t.visible&&t.refresh()},getDisabled:function(){var e=this;return e.disabled},setDisabled:function(t){var l=this;l.spanEl&&l.spanEl.nodeType&&(l.disabled=!!t,setTimeout(function(){var t=l.spanEl.className?l.spanEl.className:"";l.disabled?(" "+t+" ").indexOf(" e_dis ")<0&&(l.spanEl.className=e.trim(t+" e_dis")):(t=e.trim((" "+t+" ").replace(/ e_dis /gi," ")),l.spanEl.className=t),l.inputable&&(l.textEl.disabled=l.disabled)},0))},show:function(t){var l=this;if(!0!==l.visible){var i=l.spanEl.className?l.spanEl.className:"";y&&l.inputable&&(" "+i+" ").indexOf(" e_select-fixed ")<0&&(l.spanEl.className=e.trim(i+" e_select-fixed")),l.floatEl.style.display="block",l.useTransform&&setTimeout(function(){l.scrollEl.style[d]=r+"transform",l.scrollEl.style[o]="translate(0,0)"+h},1),l.visible=!0,I=l.id}},hide:function(){var t=this;if(!1!==t.visible){var l=t.spanEl.className?t.spanEl.className:"";t.spanEl.className=e.trim((" "+l+" ").replace(/ e_select-fixed /gi," ")),t.useTransform?setTimeout(function(){t.scrollEl.style[d]=r+"transform",t.scrollEl.style[o]="translate(0,100%)"+h},1):t.floatEl.style.display="none",t.visible=!1,I==t.id&&(I=null)}},refresh:function(){var t=this;if(t.spanEl||(t.spanEl=e(t.el).parent("span.e_select:first")[0]),t.floatEl||(t.floatEl=l.getElementById(t.id+"_float")),t.scrollEl||(t.scrollEl=e(t.floatEl).children("div.content:first")[0]),t.listEl||(t.listEl=e(t.scrollEl).find("div.c_list:first")[0]),y)t.maxHeight=e.format.rem2px(4.8);else{var i=t.spanEl.getBoundingClientRect();t.spanLeft=i.left,t.spanTop=i.top,t.spanHeight=t.spanEl.offsetHeight,t.spanWidth=t.spanEl.offsetWidth;var n=t.spanTop,s=(t.spanLeft,l.body),a=s.offsetHeight-t.spanHeight-n;e.isNumber(s.scrollTop)&&(t.spanTop+=s.scrollTop-2),e.isNumber(s.scrollLeft)&&(t.spanLeft+=s.scrollLeft),t.dir=a>=n?"down":"up",t.maxHeight="down"==t.dir?a:n}t.floatEl.className?t.floatEl.className:"";t.visible?t.listHeight=t.listEl.offsetHeight:(t.floatEl.style.left="-99999px",t.floatEl.style.top="-99999px",t.floatEl.style.display="block",t.listHeight=t.listEl.offsetHeight,t.floatEl.style.display="");var r=t.scrollHeight=Math.min(t.maxHeight,t.listHeight);if(t.scrollEl.style.height=r+"px",!y){if("right"==t.optionAlign&&t.optionWidth){var o=e.format.em2px(t.optionWidth);t.floatEl.style.left=t.spanLeft+t.spanWidth-o+"px"}else t.floatEl.style.left=t.spanLeft+"px";t.floatEl.style.top=("down"==t.dir?t.spanTop+t.spanHeight:t.spanTop-r)+"px",t.optionWidth||(t.floatEl.style.width=t.spanWidth+"px")}},destroy:function(){var t=this;t.listItems=null,t.useTransform&&t.floatEl&&t._unbind(x),t.scroller&&t.scroller.destroy(),t.floatEl&&e(t.floatEl).remove(),t.spanEl=null,t.textEl=null,t.floatEl=null,t.bgEl=null,t.scrollEl=null,t.listEl=null,t.listUlEl=null,t.el=null},_init:function(){var i=this;i.spanEl=e(i.el).parent("span.e_select:first")[0],i.textEl=e(i.spanEl).children("input[type=text]:first")[0],i.textEl&&i.textEl.nodeType||(i.textEl=e(i.spanEl).children("span:first")[0]),i.floatEl=l.getElementById(i.id+"_float"),i.bgEl=e(i.floatEl).children("div.bg:first")[0],i.scrollEl=e(i.floatEl).children("div.content:first")[0],i.listEl=e(i.scrollEl).find("div.c_list:first")[0],i.listUlEl=e(i.listEl).children("ul:first")[0];var n=e.attr(i.spanEl,"id");n||(n=i.id+"_span",e.attr(i.spanEl,"id",n)),e.attr(i.el,"x-visible-element",n),i.ctrlIndex=-1,i.itemCount=-1,void 0==i.selectedIndex&&(i.selectedIndex=-1),y&&(i.useTransform=v,(" "+i.listEl.className+" ").indexOf(" c_list-phone-col-1 ")<0&&(i.listEl.className=e.trim((i.listEl.className?i.listEl.className:"")+" c_list-phone-col-1"))),i.disabled&&i.setDisabled(!0),i.floatEl.style.display="none",i.optionWidth&&!i.floatEl.style.width&&(i.floatEl.style.width=i.optionWidth+"em"),i.useTransform&&(i.scrollEl.style[d]="none",i.scrollEl.style[c]="300ms",i.scrollEl.style[u]="ease-out",i.scrollEl.style[o]="translate(0,100%)"+h,i._bind(x)),i.inputable&&(i.listItems||(i.listItems=e.makeArray(i.listUlEl.getElementsByTagName("li")),i.itemCount=i.listItems.length),g?(e(i.textEl).bind(b,function(){i.textElStart=!0}),e(i.textEl).bind("input",function(e){i.disabled||i.isRunning||i.start()})):e(i.textEl).bind("keyup",function(e){i.disabled||(32==e.keyCode||8==e.keyCode||e.keyCode>64&&e.keyCode<91||e.keyCode>47&&e.keyCode<58||e.keyCode>95&&e.keyCode<106)&&(i.isRunning||i.start())}),y||e.os.pad||(e(i.textEl).bind("keydown",function(t){if(!i.disabled&&(13==t.keyCode||108==t.keyCode)){if(i.ctrlIndex>-1){var l=i.ctrlIndex!=i.selectedIndex;if(l){var n=e("li[idx="+i.ctrlIndex+"]",i.listUlEl);if(n.length){var s=n.attr("val"),a=e.trim(n.text());!0===i.inputable?e(i.textEl).val(a):e(i.textEl).text(a),i.el.value=s,i.value=s,i.selectedIndex=i.ctrlIndex,i.selectedText=a,e.event.trigger("change",[a,s],i.el)}}i.hide()}return!1}}),e(i.textEl).bind("keyup",function(t){if(!i.disabled){if(37==t.keyCode||39==t.keyCode)return e(i.textEl).select(),!1;if(38==t.keyCode||40==t.keyCode){if(i.itemCount<=0)return;i.ctrlIndex<0&&(i.ctrlIndex=i.selectedIndex);var l;if(38==t.keyCode){if(l="up",0==i.ctrlIndex)return!1;i.ctrlIndex<0?i.ctrlIndex=i.itemCount-1:i.ctrlIndex--}else if(40==t.keyCode){if(l="down",i.ctrlIndex==i.itemCount-1)return!1;i.ctrlIndex<0?i.ctrlIndex=0:i.ctrlIndex++}var n=e("li[idx="+i.ctrlIndex+"]",i.listUlEl);if(n.length&&i.scroller){if("down"==l){var s=i.scrollEl.offsetHeight,a=n[0].offsetTop+n[0].offsetHeight;s<a&&i.scroller.scrollTo(0,s-a)}else if("up"==l){var r=i.scroller.y,a=n[0].offsetTop;a<Math.abs(r)&&i.scroller.scrollTo(0,0-a)}e("li[class*=on]",i.listUlEl).attr("className","link"),n.attr("className","link on")}return!1}}}))),e(i.bgEl).tap(function(){i.hide()}),e(i.spanEl).tap(function(e){i.disabled||(!y&&I&&I!=i.id&&t[I]&&t[I].hide(),i.refresh(),!y&&i.visible?i.hide():i.visible||(i.inputable&&i._resetSelected(),i.show()))}),e(i.listUlEl).tap(function(t){if(1!=i.disabled){var l=t.touch.el;t.originalEvent&&(t=e.event.fix(t.originalEvent));var n=t.target||l;if(n){var s;if(e.nodeName(n,"li")&&(" "+n.className+" ").indexOf(" link ")>-1&&(s=n),!s)for(var a=0,r=n.parentNode;a<5&&r&&r.nodeType;){if(e.nodeName(r,"li")&&(" "+r.className+" ").indexOf(" link ")>-1){s=r;break}r=r.parentNode,a++}var o=!1,d=i.selectedIndex,c=i.value,u=i.selectedText;if(s){var f=e.attr(s,"idx"),p=e.attr(s,"val"),v=e.trim(e(s).text());e.isNumeric(f)&&i.selectedIndex!=f&&(o=!0),o&&(i.selectedIndex=f,i.selectedText=v,!0===i.inputable?e(i.textEl).val(v):e(i.textEl).text(v),i.el.value=p,i.value=p,e("li[class$=on]",i.listUlEl).attr("className","link"),e.attr(s,"className","link on"))}i.ctrlIndex=-1,i.hide(),o&&!1===e.event.trigger({type:"change",originalEvent:t,context:i},null,i.el)&&(i.selectedIndex=d,i.selectedText=u,!0===i.inputable?e(i.textEl).val(u):e(i.textEl).text(u),i.el.value=c,i.value=c,e("li[class$=on]",i.listUlEl).attr("className","link"),e("li[idx="+d+"]",i.listUlEl).attr("className","link on"))}}}),e(t).bind("onorientationchange"in t?"orientationchange":"resize",i.id,function(l){var i=l?l.data:null;i&&e.isString(i)&&t[i]&&t[i].refresh()})},start:function(){var e=this;e.timer=setTimeout(function(){return E&&!0===e.valSetter?void(e.valSetter=!1):(e.updateData(),e.textElStart=!1,void(e.isRunning=!1))},T),e.isRunning=!0},stop:function(){var e=this;t.clearTimeout(e.timer),e.isRunning=!1},updateData:function(){var t=this;t.query=t.textEl.value;var l=t.query;return y||e.validate.alerter.hide(),e.trim(l).length?(t.el.value=t.query,void(t._filterList()?(t.refresh(),y||t.show(),t.visible&&t.scroller&&t.scroller.refresh()):t.hide())):void(y||t.textElStart||t.hide())},_filterList:function(){var t=this;if(!(t.ItemCount<=0)){var l=y||"down"==t.dir?"asc":"desc";t.listItems.sort(function(i,n){var s=e(i).children("div .main").text(),a=e(n).children("div .main").text(),r=s.indexOf(t.query),o=a.indexOf(t.query);return"asc"==l?r>o?-1:r<o?1:0:r>o?1:r<o?-1:0});var i=!1;return e.each(t.listItems,function(l,n){var s=e(n).children("div .main"),a=s.text(),r=a.indexOf(t.query),o=n.getAttribute("idx");r>-1?(s.html(a.replace(new RegExp(t.query),'<span class="e_red">'+t.query+"</span>")),i||(i=!0)):s.text(a.replace(/<\/?.+?>/g,"")),void 0!=t.selectedIndex&&t.selectedIndex>-1&&t.selectedIndex==o&&o!=l&&(t.selectedIndex=l),n.setAttribute("idx",l),t.listUlEl.appendChild(n)}),t.ctrlIndex=-1,i&&(t.scroller?t.scroller.dirY&&("asc"==l?t.scroller.scrollTo(0,0-t.scroller.y):t.scroller.scrollTo(0,t.scroller.y)):y||e.os.pad||t.listHeight>t.scrollHeight&&setTimeout(function(){e(t.scrollEl).scrollTop("asc"==l?0:t.listHeight-t.scrollHeight)},0),e("li[class*=on]",t.listUlEl).attr("className","link"),e("li[idx="+("asc"==l?"0":t.listItems.length-1)+"]",t.listUlEl).attr("className","link on"),t.ctrlIndex=0),i||y||e.validate.alerter.one(t.textEl,e.lang.get("ui.component.select.tip.nonematch")),e.event.trigger("afterFilter",i,t.el),i}},_resetSelected:function(){var t=this;t.ctrlIndex>-1&&t.selectedIndex>-1&&t.ctrlIndex!=t.selectedIndex&&(e("li[idx="+t.ctrlIndex+"]",t.listUlEl).attr("className","link"),e("li[idx="+t.selectedIndex+"]",t.listUlEl).attr("className","link on"))},_bind:function(e,t,i){var n=this;l.addEventListener&&(t||n.floatEl).addEventListener(e,n,!!i)},_unbind:function(e,t,i){var n=this;l.removeEventListener&&(t||n.floatEl).removeEventListener(e,n,!!i)},_transitionEnd:function(t){var l=this,i=t.target;if(i&&i.nodeType){var n=i.className?i.className:"";(" "+n+" ").indexOf(" content ")>-1&&(1==l.visible?l.scroller||!y&&!e.os.pad?l.scroller&&l.scroller.refresh():l.scroller=new e.Scroll(l.scrollEl):0==l.visible&&(l.floatEl.style.display="none")),i.style[d]="none"}}}),e(function(){e(l.body).bind(b,function(i){if(i&&i.target&&I){for(var n=i.target,s=0,a=n,r=!1;s<50&&a&&a.nodeType&&a!=l.body;){var o=e.attr(a,"id");if(I==o||I+"_span"==o||I+"_float"==o){r=!0;break}a=a.parentNode,s++}!r&&t[I]&&t[I].hide()}}),p||e(l.body).bind("mousewheel",function(i){if(i&&i.target&&I){for(var n=0,s=i.target,a=!1;s!=l.body&&n<50;){if(s.nodeType&&e.attr(s,"id")==I+"_float"){a=!0;break}s=s.parentNode,n++}!a&&t[I]&&t[I].hide()}})}),e.extend(N,{append:function(e,t,l){return i(e,"append",t,l)},prepend:function(e,t,l){return i(e,"prepend",t,l)},before:function(e,t,l){return i(e,"before",t,l)},after:function(e,t,l){return i(e,"after",t,l)}}),s=null,t.Select=e.Select=N}}(window.Wade,window,document);