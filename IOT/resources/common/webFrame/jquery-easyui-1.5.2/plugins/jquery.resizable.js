/**
 * jQuery EasyUI 1.5.2
 * 
 * Copyright (c) 2009-2017 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
(function(b){b.fn.resizable=function(e,g){function k(d){var a=d.data,e=b.data(a.target,"resizable").options;if(-1!=a.dir.indexOf("e")){var c=a.startWidth+d.pageX-a.startX,c=Math.min(Math.max(c,e.minWidth),e.maxWidth);a.width=c}-1!=a.dir.indexOf("s")&&(c=a.startHeight+d.pageY-a.startY,c=Math.min(Math.max(c,e.minHeight),e.maxHeight),a.height=c);-1!=a.dir.indexOf("w")&&(c=a.startWidth-d.pageX+a.startX,c=Math.min(Math.max(c,e.minWidth),e.maxWidth),a.width=c,a.left=a.startLeft+a.startWidth-a.width);-1!=a.dir.indexOf("n")&&(c=a.startHeight-d.pageY+a.startY,c=Math.min(Math.max(c,e.minHeight),e.maxHeight),a.height=c,a.top=a.startTop+a.startHeight-a.height)}function l(d){d=d.data;var a=b(d.target);a.css({left:d.left,top:d.top});a.outerWidth()!=d.width&&a._outerWidth(d.width);a.outerHeight()!=d.height&&a._outerHeight(d.height)}function m(d){b.fn.resizable.isResizing=!0;b.data(d.data.target,"resizable").options.onStartResize.call(d.data.target,d);return!1}function n(d){k(d);0!=b.data(d.data.target,"resizable").options.onResize.call(d.data.target,d)&&l(d);return!1}function p(d){b.fn.resizable.isResizing=!1;k(d,!0);l(d);b.data(d.data.target,"resizable").options.onStopResize.call(d.data.target,d);b(document).unbind(".resizable");b("body").css("cursor","");return!1}return"string"==typeof e?b.fn.resizable.methods[e](this,g):this.each(function(){function d(c){var d=b(c.data.target),e="",f=d.offset(),h=d.outerWidth(),d=d.outerHeight(),g=a.edge;c.pageY>f.top&&c.pageY<f.top+g?e+="n":c.pageY<f.top+d&&c.pageY>f.top+d-g&&(e+="s");c.pageX>f.left&&c.pageX<f.left+g?e+="w":c.pageX<f.left+h&&c.pageX>f.left+h-g&&(e+="e");c=a.handles.split(",");for(f=0;f<c.length;f++)if(h=c[f].replace(/(^\s*)|(\s*$)/g,""),"all"==h||h==e)return e;return""}var a=null,g=b.data(this,"resizable");g?(b(this).unbind(".resizable"),a=b.extend(g.options,e||{})):(a=b.extend({},b.fn.resizable.defaults,b.fn.resizable.parseOptions(this),e||{}),b.data(this,"resizable",{options:a}));1!=a.disabled&&b(this).bind("mousemove.resizable",{target:this},function(c){if(!b.fn.resizable.isResizing){var a=d(c);""==a?b(c.data.target).css("cursor",""):b(c.data.target).css("cursor",a+"-resize")}}).bind("mouseleave.resizable",{target:this},function(c){b(c.data.target).css("cursor","")}).bind("mousedown.resizable",{target:this},function(c){function a(a){a=parseInt(b(c.data.target).css(a));return isNaN(a)?0:a}var e=d(c);if(""!=e){var f={target:c.data.target,dir:e,startLeft:a("left"),startTop:a("top"),left:a("left"),top:a("top"),startX:c.pageX,startY:c.pageY,startWidth:b(c.data.target).outerWidth(),startHeight:b(c.data.target).outerHeight(),width:b(c.data.target).outerWidth(),height:b(c.data.target).outerHeight(),deltaWidth:b(c.data.target).outerWidth()-b(c.data.target).width(),deltaHeight:b(c.data.target).outerHeight()-b(c.data.target).height()};b(document).bind("mousedown.resizable",f,m);b(document).bind("mousemove.resizable",f,n);b(document).bind("mouseup.resizable",f,p);b("body").css("cursor",e+"-resize")}})})};b.fn.resizable.methods={options:function(e){return b.data(e[0],"resizable").options},enable:function(e){return e.each(function(){b(this).resizable({disabled:!1})})},disable:function(e){return e.each(function(){b(this).resizable({disabled:!0})})}};b.fn.resizable.parseOptions=function(e){var g=b(e);return b.extend({},b.parser.parseOptions(e,["handles",{minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number",edge:"number"}]),{disabled:g.attr("disabled")?!0:void 0})};b.fn.resizable.defaults={disabled:!1,handles:"n, e, s, w, ne, se, sw, nw, all",minWidth:10,minHeight:10,maxWidth:1E4,maxHeight:1E4,edge:5,onStartResize:function(b){},onResize:function(b){},onStopResize:function(b){}};b.fn.resizable.isResizing=!1})(jQuery);