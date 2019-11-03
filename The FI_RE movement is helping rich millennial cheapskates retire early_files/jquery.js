(function($){var listening=false,sourceOrigins=[],$sources=false,URLtoOrigin,setupListener,destroyListener,methods;if('undefined'===typeof window.Jetpack){window.Jetpack={getTarget:function(context){if(this instanceof jQuery){return context?this.filter(context):this;}
return context?$(context):context;},};}
if('undefined'===typeof $.fn.Jetpack){$.fn.Jetpack=function(namespace){if('function'===typeof Jetpack[namespace]){return Jetpack[namespace].apply(this,Array.prototype.slice.call(arguments,1));}else{$.error('Namespace "'+namespace+'" does not exist on jQuery.Jetpack');}};}
if('function'!==typeof window.postMessage){$.extend(window.Jetpack,{resizeable:function(){$.error('Browser does not support window.postMessage');},});return;}
URLtoOrigin=function(URL){if(!URL.match(/^https?:\/\//)){URL=document.location.href;}
return URL.split('/')
.slice(0,3)
.join('/');};setupListener=function(){listening=true;$(window).on('message.JetpackResizeableIframe',function(e){var event=e.originalEvent,data;if(-1===$.inArray(event.origin,sourceOrigins)){return;}
if('object'===typeof event.data){data=event.data.data;}else{try{data=JSON.parse(event.data);}catch(err){data=false;}}
if(!data.data){return;}
data=data.data;if('undefined'===typeof data.action||'resize'!==data.action){return;}
$sources
.filter(function(){if('undefined'!==typeof data.name){return this.name===data.name;}else{return event.source===this.contentWindow;}})
.first()
.Jetpack('resizeable','resize',data);});};destroyListener=function(){listening=false;$(window).off('message.JetpackResizeableIframe');sourceOrigins=[];$('.jetpack-resizeable').removeClass('jetpack-resizeable');$sources=false;};methods={on:function(context){var target=Jetpack.getTarget.call(this,context);if(!listening){setupListener();}
target
.each(function(){sourceOrigins.push(URLtoOrigin($(this).attr('src')));})
.addClass('jetpack-resizeable');$sources=$('.jetpack-resizeable');return target;},off:function(context){var target=Jetpack.getTarget.call(this,context);if('undefined'===typeof target){destroyListener();return target;}
target
.each(function(){var origin=URLtoOrigin($(this).attr('src')),pos=$.inArray(origin,sourceOrigins);if(-1!==pos){sourceOrigins.splice(pos,1);}})
.removeClass('jetpack-resizeable');$sources=$('.jetpack-resizeable');return target;},resize:function(dimensions,context){var target=Jetpack.getTarget.call(this,context);$.each(['width','height'],function(i,variable){var value=0,container;if('undefined'!==typeof dimensions[variable]){value=parseInt(dimensions[variable],10);}
if(0!==value){target[variable](value);container=target.parent();if(container.hasClass('slim-likes-widget')){container[variable](value);}}});return target;},};$.extend(window.Jetpack,{resizeable:function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(!method){return methods.on.apply(this);}else{$.error('Method '+method+' does not exist on Jetpack.resizeable');}},});})(jQuery);