import{u as U,g as te,h as se,i as Y,j as ae,P as le,t as re,k as ue,l as F,m as R,n as oe,w as M,p as s,q as ie,R as $,v as ne,x as ce,y as ve,C as ye,z as he,A as pe,B as de,D as Ee,E as me,F as ge,G as Be,H as j,I,J as Ae,K as D,L as fe}from"./app-DP_QCMe9.js";const He=["/","/about/","/about/%E5%85%B3%E4%BA%8E%E5%BB%BA%E7%AB%99.html","/about/%E5%85%B3%E4%BA%8E%E6%88%91.html","/posts/","/posts/test.html","/technology/","/technology/backend/","/technology/backend/vscode%E4%B8%80%E6%9D%A1%E9%BE%99%E6%9C%8D%E5%8A%A1.html","/technology/backend/%E4%BB%8E%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%88%B0%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AD%98%E5%82%A8.html","/technology/frontend/","/technology/frontend/%E5%88%9D%E8%AF%86vue.html","/404.html","/category/","/category/%E5%B0%8F%E7%BB%84%E4%BD%9C%E4%B8%9A/","/category/%E6%91%B8%E9%B1%BC/","/category/vscode/","/category/%E6%95%B0%E6%8D%AE%E5%BA%93/","/category/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/","/category/vue/","/tag/","/tag/%E7%9B%AE%E5%BD%95/","/article/","/star/","/timeline/"],ke="SEARCH_PRO_QUERY_HISTORY",m=U(ke,[]),Re=()=>{const{queryHistoryCount:a}=D,l=a>0;return{enabled:l,queryHistory:m,addQueryHistory:r=>{l&&(m.value=Array.from(new Set([r,...m.value.slice(0,a-1)])))},removeQueryHistory:r=>{m.value=[...m.value.slice(0,r),...m.value.slice(r+1)]}}},L=a=>He[a.id]+("anchor"in a?`#${a.anchor}`:""),De="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=D,g=U(De,[]),we=()=>{const a=_>0;return{enabled:a,resultHistory:g,addResultHistory:l=>{if(a){const r={link:L(l),display:l.display};"header"in l&&(r.header=l.header),g.value=[r,...g.value.slice(0,_-1)]}},removeResultHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},Qe=a=>{const l=ye(),r=Y(),w=he(),o=F(0),f=R(()=>o.value>0),p=pe([]);return de(()=>{const{search:d,terminate:Q}=Ee(),B=Ae(c=>{const A=c.join(" "),{searchFilter:q=h=>h,splitWord:x,suggestionsFilter:P,...E}=l.value;A?(o.value+=1,d(c.join(" "),r.value,E).then(h=>q(h,A,r.value,w.value)).then(h=>{o.value-=1,p.value=h}).catch(h=>{console.warn(h),o.value-=1,o.value||(p.value=[])})):p.value=[]},D.searchDelay-D.suggestDelay);M([a,r],([c])=>B(c),{immediate:!0}),me(()=>{Q()})}),{isSearching:f,results:p}};var xe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),w=Y(),o=ae(le),{enabled:f,addQueryHistory:p,queryHistory:d,removeQueryHistory:Q}=Re(),{enabled:B,resultHistory:c,addResultHistory:A,removeResultHistory:q}=we(),x=f||B,P=re(a,"queries"),{results:E,isSearching:h}=Qe(P),u=ue({isQuery:!0,index:0}),v=F(0),y=F(0),O=R(()=>x&&(d.value.length>0||c.value.length>0)),C=R(()=>E.value.length>0),b=R(()=>E.value[v.value]||null),z=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:d.value.length-1):u.index=t-1},G=()=>{const{isQuery:e,index:t}=u;t===(e?d.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{v.value=v.value>0?v.value-1:E.value.length-1,y.value=b.value.contents.length-1},K=()=>{v.value=v.value<E.value.length-1?v.value+1:0,y.value=0},V=()=>{y.value<b.value.contents.length-1?y.value+=1:K()},N=()=>{y.value>0?y.value-=1:J()},S=e=>e.map(t=>fe(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=ge[e.index]||"$content",[i,k=""]=Be(t)?t[w.value].split("$content"):t.split("$content");return e.display.map(n=>s("div",S([i,...n,k])))}return e.display.map(t=>s("div",S(t)))},H=()=>{v.value=0,y.value=0,l("updateQuery",""),l("close")},X=()=>f?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},o.value.queryHistory),d.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:i=>{i.preventDefault(),i.stopPropagation(),Q(t)}})]))])):null,Z=()=>B?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},o.value.resultHistory),c.value.map((e,t)=>s($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{H()}},()=>[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(i=>S(i)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:i=>{i.preventDefault(),i.stopPropagation(),q(t)}})]))])):null;return oe("keydown",e=>{if(a.isFocusing){if(C.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=b.value.contents[y.value];p(a.queries.join(" ")),A(t),r.push(L(t)),H()}}else if(B){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",d.value[t]),e.preventDefault()):(r.push(c.value[t].link),H())}}}}),M([v,y],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!C.value:!O.value}],id:"search-pro-results"},a.queries.length?h.value?s(ie,{hint:o.value.searching}):C.value?s("ul",{class:"search-pro-result-list"},E.value.map(({title:e,contents:t},i)=>{const k=v.value===i;return s("li",{class:["search-pro-result-list-item",{active:k}]},[s("div",{class:"search-pro-result-title"},e||o.value.defaultTitle),t.map((n,ee)=>{const T=k&&y.value===ee;return s($,{to:L(n),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{p(a.queries.join(" ")),A(n),H()}},()=>[n.type==="text"?null:s(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?s("div",{class:"content-header"},n.header):null,s("div",W(n))])])})])})):o.value.emptyResult:x?O.value?[X(),Z()]:o.value.emptyHistory:o.value.emptyResult)}});export{xe as default};
