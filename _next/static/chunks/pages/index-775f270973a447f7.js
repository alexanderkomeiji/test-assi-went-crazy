(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(5137)}])},5137:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return y},default:function(){return p}});var r=e(5893),o=e(7294);function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function a(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"===typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=function(n){var t=n.quantity,e=void 0===t?0:t,r=n.depth,o=void 0===r?0:r,i=a(Array({id:"FRUIT ".concat(Math.random()),name:"NOT MEAT + ".concat(Math.random())}));o-=1;for(var l=0;l<o;l++)i.push({id:"MEAT ".concat(Math.random()),name:"NOT FRUIT ".concat(Math.random()),children:u({quantity:e,depth:o})});return i},l=function(n){var t=n.item,e=n.level,i=n.onToggle,a=n.hasChildren,u=n.itemLast,l=n.name,c=o.useContext(h).setSelectedBranch;return(0,r.jsx)("div",{style:a?{paddingLeft:"".concat(16*e,"px"),color:"red"}:{paddingLeft:"".concat(16*e,"px")},onClick:function(){return u===t.id?c():a&&i()},children:l})},c=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,o.useState)(n),e=t[0],r=t[1],i=(0,o.useCallback)((function(){return r((function(n){return!n}))}),[]);return[e,i]};function d(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function f(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i=[],a=!0,u=!1;try{for(e=e.call(n);!(a=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return d(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=function(n){var t=n.item,e=n.level,i=f(c(),2),a=i[0],u=i[1],l=o.useCallback((function(){return u()}),[a,u]),d=o.useMemo((function(){return{setSelectedBranch:l,selectedBrach:a}}),[a,l]);return(0,r.jsx)(h.Provider,{value:d,children:(0,r.jsx)(v,{item:t,level:e})})},v=function(n){var t=n.item,e=n.level,i=n.itemLast;console.log(Date.now()),console.log(t),console.log("Level is",e);var a=f(c(),2),u=a[0],d=a[1],s=o.useCallback((function(){return d()}),[u,d]),m=o.useContext(h),y=m.selectedBrach,p=m.setSelectedBranch;0===e&&(d=p,u=y);var b=!!t.children,g=function(){var n;return null===(n=t.children)||void 0===n?void 0:n.filter((function(n){return!n.children})).at(-1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{item:t,selected:u,hasChildren:b,level:e,itemLast:i,id:t.id,onToggle:s,name:t.name}),u&&function(){var n;return b?null===(n=t.children)||void 0===n?void 0:n.map((function(n){var t;return(0,r.jsx)(v,{item:n,level:e+1,itemLast:null===(t=g())||void 0===t?void 0:t.id},n.id)})):null}()]})},h=o.createContext({selectedBrach:!1,setSelectedBranch:function(){return{}}}),m=function(n){var t=n.data;u({quantity:10,depth:10});return(0,r.jsx)("div",{children:t.map((function(n){return(0,r.jsx)(s,{item:n,level:0},n.id)}))})},y=!0;function p(n){var t=n.continents;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(m,{data:t})})}}},function(n){n.O(0,[774,888,179],(function(){return t=5301,n(n.s=t);var t}));var t=n.O();_N_E=t}]);