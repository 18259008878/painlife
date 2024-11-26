import{u as U,g as se,h as te,i as Y,j as ae,P as le,t as re,k as ue,l as L,m as Q,n as ie,w as M,p as t,q as oe,R as T,v as ne,x as ce,y as ve,C as pe,z as he,A as ye,B as de,D as me,E as ge,F as Ee,G as fe,H as $,I,J as He,K as A,L as Re}from"./app-C0UZZdPy.js";const ke=["/","/about/","/about/%E5%85%B3%E4%BA%8E%E5%BB%BA%E7%AB%99.html","/about/%E5%85%B3%E4%BA%8E%E6%88%91.html","/technology/","/posts/","/posts/test.html","/technology/spring/","/technology/spring/%E5%88%9D%E8%AF%86spring.html","/technology/vue/","/technology/vue/%E5%88%9D%E8%AF%86vue.html","/404.html","/category/","/category/%E6%B5%8B%E8%AF%95/","/category/spring/","/category/java/","/category/vue/","/tag/","/tag/%E7%9B%AE%E5%BD%95/","/article/","/star/","/timeline/"],we="SEARCH_PRO_QUERY_HISTORY",g=U(we,[]),Qe=()=>{const{queryHistoryCount:a}=A,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=a=>ke[a.id]+("anchor"in a?`#${a.anchor}`:""),Ae="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=A,E=U(Ae,[]),qe=()=>{const a=_>0;return{enabled:a,resultHistory:E,addResultHistory:l=>{if(a){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),E.value=[r,...E.value.slice(0,_-1)]}},removeResultHistory:l=>{E.value=[...E.value.slice(0,l),...E.value.slice(l+1)]}}},xe=a=>{const l=pe(),r=Y(),q=he(),i=L(0),R=Q(()=>i.value>0),y=ye([]);return de(()=>{const{search:d,terminate:x}=me(),f=He(c=>{const H=c.join(" "),{searchFilter:B=h=>h,splitWord:D,suggestionsFilter:P,...m}=l.value;H?(i.value+=1,d(c.join(" "),r.value,m).then(h=>B(h,H,r.value,q.value)).then(h=>{i.value-=1,y.value=h}).catch(h=>{console.warn(h),i.value-=1,i.value||(y.value=[])})):y.value=[]},A.searchDelay-A.suggestDelay);M([a,r],([c])=>f(c),{immediate:!0}),ge(()=>{x()})}),{isSearching:R,results:y}};var De=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),q=Y(),i=ae(le),{enabled:R,addQueryHistory:y,queryHistory:d,removeQueryHistory:x}=Qe(),{enabled:f,resultHistory:c,addResultHistory:H,removeResultHistory:B}=qe(),D=R||f,P=re(a,"queries"),{results:m,isSearching:h}=xe(P),u=ue({isQuery:!0,index:0}),v=L(0),p=L(0),j=Q(()=>D&&(d.value.length>0||c.value.length>0)),S=Q(()=>m.value.length>0),C=Q(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:d.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?d.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=C.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},V=()=>{p.value<C.value.contents.length-1?p.value+=1:K()},N=()=>{p.value>0?p.value-=1:J()},b=e=>e.map(s=>Re(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=Ee[e.index]||"$content",[o,w=""]=fe(s)?s[q.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",b([o,...n,w])))}return e.display.map(s=>t("div",b(s)))},k=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>R?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),d.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),x(s)}})]))])):null,Z=()=>f?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t(T,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{k()}},()=>[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>b(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),B(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(S.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=C.value.contents[p.value];y(a.queries.join(" ")),H(s),r.push(F(s)),k()}}else if(f){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",d.value[s]),e.preventDefault()):(r.push(c.value[s].link),k())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!S.value:!j.value}],id:"search-pro-results"},a.queries.length?h.value?t(oe,{hint:i.value.searching}):S.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const w=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:w}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const O=w&&p.value===ee;return t(T,{to:F(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{y(a.queries.join(" ")),H(n),k()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:D?j.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{De as default};
