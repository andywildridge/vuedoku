(function(e){function t(t){for(var r,c,a=t[0],l=t[1],u=t[2],d=0,f=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vuedoku/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"302c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,i,c){var a=Object(r["i"])("Grid");return Object(r["e"])(),Object(r["c"])("div",null,[Object(r["d"])(a,{title:"sudoku solver",gridVals:i.gridCandidates,hint:e.hintOutput,highlights:e.highlights},null,8,["gridVals","hint","highlights"]),Object(r["d"])("button",{onClick:t[1]||(t[1]=function(){return c.action&&c.action.apply(c,arguments)})},"show next hint...")])}var i=n("2909"),c=(n("a630"),n("3ca3"),n("d81d"),n("a15b"),n("cb29"),n("159b"),n("caad"),n("2532"),n("ade3")),a=Object(r["k"])("data-v-2260205c");Object(r["g"])("data-v-2260205c");var l={id:"svgfilters"},u=Object(r["d"])("filter",{id:"motionblur"},[Object(r["d"])("feConvolveMatrix",{order:"20, 1",kernelMatrix:"1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"})],-1),s=Object(r["d"])("filter",{x:"-2%",y:"-2%",width:"104%",height:"104%",filterUnits:"objectBoundingBox",id:"PencilTexture"},[Object(r["d"])("feTurbulence",{type:"fractalNoise",baseFrequency:"1.2",numOctaves:"3",result:"noise"}),Object(r["d"])("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"3",in:"SourceGraphic",result:"newSource"})],-1),d=Object(r["d"])("filter",{xmlns:"http://www.w3.org/2000/svg",x:"0%",y:"0%",width:"100%",height:"100%",filterUnits:"objectBoundingBox",id:"pencilTexture3"},[Object(r["d"])("feTurbulence",{type:"fractalNoise",baseFrequency:"0.5",numOctaves:"5",stitchTiles:"stitch",result:"f1"}),Object(r["d"])("feColorMatrix",{type:"matrix",values:"0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5",result:"f2"}),Object(r["d"])("feComposite",{operator:"in",in2:"f2b",in:"SourceGraphic",result:"f3"}),Object(r["d"])("feTurbulence",{type:"fractalNoise",baseFrequency:"1.2",numOctaves:"3",result:"noise"}),Object(r["d"])("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"2.5",in:"f3",result:"f4"})],-1),f=Object(r["d"])("filter",{xmlns:"http://www.w3.org/2000/svg",x:"0%",y:"0%",width:"120%",height:"120%",filterUnits:"objectBoundingBox",id:"pencilTexture3b"},[Object(r["d"])("feTurbulence",{type:"fractalNoise",baseFrequency:"0.5",numOctaves:"5",stitchTiles:"stitch",result:"f1"}),Object(r["d"])("feColorMatrix",{type:"matrix",values:"0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5",result:"f2"}),Object(r["d"])("feComposite",{operator:"in",in2:"f2b",in:"SourceGraphic",result:"f3"}),Object(r["d"])("feTurbulence",{type:"fractalNoise",baseFrequency:"1.2",numOctaves:"3",result:"noise"}),Object(r["d"])("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"2.5",in:"f3",result:"f4"})],-1),b={id:"roughpaper",x:"0%",y:"0%",width:"100%",height:"100%"},h=Object(r["d"])("feTurbulence",{type:"fractalNoise",baseFrequency:"0.04",result:"noise",numOctaves:"5"},null,-1),g={in:"noise","lighting-color":"white",surfaceScale:"2"},p=Object(r["d"])("filter",{xmlns:"http://www.w3.org/2000/svg",x:"-20%",y:"-20%",width:"240%",height:"240%",filterUnits:"objectBoundingBox",id:"pencilTexture4"},[Object(r["d"])("feTurbulence",{type:"fractalNoise",baseFrequency:"0.03",numOctaves:"5",seed:"1",result:"f1"}),Object(r["d"])("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"5",in:"SourceGraphic",in2:"f1",result:"f4"}),Object(r["d"])("feTurbulence",{type:"fractalNoise",baseFrequency:"0.03",numOctaves:"5",seed:"10",result:"f2"}),Object(r["d"])("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"5",in:"SourceGraphic",in2:"f2",result:"f5"}),Object(r["d"])("feTurbulence",{type:"fractalNoise",baseFrequency:"0.03",numOctaves:"5",seed:"100",result:"f3"}),Object(r["d"])("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"3",in:"SourceGraphic",in2:"f3",result:"f6"}),Object(r["d"])("feBlend",{mode:"multiply",in2:"f4",in:"f5",result:"out1"}),Object(r["d"])("feBlend",{mode:"multiply",in:"out1",in2:"f6",result:"out2"})],-1),v={id:"grid"};Object(r["f"])();var O=a((function(e,t,n,o,i,a){var O,j=Object(r["i"])("feDistantLight");return Object(r["e"])(),Object(r["c"])("div",null,[Object(r["d"])("h2",null,Object(r["j"])(n.title),1),(Object(r["e"])(),Object(r["c"])("svg",l,[Object(r["d"])("defs",null,[u,s,d,f,Object(r["d"])("filter",b,[h,Object(r["d"])("feDiffuseLighting",g,[Object(r["d"])(j,{azimuth:"45",elevation:"60"})])]),p])])),Object(r["d"])("div",v,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(i.gridData,(function(t,n){var o;return Object(r["e"])(),Object(r["c"])("div",{class:["square",(o={},Object(c["a"])(o,t.type,!0),Object(c["a"])(o,t.highlight,t.highlight),Object(c["a"])(o,t.rotate,t.rotate),o)],key:n,gridSingle:t.gridSingle,collectionSingle:t.collectionSingle,onClick:function(t){return a.squareInput(e.e,n)}},Object(r["j"])(a.getSquareVal(t)),11,["gridSingle","collectionSingle","onClick"])})),128))]),Object(r["d"])("p",{class:"hint",innerHTML:null===(O=n.hint)||void 0===O?void 0:O.message},null,8,["innerHTML"]),Object(r["d"])("button",{onClick:t[1]||(t[1]=function(){return a.togglePossibles&&a.togglePossibles.apply(a,arguments)})},Object(r["j"])(i.showPossibles?"hide":"show")+" possibles",1)])})),j=n("5530"),m={name:"Grid",props:{title:String,gridVals:Array,hint:Object},data:function(){return{gridData:this.gridVals,highlights:{},showPossibles:!1}},methods:{togglePossibles:function(){console.log(this.showPossibles),this.showPossibles?this.showPossibles=!1:this.showPossibles=!0},toggleInput:function(){console.log("input")},squareInput:function(e,t){console.log("sq",t)},getSquareVal:function(e){return"possibles"===e.type?this.showPossibles?e.val:"":"gridSingle"===e.type?"*":e.val}},watch:{gridVals:function(){console.log(this.highlights),this.gridData=this.gridVals.map((function(e){return Object(j["a"])({},e)})),console.log(this.gridData)},hint:function(){console.log("hint change"),this.highlights={target:this.hint.index}}}};n("ba73"),n("8f4d");m.render=O,m.__scopeId="data-v-2260205c";var x=m,w="\n\t\t\t000 004 000\n\t\t\t008 000 020\n\t\t\t002 003 150\n\t\n\t\t\t940 080 500\n\t\t\t800 302 006\n\t\t\t007 050 041\n\t\n\t\t\t073 500 900\n\t\t\t060 000 200\n\t\t\t000 100 000\n\t\t";w="\n\t\t\t000 006 800\n\t\t\t000 280 005\n\t\t\t003 500 290\n\t\n\t\t\t071 402 300\n\t\t\t040 000 001\n\t\t\t200 600 400\n\t\n\t\t\t902 701 000\n\t\t\t004 000 000\n\t\t\t080 020 003\n\t\t",w="\n\t\t\t007 500 000\n\t\t\t003 090 006\n\t\t\t640 000 800\n\t\n\t\t\t300 060 000\n\t\t\t020 308 005\n\t\t\t000 040 067\n\t\n\t\t\t009 000 002\n\t\t\t000 004 009\n\t\t\t060 032 150\n\t\t";var y=w,S=(n("ac1f"),n("5319"),n("a9e3"),function(e){return Object(i["a"])(e.replace(/\s/g,"")).map((function(e){return Number(e)}))}),C=S,M=(n("d3b7"),n("6062"),n("ddb0"),n("99af"),n("4ec9"),n("4de4"),n("0481"),function(e){return e.baseArray.filter((function(t){return!e.elementsToRemove.includes(t)}))}),k=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(i["a"])(new Set(t.flat()))},T=function(e,t){return new Set(Object(i["a"])(e).filter((function(e){return t.has(e)})))},E=function(){var e=function(e){return~~(e/9)},t=function(e){return e%9},n=function(e){return 3*~~(e/27)+~~(e%9/3)},r=function(e){return e%3+3*~~(e%27/9)},o=function(e,t){var n=27*~~(e/3)+e%3*3,r=9*~~(t/3)+t%3;return n+r},i=function(e,t){return t+9*e},c=function(e,t){return 9*t+e},a=function(e){return Array.from({length:9},(function(t,n){return i(e,n)}))},l=function(e){return Array.from({length:9},(function(t,n){return c(e,n)}))},u=function(e){return Array.from({length:9},(function(t,n){return o(e,n)}))},s=new Map,d={row:[],col:[],box:[]};return function(i){var c,f=i.box,b=i.col,h=i.row,g=i.index;c="number"===typeof f?o(f,g):"number"===typeof b?9*g+b:"number"===typeof h?9*h+g:g;var p=s.get(c);if(!p){var v={row:e(c),col:t(c),box:n(c)};null!==d&&void 0!==d&&d.row[v.row]||(console.log(c,"cacheRow"),d.row[v.row]=a(v.row)),null!==d&&void 0!==d&&d.col[v.col]||(console.log(c,"cacheCol"),d.col[v.col]=l(v.col)),null!==d&&void 0!==d&&d.box[v.box]||(console.log(c,"cacheBox"),d.box[v.box]=u(v.box)),p={gridIndex:c,row:{index:v.row,position:v.col,collection:d.row[v.row]},col:{index:v.col,position:v.row,collection:d.col[v.col]},box:{index:v.box,position:r(c),collection:d.box[v.box]},related:k(d.row[v.row],d.col[v.col],d.box[v.box])},s.set(c,p)}return p}},D=[1,2,3,4,5,6,7,8,9];function R(e,t,n){var r=n({index:e}),o=r.row.collection.map((function(e){return t[e]})),c=r.col.collection.map((function(e){return t[e]})),a=r.box.collection.map((function(e){return t[e]})),l=Object(i["a"])(new Set([].concat(Object(i["a"])(o),Object(i["a"])(c),Object(i["a"])(a))));return M({baseArray:D,elementsToRemove:l})}function G(e){var t=E(),n=e.reduce((function(n,r,o){return r||n.set(o,new Set(R(o,e,t))),n}),new Map);return{gridCandidates:n,gridReference:t}}var N=[1,2,3,4,5,6,7,8,9];function P(e){var t=e.gridCandidates,n=e.gridReference,r=new Map(N.map((function(e){return[e,new Map([["rows",new Map],["cols",new Map],["boxes",new Map]])]})));function o(e,t,n,o){var i=r.get(e).get(t).get(n)||new Set;i.add(o),r.get(e).get(t).set(n,i)}return t.forEach((function(e,t){var r=n({index:t}),i=r.row,c=r.col,a=r.box;e.forEach((function(e){o(e,"rows",i.index,c.index),o(e,"cols",c.index,i.index),o(e,"boxes",a.index,a.position)}))})),r}function q(e){return 1===e.size&&Object(i["a"])(e)[0]}function B(e){var t=[];return e.forEach((function(e,n){if(1===e.size){var r=Object(i["a"])(e)[0];t.push({number:r,index:n})}})),t}function F(e,t){var n=[];return e.forEach((function(e,r){var o=I(e,t);o.length&&n.push({number:r,result:o})})),n}function I(e,t){var n=[];return e.forEach((function(e,r){n.push(L(e,r,t))})),n.flat()}function L(e,t,n){var r=[];return e.forEach((function(e,o){var i=n(e,t);!1!==i&&r.push({index:o,candidateList:i,type:t})})),r}function A(e,t){if(e.size<2||e.size>3)return!1;var n=Object(i["a"])(e),r=n[0];return(n.every((function(e){return Math.floor(e/3)===Math.floor(r/3)}))||!("boxes"!==t||!n.every((function(e){return e%3===r%3}))))&&n}function V(e,t){var n=[];return e.forEach((function(e){e.result.forEach((function(r){var o,a,l=r.type;"boxes"===l&&(l="box"),"cols"===l&&(l="col",a="col"),"rows"===l&&(l="row",a="row");var u=t.gridReference((o={},Object(c["a"])(o,l,r.index),Object(c["a"])(o,"index",r.candidateList[0]),o));"box"===l&&(a=r.candidateList[0]%3===r.candidateList[1]%3?"col":"row");var s=new Set([].concat(Object(i["a"])(u[a].collection),Object(i["a"])(u.box.collection))),d=r.candidateList.map((function(e){var n;return t.gridReference((n={},Object(c["a"])(n,l,r.index),Object(c["a"])(n,"index",e),n)).gridIndex}));d.forEach((function(e){s.delete(e)}));var f=Object(i["a"])(s).filter((function(n){var r;return null===(r=t.gridCandidates.get(n))||void 0===r?void 0:r.has(e.number)}));f.length&&n.push({number:e.number,toDelete:f,type:l,index:r.index,candidates:r.candidateList,skewer:d})}))})),n}n("25f0"),n("1276"),n("b64b"),n("4e82");function _(e,t){var n=[];return["rows","cols","boxes"].forEach((function(r){for(var o=1;o<=9;o++){var i=z(e,r,o,t);i&&n.push(i)}})),n}function z(e,t,n){for(var r={},o=new Set,c=1;c<=9;c++){var a,l=null===(a=e.get(c))||void 0===a?void 0:a.get(t).get(n);l&&(r[c]=Object(i["a"])(l),o=new Set([].concat(Object(i["a"])(l),Object(i["a"])(o))))}var u=U(r,2);return!!u.length&&{type:t,index:n,pairs:u}}function H(e,t){for(var n=Math.pow(2,t)-Math.pow(2,t-e),r=Math.pow(2,e-1)+1,o=[],i=r;i<=n;i++){var c=i.toString(2);if(c.replaceAll("0","").length===e){var a=c.split("").reverse().reduce((function(e,t,n){return"1"===t&&e.push(n),e}),[]);o.push(a)}}return o}function U(e,t){var n=Object.keys(e),r=n.reduce((function(t,n){return t.concat(e[n])}),[]),o=Object(i["a"])(new Set(r)).sort(),c=H(t,o.length);return c.reduce((function(r,i){var c=i.map((function(e){return o[e]})),a=n.filter((function(t){return e[t].every((function(e){return c.includes(e)}))}));return a.length===t&&r.push({permutation:c,canContain:a.map((function(e){return parseInt(e,10)}))}),r}),[])}var X=J;function J(e){return"rows"===e?"row":"cols"===e?"col":"boxes"===e?"box":void 0}function K(e,t){var n=[];return e.forEach((function(e){var r=Q(e,t);(r.canDeleteFrom.length||r.canDeleteFromX.length)&&n.push(r)})),n}function Q(e,t){var n,r=X(e.type),o=t.gridReference((n={},Object(c["a"])(n,r,e.index),Object(c["a"])(n,"index",e.pairs[0].permutation[0]),n)),a=e.pairs[0].permutation.map((function(n){var o;return t.gridReference((o={},Object(c["a"])(o,r,e.index),Object(c["a"])(o,"index",n),o)).gridIndex})),l=o[r].collection.filter((function(e){return!a.includes(e)})),u=o[r].collection.filter((function(e){return a.includes(e)})),s=new Set(e.pairs[0].canContain),d=l.filter((function(e){var n=t.gridCandidates.get(e);return!!n&&T(n,s).size>0})),f=u.filter((function(e){var n=t.gridCandidates.get(e);return!!n&&Object(i["a"])(n).some((function(e){return!s.has(e)}))}));return{blockType:r,type:"deleteableFromBlocks",canDeleteFrom:d,canDeleteFromX:f,blockedIdxs:a,blockNumbers:Object(i["a"])(s)}}function W(e,t,n){var r=e.index,o=Object(c["a"])({},r,"target");t.gridReference({index:r}).related.forEach((function(e){n[e]>0&&(o[e]="blockingNumber")}));var i='<span class="target">'.concat(e.number,' is the only number</span> that can be placed at this position in the grid as <span class="blockingNumber">all other numbers</span> already appear in the same row, column or box');return Object(j["a"])(Object(j["a"])({},e),{},{type:"gridSingle",highlights:o,message:i})}function Y(e,t){return Math.floor(e/9)===Math.floor(t/9)}function Z(e,t){return e%9===t%9}function $(e,t){return Math.floor(e/27)===Math.floor(t/27)&&Math.floor(e%9/3)===Math.floor(t%9/3)}function ee(e,t,n){var r;console.log(e);var o=X(e.result[0].type),i=e.result[0].index,a=t.gridReference((r={},Object(c["a"])(r,o,e.result[0].index),Object(c["a"])(r,"index",e.result[0].candidateList),r)).gridIndex,l=Object(c["a"])({},a,"target"),u=t.gridReference({index:a})[o].collection;u=u.filter((function(e){return e!==a&&t.gridCandidates.get(e)})),u.forEach((function(e){l[e]="not"}));var s=e.number;n.forEach((function(e,t){e===s&&u.some((function(e){return Y(t,e)||Z(t,e)||$(t,e)}))&&(l[t]="number")}));var d='There is only one remaining position in <span class="not">'.concat("col"===o?"column":o," ").concat(i+1,'</span> that <span class="target">number ').concat(s,"</span> can be placed");return{number:s,index:a,typeIndex:i,typeO:o,type:"rcbSingle",highlights:l,message:d}}function te(e,t){var n;console.log(e);var r=e.toDelete,o=e.type,i=e.skewer,a=e.number,l=e.index,u="".concat(a," candidate line can only fit in these places in this ").concat(o," can remove from ").concat(r),s={},d=t.gridReference((n={},Object(c["a"])(n,o,l),Object(c["a"])(n,"index",0),n))[o].collection;return d.forEach((function(e){s[e]="not"})),r.forEach((function(e){s[e]="target"})),i.forEach((function(e){s[e]="blockingNumber"})),Object(j["a"])(Object(j["a"])({},e),{},{message:u,type:"candidateLine",highlights:s})}function ne(e,t){var n=e,r={},o=t.gridReference({index:n.blockedIdxs[0]})[n.blockType].collection;o.forEach((function(e){r[e]="not"})),r[n.blockedIdxs[0]]="target",r[n.blockedIdxs[1]]="target";var i="".concat(n.blockNumbers[0]," and ").concat(n.blockNumbers[1]," can only fit in these places in this ").concat(n.blockType);return Object(j["a"])(Object(j["a"])({},n),{},{type:"blocks",message:i,highlights:r})}function re(e){return e[Math.floor(Math.random()*e.length)]}function oe(e,t,n){var r=B(t.gridCandidates);if(r.length)return W(re(r),t,n);var o=F(e,q);if(o.length)return ee(re(o),t,n);var i=F(e,A),c=V(i,t);if(c.length)return console.log(c),te(c[0],t);var a=_(e,t),l=K(a,t);return l.length?ne(l[0],t):{}}var ie,ce=function(e){console.log(e);var t=G(e);function n(){console.time("Time this");var e=P(t);return console.timeEnd("Time this"),{rowColBoxCandidates:e}}var r=n(),o=r.rowColBoxCandidates;function c(){var r=n();return o=r.rowColBoxCandidates,oe(o,t,e)}function a(r,c){e[r]=c,t.gridCandidates.delete(r);var a=t.gridReference({index:r}),l=Object(i["a"])(new Set([].concat(Object(i["a"])(a.row.collection),Object(i["a"])(a.col.collection),Object(i["a"])(a.box.collection))));l.forEach((function(e){var n;null===(n=t.gridCandidates.get(e))||void 0===n||n.delete(c)}));var u=n();o=u.rowColBoxCandidates}function l(e,n){var r;null===(r=t.gridCandidates.get(e))||void 0===r||r.delete(n)}return{getGrid:function(){return e},getGridCandidates:function(){return t.gridCandidates},hint:c,setSquare:a,deleteCandidate:l}},ae=ce,le=C(y),ue=ae(le),se=ue.getGridCandidates,de=ue.hint,fe=ue.setSquare,be=ue.getGrid,he=ue.deleteCandidate,ge=be(),pe=Object(i["a"])(ge),ve=se(),Oe=Array.from({length:81},(function(){return"r"+Math.floor(6*Math.random())}));function je(e,t){var n,r=(null===(n=ie)||void 0===n?void 0:n.highlights)||{};return e.map((function(e,n){return t[n]>0?{val:e,type:"original",highlight:r[n]}:e>0?{val:e,highlight:r[n],rotate:Oe[n]}:{val:Object(i["a"])(ve.get(n)).join(" "),type:"possibles",highlight:r[n]}}))}var me={name:"App",components:{Grid:x},data:function(){return{gridCandidates:je(ge,pe)}},computed:function(){return{gridCandidates2:je(ge,pe)}},created:function(){console.log("created"),this.showHint(ie)},methods:{showHint:function(e){console.log("show",e)},newGrid:function(){console.log(ge),ge=new Array(81).fill(0),console.log(ge)},action:function(){var e;ie&&("gridSingle"===ie.type||"rcbSingle"===ie.type?fe(ie.index,ie.number):"candidateLine"===ie.type?ie.toDelete.forEach((function(e){return he(e,ie.number)})):"blocks"===ie.type&&(console.log(ie),ie.canDeleteFrom.forEach((function(e){ie.blockNumbers.forEach((function(t){he(e,t)}))})),ie.canDeleteFromX.forEach((function(e){[1,2,3,4,5,6,7,8,9].forEach((function(t){ie.blockNumbers.includes(t)||he(e,t)}))}))),ge=be(),ve=se()),ie=de(),console.log(ie),null!==(e=ie)&&void 0!==e&&e.type?(this.hintOutput=ie,this.highlights=ie.index):this.hintOutput="no next",this.gridCandidates=Object(i["a"])(je(ge,pe))}}};n("a96c");me.render=o;var xe=me;Object(r["b"])(xe).mount("#app")},"647a":function(e,t,n){},"8f4d":function(e,t,n){"use strict";n("302c")},9211:function(e,t,n){},a96c:function(e,t,n){"use strict";n("647a")},ba73:function(e,t,n){"use strict";n("9211")}});
//# sourceMappingURL=app.8c55236a.js.map