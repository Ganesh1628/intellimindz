"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[56810,18755],{17314:(e,t,n)=>{n.d(t,{Z:()=>d});var a,r,i=n(813653),l=n(861470),s=0,o=0;let d=function(e,t,n){var d=t&&n||0,u=t||Array(16),c=(e=e||{}).node||a,p=void 0!==e.clockseq?e.clockseq:r;if(null==c||null==p){var m=e.random||(e.rng||i.Z)();null==c&&(c=a=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==p&&(p=r=(m[6]<<8|m[7])&16383)}var h=void 0!==e.msecs?e.msecs:Date.now(),g=void 0!==e.nsecs?e.nsecs:o+1,_=h-s+(g-o)/1e4;if(_<0&&void 0===e.clockseq&&(p=p+1&16383),(_<0||h>s)&&void 0===e.nsecs&&(g=0),g>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");s=h,o=g,r=p;var f=((0xfffffff&(h+=122192928e5))*1e4+g)%0x100000000;u[d++]=f>>>24&255,u[d++]=f>>>16&255,u[d++]=f>>>8&255,u[d++]=255&f;var b=h/0x100000000*1e4&0xfffffff;u[d++]=b>>>8&255,u[d++]=255&b,u[d++]=b>>>24&15|16,u[d++]=b>>>16&255,u[d++]=p>>>8|128,u[d++]=255&p;for(var y=0;y<6;++y)u[d+y]=c[y];return t||(0,l.Z)(u)}},777579:(e,t,n)=>{var a,r,i,l;n.r(t),n.d(t,{default:()=>o});let s={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"BoardRep_board",selections:[{alias:"boardAccess",args:null,kind:"ScalarField",name:"access",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"archivedByMeAt",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"boardOrderModifiedAt",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"collaboratingUsers",plural:!1,selections:[a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"UserCollaboratingUsersConnection",kind:"LinkedField",name:"connection",plural:!1,selections:[{alias:null,args:null,concreteType:"UserCollaboratingUsersEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[a,r={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"UserCollaboratingUsersConnectionContainer",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"CoverPin",kind:"LinkedField",name:"coverPin",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"crop",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"size",storageKey:null}],storageKey:null},r,{alias:null,args:null,kind:"ScalarField",name:"followedByMe",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasCustomCover",storageKey:null},{alias:"images170x",args:[{kind:"Literal",name:"spec",value:"170x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!0,selections:l=[i={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:'images(spec:"170x")'},{alias:"images236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!0,selections:l,storageKey:'images(spec:"236x")'},{alias:null,args:null,kind:"ScalarField",name:"isCollaborative",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isTemporarilyDisabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"owner",plural:!1,selections:[r,{args:null,kind:"FragmentSpread",name:"BoardCard_user"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"pinCount",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"pinThumbnailUrls",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"privacy",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sectionCount",storageKey:null},{alias:null,args:null,concreteType:"SensitivityScreen",kind:"LinkedField",name:"sensitivityScreen",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reason",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"showWarning",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldShowBoardCollaborators",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},i,{args:null,kind:"FragmentSpread",name:"useGetCoverPhoto_board"}],type:"Board",abstractKey:null};s.hash="308c1a2ab4971a7134c2cdb66b162648";let o=s},216931:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});let a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"UnifiedPinRepAuthDesktopPinRep_pin",selections:[{args:null,kind:"FragmentSpread",name:"PinRepWithImpressions_pin"}],type:"Pin",abstractKey:null};a.hash="000e24070b5df05da76d803775cb37e6";let r=a},515280:(e,t,n)=>{var a;n.r(t),n.d(t,{default:()=>i});let r={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"isAuthParam"},{defaultValue:null,kind:"LocalArgument",name:"isDesktopParam"},{defaultValue:!1,kind:"LocalArgument",name:"shouldShowSeoDrawerOption"},{defaultValue:!1,kind:"LocalArgument",name:"skipUnauthFragment"}],kind:"Fragment",metadata:null,name:"UnifiedPinRepDefaultPinRep_pin",selections:[{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:a=[{args:null,kind:"FragmentSpread",name:"PinRepInner_board"}],storageKey:null},{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"pinnedToBoard",plural:!1,selections:a,storageKey:null},{args:[{kind:"Variable",name:"isAuthParam",variableName:"isAuthParam"},{kind:"Variable",name:"isDesktopParam",variableName:"isDesktopParam"},{kind:"Variable",name:"shouldShowSeoDrawerOption",variableName:"shouldShowSeoDrawerOption"},{kind:"Variable",name:"skipUnauthFragment",variableName:"skipUnauthFragment"}],kind:"FragmentSpread",name:"PinRep_pin"}],type:"Pin",abstractKey:null};r.hash="5dcba17f5e765b6d555430adc767ebfc";let i=r},84267:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});let a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"UnifiedPinRepVariant_pin",selections:[{args:null,kind:"FragmentSpread",name:"UnifiedPinRepAuthDesktopPinRep_pin"}],type:"Pin",abstractKey:null};a.hash="7982b415980bdf92f7b9338cb5f6c539";let r=a},878069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});let a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"isAuthParam"},{defaultValue:null,kind:"LocalArgument",name:"isDesktopParam"},{defaultValue:!1,kind:"LocalArgument",name:"shouldShowSeoDrawerOption"},{defaultValue:!1,kind:"LocalArgument",name:"skipUnauthFragment"}],kind:"Fragment",metadata:null,name:"UnifiedPinRep_pin",selections:[{args:[{kind:"Variable",name:"isAuthParam",variableName:"isAuthParam"},{kind:"Variable",name:"isDesktopParam",variableName:"isDesktopParam"},{kind:"Variable",name:"shouldShowSeoDrawerOption",variableName:"shouldShowSeoDrawerOption"},{kind:"Variable",name:"skipUnauthFragment",variableName:"skipUnauthFragment"}],kind:"FragmentSpread",name:"UnifiedPinRepDefaultPinRep_pin"}],type:"Pin",abstractKey:null};a.hash="4aa0fcbb6f51c668491562f4002cd66f";let r=a},718075:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(667294),r=n(297728),i=n(415787),l=n(785893);let s=console,o=({id:e,children:t})=>{let n=(0,r.F)(),o=(0,a.useRef)(!1),d=(0,a.useRef)({renderCount:0,renderTime:{mount:0,slowestUpdate:0,average:0},totalRenderTime:0}),u=(0,a.useRef)(n.checkExperiment("perf_profiler_logs").anyEnabled);return(0,a.useEffect)(()=>()=>{o.current&&(u.current&&s.info(`ProfilerWithStats - ${e}`,d.current),(0,i.LY)("webapp.renderStats.mount",d.current.renderTime.mount,{sampleRate:.1,tags:{id:e}}),(0,i.LY)("webapp.renderStats.slowest",d.current.renderTime.slowestUpdate,{sampleRate:.1,tags:{id:e}}),(0,i.LY)("webapp.renderStats.average",d.current.renderTime.average,{sampleRate:.1,tags:{id:e}}),(0,i.S0)("webapp.renderStats.count",d.current.renderCount,{tags:{id:e}}))},[d,e]),(0,l.jsx)(a.Profiler,{id:`ProfilerWithStats-${e}`,onRender:(e,t,n)=>{o.current=!0,d.current.renderCount+=1,d.current.totalRenderTime+=n,d.current.renderTime.average=d.current.totalRenderTime/d.current.renderCount,"mount"===t?(d.current.renderTime.mount=n,d.current.renderTime.slowestUpdate=n):d.current.renderTime.slowestUpdate<n&&(d.current.renderTime.slowestUpdate=n)},children:t})}},640498:(e,t,n)=>{n.d(t,{LG:()=>a,UO:()=>r,ZB:()=>i,ZP:()=>l});let a=100,r=10,i=28,l={AMP_TRACKING_DOMAIN:"amp.pinterest.com",BoardPrivacy:{SECRET:"secret",PUBLIC:"public",PROTECTED:"protected"},BoardType:{PROTECTED:"protected"},BulkAction:{MOVE:"bulkMove",COPY:"bulkCopy",CREATE_SECTION:"bulkCreateSection",DELETE:"bulkDelete"},MAX_CHARS_FOR_BOARD_PIN_DESCRIPTION:500,MAX_CHARS_FOR_BOARD_TITLE:50,MAX_CHARS_FOR_FIRST_NAME:30,MAX_FETCH_NUM_FOLLOWERS_PER_PAGE:50,MAX_STORED_VISITED_PIN_PAGES:10,VIDEO_IFRAME_ID:"video-iframe"}},136061:(e,t,n)=>{n.d(t,{Hv:()=>o,aX:()=>c,nK:()=>p});var a=n(667294),r=n(616550),i=n(498490),l=n(785893);let{Provider:s,useHook:o}=(0,i.Z)("HistoryStackContext",{previous:[],current:null,forward:[]}),d=e=>e&&e.pathname?e.pathname+(e.search||""):"";function u(e,t){let n={action:t.type,location:t.location,match:t.match};if(t.location===e.current?.location)return e;switch(t.type){case"POP":if(e.forward.length>0&&d(e.forward[0].location)===d(n.location))return{...e,forward:e.forward.slice(1),current:{...e.forward[0],action:t.type},previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};return{...e,forward:e.current?[{action:e.current.action,location:e.current.location,match:e.current.match},...e.forward]:e.forward,current:{...e.previous.slice(-1)[0],action:t.type},previous:e.previous.slice(0,-1)};case"PUSH":return{...e,forward:e.forward.length>0?[]:e.forward,current:n,previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};case"REPLACE":return{...e,current:n};default:return e}}function c(){let{current:e,previous:t}=o();return(0,a.useMemo)(()=>e?t.concat(e):t,[e,t])}function p({children:e}){let t=(0,r.k6)(),n=(0,r.TH)(),i=(0,r.$B)(),o={forward:[],current:{action:t.action,location:n,match:i},previous:[]},[d,c]=(0,a.useReducer)(u,o),p=(0,a.useRef)(n);if(p.current!==n){let{action:e}=t;c({type:e,location:n,match:i}),p.current=n}return(0,l.jsx)(s,{value:d,children:e})}},829196:(e,t,n)=>{n.d(t,{YS:()=>s,eF:()=>o,m_:()=>l});var a=n(431705),r=n(194093),i=n(415787);function l(e,t,n,r,l){let s=new URLSearchParams,o=t.reduce((e,t)=>{if(null!=t){let n=function(e){let t;try{t=decodeURIComponent(e)}catch(n){t=e}t.startsWith("http")?t.startsWith("http://")&&(t=t.replace("http://","https://")):t="https://"+t;try{return new URL(t).origin}catch(a){let n=t.match(/^(https?:\/\/[^\/]+)(\/|$)/);if(n&&n.length>1)return n[1];return e}}(t);return e.add(n)}return e},new Set);s.append(a.NR.SOURCE_EVENT_ID,e??"0"),s.append(a.NR.DESTINATION,JSON.stringify([...o])),s.append(a.NR.EXPIRY,n?a.uV:a.ug),s.append(a.NR.PRIORITY,n?a.NR.CLICK_PRIORITY:a.NR.VIEW_PRIORITY),l&&s.append(a.NR.ADVERTISER_ID,l),r&&s.append(a.NR.CAMPAIGN_ID,r),s.append(a.NR.SOURCE_EVENT_TYPE,n?a.bC:a.Cu);try{let{hostname:e}=new URL(window.location.href);"www.pinterest.com"!==e&&s.append(a.NR.HOSTNAME,e)}catch(e){(0,i.nP)("webapp.arapi.generateARASourceEventURL",{sampleRate:.1,tags:{status:"failed",href:window&&window.location&&window.location.href}})}return"https://www.pinterest.com/attribution_source/?"+s.toString()}async function s(e,t,n,a,s,o,d,u,c){let p;let{appType:m,osType:h}=o||{},g="",_="";if(["Pin","pinImpressions"].includes(e)&&t&&(a||u||c)){(0,i.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"start",appType:m,osType:h}});try{if(!window.document.featurePolicy?.allowsFeature("attribution-reporting")){(0,i.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"skipped",message:"attribution-reporting is not enabled",appType:m,osType:h}});return}g=l(n,[a,u,c],!1,s,d);try{_=new URL(window.location.href).hostname}catch(e){(0,i.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"hostname_parse_failed",href:window&&window.location&&window.location.href}})}if(_&&"www.pinterest.com"!==_)document.createElement("img").setAttribute("attributionsrc",g),(0,i.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"international",appType:m,osType:h,hostname:_}});else if(!(p=await window.fetch(g,{keepalive:!0,attributionReporting:{eventSourceEligible:!0,triggerEligible:!1}})).ok)throw Error("server request failed.");(0,i.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"success",appType:m,osType:h}})}catch(e){(0,i.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"failed",error:(0,r.Z)(e,"name"),message:(0,r.Z)(e,"message"),appType:m,osType:h,hostname:_,responseStatus:p&&p.status}})}}else(0,i.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"missing_param",appType:m,osType:h}})}function o(e){if(e){let t=e.toLowerCase();if(t.includes("windows"))return"windows xp"===t?1:"windows vista"===t?2:"windows 7"===t?3:"windows 8"===t?4:12;if(t.includes("mac os"))return 5;if(t.includes("android"))return 7;if(t.includes("ios"))return 6;if(t.includes("ubuntu"))return 8;if(t.includes("chromium os"))return 13}return 0}},118755:(e,t,n)=>{n.d(t,{G6:()=>i,i7:()=>l,oi:()=>a,u$:()=>r,un:()=>o,vU:()=>s,w1:()=>d});let a=Object.freeze({OTHER:0,CHROME:1,SAFARI:2,IE:3,FIREFOX:4,OPERA:5,EDGE:6}),r=e=>e?e.includes("Chrome")?a.CHROME:e.includes("Safari")?a.SAFARI:e.includes("Firefox")?a.FIREFOX:e.includes("Opera")?a.OPERA:e.includes("IE")?a.IE:e.includes("Edge")?a.EDGE:a.OTHER:a.OTHER;function i(e){return r(e)===a.SAFARI}function l(e){return r(e)===a.CHROME}function s(e){return r(e)===a.FIREFOX}function o(e){return r(e)===a.EDGE}function d(e){return r(e)===a.IE}},656817:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(667294);function r(e){return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}function i(){return window.innerWidth}function l(){return window.innerHeight}function s(){return null}function o(){let e=(0,a.useSyncExternalStore)(r,l,s),t=(0,a.useSyncExternalStore)(r,i,s);return null!==e&&null!==t?{height:e,width:t}:null}},766546:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(667294);function r(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class i extends a.Component{constructor(...e){super(...e),r(this,"ref",(0,a.createRef)()),r(this,"observer",null),r(this,"handleVisibilityChanged",(e,t)=>{this.props.onVisibilityChange(e,t)})}componentDidMount(){this.ref&&this.ref.current&&(this.observer=new window.IntersectionObserver(this.handleVisibilityChanged,this.props.options),this.observer.observe(this.ref.current))}componentWillUnmount(){this.observer&&(this.observer.unobserve(this.ref.current),delete this.observer)}render(){return this.props.children(this.ref)}}let l=i},836350:(e,t,n)=>{n.d(t,{P:()=>i,Z:()=>r});var a=n(545007);function r(e){return e?.[1000069]&&500417===e[1000069].experience_id&&e[1000069].display_data.hide_footer}function i(){let e=(0,a.v9)(({experiences:e})=>e);return!!e&&r(e)}},978993:(e,t,n)=>{n.d(t,{L_:()=>r,Nh:()=>i,qn:()=>a});let a=(e,t)=>{if("undefined"==typeof window)return t;try{return window.sessionStorage.getItem(e)}catch(e){return window.console.error("Cannot access sessionStorage."),t}},r=e=>{if("undefined"!=typeof window)try{window.sessionStorage.removeItem(e)}catch(e){window.console.error("Cannot access sessionStorage.")}},i=(e,t)=>{if("undefined"!=typeof window)try{window.sessionStorage.setItem(e,t)}catch(e){window.console.error("Cannot access sessionStorage.")}}},499671:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(667294),r=n(883119),i=n(136061),l=n(766546),s=n(730212),o=n(655201),d=n(616949),u=n(158776),c=n(603667),p=n(66560),m=n(785893);function h(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class g extends a.Component{constructor(e){super(e),h(this,"componentWillUnmount",()=>{this.unregisterComponent()}),h(this,"getContext",()=>{let{clientTrackingParams:e,component:t,element:n,objectId:a,timeSpentContext:r,view:i,viewParameter:l}=this.props;return{view:i||r?.view,viewParameter:l||r?.viewParameter,component:t||r?.component,element:n,objectId:a||r?.objectId,clientTrackingParams:e||r?.clientTrackingParams,getParentUuid:()=>this.getUuid(),getGrandparentUuid:()=>this.getParentId()}}),h(this,"getLoggerContext",()=>{let e={...this.getContext()};return delete e.getParentUuid,e}),h(this,"getParentId",()=>{let{timeSpentContext:e,shouldUseGrandparentId:t=!1}=this.props;if(t&&e&&e.getGrandparentUuid){let t=e.getGrandparentUuid();if(t)return t}return e?.getParentUuid?.()}),h(this,"getUuid",()=>this.state.timedPair?this.state.timedPair.uuid:void 0),h(this,"getTimedPair",()=>this.state.timedPair),h(this,"setTimedPair",(e,t)=>{this.setState({timedPair:e},()=>{t&&t()})}),h(this,"isRegistered",!1),h(this,"registerComponent",()=>{this.props.timeSpentManager.registerComponent(this),this.isRegistered=!0}),h(this,"unregisterComponent",()=>{this.isRegistered&&(this.props.timeSpentManager.unregisterComponent(this),this.isRegistered=!1)}),h(this,"handleVisibilityChange",e=>{let{intersectionRatio:t}=e[0],{bottom:n,left:a,right:r,top:i}=e[0].intersectionRect;t>0?this.registerComponent():0===t&&(0===n&&0===a&&0===r&&0===i?this.unregisterComponent():this.registerComponent())}),this.state={timedPair:new d.Z(this.getLoggerContext())}}componentDidUpdate(e){!this.isRegistered||e.view===this.props.view&&e.viewParameter===this.props.viewParameter&&e.component===this.props.component&&e.element===this.props.element&&e.objectId===this.props.objectId&&(0,o.Z)(e.auxData,this.props.auxData)&&(0,o.Z)(e.viewData,this.props.viewData)||(this.unregisterComponent(),setTimeout(this.registerComponent))}render(){let{children:e,intersectionObserverBoxHeight:t}=this.props;return(0,m.jsx)(u.$,{value:this.getContext(),children:(0,m.jsx)(l.Z,{onVisibilityChange:this.handleVisibilityChange,options:{threshold:0},children:n=>(0,m.jsx)(r.xu,{ref:n,height:t??"100%",children:a.Children.only(e)})})})}}function _(e){let t=(0,i.Hv)(),n=(0,u.Z)(),r=(0,c.Z)(),l=(0,p.H0)(),{requestIdentifier:o=""}=(0,s.B)(),d={app_instance_id:o.slice(0,8),...e.auxData??{}};return(0,a.useEffect)(()=>{r?.setHistoryStackContext(t)},[t,r]),(0,a.useEffect)(()=>{r?.setPins(l??{})},[l,r]),r?(0,m.jsx)(g,{...e,auxData:d,timeSpentContext:n,timeSpentManager:r,children:e.children}):e.children}_.displayName="DeprecatedTimeSpent";let f=_},158776:(e,t,n)=>{n.d(t,{$:()=>a,Z:()=>r});let{Provider:a,useMaybeHook:r}=(0,n(498490).Z)("timeSpentContext")},616949:(e,t,n)=>{n.d(t,{Z:()=>s,h:()=>l});var a=n(172045),r=n(17314);function i(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let l="undefined"!=typeof window&&window.performance&&window.performance.now?()=>Math.floor(1e6*window.performance.now()):()=>1e6*Date.now(),s=class{constructor(e){i(this,"start",()=>(this.startTime=l(),this.startTime)),i(this,"end",()=>(this.endTime=l(),this.duration=this.startTime?this.endTime-this.startTime:null,this.duration));try{this.uuid=(0,a.Z)()}catch(e){this.uuid=(0,r.Z)()}e&&Object.assign(this,e)}}},386270:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(545007);let r=[1000069,1000075],i={};function l(){var e;return e=(0,a.v9)(({experiences:e})=>e),r.forEach(t=>{e[t]&&(void 0===i[t]||i[t].id!==e[t].id)&&(i[t]=e[t])}),i}},644797:(e,t,n)=>{n.d(t,{W:()=>u,r:()=>d});var a=n(667294),r=n(573706),i=n(498490),l=n(297728),s=n(785893);let{Provider:o,useHook:d}=(0,i.Z)("VideoPlayer");function u({children:e}){let{logContextEvent:t,logImpression:n}=(0,r.v)(),{checkExperiment:i}=(0,l.F)(),[d,u]=(0,a.useState)(!1),[c,p]=(0,a.useState)([]),[m,h]=(0,a.useState)([]),[g,_]=(0,a.useState)({}),f=i("web_ads_mrc_video_impression").anyEnabled,b=e=>{_(t=>({...t,[e]:!0}))},y=(0,a.useCallback)(e=>{if(18===e.event_type&&e.event_data?.pinImpressions?.length){let{isNativeVideoAndWatchable:t}=e.event_data.pinImpressions[0],n=JSON.stringify(e.aux_data?.commerce_data||"").includes("story_pin_id");f&&(t||n)&&p(t=>[...t,e].slice(-1e3))}},[f]),v=(0,a.useCallback)(e=>{18===e.eventType&&f&&h(t=>[...t,e].slice(-1e3))},[f]),w=e=>{let{time:t}=e.event_data.pinImpressions[0];return{...e,event_data:{...e.event_data,pinImpressions:[{...e.event_data.pinImpressions[0],isMrcBtr:!0,endTime:t,renderDuration:0}]}}},E=e=>{if(e.eventData){let{time:t}=e.eventData;return{...e,eventData:{...e.eventData,isMrcBtr:!0,endTime:t??0}}}return null};(0,a.useEffect)(()=>{let e=c.filter(e=>{let{pinIdStr:n}=e.event_data.pinImpressions[0];return!g[n]||!f||(t(w(e)),!1)});e.length!==c.length&&p(e)},[c,f,t,g]),(0,a.useEffect)(()=>{let e=m.filter(e=>{let t=e.eventData?.pinIdStr;if(!t)return!1;if(g[t]&&f){let t=E(e);return t&&n(t),!1}return!0});e.length!==m.length&&h(e)},[m,f,n,g]);let P=(0,a.useMemo)(()=>({captionsEnabled:d,logMrcVideoAdImpressionOnPlay:v,logMrcVideoAdEventOnPlay:y,setCaptionsEnabled:u,setVideoPlayed:b,videosPlayed:g}),[d,y,v,g]);return(0,s.jsx)(o,{value:P,children:e})}},252607:(e,t,n)=>{n.d(t,{BK:()=>f,Tw:()=>b,rX:()=>k,ZP:()=>D}),n(167912);var a,r,i,l,s=n(718075),o=n(529521),d=n(384609),u=n(297728),c=n(410150),p=n(383399),m=n(845873),h=n(66560),g=n(964973),_=n(785893);let f=(0,g.Z)(()=>Promise.all([n.e(97270),n.e(22273),n.e(78047),n.e(2984)]).then(n.bind(n,279985)),void 0,e=>279985,"AuthDesktopPinRep"),b=(0,g.Z)(()=>Promise.all([n.e(97270),n.e(39921)]).then(n.bind(n,657425)),void 0,e=>657425,"DefaultPinRep"),y=void 0!==a?a:a=n(878069),v=void 0!==r?r:r=n(84267),w=void 0!==i?i:i=n(216931),E=e=>{let{pinKey:t,...n}=e,a=(0,d.Z)(w,t);return(0,_.jsx)(s.Z,{id:"AuthDesktopPinRepWithImpressions",children:(0,_.jsx)(f,{...n,pinKey:a})})},P=e=>{let{pinId:t,...n}=e,a=(0,h.S6)(),r=t?a(t):null,i=r?.tracking_params;return r&&(0,_.jsx)(s.Z,{id:"AuthDesktopPinRepDeprecated",children:(0,_.jsx)(f,{...n,pinKey:{type:"deprecated",data:r},trackingParams:i})})},R=void 0!==l?l:l=n(515280),S=e=>{var t,n,a;let{pinId:r,pinKey:i,...l}=e,u=i&&"GraphQL"===(0,o.o)(i),c=(0,d.Z)(R,i),p=(0,h.S6)()(r),g=(0,m.gC)(),f=u&&c?c:p?{type:"deprecated",data:p}:null;return f&&(0,_.jsx)(s.Z,{id:"DefaultPinRep",children:(0,_.jsx)(b,{...l,boardKey:(t=!!u,n=c?.pinnedToBoard||c?.board||null,a=g(p?.pinned_to_board?.id||p?.board?.id||""),t?n:a?{type:"deprecated",data:a}:null),pinKey:f})})};function D(e){let t=(0,c.HG)(),n=(0,p.Z)(),a=n&&n.isAuth&&t,r=(0,d.Z)(y,e.duploQueryRef),{checkExperiment:i}=(0,u.F)();if(!(!a||e.duploQueryRef||i("web_auth_desktop_default_pin_rep").anyEnabled)){let{disableAppUpsell:t,duploDedupeVisualAnnotations:n,duploDisablePinCardPadding:a,duploFeedItemProps:r,duploIsSquarePin:i,duploLazyLoadImage:l,duploOneTapSave:s,duploPinCardDetailsMargin:o,duploPriorityFetchImage:d,duploQueryRef:u,duploShouldAddNiiSearchParamToImageUrls:c,duploShouldAllowProductPriceIndicator:p,duploConversationPin:m,topLevelTrafficSource:h,topLevelTrafficSourceDepth:g,trafficSource:f,...b}=e;return(0,_.jsx)(P,{...b})}let{duploQueryRef:l,...s}=e;return(0,_.jsx)(S,{...s,pinKey:r})}function k(e){let t=(0,c.HG)(),n=(0,p.Z)(),a=n&&n.isAuth&&t,r=(0,d.Z)(y,e.duploQueryRef),i=(0,d.Z)(v,e.pinKey);if(a&&null!=i&&null!=e.pinKey){let{disableAppUpsell:t,duploDedupeVisualAnnotations:n,duploDisablePinCardPadding:a,duploFeedItemProps:r,duploIsSquarePin:l,duploLazyLoadImage:s,duploOneTapSave:o,duploPinCardDetailsMargin:d,duploPriorityFetchImage:u,duploQueryRef:c,duploShouldAddNiiSearchParamToImageUrls:p,duploShouldAllowProductPriceIndicator:m,duploConversationPin:h,topLevelTrafficSource:g,topLevelTrafficSourceDepth:f,trafficSource:b,pinKey:y,...v}=e,{pinId:w,...P}=v;return(0,_.jsx)(E,{...P,pinKey:i})}let{duploQueryRef:l,...s}=e;return(0,_.jsx)(S,{...s,pinKey:r})}},845873:(e,t,n)=>{n.d(t,{bn:()=>s,fJ:()=>d,gC:()=>o});var a=n(545007),r=n(498490),i=n(785893);let{Provider:l,useHook:s}=(0,r.Z)("Boards");function o(){let e=s();return t=>e[t]}function d({children:e}){let t=(0,a.v9)(({boards:e})=>e,a.wU);return(0,i.jsx)(l,{value:t,children:e})}},55463:(e,t,n)=>{n.d(t,{f:()=>s,w:()=>o});var a=n(667294),r=n(498490),i=n(785893);let{Provider:l,useHook:s}=(0,r.Z)("Session");function o({children:e}){let[t,n]=(0,a.useState)(void 0),r=(0,a.useCallback)(()=>n(void 0),[]),s=(0,a.useMemo)(()=>({unauthFollowUserId:t,setUnauthFollowUserId:n,removeUnauthFollowUserId:r}),[t,r]);return(0,i.jsx)(l,{value:s,children:e})}},888027:(e,t,n)=>{n.r(t),n.d(t,{BOARD_REP_PADDING_DWEB:()=>w,BOARD_REP_PADDING_MWEB:()=>E,default:()=>P});var a,r=n(545007);n(167912);var i=n(883119),l=n(488792),s=n(384609),o=n(730212),d=n(1006),u=n(154785),c=n(410150),p=n(383399),m=n(856163),h=n(464099),g=n(478595),_=n(560425),f=n(845873),b=n(785893);let y=void 0!==a?a:a=n(777579),v=["thumbnail","imageOnly"],w=2,E=3;function P({boardKey:e,component:t,containerBackgroundColor:n,display:a="responsive",forwardedRef:P,fullSize:R,hideSecretBoardIcon:S=!1,isAttributionHeightUnfixed:D=!1,isCollaboratorsAttributionVisible:k=!1,isFeaturedBoardsModule:I=!1,isHomePageBoards:C,isNoBoardTitleStyle:A=!1,noPaddings:L=!1,showFollowButton:F=!0,showMask:T=!1,showPinCount:O=!0,showTitleOnly:x,slotIndex:B,type:U,viewObjectIdStr:G,viewParameter:Z,viewType:M,isBoardPreviewEnabled:N}){let K=(0,p.Z)(),j=K&&K.isAuth,V=(0,r.I0)(),{locale:H}=(0,o.B)(),Q=(0,u.Z)(),z=(0,s.Z)(y,e),W=(0,f.gC)(),Y=z?.entityId?W(z.entityId):null,X=(0,h.Z)(z),$=(0,l.Z)(),q=(0,c.HG)();if(!z)return null;let{owner:J,shouldShowBoardCollaborators:ee}=z,et=K.isAuth?K.id:"",en=J?.entityId===et,ea=z.collaboratingUsers?.__typename==="UserCollaboratingUsersConnectionContainer"?z.collaboratingUsers.connection?.edges:[],er=ea?.some(e=>e?.node?.entityId===et)||en;if("secret"===z.privacy&&!er)return null;let ei="grid"===U||"thumbnail"===U?2:4,el=N&&z.images236x?.[0]?.url?z.images236x?.[0]?.url:X(ei),es=z.coverPin??Y?.cover_pin,eo=(es?.crop&&es?.size&&{x:es?.crop[0]??0,y:es?.crop[1]??0,width:es?.size[0]??0,height:es?.size[0]??0})??{x:0,y:0,width:0,height:0},ed={isCustom:!N&&(z.hasCustomCover||void 0),url:el,position:eo},eu=z.pinThumbnailUrls??Y?.pin_thumbnail_urls,ec=(0,g.Jx)(z.images170x,eu?.filter(e=>null!==e)??void 0,el).map(({url:e})=>({name:(0,g.po)(e),url:e})),ep=[44,49].includes(Z)||[3,442,625].includes(M),em=()=>49===Z?en?3106:3107:Z,eh=z?.sensitivityScreen?{reason:z.sensitivityScreen?.reason,showWarning:z.sensitivityScreen?.showWarning}:void 0,eg=z.pinCount??Y?.pin_count??0,e_=z.sectionCount??Y?.section_count??0,ef=(0,b.jsx)(m.Z,{archivedDate:z.archivedByMeAt??Y?.archived_by_me_at,boardId:z.entityId,canEdit:!!z.boardAccess&&z.boardAccess.includes("write"),containerBackgroundColor:n,coverPhoto:ed,display:a,followedByMe:!!(Y?.followed_by_me??z.followedByMe),fullSizeDrawer:R,hideMeta:v.includes(U),hideSecretBoardIcon:S,id:z.entityId,imagesLego:ec,isAttributionHeightUnfixed:D,isAuthenticated:j,isCollaborative:!!z.isCollaborative,isCollaborator:!!er,isCollaboratorsAttributionVisible:k,isFeaturedBoardsModule:I,isHomePageBoards:C,isNoBoardTitleStyle:A,isOwner:en,isProtected:"protected"===z.privacy||Y?.privacy==="protected",isSecret:"secret"===z.privacy||Y?.privacy==="secret",isTemporarilyDisabled:!!z.isTemporarilyDisabled||!!Y?.is_temporarily_disabled,lastModifiedDate:z.boardOrderModifiedAt??Y?.board_order_modified_at??"",layout:q?"square":void 0,locale:H,metaMarginTop:2,metaPaddingY:0,name:z.name??(Y?.name||""),numberOfCollaborators:ea?.length??0,numCols:ei,onFollow:e=>V((0,_.Z)(e,$)),onUnfollow:e=>V((0,_.f)(e,$)),pinCount:O&&eg?eg:void 0,sectionCount:e_??0,sensitivityScreen:eh,showBoardCollaborators:!1!==ee,showFollowButton:F,showMask:T,showTitleOnly:x,slotIndex:B,userKey:z?.owner,viewerId:et,viewObjectIdStr:G,viewParameter:Z,viewType:M}),eb=z.url||Y?.url;return!v.includes(U)&&eb?(0,b.jsx)(i.Tg,{href:j?eb:eb.toLowerCase(),onTap:()=>{ep&&$({aux_data:{board_id:z.entityId,board_pin_count:eg,board_section_count:e_},component:t??1,element:36,event_type:102,view_parameter:em(),view_data:{view_object_id_str:G}}),j||((0,d.NC)("click_go_to_board"),Q({action:"click",item:"board-card"}))},rounding:2,tapStyle:"compress",children:(0,b.jsx)(i.xu,{ref:P,paddingY:L?0:q?w:E,children:ef})}):ef}},243583:(e,t,n)=>{n.d(t,{Yg:()=>o,ib:()=>u,nF:()=>p,xX:()=>c});var a=n(297728),r=n(730212),i=n(410150),l=n(415787);let s=({checkExperiment:e})=>{let{group:t}=e("auth_mweb_graphql_pin_page",{dangerouslySkipActivation:!0});return{logStat:(e,n)=>(0,l.nP)("webapp.graphql.debug_auth_mweb_graphql_pin_page",{sampleRate:1,tags:{event:e,group:t,...n}})}},o=()=>{let{isAuthenticated:e}=(0,r.B)(),t=(0,i.HG)(),{checkExperiment:n}=(0,a.F)();return e&&!t?s({checkExperiment:n}):{logStat:()=>{}}},d=0,u=({checkExperiment:e,isAuthMweb:t})=>{if(!t)return;let{logStat:n}=s({checkExperiment:e});(d+=1)<10&&n(`repin_${d}`)};function c({checkExperiment:e,isDesktop:t,isAuthenticated:n}){if(!n)return{isGraphQLEnabledInGeneral:!0,isGraphQLEnabledForRelatedPins:!0,closeupPageSuspenseBehavior:"SuspendOnMissingData",isImpressionFixEnabled:!1,addRelatedPinsLatency:!1};if(t){let{anyEnabled:t}=e("auth_dweb_graphql_pin_page");return{isGraphQLEnabledForRelatedPins:t,isGraphQLEnabledInGeneral:t,closeupPageSuspenseBehavior:null,isImpressionFixEnabled:!1,addRelatedPinsLatency:!1}}{let{anyEnabled:t,group:n}=e("auth_mweb_graphql_pin_page");switch(n){case"control":return{isGraphQLEnabledInGeneral:!1,isGraphQLEnabledForRelatedPins:!1,closeupPageSuspenseBehavior:null,isImpressionFixEnabled:!1,addRelatedPinsLatency:!1};case"only_impression_fix":return{isGraphQLEnabledInGeneral:!1,isGraphQLEnabledForRelatedPins:!1,closeupPageSuspenseBehavior:null,isImpressionFixEnabled:!0,addRelatedPinsLatency:!1};case"enabled":return{isGraphQLEnabledInGeneral:!0,isGraphQLEnabledForRelatedPins:!0,closeupPageSuspenseBehavior:"SuspendOnMissingData",isImpressionFixEnabled:!1,addRelatedPinsLatency:!1};case"enabled_and_impression_fix":return{isGraphQLEnabledInGeneral:!0,isGraphQLEnabledForRelatedPins:!0,closeupPageSuspenseBehavior:"SuspendOnMissingData",isImpressionFixEnabled:!0,addRelatedPinsLatency:!1};case"only_related_pins":return{isGraphQLEnabledInGeneral:!1,isGraphQLEnabledForRelatedPins:!0,closeupPageSuspenseBehavior:null,isImpressionFixEnabled:!1,addRelatedPinsLatency:!1};case"only_related_pins_and_impression_fix":return{isGraphQLEnabledInGeneral:!1,isGraphQLEnabledForRelatedPins:!0,closeupPageSuspenseBehavior:null,isImpressionFixEnabled:!0,addRelatedPinsLatency:!1};case"should_render_with_missing_data":return{isGraphQLEnabledInGeneral:!0,isGraphQLEnabledForRelatedPins:!0,closeupPageSuspenseBehavior:"RenderWithMissingData",isImpressionFixEnabled:!1,addRelatedPinsLatency:!1};case"render_and_subscribe":return{isGraphQLEnabledInGeneral:!0,isGraphQLEnabledForRelatedPins:!0,closeupPageSuspenseBehavior:"RenderWithMissingDataAndSubscribe",isImpressionFixEnabled:!1,addRelatedPinsLatency:!1};case"add_related_pins_latency":return{isGraphQLEnabledInGeneral:!1,isGraphQLEnabledForRelatedPins:!1,closeupPageSuspenseBehavior:null,isImpressionFixEnabled:!1,addRelatedPinsLatency:!0};default:return{isGraphQLEnabledInGeneral:t,isGraphQLEnabledForRelatedPins:t,closeupPageSuspenseBehavior:t?"SuspendOnMissingData":null,isImpressionFixEnabled:!1,addRelatedPinsLatency:!1}}}}function p(){let{checkExperiment:e}=(0,a.F)(),t=(0,i.HG)(),{isAuthenticated:n}=(0,r.B)();return c({checkExperiment:e,isDesktop:t,isAuthenticated:n})}},578406:(e,t,n)=>{n.d(t,{N4:()=>i,Wh:()=>a,hr:()=>r});let a=e=>e._('Log in to continue', 'limitedLogin.modalHeader.default', 'Default title on mobile web limited login modal'),r=e=>e._('You\'re almost there! Log in to access all of Pinterest', 'loginModal.limitedLogin.subheader', 'Subheader text on personalized login modal/flyout to remind users to log in'),i=({i18n:e,toFollow:t})=>t?e._('Log in to follow', 'limitedLogin.modalHeader.follow', 'Title on mobile web limited login modal to prompt users to login to follow a user or board.'):e._('Log in to unfollow', 'limitedLogin.modalHeader.unfollow', 'Title on mobile web limited login modal to prompt users to login to unfollow a user or board.')},599911:(e,t,n)=>{n.d(t,{Z:()=>a});function a(e,t,n,r=!1,i){return{privacy_filter:t?"secret":"public",sort:n||"last_pinned_to",field_set_key:"profile_grid_item",username:e,isRetrievalHub:r,filter_types:i}}},35486:(e,t,n)=>{n.d(t,{Z:()=>a});let a=(e,t)=>`${e}:${t||""}`},831355:(e,t,n)=>{n.d(t,{O:()=>s,Q:()=>o});var a=n(338623),r=n(35486),i=n(701842);let l=["alphabetical","last_pinned_to","oldest","newest","group_boards_at_top","custom"],s={name:"BoardsResource",key:"boardsResource",options:({boardOrder:e,filterStories:t,mixPublicSecret:n,username:a,privacyFilter:r="all",filterAllPins:i=!1,filterShoppingList:l=!1,includeArchived:s=!0},o)=>({privacy_filter:r,sort:e||"last_pinned_to",field_set_key:"profile_grid_item",filter_stories:t,username:a,page_size:25,group_by:n?"mix_public_private":"visibility",include_archived:s,redux_normalize_feed:!0,filter_all_pins:i,filter_shopping_list:l,...o?{orbac_subject_id:o}:Object.freeze({})})},o=e=>l.reduce((t,n)=>{let l=[(0,i.N8)("profileBoards",(0,r.Z)(e,n))];return[!0,!1].forEach(t=>{[!0,!1].forEach(r=>{l.push((0,a.jB)(s.name,s.options({username:e,boardOrder:n,mixPublicSecret:t,filterStories:r})))})}),t.concat(l)},[])},119437:(e,t,n)=>{n.d(t,{Br:()=>u,Cr:()=>f,K8:()=>h,L1:()=>D,YQ:()=>S,ZP:()=>b,aX:()=>y,eo:()=>p,md:()=>c,oG:()=>m,oL:()=>v,of:()=>g,xQ:()=>_,xR:()=>R,yT:()=>d});var a=n(252071),r=n(640498),i=n(468808),l=n(338623),s=n(599911),o=n(831355);function d(e){return{type:"BOARD_UPDATE_COMPLETE",payload:{board:e}}}function u(e){return{type:"BOARD_PIN_COUNT_CHANGED",payload:e}}function c(e,t){return{type:"BOARD_FOLLOW",payload:{boardId:e,value:t}}}function p({viewingUserId:e,viewingUsername:t,boardId:n,boardPinCount:a}){return{type:"BOARD_DELETE",payload:{viewingUserId:e,viewingUsername:t,boardId:n,boardPinCount:a}}}let m=(e,t)=>n=>n((0,i.U)("BoardResource",{options:{board_id:e,field_set_key:t}}));function h(e){return t=>{e&&(0,o.Q)(e).forEach(e=>{t(e)})}}let g=e=>({type:"BOARD_DISMISS_SENSITIVITY_SCREEN",payload:{boardId:e}}),_=e=>m(e,"pin_count"),f=(e,t)=>({type:"BOARD_COVER_IMAGE_UPDATED",payload:{boardId:e,coverPin:t}}),b=e=>({type:"BOARD_DISABLE_MORE_IDEAS_BADGING",payload:{boardId:e}});function y(e,t,n){let i={name:e,privacy:r.ZP.BoardPrivacy.PUBLIC,username:t,...n?{orbac_subject_id:n}:Object.freeze({})};return e=>a.Z.create("BoardResource",i).callCreate().then(n=>{let a=n.resource_response.data;return e(t&&(0,l.jB)("BoardsResource",(0,s.Z)(t,!1))),a})}function v(e={},t,n){return{type:"BOARD_CREATE_COMPLETE",payload:{options:e,board:t},error:n}}let w=(e,t)=>({type:"BOARD_INVITE_DENIED_BY_VIEWER",payload:{boardId:e,userId:t}}),E=(e,t,n)=>({type:"BOARD_COLLABORATOR_DELETE",payload:{boardId:e,userId:t,viewingUser:n}}),P=(e,t,n,a)=>({type:"BOARD_COLLABORATOR_ADD",payload:{boardId:e,viewingUser:t,status:n,collaboratingUsers:a}}),R=(e,t,n)=>async r=>{r(w(e,t));let i=await a.Z.create("BoardInviteResource",{board_id:e,invited_user_id:t}).callDelete();return i.resource_response.error||n({event_type:29,object_id_str:e}),i},S=(e,t,n,r,i,l)=>async s=>{s(E(e,r?.id??"",n));try{(await a.Z.create("accepted"===t?"BoardCollaboratorResource":"BoardInviteResource",{board_id:e,field_set_key:"boardEdit",invited_user_id:r?.id??"",...l?{orbac_subject_id:l}:{}}).callDelete()).resource_response.error||i({event_type:"accepted"===t?25:29,object_id_str:e})}catch(a){s(P(e,n,t,[r]))}},D=(e,t,n,r)=>i=>{let l=a.Z.create("BoardResource",{board_id:n}).callDelete();return i(p({viewingUserId:e,viewingUsername:t,boardId:n,boardPinCount:r})),l}},560425:(e,t,n)=>{n.d(t,{Z:()=>i,f:()=>l});var a=n(400416),r=n(119437);function i(e,t){return async n=>{n((0,r.md)(e,!0));try{await (0,a.Z)({url:`/v3/boards/${e}/follow/`,method:"PUT"}),t({event_type:26,object_id_str:e})}catch(t){n((0,r.md)(e,!1))}}}function l(e,t){return async n=>{n((0,r.md)(e,!1));try{await (0,a.Z)({url:`/v3/boards/${e}/follow/`,method:"DELETE"}),t({event_type:27,object_id_str:e})}catch(t){n((0,r.md)(e,!0))}}}},701842:(e,t,n)=>{function a(e){return{type:"FEED_ITEM_REORDERED",payload:e}}function r(e,t){return{type:"FEED_INVALIDATE",payload:{feedType:e,feedId:t}}}n.d(t,{EX:()=>l,N8:()=>r,Qv:()=>i,_f:()=>a,vX:()=>s});let i=(e,t,n=Object.freeze({}))=>({type:"APPEND_FEED_ITEMS",payload:{id:e,options:n,items:t}});function l(e){return{type:"FEED_ITEMS_REMOVED",payload:e}}function s(e){return{type:"FEED_ITEMS_ADDED",payload:e}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/56810-9a54cbdf3648d676.mjs.map