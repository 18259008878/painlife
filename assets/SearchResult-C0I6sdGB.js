import{u as U,g as te,h as ae,i as Y,j as se,P as le,t as re,k as oe,l as S,m as f,n as ue,w as J,p as a,q as Ee,R as T,v as ne,x as ie,y as ce,C as ve,z as Ae,A as Be,B as he,D as ye,E as de,F as pe,G as ge,H as $,I,J as me,K as C,L as De}from"./app-BM9rwJ6l.js";const ke=["/","/about/","/about/%E5%85%B3%E4%BA%8E%E5%BB%BA%E7%AB%99.html","/about/%E5%85%B3%E4%BA%8E%E6%88%91.html","/posts/","/posts/%E8%AE%BA%E5%B0%8F%E7%BB%84%E4%BD%9C%E4%B8%9A%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AF%E7%A5%9E.html","/technology/","/technology/vscode%E4%B8%80%E6%9D%A1%E9%BE%99%E6%9C%8D%E5%8A%A1.html","/technology/backend/","/technology/backend/java%E7%9A%84%E5%A4%9A%E4%B8%AAo.html","/technology/backend/java%E7%B1%BB%E4%B9%8B%E9%97%B4%E7%9A%84%E8%BD%AC%E6%8D%A2.html","/technology/backend/jwt%E7%9A%84%E7%B2%97%E7%95%A5%E5%AE%9E%E7%8E%B0.html","/technology/backend/mybatis%E5%A4%8D%E6%9D%82SQL%E6%9F%A5%E8%AF%A2.html","/technology/backend/mybatis%E5%AD%97%E6%AE%B5%E7%B1%BB%E5%9E%8B%E4%B8%8D%E5%8C%B9%E9%85%8D%E8%A7%A3%E5%86%B3.html","/technology/backend/springCache%E7%BB%93%E5%90%88redis.html","/technology/backend/%E4%BB%8E%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%88%B0%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AD%98%E5%82%A8.html","/technology/backend/%E5%85%B3%E4%BA%8EJava%E8%AF%BB%E5%8F%96%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E6%97%B6%E5%8C%BA%E9%97%AE%E9%A2%98.html","/technology/backend/%E5%85%B3%E4%BA%8ELong%E4%BC%A0%E5%85%A5%E5%89%8D%E7%AB%AF%E7%B2%BE%E5%BA%A6%E7%BC%BA%E5%A4%B1%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html","/technology/backend/%E8%8E%B7%E5%8F%96bean%E7%9A%84%E9%82%A3%E4%BA%9B%E4%BA%8B.html","/technology/backend/%E9%98%BF%E9%87%8C%E4%BA%91oss%E7%9A%84%E4%BD%BF%E7%94%A8.html","/technology/backend/%E9%9B%AA%E8%8A%B1%E7%AE%97%E6%B3%95%E7%AE%80%E4%BB%8B.html","/technology/frontend/","/technology/frontend/%E5%88%9D%E8%AF%86vue.html","/404.html","/category/","/category/%E6%9D%82%E8%B0%88/","/category/vscode/","/category/java/","/category/mybatis/","/category/%E6%95%B0%E6%8D%AE%E5%BA%93/","/category/vue/","/tag/","/tag/%E5%B0%8F%E7%BB%84%E4%BD%9C%E4%B8%9A/","/tag/%E6%91%B8%E9%B1%BC/","/tag/java%E7%9A%84%E5%90%84%E7%A7%8Do/","/tag/mapstruct/","/tag/jwt/","/tag/%E5%A4%8D%E6%9D%82sql%E6%9F%A5%E8%AF%A2/","/tag/mybatis%E7%9A%84%E5%AD%97%E6%AE%B5%E5%8C%B9%E9%85%8D%E9%97%AE%E9%A2%98/","/tag/springcache/","/tag/redis/","/tag/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1/","/tag/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/","/tag/%E6%97%B6%E5%8C%BA%E9%97%AE%E9%A2%98/","/tag/long%E7%B2%BE%E5%BA%A6%E7%BC%BA%E5%A4%B1/","/tag/bean/","/tag/oss/","/tag/%E9%9B%AA%E8%8A%B1%E7%AE%97%E6%B3%95/","/article/","/star/","/timeline/"],be="SEARCH_PRO_QUERY_HISTORY",d=U(be,[]),fe=()=>{const{queryHistoryCount:s}=C,l=s>0;return{enabled:l,queryHistory:d,addQueryHistory:r=>{l&&(d.value=Array.from(new Set([r,...d.value.slice(0,s-1)])))},removeQueryHistory:r=>{d.value=[...d.value.slice(0,r),...d.value.slice(r+1)]}}},L=s=>ke[s.id]+("anchor"in s?`#${s.anchor}`:""),Ce="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=C,p=U(Ce,[]),He=()=>{const s=_>0;return{enabled:s,resultHistory:p,addResultHistory:l=>{if(s){const r={link:L(l),display:l.display};"header"in l&&(r.header=l.header),p.value=[r,...p.value.slice(0,_-1)]}},removeResultHistory:l=>{p.value=[...p.value.slice(0,l),...p.value.slice(l+1)]}}},Fe=s=>{const l=ve(),r=Y(),H=Ae(),u=S(0),D=f(()=>u.value>0),B=Be([]);return he(()=>{const{search:h,terminate:F}=ye(),g=me(i=>{const m=i.join(" "),{searchFilter:R=A=>A,splitWord:w,suggestionsFilter:j,...y}=l.value;m?(u.value+=1,h(i.join(" "),r.value,y).then(A=>R(A,m,r.value,H.value)).then(A=>{u.value-=1,B.value=A}).catch(A=>{console.warn(A),u.value-=1,u.value||(B.value=[])})):B.value=[]},C.searchDelay-C.suggestDelay);J([s,r],([i])=>g(i),{immediate:!0}),de(()=>{F()})}),{isSearching:D,results:B}};var we=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=ae(),H=Y(),u=se(le),{enabled:D,addQueryHistory:B,queryHistory:h,removeQueryHistory:F}=fe(),{enabled:g,resultHistory:i,addResultHistory:m,removeResultHistory:R}=He(),w=D||g,j=re(s,"queries"),{results:y,isSearching:A}=Fe(j),o=oe({isQuery:!0,index:0}),c=S(0),v=S(0),P=f(()=>w&&(h.value.length>0||i.value.length>0)),Q=f(()=>y.value.length>0),q=f(()=>y.value[c.value]||null),M=()=>{const{isQuery:e,index:t}=o;t===0?(o.isQuery=!e,o.index=e?i.value.length-1:h.value.length-1):o.index=t-1},z=()=>{const{isQuery:e,index:t}=o;t===(e?h.value.length-1:i.value.length-1)?(o.isQuery=!e,o.index=0):o.index=t+1},G=()=>{c.value=c.value>0?c.value-1:y.value.length-1,v.value=q.value.contents.length-1},K=()=>{c.value=c.value<y.value.length-1?c.value+1:0,v.value=0},V=()=>{v.value<q.value.contents.length-1?v.value+=1:K()},N=()=>{v.value>0?v.value-=1:G()},x=e=>e.map(t=>De(t)?t:a(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=pe[e.index]||"$content",[E,b=""]=ge(t)?t[H.value].split("$content"):t.split("$content");return e.display.map(n=>a("div",x([E,...n,b])))}return e.display.map(t=>a("div",x(t)))},k=()=>{c.value=0,v.value=0,l("updateQuery",""),l("close")},X=()=>D?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.queryHistory),h.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===t}],onClick:()=>{l("updateQuery",e)}},[a($,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:E=>{E.preventDefault(),E.stopPropagation(),F(t)}})]))])):null,Z=()=>g?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.resultHistory),i.value.map((e,t)=>a(T,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===t}],onClick:()=>{k()}},()=>[a($,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(E=>x(E)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:E=>{E.preventDefault(),E.stopPropagation(),R(t)}})]))])):null;return ue("keydown",e=>{if(s.isFocusing){if(Q.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=q.value.contents[v.value];B(s.queries.join(" ")),m(t),r.push(L(t)),k()}}else if(g){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const{index:t}=o;o.isQuery?(l("updateQuery",h.value[t]),e.preventDefault()):(r.push(i.value[t].link),k())}}}}),J([c,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!Q.value:!P.value}],id:"search-pro-results"},s.queries.length?A.value?a(Ee,{hint:u.value.searching}):Q.value?a("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:t},E)=>{const b=c.value===E;return a("li",{class:["search-pro-result-list-item",{active:b}]},[a("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((n,ee)=>{const O=b&&v.value===ee;return a(T,{to:L(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{B(s.queries.join(" ")),m(n),k()}},()=>[n.type==="text"?null:a(n.type==="title"?ne:n.type==="heading"?ie:ce,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):u.value.emptyResult:w?P.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{we as default};
