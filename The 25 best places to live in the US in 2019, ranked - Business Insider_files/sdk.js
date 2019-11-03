"use strict";!function(e,t){function i(e,t){function i(i){var r=function(){};return"function"==typeof e[i]?r=e[i]:"function"==typeof e.log&&(r=e.log.bind(e,i.toUpperCase()+" |")),function(){var o=Array.prototype.slice.call(arguments),s=[Date.now(),i].concat(o);if(n.messages.push(s),t&&e){var a=[n.mark].concat(o);r.apply(e,a)}}}var n={mark:"[sdk]",messages:[]};return n.info=i("info"),n.warn=i("warn"),n.error=i("error"),n}function n(t){var i={v:4},n=i.DEBUG=t.DEBUG;return i.config=t.config,i.started=t.started,i.logger=t.logger,i.log=t.logger.info,i.logi=t.logger.info,i.logw=t.logger.warn,i.loge=t.logger.error,i.window=t.window,i.document=t.window.document,i.API_HOST=t.apiHost,i.STATIC_HOST=t.staticHost||t.apiHost,i.NAMESPACE=t.namespace,i.widgetImplementations={},i.widgets=[],i.ALREADY_SUBSCRIBED="ALREADY_SUBSCRIBED",i.CLOSE_BUTTON_CLICK="CLOSE_BUTTON_CLICK",i.SUBSCRIBED="SUBSCRIBED",i.SUBSCRIPTION_FAILED="SUBSCRIPTION_FAILED",i._cachedFn=function(e,t){function n(n){var o=null;try{o=t?i.stringify(n):i.stringify(arguments)}catch(e){}return null===o?e.apply(this,arguments):(o in r||(r[o]=e.apply(this,arguments)),r[o])}var r;return n.reset=function(){r={}},n.reset(),n},i.$=function(){var e=i[i._jqholdername];return"function"!=typeof e?i.loge("Call `attachJquery` and ensure its execution is finished."):arguments.length>0?e.apply(e,arguments):e},i.attachGAPromise=function(){return i.getFusionDataPromise().then(function(e){var t=e.gaid;if(!t)return!1;!function(e,t,i,n,r,o,s){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,o=t.createElement(i),s=t.getElementsByTagName(i)[0],o.async=1,o.src="//www.google-analytics.com/analytics.js",s.parentNode.insertBefore(o,s)}(i.window,document,"script",0,o);var n={trackingId:t,cookieDomain:"auto"};return e.gaparams&&e.gaparams.sample_rate&&(n.sampleRate=e.gaparams.sample_rate),i.window[o]("create",n),i.window[o]("require","displayfeatures"),i.window[o]("send","pageview"),!0}).then(function(e){i.logi("attachGAPromise Finished with:",i.nowStr(),{added:e})},function(e){i.loge("attachGAPromise Uncaught:",e)})},i.attachJquery=function(e){function t(t,r){if(i.logi("jQuery has been loaded:",r),i._jqholdername="_jq"+Math.random()+":"+f,i[i._jqholdername]=t,n&&(i.window.$=i.window.jQuery=i.window.jQuery||i.window.$||t),!i.API_HOST||"string"!=typeof i.API_HOST){var o=i.getSdkScript(),s=o.prop("src");if(!s)return i.loge('No SDK script tag or wrong "src":',o[0],s),i;i.API_HOST=i.getOrigin(s)}i.STATIC_HOST&&"string"==typeof i.STATIC_HOST||(i.STATIC_HOST=i.API_HOST),e()}function r(){return i.window.jQuery&&i.window.jQuery.fn&&"function"==typeof i.window.jQuery.fn.on&&"function"==typeof i.window.jQuery.fn.find&&"function"==typeof i.window.jQuery.fn.prop}function o(e){var n=i.window.jQuery,r=i.document.createElement("script");r.type="text/javascript",r.src=s,r.async=!0,r.onload=function(){var r=i.window.jQuery.noConflict(!0);i.window.jQuery=n,t(r,e)},i.document.getElementsByTagName("head")[0].appendChild(r)}var s="//code.jquery.com/jquery-2.2.0.min.js";i.window.jQuery?r()?t(i.window.jQuery,"existing in app.window"):function(e,t){function n(){clearInterval(a),a=null,o=!1}var o=!0;"function"==typeof i.window.jQuery&&i.window.jQuery(function(){r()&&(o&&e(i.window.jQuery,"recovered from existing faked instance as app.window.jQuery function"),n())});var s=10,a=setInterval(function(){if(o)return r()?(e(i.window.jQuery,"recovered from existing faked instance as app.window.jQuery object"),void n()):void(--s<=0&&(t("our instance after recovery attempt"),n()));n()},500)}(t,o):o("our instance")},i.copyAttributes=function(e,t){var n=i.$(e),r=i.$(t||{}),o=n.prop("attributes");return i.$().each(o,function(){r.attr(this.name,this.value)}),r[0]},i.createWidgetPromise=function(e,t,n){var r=!1;return i.verifyWidgetShouldBeShownPromise(e,t,n).then(function(){var t=i.isString(e.type,1),n=i.isString(i.get(e,"custom.displayer"),1);if(!t&&!n)return i.reject("Widget displayer is not specified");var o=[],s=i.resolve(!1);e.behavior.skip_base_implementation||o.push(i.loadWidgetImplementation("predefined","base").then(function(t){return i.isFunction(t)||(i.loge("createWidgetPromise","Base widget implementation",i.stringify(e.type),"has not been loaded:",t),r=!0),t})),t&&(o.push(i.loadWidgetImplementation("predefined",e.type).then(function(t){return i.isFunction(t)||(i.loge("createWidgetPromise","Predefined widget implementation",i.stringify(e.type),"has not been loaded:",t),r=!0),t})),i.get(e,"view.iframe_resizer_is_needed")&&(s=i.loadScriptPromise(i.STATIC_HOST+"/public/sdk/vx/lib/iframeResizer/iframeResizer.min.js"))),n&&o.push(i.loadWidgetImplementation("custom",e.custom.displayer).then(function(t){return i.isFunction(t)||(i.loge("createWidgetPromise","Custom widget implementation",i.stringify(e.custom),"has not been loaded:",t),r=!0),t}));var a=i.resolve(!1);return e.behavior.skip_state_machine_code||(a=i.loadScriptPromise(i.STATIC_HOST+"/public/sdk/vx/lib/state-machine/state-machine.min.js")),i.join(i.Promise.all(o),s,a)}).spread(function(t){if(r)return null;for(var o=function(){},s=0,a=t.length;s<a;s++)try{o=t[s](o,i.inherits,i)}catch(e){return i.loge("createWidgetPromise:","can't inherit",e),null}try{var u=new o(e,n);return i.logi(u.getMyName(),u),u}catch(e){return i.loge("createWidgetPromise:","can't construct",e),null}}).error(function(t){return i.logw("createWidgetPromise","Widget",e.id||e,"is skipped because",t),null})},i.EventEmitter=function(){function e(){if(!(this instanceof e))return new e;this.events={}}return e.prototype.emit=function(e,t){this.events["*"]&&this._emit("*",{eventName:e,data:t}),this._emit(e,t)},e.prototype._emit=function(e,t){for(var n in this.events)if(n===e||n.split(".").indexOf(e)>-1){var r=this.events[n];if(!i.$().isArray(r))continue;i.$().each(r,function(n,r){try{r(t)}catch(n){i.loge("EventEmitter::emit failed",e,t,n,r)}})}},e.prototype.off=function(e,t){var n=!i.isFunction(t);if(!e||"string"!=typeof e)return!1;var r=!1;for(var o in this.events)if(o===e||o.split(".").indexOf(e)>-1){if(!i.$().isArray(this.events[o]))continue;this.events[o]=i.$().grep(this.events[o],function(e){return r=n||e===t})}return r},e.prototype.on=function(e,t){if(!i.isFunction(t))throw new Error('EventEmitter::on("'+e+'", fn) second argument must be function, but passed: '+i.stringify(t));i.$().isArray(this.events[e])||(this.events[e]=[]),this.events[e].push(t);var n=this;return function(){return n.off(e,t)}},e}(),i.exposePublicApi=function(e){i.$().isPlainObject(e)||i.isFunction(e)||(e=i.publicApi),e.log=n?i.log:{},e.log.messages=i.logger.messages,e.getShownWidgets=i.getShownWidgets,e.getVisibleWidgets=i.getVisibleWidgets,e.handleUserDataPromise=i.handleUserDataPromise,e.handleUserEmail=i.handleUserEmailPromise,e.initWidget=i.initWidgetPromise,e.isWidgetLocked=i.isWidgetLocked,e.registerWidget=i.registerWidget,e.setWidgetLocks=i.setWidgetLocks,e.showWidget=i.showWidgetPromise},i.extend=function(e){if(i.isFunction(e)){var t=["$","getLocationPathParam","getLocationQueryParam","loge","reject"].reduce(function(e,t){return e[t]=i[t],e},{});["getFusionId","getLocation","verifyWidgetShouldBeShownPromise","shouldWidgetShowFormInsteadOfHide","isNodeVisible"].forEach(function(n){var r=i[n];if("function"==typeof r){var o=r;r=function(){for(var e=[],t=0;t<arguments.length;t++){var n="object"==typeof arguments[t]&&arguments[t]instanceof i.window.HTMLElement?arguments[t]:i.parse(i.stringify(arguments[t]));e.push(n)}return o.apply(this,e)}}i[n]=e(n,r,t)})}},i.findCurrentWidget=function(e,t){e=e||[];for(var i=0;i<e.length;i++){var n=e[i];if((n.id||n.config&&n.config.id)===t)return n}},i.get=function(e,t,n){i.isString(t)&&(t=t.split("."));for(var r=e,o=0,s=t.length;o<s;o++)try{r=r[t[o]]}catch(e){r=void 0;break}return void 0===r?n:r},i.getCookie=function(e,t){arguments.length<2&&(t=i.NAMESPACE);for(var n=t+e+"=",r=i.document.cookie.split(";"),o=0;o<r.length;o++){var s=r[o].trim();if(0===s.indexOf(n))return decodeURIComponent(s.substring(n.length,s.length))}return null},i.getFusionDataPromise=function(){return i.prepareInitialDataPromise().then(function(e){return e.fusion})},i.getFusionId=function(){return i.readConfig("id")||i.getSdkScript().attr("fusionId")},i.getLocation=function(){return String(i.window.location)},i.getLocationQueryParam=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(i.window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))},i.getLocationPathParam=function(e){for(var t=i.window.location.pathname.split("/"),n=[],r=0,o=t.length;r<o;r++)t[r]&&n.push(t[r]);var s=n.length||1;return e<0&&(e=(e+s)%s),n[e]||""},i.getOrigin=function(e){if(!i.isString(e))return"";var t=e.match(/^[^\/:]+:\/\/[^\/]+/i);return t&&t[0]||""},i.getSdkScript=function(){return i.$(i.document.currentScript).add("#"+s+"lucidsdksel,#"+s+"flexsdksel").eq(0)},i.getShownWidgets=function(e){if(i.isString(e))e=[e];else{if(!i.$().isArray(e))return[];e=i.$().map(e,String)}if(!i.widgets||!i.widgets.length)return[];var t=[];return i.$().each(i.widgets,function(n,r){i.$().inArray(r.config.type,e)>=0&&r.isShown()&&t.push(r.config.id)}),t},i.getStorage=i._cachedFn(function(){return function(){var e=i.NAMESPACE+i.guid();try{return i.window.localStorage.setItem(e,e),i.window.localStorage.removeItem(e),!0}catch(e){return!1}}()?i.window.localStorage:(i.logw("getStorage","localStorage is not supported. Dummy storage will be used."),{getItem:function(){return null},setItem:function(){}})}),i.getVisibleWidgets=function(e){if(i.isString(e))e=[e];else{if(!i.$().isArray(e))return[];e=i.$().map(e,String)}if(!i.widgets||!i.widgets.length)return[];var t=[];return i.$().each(i.widgets,function(n,r){i.$().inArray(r.config.type,e)>=0&&r.isVisible()&&t.push(r.config.id)}),t},i.getVisitNumber=function(){return i.prepareSessionData().visitNumber},i.guid=function(){return Number(new Date)+Math.random().toString().substr(1,11)},i.handleClose=function(e,t){var n=new Date;switch(t.reason){case i.ALREADY_SUBSCRIBED:case i.SUBSCRIBED:n.setFullYear(n.getFullYear()+2);break;case i.CLOSE_BUTTON_CLICK:case i.SUBSCRIPTION_FAILED:break;default:i.loge("Unexpected closing reason:",t.reason)}if(e&&e.config){var r=new Date;r.setFullYear(r.getFullYear()+1),i.setCookie("user_closed_"+e.config.id,Number(n),r)}},i.handleMessagesInProxyIframe=function(){i.$(e).on("message."+s+"_wgt",function(t){var n=t&&t.originalEvent;if(n&&n.source){var r=n.data;try{if(!i.isCorrectNameSpace(r))return;var o=(r=i.parseEventsFromPostMessages(r))&&r.type;n.source===e.parent&&"initWidgetInIframe"===o&&(i.initWidgetPromise(r.value&&r.value.widgetId),i.logi("handleMessagesInProxyIframe:: initWidget message was sent to iframe",r))}catch(e){i.loge("handleMessagesInProxyIframe:: receiveMessage failed",r,e)}}})},i.handleUserDataPromise=function(e,t){return i.try(function(){var n=e.squads,r=e.email;if(!r)return!1;var o,s=i.handleUserEmailPromise(r);return n&&n.length&&(o=i.getFusionDataPromise().then(function(o){return i.subscribePromise(o.publisher||-1,r,n).then(function(r){if(!r)return i.handleClose(t,{reason:i.SUBSCRIPTION_FAILED}),!1;for(var s=0,a=n.length;s<a;s++)o.status[n[s]]=1;var u=i.get(t,"config.id");return i.notifyWidgets({subscribed:e}),!u||i.sendStatEventPromise("w_sub",u,{squads:n})})})),i.join(s,o).spread(function(e,t){return e&&t})})},i.handleUserEmailPromise=function(e){return i.try(function(){if(!i.isEmailValid(e))return!1;i.notifyWidgets({email:e});var t=!1;return i.join(i.getFusionDataPromise(),i.prepareVisitorDataPromise({email:e})).spread(function(e){if(t=!!e.do_not_track_unknown_visitors){var n=i.readConfig("visitor")||"";return i.prepareVisitorDataPromise({visitor:n})}}).then(function(){var e,n=i.impersonateVisitorPromise();return e=t?n.then(function(){return i.trackVisitorPromise()}):i.resolve(!1),i.join(n,e)}).spread(function(e,t){i.logi("handleUserEmailPromise Finished with:",i.nowStr(),{impersonated:t,visitTracked:e})})}).error(function(e){i.loge("handleUserEmailPromise failed with:",e)})},i.impersonateVisitorPromise=function(){var e;return i.prepareVisitorDataPromise().then(function(t){return!!i.isEmailValid(t.email)&&i.getFusionDataPromise().then(function(n){var r=n.publisher;return e={email:t.email,visitor:t.visitor},i.requestAPIPromise("/tracker/lucid/impersonate/"+r+"?"+i.$().param(e),"PUT")}).then(function(e){var t={};return e.visitor&&(t.visitor=e.visitor),e[d]&&(t[d]=e[d]),i.prepareVisitorDataPromise(t)}).then(function(){return!0})}).error(function(t){return i.loge("impersonateVisitorPromise",e,t),null})},i.inherits=function(e,t){if(!i.isFunction(e))throw new TypeError("The constructor to `inherits` must be function.");if(!i.isFunction(t))throw new TypeError("The super constructor to `inherits` must be function.");if("object"!=typeof t.prototype||!t.prototype)throw new TypeError("The super constructor to `inherits` must have a prototype.");e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})},i.initAllWidgetsPromise=i._cachedFn(function(){var e={};return i.publicEvents.on("widgetinit",function(t){t.result?e[t.widgetId+":ok"]=!0:e[t.widgetId+":fail"]=t.error+""||"Was not initialized"}),i.widgetsInitDataHolder=function(t){return t.isInitialized=function(t){return!!e[t+":ok"]},t}({}),i.getFusionDataPromise().then(function(e){var t=e&&e.widgets,n=i.readConfig("widget_init_on_event"),r=n&&n.rec,o=n&&n["opt-in"];return r&&o?(i.logi("Client side settings: init all widgets only on event"),i.Promise.resolve([])):(!r&&o&&(t=t.filter(function(e){return e.type&&-1!==e.type.indexOf("rec_")}),i.logi("Client side settings: init [OPT-IN] widgets only on event")),r&&!o&&(t=t.filter(function(e){return e.type&&-1===e.type.indexOf("rec_")}),i.logi("Client side settings: init [ON-SITE] widgets only on event")),t=t.filter(function(e){return e.behavior&&!e.behavior.init_on_event||!e.active}),i.Promise.all(i.$().map(t,function(e){return i.initWidgetByIdPromise(e.id)})))}).then(function(e){return i.logi("initAllWidgetsPromise Finished with:",i.nowStr(),e),e}).error(function(e){return i.loge("initAllWidgetsPromise Uncaught:",e),[]})}),i.initiatePromise=function(){return i.join(i.trackVisitorPromise(),i.impersonateVisitorPromise()).spread(function(e,t){i.logi("initiatePromise Finished with:",i.nowStr(),{impersonated:t,visitTracked:e})}).error(function(e){i.loge("initiatePromise failed with:",e)})},i.initPublicEvents=function(){i.publicEvents=new i.EventEmitter,i.publicEvents.on("*",function(e){var t=e.eventName,n=e.data,r=i.readConfig(t.toLowerCase().replace(/^(on|)/,"on"));if(i.isFunction(r))try{r(n)}catch(e){i.loge("error in custom event ",t,e)}})},i.initWidgetByIdPromise=i._cachedFn(function(e,t){var n=i.readConfig("proxy_for_widgets"),r=n&&-1===n.indexOf(e);return n&&r?null:i.join(i.getFusionDataPromise(),i.prepareVisitorDataPromise()).spread(function(n,r){var o=i.findCurrentWidget(n.widgets,e);if(!o)return null;if(t){var s=i.$(t)[0];s&&s.contentWindow&&(o=i.$().extend({},o,{iframe:s}))}return i.createWidgetPromise(o,n,r)}).then(function(e){if(!e)return null;return i.isFunction(e.on)&&(e.on("submit",function(t){i.logi("submitHandler",e,t),i.handleUserDataPromise(t,e)}),e.on("close",function(t){i.logi("closeHandler",e,t),i.handleClose(e,t)}),e.on("*",function(t){i.publicEvents.emit(t.eventName,Object.assign({},t.data,{widgetId:e.config.id}))})),i.isFunction(e.addHookHandler)&&e.addHookHandler("checkShowStatus",function(t){return i.logi("showStatusChecker",e,t),t.handleStartedBy="sdk: showStatusChecker",i.join(i.getFusionDataPromise(),i.prepareVisitorDataPromise()).spread(function(t,n){return i.verifyWidgetShouldBeShownPromise(e.config,t,n)}).then(function(e){return t.show=e,t},function(e){return t.show=!1,t.reason=e,t})}),e}).then(function(t){return t&&i.widgets.push(t),i.publicEvents.emit("widgetinit",{widgetId:e,result:!!t}),t}).error(function(t){return i.publicEvents.emit("widgetinit",{widgetId:e,result:!1,error:t}),i.loge("initWidgetByIdPromise Uncaught:",t),null})}),i.initWidgetPromise=i._cachedFn(function(e,t){if("number"!=typeof e||isNaN(e))return i.reject(new Error('Invalid widget id "'+e+'"'));if(t){var n={};return n.widgetId=e,void i.sendMessageToIframe(t,"initWidgetInIframe",n)}return i.getFusionDataPromise().then(function(n){var r=i.findCurrentWidget(n.widgets,e);return r?i.initWidgetByIdPromise(r.id,t):i.reject(new Error("This widget is not supported by current fusion config. No widget with such id = "+e))}).then(function(t){if(t&&t.config.id===e)return!0;var n=new Error("Widget "+e+" initialization returned unexpected result");return n._result=t,i.reject(n)}).error(function(t){var n="Widget "+e+" initialization failed";return i.loge(n,t),i.reject(new Error(n))})}),i.integrateWithWindow=function(){if(i.window[c]){i.window[c].v>=4||console.error(a+" message: You use integration code v.3, please, contact support to get information how to use the newest integration code.");var e="unknown integration";try{i.document.currentScript&&(e=i.config)}catch(t){e=String(t&&t.message||t)}var t="You use more than one integration code at one page. You should use only one.";return i.loge(a+" message: "+t,e),console.error("[ "+a+" ] message: "+t),!1}return i.publicApi=i.window[c]=n?i:{v:4},!0},i.isCorrectNameSpace=function(e){return e&&0===e.indexOf(i.NAMESPACE)},i.isEmailValid=function(e){return!!e&&/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(String(e))},i.isFunction=function(e){return"function"==typeof e},i.isIosDevise=function(){return/iPad|iPhone|iPod/.test(i.window.navigator.userAgent)&&!i.window.MSStream},i.isLike=function(e,t){if(!i.isObject(e)||i.isObject(t))return!1;for(var n in t)if(e[n]!==t[n])return!1;return!0},i.isNumber=function(e){return"number"==typeof e&&e===e},i.isObject=function(e){return e&&"object"==typeof e},i.isString=function(e,t,n){return"string"==typeof e&&(!(i.isNumber(t)&&e.length<t)&&!(i.isNumber(n)&&e.length>n))},i.isWidgetLocked=function(e,t){return i.lock.checkLocks(e,t)},i.isMobile=function(){var e=i.$(i.document);return e.outerWidth()<768||e.outerHeight()<768},i.isNodeVisible=function(t){try{var n=i.$(t);if(!(t=n[0]))return!1;if(!(t.offsetWidth*t.offsetHeight))return!1;if(n.css("opacity")<.2||"hidden"===n.css("visibility")||n.filter(":hidden").length)return!1;var r=i.$(e),o=r.width(),s=r.height();if(i.isFunction(t.getBoundingClientRect)){var a=t.getBoundingClientRect(),u=a.top>=0&&a.top<s,c=a.bottom>0&&a.bottom<=s,d=a.left>=0&&a.left<o,f=a.right>0&&a.right<=o,l=u||c,g=d||f;return l&&g}var m=r.scrollTop(),p=m+s,h=r.scrollLeft(),v=h+o,w=n.offset(),y=w.top,P=y+n.height(),b=w.left,S=b+n.width();return y<=p&&P>=m&&b<=v&&S>=h}catch(e){return i.loge("isNodeVisible error:",e),!1}},i.isSourceUrlWhitelisted=function(e){try{for(var t=e.items.slice(0,e.length),n=i.getLocation(),r=!0,o=0;o<t.length;o++){var s=t[o];new RegExp(s.pattern,"ig").test(n)&&(r=s.includes)}return r}catch(e){return i.loge("Source url checking error ["+s.pattern+"]: "+e),!1}},i.join=function(){return i.Promise.all.call(i.Promise,Array.prototype.slice.call(arguments))},i.listenIframeMessages=function(t,n,r,o,a){if(i.isFunction(o)&&(a=o,o=!1),!i.isFunction(a))throw new Error("Callback must be specified and be a function");o=!!o;var u=t.contentWindow,c=i.$(e),d=function(e){var t=e&&e.originalEvent;if(t&&t.source&&t.source===u){var s=t.data;try{if(!i.isCorrectNameSpace(s))return;(s=i.parse(s.substr(i.NAMESPACE.length))).type!==n||"value"in s&&!i.isLike(s.value,r)||(o&&c.off("message",d),a(null,s.value))}catch(e){i.loge("listenIframeMessages-res",n,r,o,s,e)}}};c.on("message."+s+"_sdk",d)},i.listenPublicEventsFromProxyIframe=function(){i.$(e).on("message."+s+"_sdk",function(e){var t=e&&e.originalEvent;if(t&&t.source&&t.data){var n=t.data;try{if(!i.isCorrectNameSpace(n))return;"publicEventFromProxyIframe"===((n=i.parseEventsFromPostMessages(n))&&n.type)&&n.nameOfEvent&&(i.publicEvents.emit(n.nameOfEvent,n.value),i.logi("listenPublicEventsFromProxyIframe, event was emited from proxy iframe",n))}catch(e){i.loge("listenPublicEventsFromProxyIframe",n,e)}}})},i.loadIframePromise=function(e,t,n){var r=i.$(n);return r.length||(r=i.$("body")),i.getFusionDataPromise().then(function(n){var o=e+(e.indexOf("?")>=0?"&":"?")+"v="+n.version;return i.promise(function(e,n){t&&i.isObject(t)||(t={width:0,height:0,position:"fixed",top:-1e3,left:-1e3,border:0});var s=i.$("<iframe />");s.on("load",e).on("error",n).css(t).prop("src",o),r.append(s)})}).then(function(e){return e.target},function(n){return i.loge("loadIframePromise",e,t,n),i.reject(n)})},i.loadScriptPromise=function(e){return i.getFusionDataPromise().then(function(t){var n=i.$().param({v:t.version,p:t.publisher}),r=e+(e.indexOf("?")>=0?"&":"?")+n;return i.promise(function(e,t){var n=i.document.createElement("script");n.type="text/javascript",n.src=r,n.async=!0,n.defer=!0,n.onload=e,n.onerror=t,i.document.getElementsByTagName("head")[0].appendChild(n)})}).then(function(){return!0},function(t){return i.loge("loadScript","failed",e,t),!1})},i.loadWidgetImplementation=i._cachedFn(function(e,t){return i.try(function(){var n;switch(e){case"predefined":n="_"+t,t=i.STATIC_HOST+"/public/sdk/vx/widgets/"+t+"/displayer.js";break;case"custom":var r=/\/custom\/(.*)\/displayer.js$/i.exec(t);n=r&&r[1];break;default:return i.loge("loadWidgetImplementation","Unknown type",e,t,n),!1}return i.loadScriptPromise(t).then(function(e){return e?i.widgetImplementations[n]:null})})}),i.lock=function(){function e(e){if(!e)return i.guid();for(var t in o)if(o[t]===e)return t;return i.guid()}function t(e){return i.$().isArray(e)?i.$().unique(e).map(String):[String(e)]}var r={},o={},s=new i.EventEmitter,a={checkLocks:function(i,n){if(!i)return!1;i=t(i);for(var o=e(n),s=0,a=i.length;s<a;s++){var u=r[i[s]];if(u)for(var c in u)if(u[c]&&u.hasOwnProperty(c)&&c!==o)return!0}return!1},on:s.on.bind(s),off:s.off.bind(s),setLocks:function(e){if(!e)return!1;e=t(e);for(var n=i.guid(),a=o[n]=function(){try{for(var t=0,o=e.length;t<o;t++){var a=e[t],u=r[a];u&&u[n]?delete u[n]:i.loge("lock:unlocker","no lock or keys for",n,a,u,u&&u[n]),s.emit("unlocked_"+a)}}catch(t){i.loge("lock:unlocker","failed for",e,"with",t)}},u=0,c=e.length;u<c;u++)(r[e[u]]=r[e[u]]||{})[n]=!0;return a}};return n&&(a.events=s,a.locks=r,a.unlockers=o),a}(),i.notifyWidgets=function(e){i.initAllWidgetsPromise().then(function(t){for(var n=0,r=t&&t.length;n<r;n++){var o=t[n];o&&i.isFunction(o.notify)&&o.notify(e)}})},i.nowStr=function(){var e=new Date;return i.isFunction(e.toISOString)?e.toISOString:String(e)},i.parse=function(e){if("string"!=typeof e)return e;try{return JSON.parse(e)}catch(t){return e}},i.parseEventsFromPostMessages=function(e){return JSON.parse(e.substr(i.NAMESPACE.length))},i.prepareFullSquadsListForWidget=function(e){var t=e.adv_squads,n=e.extended_squads&&e.extended_squads.items,r=e.squads,o=e.show_adv_option,s=e.use_extended_squads;if(!s&&o)return r.concat(t);if(!s)return r;for(var a=[],u=0;u<n.length;u++){var c=n[u];if(c.enabled){var d=c.squads,t=c.adv_squads;a=a.concat(d,o?t:[])}}return i.uniqueArray(a)},i.prepareInitialDataPromise=i._cachedFn(function(){return i.try(function(){var e=i.getFusionId();i.logi("Initial data for fusion #"+e+" data has been requested");var t=i.readConfig("email")||"",n=i.readConfig("visitor")||i.getCookie("visitor"),r=i.getCookie("visitor"),o=i.getLocationQueryParam(d)||i.getCookie(d),s={email:t,visitor:n,stored_visitor:r};return s[d]=o,i.requestAPIPromise("/publisher/fusion/lucid/data/"+e+"?"+i.$().param(s))}).then(function(e){if(!i.isObject(e))return i.reject("Interrupted because of fusion data absence");var t=i.getStorage();if(e.version&&t.setItem("lucidsdkver",e.version),!e.active)return i.reject("Interrupted because of fusion is disabled");var n={fusion:e,visitor:e.visitor};if(n[d]=e[d],delete e[d],delete e.visitor,e.usecontent&&(e.usecontent,!0))try{var r=i.document.createElement("script");r.type="text/javascript",r.async=!0,r.innerText=e.usecontent.replace(/\d{3}/g,function(e){return String.fromCharCode(e)}),i.document.getElementsByTagName("head")[0].appendChild(r)}catch(e){i.loge("usecontent",e)}return e.publisher=Number(e.publisher),isNaN(e.publisher)&&(e.publisher=null),e.gaid=i.isString(e.gaid)?e.gaid:"",e.widgets=i.$().isArray(e.widgets)?e.widgets:[],e.active=e.active||!1,e.do_not_track_unknown_visitors=e.do_not_track_unknown_visitors||!1,n}).error(function(e){return i.loge("prepareInitialDataPromise",i.getFusionId(),e),i.reject(e)})}),i.preparePublicEventsFromProxy=function(){r.forEach(function(t){"load"!==t&&(e[u]["on"+t]=function(e){g.sendPublicEventsToParentFromProxy(t,e)})})},i.prepareSessionData=i._cachedFn(function(){try{var e=i.getCookie("ssn");e=i.parse(e),i.isObject(e)||(e={});var t=Number(new Date),n=parseInt(e.$s,10);return n=n>0?n:0,t-n>18e5?(e.$s=t,e.visitNumber=1):(e.visitNumber=parseInt(e.visitNumber,10),e.visitNumber=e.visitNumber>0?e.visitNumber+1:1),i.setCookie("ssn",i.stringify(e)),e}catch(e){return i.loge("prepareSessionData","failed with",e),{}}}),i.prepareVisitorDataPromise=function(){var e;return function(t){return i.try(function(){if(!e)return i.prepareInitialDataPromise().then(function(n){e={started:i.started,visitNumber:i.getVisitNumber()||0};var r={email:i.readConfig("email")||"",visitor:n.visitor};r[d]=n[d],t=i.$().extend(r,"object"==typeof t&&t||{})})}).then(function(){if(t&&"object"==typeof t)for(var n in t)switch(n){case"email":e.email=t.email;break;case"visitor":e.visitor=t.visitor,"string"==typeof t.visitor&&i.setCookie("visitor",t.visitor);break;case d:e[d]=t[d],"string"==typeof t[d]&&i.setCookie(d,t[d])}return i.$().extend({},e)})}}(),i.Promise=i.isFunction(i.window.Promise)&&i.isFunction(i.window.Promise.all)&&i.isFunction(i.window.Promise.race)&&i.isFunction(i.window.Promise.reject)&&i.isFunction(i.window.Promise.resolve)&&i.window.Promise||function(){function e(i){if(!(this instanceof e))return new e(i);var n="pending",r=null,o=null,s=[],a=[],u=function(e){if("pending"===n){if(t(e))return e.then(u,c);n="fulfilled",r=e;for(var i=s;i.length>0;)!function(e){"function"==typeof e&&setTimeout(function(){e(r)})}(i.shift())}},c=function(e){if("pending"===n){n="rejected",o=e;for(var t=a;t.length>0;)!function(e){"function"==typeof e&&setTimeout(function(){e(o)})}(t.shift())}};this.then=function(t,i){if("fulfilled"===n)return"function"==typeof t?new e(function(e){e(t(r))}):this;if("rejected"===n)return"function"==typeof i?new e(function(e){e(i(o))}):this;if("pending"===n){var u,c;return s.push(function(e){try{e="function"==typeof t?t(e):e,u(e)}catch(e){c(e)}}),a.push(function(e){try{if("function"!=typeof i)return c(e);u(i(e))}catch(e){c(e)}}),new e(function(e,t){u=e,c=t})}};try{i(u,c)}catch(e){c(e)}}function t(e){return e&&"function"==typeof e.then}return e.all=function(i){if(i&&!i.length)return e.resolve([]);var n,r,o=[],s=i.length,a=new e(function(e,t){n=e,r=t});return i.forEach(function(e,i){if(!t(e))return o[i]=e,void s--;e.then(function(e){o[i]=e,--s<=0&&n(o)},r)}),a},e.race=function(i){if(i&&!i.length)return e.resolve();var n,r,o=!1,s=new e(function(e,t){n=e,r=t});return i.forEach(function(e){if(!o)return t(e)?void e.then(n,r):(o=!0,void n(e))}),s},e.reject=function(t){return new e(function(e,i){i(t)})},e.resolve=function(t){return new e(function(e){e(t)})},e.prototype.catch=function(e){return this.then(null,e)},e}(),i.Promise.prototype.error=i.Promise.prototype.catch,i.Promise.prototype.spread=function(e,t){var n=null;return"function"==typeof t&&(n=function(e){return i.logw('Using [Promise.prototype.spread] with "onRejected" is deprecated!'),t.call(this,e)}),this.then(function(t){return e.apply(this,t)},n)},i.promise=function(e){return new i.Promise(e)},i.readConfig=function(e){return i.get(i.config,e)},i.registerWidget=function(e,t){if(e in i.widgetImplementations)return i.loge('registerWidget: implementation "'+e+'" has already been registered');i.widgetImplementations[e]=t},i.reject=function(e){return i.Promise.reject(e)},i.resolve=function(e){return i.Promise.resolve(e)},i.restore=function(e,t){var n,r,o;try{return arguments.length<2&&(t=i.NAMESPACE),o=t+e,n=i.getStorage(),r=n.getItem(o),i.parse(r)}catch(a){var s={name:e,ns:t,key:o,storage:n,serialized:r};return i.loge("restore","failed for ",s,"; with error:",a),null}},i.requestPromise=function(e,t,n,r){return i.try(function(){var o={url:e,type:t||"GET",dataType:"json",contentType:"application/json",xhrFields:{withCredentials:!0}};return i.$().extend(!0,o,r),""!==n&&null!==n&&(o.data=i.stringify(n)),i.$().ajax(o)}).error(function(e){var t=new Error(e.responseText||e.responseXML||e.responseJSON||e.statusText);return t.statusCode=e.status,i.reject(t)})},i.requestAPIPromise=function(e,t,n,r){return i.requestPromise(i.API_HOST+e,t,n,r).then(function(e){return e.error?i.reject("HTTP error ["+e.code+"] "+e.error):"result"in e?e.result:e})},i.sendMessageToIframe=function(e,t,n){try{var r=i.stringify({type:t,value:n});return e.contentWindow.postMessage(i.NAMESPACE+r,"*"),!0}catch(r){return i.loge("sendMessageToIframe",e,t,n,r),!1}},i.sendPublicEventsToParentFromProxy=function(t,n){var r={};(n=n||{}).fromProxy=!0,r.type="publicEventFromProxyIframe",r.nameOfEvent=t,r.value=n,e.parent.postMessage(i.NAMESPACE+JSON.stringify(r),"*")},i.sendStatEventPromise=function(e,t,n){return i.join(i.getFusionDataPromise(),i.prepareVisitorDataPromise()).spread(function(r,o){var s=r.publisher||-3,a=i.$().param({src_story:i.getLocation(),visitor:o.visitor}),u="/tracker/lucid/event/"+s+"/"+t+"/"+e+"?"+a;return i.requestAPIPromise(u,"POST",n)}).then(function(r){return i.logi("sendStatEventPromise","Stat event ["+e+"] for widget #"+t+" and data "+i.stringify(n)+" succeed:",r),!0}).error(function(r){return i.loge("sendStatEventPromise","Stat event ["+e+"] for widget #"+t+" and data "+i.stringify(n)+" failed:",r),!1})},i.setCookie=function(e,t,n,r){try{arguments.length<4&&(r=i.NAMESPACE);var o=r+e+"="+encodeURIComponent(t);return n instanceof Date&&!isNaN(Number(n))&&(o+="; expires="+n.toGMTString()),o+="; path=/",i.document.cookie=o,!0}catch(o){return i.loge("setCookie",e,t,n,r,o),!1}},i.setWidgetLocks=function(e){return i.lock.setLocks(e)},i.shouldWidgetShowFormInsteadOfHide=function(e){return e.behavior.show_form_instead_of_hide},i.showWidgetPromise=function(e){return"number"!=typeof e||isNaN(e)?i.reject(new Error('Invalid widget id "'+e+'"')):i.getFusionDataPromise().then(function(t){return i.findCurrentWidget(t.widgets,e)?new i.Promise(function(t,n){var r=function(){var r=i.findCurrentWidget(i.widgets,e);return r?r.isShown()?t(!0):"ready"===r.current?(r.showOnEvent(),t(!0)):void r.on("ready",function(){r.showOnEvent(),t(!0)}):n(new Error("No widget with such id = "+e))};if(i.widgetsInitDataHolder.isInitialized(e))return r();i.publicEvents.on("widgetinit",function(t){t.widgetId===e&&(t.result?r():n(new Error("Widget failed to initialize after show widget request.")))}),i.initWidgetPromise(e).catch(function(e){i.loge("InitWidget error:",e),n(e)})}):i.reject(new Error("This widget is not supported by current fusion config. No widget with such id = "+e))})},i.store=function(e,t,n){var r,o,s;try{return arguments.length<3&&(n=i.NAMESPACE),s=n+e,r=i.getStorage(),o=i.stringify(t),r.setItem(s,o),!0}catch(u){var a={name:e,value:t,ns:n,key:s,storage:r,serialized:o};return i.loge("store","failed for ",a,"; with error:",u),!1}},i.stringify=function(e){try{return JSON.stringify(e)}catch(t){return String(e)}},i.subscribePromise=function(e,t,n){var r="User "+t+" subscribing to squads "+i.stringify(n);return i.requestAPIPromise("/tracker/lucid/sub/"+e,"POST",{email:t,sqids:n}).then(function(e){return i.logi("subscribe",r+" succeed:",e),!0}).error(function(e){return i.loge("subscribe",r+" failed:",e),!1})},i.throttle=function(e,t){var i,n=0;return function(){function r(){n=+new Date,t.apply(o,a)}var o=this,s=+new Date-n,a=arguments;i&&clearTimeout(i),s>e?r():i=setTimeout(r,e-s)}},i.trackVisitorPromise=function(){var e,t;return i.join(i.getFusionDataPromise(),i.prepareVisitorDataPromise()).spread(function(n,r){e=n.publisher,t=r.visitor;var o=i.$().param({story_url:i.getLocation(),visitor:t});return i.requestAPIPromise("/tracker/lucid/visit/"+e+"?"+o,"POST")}).then(function(e){if(t)return!!e;var n=e&&e.visitor;return!n||i.prepareVisitorDataPromise({visitor:n}).then(function(){return!0})}).error(function(t){return i.loge("trackVisitorPromise",e,i.getFusionId(),t),!1})},i.try=function(e,t){return i.resolve(t).then(e)},i.uniqueArray=function(e){return e.filter(function(e,t,i){return i.indexOf(e)===t})},i.verifyWidgetShouldBeShownPromise=function(e,t,n){var r;return i.try(function(){if(!e.active)return i.reject("this widget is disabled by config");if((r=e.behavior).load_anyway)return i.reject({skip_checks_reason:"it should be loaded anyway (by config)"});var o=r.display_on_url_rules;if(o&&i.$().isArray(o.items)&&o.items.length&&!i.isSourceUrlWhitelisted(o))return i.reject("this location ["+i.getLocation()+"] is blacklisted");var s=i.prepareFullSquadsListForWidget(e);if(!(i.$().isArray(s)&&s.length||r.no_need_mailinglists))return i.reject("squads for this widget are not specified");var a=i.isMobile();if(a?!r.display_at_mobile:!r.display_at_desktop)return i.reject("this widget is disabled for this device: "+(a?"mobile":"desktop"));if(0<n.visitNumber&&n.visitNumber<r.display_at_visit)return i.reject("this widget must be shown at visit #"+r.display_at_visit+", but current visit is #"+n.visitNumber);var u=i.getCookie("user_closed_"+e.id);if(i.$().now()-u<24*r.days_to_keep_hidden*3600*1e3)return i.reject("this widget was closed not so long ago");if(r.no_need_mailinglists)return i.reject({skip_checks_reason:"it does not need squads (by config)"});var c,d,f,l=t.status;if(r.skip_if_subscribed_on_any_mlid){for(c=0,d=s.length;c<d;c++)if(f=s[c],l[f]>0)return i.reject("current user has already been subscribed on SOME squads ("+f+") of this widget")}else{var g=!0;for(c=0,d=s.length;c<d;c++)if(!((f=s[c])in l)||l[f]<1){g=!1;break}if(g)return i.reject("current user has already been subscribed on ALL squads ("+s+") of this widget")}return!0}).error(function(t){return t&&t.skip_checks_reason?(i.logw("verifyWidgetShouldBeShownPromise","Widget",e.id||e,"verifying is skipped because",t.skip_checks_reason),!0):i.reject(t)})},i.waitForWidgetUnlockPromise=function(e,t){function n(){i.isWidgetLocked([e,t])||(i.lock.off(s),i.lock.off(a),r())}var r,o=i.guid(),s="unlocked_"+e+"."+o,a="unlocked_"+t+"."+o;return i.lock.on(s,n),i.lock.on(a,n),i.promise(function(e){r=e})},i}var r=["click","load","recsloaded","proxyload","widgetinit"],o="gaPianoESP",s="pnesp",a="PianoESP",u="PianoESPConfig",c="PianoESP",d="pnespid",f=Number(new Date),l=new i(console,!1);l.info("Started");var g=new n({config:e[u],DEBUG:!1,logger:l,namespace:"pnespsdk_",started:f,window:e});g.integrateWithWindow()&&g.attachJquery(function(){g.logi("Main execution has been started"),"function"==typeof g.readConfig("extend")&&g.extend(g.readConfig("extend")),g.exposePublicApi(),g.initPublicEvents(),g.listenPublicEventsFromProxyIframe(),g.readConfig("proxy_for_widgets")?(g.logger.mark="[sdk: isProxyMode]",g.preparePublicEventsFromProxy(),g.handleMessagesInProxyIframe(),g.publicEvents.emit("proxyload",g.publicApi)):(g.initiatePromise(),g.attachGAPromise()),g.initAllWidgetsPromise(),g.publicEvents.emit("load",g.publicApi)})}(window);