(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[42797],{17314:(e,r,t)=>{t.d(r,{Z:()=>u});var n,o,s=t(813653),a=t(861470),c=0,i=0;const u=function(e,r,t){var u=r&&t||0,l=r||new Array(16),d=(e=e||{}).node||n,p=void 0!==e.clockseq?e.clockseq:o;if(null==d||null==p){var _=e.random||(e.rng||s.Z)();null==d&&(d=n=[1|_[0],_[1],_[2],_[3],_[4],_[5]]),null==p&&(p=o=16383&(_[6]<<8|_[7]))}var h=void 0!==e.msecs?e.msecs:Date.now(),E=void 0!==e.nsecs?e.nsecs:i+1,v=h-c+(E-i)/1e4;if(v<0&&void 0===e.clockseq&&(p=p+1&16383),(v<0||h>c)&&void 0===e.nsecs&&(E=0),E>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=h,i=E,o=p;var y=(1e4*(268435455&(h+=122192928e5))+E)%4294967296;l[u++]=y>>>24&255,l[u++]=y>>>16&255,l[u++]=y>>>8&255,l[u++]=255&y;var m=h/4294967296*1e4&268435455;l[u++]=m>>>8&255,l[u++]=255&m,l[u++]=m>>>24&15|16,l[u++]=m>>>16&255,l[u++]=p>>>8|128,l[u++]=255&p;for(var S=0;S<6;++S)l[u+S]=d[S];return r||(0,a.Z)(l)}},40045:(e,r,t)=>{t.d(r,{Z:()=>n});const n={AMP_TRACKING_DOMAIN:"amp.pinterest.com",BoardPrivacy:{SECRET:"secret",PUBLIC:"public",PROTECTED:"protected"},BoardType:{PROTECTED:"protected"},BulkAction:{MOVE:"bulkMove",COPY:"bulkCopy",CREATE_SECTION:"bulkCreateSection",DELETE:"bulkDelete"},MAX_CHARS_FOR_BOARD_PIN_DESCRIPTION:500,MAX_CHARS_FOR_BOARD_TITLE:50,MAX_CHARS_FOR_FIRST_NAME:30,MAX_FETCH_NUM_FOLLOWERS_PER_PAGE:50,MAX_STORED_VISITED_PIN_PAGES:10,VIDEO_IFRAME_ID:"video-iframe"}},310561:(e,r,t)=>{t.d(r,{Hv:()=>i,aX:()=>d,nK:()=>p});var n=t(667294),o=t(616550),s=t(583592),a=t(785893);const{Provider:c,useHook:i}=(0,s.Z)("HistoryStackContext",{previous:[],current:null,forward:[]}),u=e=>e&&e.pathname?e.pathname+(e.search||""):"";function l(e,r){var t;const n={action:r.type,location:r.location,match:r.match};if(r.location===(null===(t=e.current)||void 0===t?void 0:t.location))return e;switch(r.type){case"POP":return e.forward.length>0&&u(e.forward[0].location)===u(n.location)?{...e,forward:e.forward.slice(1),current:{...e.forward[0],action:r.type},previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous}:{...e,forward:e.current?[{action:e.current.action,location:e.current.location,match:e.current.match},...e.forward]:e.forward,current:{...e.previous.slice(-1)[0],action:r.type},previous:e.previous.slice(0,-1)};case"PUSH":return{...e,forward:e.forward.length>0?[]:e.forward,current:n,previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};case"REPLACE":return{...e,current:n};default:return e}}function d(){const{current:e,previous:r}=i();return(0,n.useMemo)((()=>e?r.concat(e):r),[e,r])}function p({children:e}){const r=(0,o.useHistory)(),t=(0,o.useLocation)(),s=(0,o.useRouteMatch)(),i={forward:[],current:{action:r.action,location:t,match:s},previous:[]},[u,d]=(0,n.useReducer)(l,i);return(0,n.useEffect)((()=>{const{action:e}=r;d({type:e,location:t,match:s})}),[t]),(0,a.jsx)(c,{value:u,children:e})}},737311:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(667294),o=t(40660),s=t(391297);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class c extends n.Component{constructor(...e){super(...e),a(this,"state",{error:null,info:null}),a(this,"resetError",(()=>{this.setState({error:null,info:null})}))}componentDidCatch(e,r){try{var t;const{name:r}=this.props,n=this.props.type||"secondary";(0,s.T)({extraData:null!==(t=e.extraData)&&void 0!==t?t:{},errorBoundary:r,errorBoundaryType:n,message:e.message,name:e.name,stack:e.stack}),o.Z.increment("react.error_boundary",.1,{component:void 0,name:this.props.name})}catch(n){o.Z.increment("react.error_boundary.error",1,{name:this.props.name})}this.setState({error:e,info:r})}render(){const{renderErrorState:e}=this.props,{error:r,info:t}=this.state;return r&&t?e?e({error:r,info:t,resetError:this.resetError}):null:this.props.children}}},604094:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t(737311).Z},393729:(e,r,t)=>{t.d(r,{j:()=>d,w:()=>l});var n=t(388011),o=t(583592),s=t(282802),a=t(549201),c=t(272109),i=t(785893);const{Provider:u,useMaybeHook:l}=(0,o.Z)("TimeSpentManagerContext");function d({children:e,value:r}){const t=(0,n.v)(),o=(0,a.HG)(),{isAuthenticated:l}=(0,s.B)(),d=o&&l;return(0,c.Z)((()=>{document.hasFocus()&&r(t,d).registerApp(),r(t,d).addEventListeners()})),(0,i.jsx)(u,{value:r(t,d),children:e})}},291986:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(172045),o=t(17314);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const a="undefined"!=typeof window&&window.performance&&window.performance.now?()=>Math.floor(1e6*window.performance.now()):()=>1e6*Date.now();const c=class{constructor(e){s(this,"start",(()=>(this.startTime=a(),this.startTime))),s(this,"end",(()=>(this.endTime=a(),this.duration=this.startTime?this.endTime-this.startTime:null,this.duration)));try{this.uuid=(0,n.Z)()}catch(r){this.uuid=(0,o.Z)()}e&&Object.assign(this,e)}}},806685:(e,r,t)=>{t.d(r,{E5:()=>u,T7:()=>s,Y_:()=>l,bl:()=>c,d9:()=>p,nx:()=>d,xt:()=>i});t(883119);var n=t(282802),o=t(802071);function s(e,r,t,n){const o=function(e,r){return r?"shop":0===e||2===e?"trending":1===e?"best":"article"}(e,r),s=function(e){return e.toLowerCase().replace(/[.,\/#!?$%\^&\*+;:{}=\-_`~()\’'"]/g,"").trim().replace(/\s+/g,"-")}(t);return`/today/${o}/${encodeURIComponent(s)}/${n}/`}const a={en:["US","GB","CA","IN","AU","ID"],es:["MX","PE","AR","CL","CO","ES","VE","UY","PY","EC","BO","CR","DO","SV","GT","HN","NI","PR","PA"],pt:["BR"],de:["DE","AT","CH"],fr:["FR"],id:["ID"],ja:["JP"],it:["IT"],sv:["SE"]};function c(){var e;const r=(0,n.B)(),t=(0,o.Z)(),s=t.isAuth?t.country:r.country;if(void 0===r||void 0===r.locale)return!1;const c=r.locale.substring(0,2);return null===(e=a[c])||void 0===e?void 0:e.includes(s)}const i=(e,r,t)=>e||(r||t||""),u=(e,r)=>e||((null==r?void 0:r.origin_pinner)||(null==r?void 0:r.pinner)),l=e=>"todayarticle"===e.type,d=e=>Array.isArray(e)&&e.length>0&&e.every((e=>"story"===e.type)),p=e=>{var r,t;return(null!==(r=e.height)&&void 0!==r?r:1)/(null!==(t=e.width)&&void 0!==t?t:1)}},28630:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(799665);const o=({url:e})=>!(!e||!e.match(/^https{0,1}:\/\//)||(0,n.Z)(e))},802071:(e,r,t)=>{t.d(r,{$:()=>o,Z:()=>a});var n=t(583592);const{Provider:o,useHook:s}=(0,n.Z)("viewer"),a=s},525104:(e,r,t)=>{t.d(r,{AF:()=>c,H0:()=>i,S6:()=>u,_S:()=>l});var n=t(702664),o=t(583592),s=t(785893);const{Provider:a,useHook:c,useMaybeHook:i}=(0,o.Z)("Pins");function u(){const e=c();return r=>e[r]}function l({children:e}){const r=(0,n.useSelector)((({pins:e})=>e),n.shallowEqual);return(0,s.jsx)(a,{value:r,children:e})}},712968:(e,r,t)=>{t.d(r,{Tt:()=>d,cm:()=>l,kW:()=>i,kY:()=>p,mN:()=>u});var n=t(702664),o=t(583592),s=t(802071),a=t(785893);const{Provider:c,useHook:i}=(0,o.Z)("Users");function u(){const e=i();return r=>e[r]}function l(){const e=i();return r=>{const t=Object.keys(e).find((t=>e[t].username===r));return e[null!=t?t:""]}}function d(){const{id:e}=(0,s.Z)();return i()[null!=e?e:""]}function p({children:e}){const r=(0,n.useSelector)((({users:e})=>e),n.shallowEqual);return(0,a.jsx)(c,{value:r,children:e})}},274796:(e,r,t)=>{t.d(r,{Z:()=>n});const n={AGGREGATED_COMMENTS:"aggregatedComments",AGGREGATED_COMMENT_REPLIES:"aggregated-comment-replies",BOARDFEED:"boardfeed",BOARDLESS_PINS:"boardless-pins",BOARD_SECTIONS:"board-sections",BOARD_SECTION_PINS:"board-section-pins",STORY_PINS_FEED:"story-pins-feed",PROFILE_PINS_FEED:"profile-pins-feed",PROFILE_BOARDS:"profileBoards",SEARCH_PINS:"searchPins",STORY_PIN_DATA:"storyPinData",TODAY_ARTICLE_INTEREST_FEED:"todayArticleInterestFeed",TODAY_TAB:"todayTabFeed",UNIFIED_COMMENTS:"unified-comments",TRIED_IT_FEED:"trieditfeed",INTEREST_TAB_FEED:"interestTabFeed"}},344639:(e,r,t)=>{t.d(r,{Z:()=>p,_:()=>o});var n=t(857867);const o=20,s={animated:!1,currentSearch:{query:"",scope:"pins"},queries:{},productFilters:{},recentSearches:[],recentPersonalSearches:[],recommendedSearches:[],typeaheadCache:{},pins:{},visualSearches:{}},a=(e,r)=>{const t=e.recentPersonalSearches.filter((e=>!r.find((r=>(r.query||"").toLowerCase()===(e.query||"").toLowerCase()))));return{recentPersonalSearches:r.concat(t).slice(0,o)}},c=(e,r)=>({...e,...a(e,r)}),i=(e,r)=>{const t=e.recentSearches.filter((e=>!r.find((r=>(r.query||"").toLowerCase()===(e.query||"").toLowerCase()))));return{recentSearches:r.concat(t).slice(0,o)}},u=(e,r)=>({...e,...i(e,r)}),l=(e,r,t)=>({...e,currentSearch:{query:t||"",scope:r||"pins"}}),d=(e,r,t)=>r?r.startsWith("my_")?c(e,[{query:t,type:"recent_personal_searches",id:t,is_verified_merchant:!1,label:t,url:""}]):u(e,[{query:t,type:"recent_query",id:t,is_verified_merchant:!1,label:t,url:""}]):e,p=(e=s,r)=>{switch(r.type){case n.zP:{const{resource:n,response:s}=r.payload;if("AdvancedTypeaheadResource"===n){var t;const{term:n,recent_queries_tags:o}=null!==(t=r.payload.options)&&void 0!==t?t:{};return((e,r,t,n)=>{if(!r.length){if((t||"").split(",").length>1){const r=[],t=[];return n.forEach((e=>{"recent_personal_searches"===e.type?r.push(e):t.push(e)})),{...e,...a(e,r),...i(e,t)}}return"recent_personal_searches"===t?c(e,n):u(e,n)}return{...e,typeaheadCache:{...e.typeaheadCache,[r]:n}}})(e,n,o,s.resource_response.data.items)}if("SearchTabResource"===n)return((e,r)=>({...e,recommendedSearches:[...e.recommendedSearches,...r]}))(e,s.resource_response.data);if("BaseSearchResource"===n){var o;const{query:t,auto_correction_disabled:n,scope:a,article:c,filters:i,appliedProductFilters:u}=null!==(o=r.payload.options)&&void 0!==o?o:{},p=`${a}:${t}:${i||""}:${u}:${c||""}${n?":auto-correction-disabled":""}`,_=s.resource_response.data.productFilters,h={guides:s.resource_response.data.guides,typo:s.resource_response.data.typo,nags:s.resource_response.data.nag,sensitivity:s.resource_response.data.sensitivity,filters:s.resource_response.data.filters,tabs:s.resource_response.data.tabs,modeIcon:s.resource_response.data.modeIcon,oneBarModules:s.resource_response.data.oneBarModules};return((e,r,t,n)=>{const o=`${n}-${t}`,s=e.productFilters[o];return s?r?{...e,productFilters:{...e.productFilters,[o]:Object.entries(s).reduce(((e,t)=>{const n=t[0],o=t[1],s=r[n];return Array.isArray(o)&&Array.isArray(s)?e[n]=((e,r)=>e.concat(r.filter((r=>!e.some((e=>e.label===r.label))))))(o,s):Array.isArray(o)||Array.isArray(s)||(e[n]={...o,max_value:Math.max(o.max_value,s.max_value),min_value:Math.min(o.min_value,s.min_value),suggested_max_value:Math.max(o.suggested_max_value,s.suggested_max_value)}),e}),{})}}:e:{...e,productFilters:{...e.productFilters,[o]:r}}})(d(l(((e,r,t)=>({...e,queries:{...e.queries,[r]:t}}))(e,p,h),a,t),a,t),_,a,t)}if("SearchResource"===n){const{query:t,scope:n}=r.payload.options||{};return d(e,n,t)}if("VisualLiveSearchResource"===n){const{data:t}=s.resource_response;return{...e,visualSearches:{...e.visualSearches,[r.payload.options.pin_id]:t.annotations}}}return e}case"CLEAR_RECENT_SEARCH":{const{query:t}=r.payload;return((e,r)=>({...e,recentSearches:e.recentSearches.filter((e=>e.query!==r))}))(e,t)}case"CLEAR_RECENT_SEARCHES":return(e=>({...e,recentSearches:[]}))(e);case"CLEAR_RECENT_PERSONAL_SEARCH":{const{query:t}=r.payload;return((e,r)=>({...e,recentPersonalSearches:e.recentPersonalSearches.filter((e=>e.query!==r))}))(e,t)}case"CLEAR_RECENT_PERSONAL_SEARCHES":return(e=>({...e,recentPersonalSearches:[]}))(e);case"RELOAD_VISUAL_SEARCH_ANNOTATIONS":return((e,r)=>({...e,visualSearches:{...e.visualSearches,[r]:[]}}))(e,r.payload.pinId);case"UPDATE_CURRENT_SEARCH":{const{query:t,scope:n}=r.payload;return l(e,n,t)}case"UPDATE_RECENT_SEARCHES":{const{query:t,scope:n}=r.payload;return d(e,n,t)}case"SET_ANIMATION_ON_BODY_FILTER":return((e,r)=>({...e,animated:r}))(e,r.payload.animated);default:return e}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/42797-619a9021ec23e0f5.mjs.map