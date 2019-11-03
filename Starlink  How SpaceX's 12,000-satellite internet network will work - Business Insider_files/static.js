!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=(e,t)=>{o()&&("error"===e?console.error(e+": "+t):console.log(e+": "+t))},o=()=>!(!r("dbg")||"smtdn9"!=window.xl8_config.dbg),r=e=>{try{if(null!=window.xl8_config[e])return!0}catch(e){return!1}},i=e=>{let t=!1;return e.forEach(e=>{"object"==typeof e&&(t=!0)}),t},a=(e,t,o)=>{let r="|,",i={};for(var a in e.forEach(e=>{if(e.hasOwnProperty("@type"))"PropertyValue"==e["@type"]&&(i.hasOwnProperty(e.name)||(i[e.name]=[]),i[e.name].push(e.value));else{for(var t in e)r+=t+":"+e[t]+",";r+="|"}}),i)n("info","found attribute "+a+" with value "+i[a].join(",")),t[a]=i[a].join(",");r.length>2&&(n("info","found attribute "+o+" with value "+r),t[o]=r)},l=(e,t,o,r)=>{if((new Date).getTime()-r>2500)n("info","Max time exceeded");else for(var s in e){if(void 0===o)var c=s.replace(/ /g,"_");else c=o+"-"+s.replace(/ /g,"_");e.hasOwnProperty(s)&&("object"==typeof e[s]?Array.isArray(e[s])?i(e[s])?a(e[s],t,c):(n("info","found attribute "+c+" with value "+e[s].join()),t[c]=e[s].join()):l(e[s],t,c,r):(n("info","found attribute "+c+" with value "+e[s]),t[c]=e[s]))}},s=e=>{e.readyState==XMLHttpRequest.DONE&&(200!==e.status&&n("error","There was a problem with the request."),200===e.status&&(n("info","Tag fired successfully!"),c(e)))},c=e=>{var t=document.createElement("script");t.text=e.responseText,t.type="text/javascript",t.async=!0,document.body.appendChild(t)},d=(e=[],t=null,o=null)=>{let i={};if(null!=t&&(t.classes.forEach(e=>{let t="";[...document.getElementsByClassName(e)].forEach(e=>{t+=e.innerText}),i[e]=t,n("info","found class "+e+" with value "+t)}),t.ids.forEach(e=>{let t=document.getElementById(e);null!==t&&(i[e]=t.innerText,n("info","found id "+e+" with value "+t.innerText))}),t.elements.forEach(e=>{let t="";[...document.getElementsByTagName(e)].forEach(e=>{t+=e.innerText}),i[e]=t,n("info","found tag "+e+" with value "+t)}),t.complex.forEach(t=>{let o=[];"class"===t.type?o=[...document.getElementsByClassName(t.selector)]:"id"===t.type?o=[document.getElementById(t.selector)]:"element"===t.type&&(o=[...document.getElementsByTagName(t.selector)]),o.forEach(o=>{t.hasOwnProperty("key")&&t.key.split("|").forEach(r=>{let a=o.getAttribute(r);if(null!==a)if("json"===t.valueType)try{window[r]=JSON.parse(a),e.push(r)}catch(e){console.error(e)}else a=a.replace(/[^a-zA-Z0-9]/g,"_"),t.hasOwnProperty("value")?i[a]=o.getAttribute(t.value):i[a]=o.innerText,n("info","found tag "+a+" with value "+i[a])})})}),e.length)){const t=(new Date).getTime();e.forEach(e=>{l(((e="dataLayer")=>{try{if(void 0===window[e])throw new Error;if("object"!=typeof window[e]){let t={};return t[e]=window[e],t}return window[e]}catch(t){n("error",`${e} is undefined`)}})(e),i,void 0,t)})}(e=>{let t=new XMLHttpRequest;t||n("error","cannot create request, giving up"),t.withCredentials=!0,t.onreadystatechange=()=>s(t),t.open("GET",e),t.send(),n("info",`firing tag: ${e}`)})(((e,t,n,o,r)=>{let i=o+"//"+r+"/load/?p="+e+"&g="+t+"&j=d";for(var a in i+="&url="+encodeURIComponent(window.location.href),i+="&rurl="+encodeURIComponent(document.referrer),n)i+="&"+a+"="+encodeURIComponent(n[a]);return i})(window.xl8_config.p,window.xl8_config.g,{...i,...o},(()=>"https:"===window.location.protocol?(n("info","protocol is https"),"https:"):(n("info","protocol is http"),"http:"))(),(()=>r("domain")?(n("info","domain is "+window.xl8_config.domain),window.xl8_config.domain):"mydmp.exelator.com")()))},u=()=>{n("info","starting schema.org flow");const e=JSON.parse((e=>{let t=null;return Array.prototype.forEach.call(e,e=>{"application/ld+json"==e.type&&(t=e)}),t})(document.getElementsByTagName("script")).text);let t={};l(e,t,void 0,(new Date).getTime()),d(null,null,t)},f=(e=null)=>{try{if(n("info","starting data delivery flow"),r("p")&&r("g")){const t=(()=>{let e=[];return!0!==window.xl8_config.disableDataLayer&&(e=["dataLayer"]),r("dataObjects")&&(e=[...e,...window.xl8_config.dataObjects]),e})(),o=(()=>{let e={classes:[],ids:[],elements:[],complex:[]};return r("cssObjects")&&Array.isArray(window.xl8_config.cssObjects)&&window.xl8_config.cssObjects.forEach(t=>{"string"==typeof t?t.startsWith(".")?e.classes.push(t.substring(1)):t.startsWith("#")?e.ids.push(t.substring(1)):e.elements.push(t):"object"==typeof t&&t.hasOwnProperty("selector")&&(t.selector.startsWith(".")?e.complex.push({...t,selector:t.selector.substring(1),type:"class"}):t.selector.startsWith("#")?e.complex.push({...t,selector:t.selector.substring(1),type:"id"}):e.complex.push({...t,type:"element"}))}),e})(),i=e;d(t,o,i),r("enableSchemaOrg")&&window.xl8_config.enableSchemaOrg&&u(),r("interval")&&setInterval(()=>{try{d(t,o,i)}catch(e){n("error","There was a problem with the buildAndFire flow")}},window.xl8_config.interval)}}catch(e){n("error","There was a problem with the delivery flow")}};window.sendToNielsen=(e=null)=>f(e),window.addEventListener?(window.addEventListener("load",f,!1),n("info","added onload listener")):window.attachEvent&&(window.attachEvent("onload",f),n("info","added onload listener"))}]);