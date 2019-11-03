(window.webpackJsonp=window.webpackJsonp||[]).push([["AdminCommunityTopics~Reddit"],{"./src/graphql/operations/CreateSubredditTags.json":function(t){t.exports=JSON.parse('{"id":"639d65a32e0e"}')},"./src/graphql/operations/DeleteTags.json":function(t){t.exports=JSON.parse('{"id":"85a644f8353a"}')},"./src/graphql/operations/FetchGlobalTags.json":function(t){t.exports=JSON.parse('{"id":"1d3331c579e0"}')},"./src/graphql/operations/FetchSubredditTags.json":function(t){t.exports=JSON.parse('{"id":"8e39ae6fa332"}')},"./src/graphql/operations/UpdateSubredditTagStates.json":function(t){t.exports=JSON.parse('{"id":"70f7ff70f03e"}')},"./src/graphql/operations/UpdateSubredditTagStatesRelevance.json":function(t){t.exports=JSON.parse('{"id":"ee43ccb6e5eb"}')},"./src/reddit/actions/tags/index.ts":function(t,e,d){"use strict";d("./node_modules/core-js/modules/web.dom.iterable.js");var s=d("./src/app/strings/index.ts"),r=d("./src/lib/makeActionCreator/index.ts"),a=d("./src/reddit/actions/tags/constants.ts"),n=d("./src/reddit/actions/toaster.ts");const i=t=>{const{subreddit:e}=t,d={global:{},[e.id]:{}};e.availableTags&&e.availableTags.edges.reduce((t,e)=>{let{node:d}=e;return t[d.subreddit&&d.subreddit.id||"global"][d.id]=d,t},d);const s=e.tags.edges.reduce((t,d)=>{let{node:s}=d;return t[e.id][s.tag.id]=s,t},{[e.id]:{}}),r=e.suggestedTags.edges.reduce((t,d)=>{let{node:s}=d;return t[e.id][s.tag.id]=s,t},{[e.id]:{}});return{globalSubredditTags:d.global,subredditScopedTags:{[e.id]:d[e.id]},subredditId:e.id,itemTags:s,suggestedItemTags:r}};var c=d("./src/graphql/operations/CreateSubredditTags.json"),o=d("./src/lib/makeGqlRequest/index.ts");var u=d("./src/graphql/operations/DeleteTags.json");var b=d("./src/graphql/operations/FetchGlobalTags.json"),l=d("./src/graphql/operations/FetchSubredditTags.json");const g=1050,p=(t,e)=>{let{subredditId:d,pageSize:s=g,after:r,includeAvailableTags:a}=e;return Object(o.a)(t,Object.assign({},l,{variables:{subredditId:d,pageSize:s,after:r,includeAvailableTags:a}}))};var j,O=d("./src/graphql/operations/UpdateSubredditTagStates.json");!function(t){t.TAGGED="TAGGED",t.NONE="NONE"}(j||(j={}));const f=(t,e)=>Object(o.a)(t,Object.assign({},O,{variables:e}));var T=d("./src/graphql/operations/UpdateSubredditTagStatesRelevance.json");const m=(t,e)=>Object(o.a)(t,Object.assign({},T,{variables:e}));var I=d("./src/reddit/featureFlags/communityTopics.ts"),y=d("./src/reddit/helpers/tags/index.ts"),S=d("./src/reddit/helpers/trackers/communityTopics.ts"),h=d("./src/reddit/i18n/utils.ts"),v=d("./src/reddit/models/Tags/index.ts"),x=d("./src/reddit/models/Toast/index.ts"),w=d("./src/reddit/reducers/tags/selected/index.ts"),C=d("./src/reddit/selectors/tags.ts"),k=d("./src/reddit/selectors/user.ts");d.d(e,"k",(function(){return B})),d.d(e,"n",(function(){return H})),d.d(e,"j",(function(){return K})),d.d(e,"m",(function(){return M})),d.d(e,"i",(function(){return Q})),d.d(e,"l",(function(){return V})),d.d(e,"c",(function(){return X})),d.d(e,"b",(function(){return Y})),d.d(e,"a",(function(){return Z})),d.d(e,"h",(function(){return $})),d.d(e,"e",(function(){return dt})),d.d(e,"g",(function(){return nt})),d.d(e,"f",(function(){return it})),d.d(e,"d",(function(){return ct})),d.d(e,"o",(function(){return ot}));const q=Object(r.a)(a.d),_=Object(r.a)(a.o),E=Object(r.a)(a.e),N=Object(r.a)(a.m),A=Object(r.a)(a.n),G=Object(r.a)(a.l),R=Object(r.a)(a.g),F=Object(r.a)(a.h),D=Object(r.a)(a.f),L=Object(r.a)(a.j),J=Object(r.a)(a.k),U=Object(r.a)(a.i),P=Object(r.a)(a.q),z=Object(r.a)(a.r),W=Object(r.a)(a.p),B=Object(r.a)(a.u),H=Object(r.a)(a.x),K=Object(r.a)(a.t),M=Object(r.a)(a.w),Q=Object(r.a)(a.s),V=Object(r.a)(a.v),X=Object(r.a)(a.c),Y=Object(r.a)(a.b),Z=Object(r.a)(a.a),$=function t(e){let d=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return async(r,a,c)=>{let{gqlContext:o}=c;const u=a();if(!Object(I.b)())return;r(_());const b=await p(o(),{subredditId:e});if(b.ok){const t=b.body;r(N(i(t.data))),d&&S.f(a(),e)}else r(G()),r(Object(n.e)(Object(n.d)(Object(s.a)(Object(k.S)(u),"communityTopics.loadFailed"),x.b.Error,Object(s.a)(Object(k.S)(u),"communityTopics.retry"),t(e,d))))}},tt=t=>async(e,d,r)=>{let{gqlContext:a}=r;const c=d();if(!Object(I.b)())return;e(_());const o=await p(a(),{subredditId:t});if(o.ok){const t=o.body;e(A(i(t.data)))}else e(G()),e(Object(n.e)(Object(n.d)(Object(s.a)(Object(k.S)(c),"communityTopics.loadFailed"),x.b.Error,Object(s.a)(Object(k.S)(c),"communityTopics.retry"),A(t))))},et=t=>async(e,d,r)=>{let{gqlContext:a}=r;const c=d();if(!Object(I.b)())return;e(_());const o=await p(a(),{subredditId:t});if(o.ok){const t=o.body;e(E(i(t.data)))}else e(G()),e(Object(n.e)(Object(n.d)(Object(s.a)(Object(k.S)(c),"communityTopics.loadFailed"),x.b.Error,Object(s.a)(Object(k.S)(c),"communityTopics.retry"),et(t))))},dt=()=>async(t,e,d)=>{let{gqlContext:s}=d;const r=e();if(!Object(I.c)()||Object(C.m)(r))return;t(_());const a=await((t,e)=>{let{pageSize:d=g,after:s}=e;return Object(o.a)(t,Object.assign({},b,{variables:{pageSize:d,after:s}}))})(s(),{});if(a.ok){const e=a.body;t(q((t=>{return{globalSubredditTags:t.globalTags.edges.reduce((t,e)=>(t[e.node.id]=e.node,t),{})}})(e.data)))}},st=(t,e)=>async(d,s,r)=>{let{gqlContext:a}=r;if(!e.length)return;d(R());const n=e.map(e=>Object.assign({subredditId:t},e)),i=await((t,e)=>Object(o.a)(t,Object.assign({},c,{variables:e})))(a(),{input:n}),u=i.body&&i.body.data||null;i.ok&&u&&u.createSubredditTags&&u.createSubredditTags.ok?d(F()):d(D())},rt=(t,e)=>async(d,s,r)=>{let{gqlContext:a}=r;if(!e.length)return;d(L());const n=await((t,e)=>Object(o.a)(t,Object.assign({},u,{variables:e})))(a(),{input:e}),i=n.body&&n.body.data||null;n.ok&&i&&i.deleteTags&&i.deleteTags.ok?d(J({subredditId:t,tags:e})):d(U())},at=function(t,e){let d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return async(s,r,a)=>{let{gqlContext:n}=a;if(!e.length&&!d.length)return;s(P());const i=await f(n(),{input:{subredditId:t,tagStates:e,suggestedTagStates:d}}),c=i.body&&i.body.data||null;i.ok&&c&&c.updateSubredditTagStates&&c.updateSubredditTagStates.ok?s(z()):s(W())}},nt=t=>async(e,d,r)=>{const a=d(),i=Object(C.o)(a,{subredditId:t}),c=Object(C.d)(a,{subredditId:t}),o=Object(C.w)(a,{subredditId:t}),u=Object(C.x)(a,{subredditId:t}),b=i.filter(t=>!!t.id&&!!t.action).map(t=>({tagId:t.id,state:t.action===w.a.ADD?j.TAGGED:j.NONE}));if(o.length>0){const s=new Set([...Object.keys(c)]);await st(t,o)(e,d,r),await et(t)(e,d,r);const a=Object(C.d)(d(),{subredditId:t}),n=new Set([...Object.keys(a).filter(t=>!s.has(t))]);o.forEach(t=>{for(const e of n){const d=a[e];if(d&&d.text.toLowerCase()===t.text.toLowerCase()&&d.type===t.type)return n.delete(e),void b.push({tagId:d.id,state:j.TAGGED})}})}await Promise.all([at(t,b)(e,d,r),rt(t,u)(e,d,r)]),Object(C.u)(d())&&e(Object(n.e)(Object(n.d)(Object(s.a)(Object(k.S)(a),"communityTopics.savePartialFailed"),x.b.Error,Object(s.a)(Object(k.S)(a),"communityTopics.retry"),nt(t)))),e($(t,!0))},it=(t,e)=>async(d,s,r)=>{const a={state:j.TAGGED};if(Object(y.b)(e)){const n=Object(C.d)(s(),{subredditId:t}),i=new Set([...Object.keys(n)]);await st(t,[{text:e.displayText,type:v.c.CLASSIFICATION}])(d,s,r),await et(t)(d,s,r);const c=Object(C.d)(s(),{subredditId:t}),o=new Set([...Object.keys(c).filter(t=>!i.has(t))]);for(const t of o){const d=c[t];d&&d.text.toLowerCase()===e.displayText.toLowerCase()&&d.type===v.c.CLASSIFICATION&&(a.tagId=d.id)}}else{if(!e.id)return void d(Object(n.e)(Object(n.d)(Object(h.c)("Whoops, we couldn't save that topic. Please try again later."),x.b.Error)));a.tagId=e.id}(t=>!!t.tagId&&!!t.state)(a)?(await at(t,[],[a])(d,s,r),d($(t,!1))):d(Object(n.e)(Object(n.d)(Object(h.c)("Whoops, we couldn't save that topic. Please try again later."),x.b.Error)))},ct=(t,e)=>async(d,s,r)=>{if(!e.id)return void d($(t,!1));const a=s(),n=[at(t,[],[{state:j.NONE,tagId:e.id}])(d,s,r)],i=Object(C.n)(a,{itemId:t}),c=Object(C.d)(a,{subredditId:t});!i[e.id]&&c[e.id]&&n.push(rt(t,[{tagId:e.id}])(d,s,r)),await Promise.all(n),d($(t,!1))},ot=function t(e,d,s){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return async(a,i,c)=>{let{gqlContext:o}=c;if(!(await m(o(),{input:{tagStatesRelevance:d,suggestedTagStatesRelevance:s}})).ok)return a(Object(n.e)(Object(n.d)(Object(h.c)("Whoops! Unable to update topics relevance status"),x.b.Error,Object(h.c)("Retry"),t(e,d,s,r)))),void a(tt(e));if(r)for(const t of s)S.e(i(),t);a(Object(n.e)(Object(n.d)(Object(h.c)("Successfully updated topics relevance!"),x.b.SuccessCommunity,Object(h.c)("Undo"),t(e,d.map(t=>Object.assign({},t,{isRelevant:!t.isRelevant})),s.map(t=>Object.assign({},t,{isRelevant:!t.isRelevant})),r)))),a(tt(e))}}},"./src/reddit/helpers/trackers/communityTopics.ts":function(t,e,d){"use strict";d.d(e,"e",(function(){return u})),d.d(e,"b",(function(){return b})),d.d(e,"d",(function(){return l})),d.d(e,"c",(function(){return g})),d.d(e,"a",(function(){return p})),d.d(e,"f",(function(){return j}));var s=d("./src/reddit/selectors/tags.ts"),r=d("./src/reddit/selectors/telemetry.ts"),a=d("./src/telemetry/index.ts");const n=(t,e)=>Object(s.r)(t,{itemId:e}).reduce((t,e)=>{let{topicTagIds:d,topicTagContents:s,topicTagTypes:r}=t;return d.push(e.tag.id),s.push(e.tag.text),r.push(e.tag.type),{topicTagIds:d,topicTagContents:s,topicTagTypes:r}},{topicTagIds:[],topicTagContents:[],topicTagTypes:[]}),i=(t,e,d)=>{if(!d.id)return{content:d.displayText};const r=Object(s.b)(t)[d.id]||Object(s.d)(t,{subredditId:e})[d.id];return r?{id:r.id,content:r.text,type:r.type}:null},c=(t,e,d)=>{if(!d)return null;const r=Object(s.b)(t)[d]||Object(s.d)(t,{subredditId:e})[d];return r?{id:r.id,content:r.text,type:r.type}:null},o=(t,e)=>Object.assign({},r.defaults(t),{subreddit:Object.assign({},r.subreddit(t)||{},{id:e},n(t,e)),source:"community_settings",action:"click"}),u=(t,e)=>{Object(a.a)(((t,e)=>Object.assign({},o(t,e.subredditId),{noun:e.isRelevant?"restore_related_topic":"remove_related_topic",topicTag:c(t,e.subredditId,e.tagId)}))(t,e))},b=(t,e,d)=>{Object(a.a)(Object.assign({},o(t,e),{topicTag:i(t,e,d),noun:"add_related_topic"}))},l=(t,e,d)=>{return!Object(s.k)(t,{subredditId:e})&&d.id?Object(a.a)(((t,e,d)=>Object.assign({},o(t,e),{topicTag:i(t,e,d),noun:"topic_auto_suggest"}))(t,e,d)):d.id?Object(a.a)(((t,e,d)=>Object.assign({},o(t,e),{topicTag:i(t,e,d),noun:"topic_auto_complete"}))(t,e,d)):Object(a.a)(((t,e,d)=>Object.assign({},o(t,e),{topicTag:i(t,e,d),noun:"topic_add_new"}))(t,e,d))},g=(t,e,d)=>Object(a.a)(Object.assign({},o(t,e),{topicTag:i(t,e,d),noun:"topic_remove"})),p=(t,e)=>Object(a.a)(Object.assign({},o(t,e),{noun:"topic_tag_field"})),j=(t,e)=>Object(a.a)(Object.assign({},o(t,e),{noun:"save"}))},"./src/reddit/selectors/tags.ts":function(t,e,d){"use strict";d.d(e,"f",(function(){return i})),d.d(e,"g",(function(){return c})),d.d(e,"j",(function(){return o})),d.d(e,"h",(function(){return u})),d.d(e,"e",(function(){return b})),d.d(e,"i",(function(){return l})),d.d(e,"m",(function(){return g})),d.d(e,"u",(function(){return p})),d.d(e,"v",(function(){return j})),d.d(e,"k",(function(){return O})),d.d(e,"l",(function(){return f})),d.d(e,"p",(function(){return T})),d.d(e,"q",(function(){return m})),d.d(e,"b",(function(){return v})),d.d(e,"d",(function(){return w})),d.d(e,"c",(function(){return C})),d.d(e,"n",(function(){return k})),d.d(e,"t",(function(){return q})),d.d(e,"s",(function(){return _})),d.d(e,"r",(function(){return E})),d.d(e,"a",(function(){return N})),d.d(e,"o",(function(){return A})),d.d(e,"w",(function(){return G})),d.d(e,"x",(function(){return R}));d("./node_modules/core-js/modules/web.dom.iterable.js");var s=d("./node_modules/lodash/values.js"),r=d.n(s),a=d("./src/reddit/helpers/tags/index.ts"),n=d("./src/reddit/models/Tags/index.ts");const i=t=>r()((t=>{const e=c(t)?x(t):h(t),d=o(t),s=e.reduce((t,e)=>(t[e.id]=Object(n.e)(e),t),{});return d.reduce((t,e)=>(e.id&&t[e.id]&&(t[e.id].selected=!0),t),s)})(t)).filter(t=>!t.selected),c=t=>t.tags.creation.tagInput||"",o=t=>t.tags.creation.selectedOptions||[],u=t=>{const e=[];for(let d=0;d<o(t).length;d++)o(t)[d].id&&e.push(o(t)[d].id);return e||[]},b=t=>(o(t)||[]).filter(t=>!!t.displayText).map(t=>t.displayText),l=t=>{const e=[];for(let d=0;d<o(t).length;d++)o(t)[d].id||e.push(o(t)[d].displayText);return e||[]},g=t=>Object.keys(t.tags.models.globalSubredditTags).length>0,p=t=>t.tags.api.create.error||t.tags.api.deleteTag.error||t.tags.api.fetch.error||t.tags.api.update.error,j=t=>t.tags.api.create.pending||t.tags.api.deleteTag.pending||t.tags.api.fetch.pending||t.tags.api.update.pending,O=(t,e)=>{let{subredditId:d}=e;return t.tags.selected.inputByItemId[d]||""},f=(t,e)=>{let{subredditId:d}=e;return t.tags.selected.suggestedInputByItemId[d]||""},T=(t,e)=>{let{subredditId:d}=e;return t.tags.selected.selectedOptions[d]||[]},m=(t,e)=>{let{subredditId:d}=e;return t.tags.selected.selectedSuggestedOptions[d]||[]},I=(t,e)=>{let{subredditId:d}=e;return t.tags.selected.deselectedOptions[d]||[]},y={},S={},h=t=>t.tags.availableGlobalTagOrder.recommendedGlobal.map(e=>t.tags.models.globalSubredditTags[e]),v=t=>t.tags.models.globalSubredditTags,x=t=>t.tags.availableGlobalTagOrder.global.map(e=>t.tags.models.globalSubredditTags[e]),w=(t,e)=>{let{subredditId:d}=e;return t.tags.models.subredditScopedTags[d]||S},C=(t,e)=>{const d=r()(e);for(let s=0;s<d.length;s++)if(d[s].text.toLowerCase().trim()===t.toLowerCase().trim())return d[s];return null},k=(t,e)=>{let{itemId:d}=e;return t.tags.models.itemTags[d]||y},q=(t,e)=>{let{itemId:d}=e;return t.tags.models.suggestedItemTags[d]||y},_=(t,e)=>{let{itemId:d}=e;return r()(q(t,{itemId:d})).filter(t=>t.isRelevant).map(t=>Object(n.d)(t,!0))},E=(t,e)=>{let{itemId:d}=e;return t.tags.models.sortedItemTags[d]||[]},N=(t,e)=>{let{thingId:d,suggested:s=!1}=e;return r()(((t,e)=>{let{thingId:d,suggested:s=!1}=e;const r=(s?f(t,{subredditId:d}):O(t,{subredditId:d}))?x(t):h(t),a=s?m(t,{subredditId:d}):T(t,{subredditId:d}),i=r.reduce((t,e)=>(t[e.id]=Object(n.e)(e),t),{});return a.reduce((t,e)=>(e.id&&t[e.id]&&(t[e.id].selected=!0),t),i)})(t,{thingId:d,suggested:s})).filter(t=>!t.selected)},A=(t,e)=>{let{subredditId:d}=e;return T(t,{subredditId:d}).concat(I(t,{subredditId:d}))},G=(t,e)=>{let{subredditId:d}=e;return T(t,{subredditId:d}).filter(a.b).map(t=>({text:t.displayText,type:n.c.CLASSIFICATION}))},R=(t,e)=>{let{subredditId:d}=e;const s=w(t,{subredditId:d}),r=q(t,{itemId:d});return I(t,{subredditId:d}).filter(t=>!!t.id&&!!s[t.id]&&!r[t.id]).map(t=>({tagId:t.id}))}}}]);
//# sourceMappingURL=AdminCommunityTopics~Reddit.22f677a21985d0685fcd.js.map