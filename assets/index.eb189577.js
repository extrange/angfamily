import{p as O,c as H,C as k,r as G,s as M,S as R,a as b,j as r,T as f,L as w,b as d,F as T,I as L,M as y,d as P,P as _,e as B,f as D,g as S,h as u,i as E,k as F,l as I,m as K,n as N,B as W,R as A,o as $,q as V,t as q,u as z}from"./vendor.e5b5cad5.js";const J=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const e of o.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&i(e)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}};J();const p=(a,l,{latest:n=!0,highest:i=!1}={})=>{let t=[];return Object.entries(a).forEach(([o,e])=>{var x;let s=Object.entries((x=e[l])!=null?x:{}).map(([c,h])=>[O(c),h]).sort((c,h)=>H(c[0],h[0]));if(!s.length)return;let C=n?s[0]:s.reduce((c,h)=>i?h[1]>=c[1]?h:c:h[1]<=c[1]?h:c);t.push({name:o,date:C[0],value:C[1]})}),t.sort(({value:o},{value:e})=>i?e-o:o-e),t},m={fastingGlucose:{name:"Fasting Glucose, mmol/L (lower is better)"},hbA1c:{name:"HbA1c, % (lower is better)",leaderboardSort:(a,l)=>p(a,l)},ldl:{name:"LDL Cholesterol, mmol/L (lower is better)",leaderboardSort:(a,l)=>p(a,l)},hdl:{name:"HDL Cholesterol, mmol/L (lower is better)"},tChol:{name:"Total Cholesterol, mmol/L (lower is better)",leaderboardSort:(a,l)=>p(a,l)},trig:{name:"Triglycerides, mmol/L (lower is better)",leaderboardSort:(a,l)=>p(a,l)}},g={"Huai Chuan":{fastingGlucose:{"2017-07-01":5.5,"2021-11-25":5.2},hbA1c:{"2017-07-01":5.8},hdl:{"2017-07-01":1.37,"2021-11-25":1.04},ldl:{"2017-07-01":3.26,"2021-11-25":3.17},tChol:{"2017-07-01":5.69,"2021-11-25":5.58},trig:{"2017-07-01":2.34,"2021-11-25":3.01}},"Huai Kee":{fastingGlucose:{"2017-08-21":5},hbA1c:{"2016-04-17":5.6,"2017-08-21":5.6},hdl:{"2016-04-17":1.01,"2017-08-21":1.03},ldl:{"2016-04-17":2.8,"2017-08-21":3.39},tChol:{"2016-04-17":4.57,"2017-08-21":5.19},trig:{"2016-04-17":1.68,"2017-08-21":1.69}},"Huai Lee":{fastingGlucose:{"2017-03-01":5.34,"2021-11-23":5.6},hbA1c:{"2016-04-17":6,"2017-03-01":5.8},hdl:{"2016-04-17":1.33,"2017-03-01":1.58,"2021-11-23":2.1},ldl:{"2016-04-17":2.65,"2017-03-01":3.23,"2021-11-23":3.8},tChol:{"2016-04-17":4.65,"2017-03-01":5.15,"2021-11-23":6.23},trig:{"2016-04-17":1.48,"2017-03-01":.76,"2021-11-23":.72}},"Huay Boon":{fastingGlucose:{"2021-07-17":5},hbA1c:{},hdl:{"2021-07-17":1.99},ldl:{"2021-07-17":2.61},tChol:{"2021-07-17":4.89},trig:{"2021-07-17":.6}},"Ah Gong":{fastingGlucose:{"2021-11-23":9.8},hbA1c:{},hdl:{"2021-11-23":.91},ldl:{"2021-11-23":2.35},tChol:{"2021-11-23":4.51},trig:{"2021-11-23":2.76}},"Whai Hoon":{fastingGlucose:{"2021-11-13":4.3},hbA1c:{},hdl:{"2021-11-13":2.3},ldl:{"2021-11-13":3.24},tChol:{"2021-11-13":6.11},trig:{"2021-11-13":1.26}},Nicholas:{fastingGlucose:{"2021-07-10":5.2},hbA1c:{"2021-07-10":5.2},hdl:{"2021-07-10":1.78},ldl:{"2021-07-10":2.28},tChol:{"2021-07-10":4.29},trig:{"2021-07-10":.5}},"Koon Hian":{fastingGlucose:{"2021-11-26":4.5},hbA1c:{"2021-11-26":5.5},hdl:{"2021-11-26":1.13},ldl:{"2021-11-26":3},tChol:{"2021-11-26":4.75},trig:{"2021-11-26":1.37}},"Koon Hwee":{fastingGlucose:{"2021-11-26":3.8},hbA1c:{"2021-11-26":5.6},hdl:{"2021-11-26":1.44},ldl:{"2021-11-26":1.47},tChol:{"2021-11-26":3.32},trig:{"2021-11-26":.9}}};k.register(...G);const j=M(R)`
  width: 200px;
  margin-right: 10px;
`;var Q={name:"12t7ffd",styles:"display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center"};const U=()=>{const[a,l]=b.exports.useState(""),[n,i]=b.exports.useState(""),t=Object.keys(g).sort((e,s)=>e.localeCompare(s)),o=b.exports.useMemo(()=>a?n?r(w,{data:{datasets:[{label:m[n].name,backgroundColor:"hotpink",borderColor:"hotpink",data:g[a][n]}]}}):Object.entries(m).map(([e,s])=>r(w,{data:{datasets:[{label:s.name,backgroundColor:"hotpink",borderColor:"hotpink",data:g[a][e]}]}},e)):r(f,{align:"center",sx:{mt:4},children:"Select a person to view their results"}),[a,n]);return d(P,{children:[d("div",{css:Q,children:[d(T,{children:[r(L,{children:"Person"}),r(j,{autoWidth:!0,label:"Person",value:a,onChange:e=>l(e.target.value),children:t.map(e=>r(y,{value:e,children:e},e))})]}),d(T,{children:[r(L,{shrink:!0,children:"Result Type"}),d(j,{autoWidth:!0,displayEmpty:!0,label:"Result Type",value:n,notched:!0,onChange:e=>i(e.target.value),renderValue:e=>{var s;return((s=m[e])==null?void 0:s.name)||"Show all"},children:[r(y,{value:"",children:"Show all"},"all"),Object.entries(m).sort(([,{name:e}],[,{name:s}])=>e.localeCompare(s)).map(([e,{name:s}])=>r(y,{value:e,children:s},e))]})]})]}),r("div",{style:{position:"relative",height:"auto",width:"90vw",maxWidth:"600px"},children:o})]})};var X={name:"4l85t7",styles:".MuiTableCell-body{font-weight:bold;}background-color:darkslategray"},Y={name:"xdx4gc",styles:"margin:40px 0"};const Z=()=>Object.entries(m).filter(([,{leaderboardSort:l}])=>l).map(([l,{name:n,leaderboardSort:i}])=>d("div",{css:Y,children:[r(f,{variant:"h5",align:"center",children:n}),r(I,{component:_,children:d(B,{size:"small",children:[r(D,{children:d(S,{hover:!0,children:[r(u,{children:"Rank"}),r(u,{children:"Value"}),r(u,{children:"Person"}),r(u,{children:"Date"})]})}),r(E,{children:i(g,l).map(({name:t,date:o,value:e},s)=>d(S,{hover:!0,css:s===0&&X,children:[r(u,{children:s+1}),r(u,{children:e}),r(u,{children:t}),r(u,{children:F(o,"yyyy MMM")})]},t))})]})})]},l)),v={HOME:{label:"Home",jsx:U},LEADERBOARD:{label:"Leaderboard",jsx:Z}};var ee={name:"5dznxi",styles:"padding:15px 10px"},re={name:"sd1ypo",styles:"display:flex;flex-direction:column;align-items:center;padding:10px;margin:0 auto;max-width:1000px"};const te=()=>{const[a,l]=b.exports.useState(Object.keys(v)[0]);return d("div",{css:re,children:[r(f,{variant:"h4",sx:{mb:2},align:"center",children:"Ang Family Health Viewer"}),r(W,{sx:{borderBottom:1,borderColor:"divider"},children:r(K,{value:a,onChange:(n,i)=>l(i),"aria-label":"basic tabs example",children:Object.entries(v).map(([n,i])=>r(N,{label:i.label,value:n},n))})}),r("div",{css:ee,children:A.createElement(v[a].jsx)})]})};const le=$({palette:{mode:"dark"}});V.render(r(A.StrictMode,{children:d(z,{theme:le,children:[r(q,{enableColorScheme:!0}),r(te,{})]})}),document.getElementById("root"));
