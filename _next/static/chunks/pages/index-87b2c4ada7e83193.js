(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9992)}])},9992:function(t,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return y},default:function(){return p}});var e=r(5893),o=r(7294);function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function a(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return i(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=function(t){var n=t.quantity,r=void 0===n?0:n,e=t.depth,o=void 0===e?0:e,i=a(Array({id:"FRUIT ".concat(Math.random()),name:"NOT MEAT + ".concat(Math.random())}));o-=1;for(var l=0;l<o;l++)i.push({id:"MEAT ".concat(Math.random()),name:"NOT FRUIT ".concat(Math.random()),children:u({quantity:r,depth:o})});return i},l=function(t){var n=t.item,r=t.level,i=t.onToggle,a=t.hasChildren,u=t.itemLast,l=o.useContext(h).setSelectedBranch;return(0,e.jsx)("div",{style:a?{paddingLeft:"".concat(16*r,"px"),color:"red"}:{paddingLeft:"".concat(16*r,"px")},onClick:function(){return u===n.id?l():a&&i()},children:n.name})},c=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(0,o.useState)(t),r=n[0],e=n[1],i=(0,o.useCallback)((function(){return e((function(t){return!t}))}),[]);return[r,i]};function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function d(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return f(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=function(t){var n=t.item,r=t.level,i=d(c(),2),a=i[0],u=i[1],l=o.useCallback((function(){return u(a)}),[a,u]),f=o.useMemo((function(){return{setSelectedBranch:l,selectedBrach:a}}),[a,l]);return(0,e.jsx)(h.Provider,{value:f,children:(0,e.jsx)(v,{item:n,level:r},n.id)})},v=function(t){var n=t.item,r=t.level,i=t.itemLast;console.log(Date.now()),console.log(n),console.log("Level is",r);var a=d(c(),2),u=a[0],f=a[1],s=o.useCallback((function(){return f(u)}),[u,f]),m=o.useContext(h),y=m.selectedBrach,p=m.setSelectedBranch;0===r&&(f=p,u=y);var b=!!n.children,g=function(){var t;return null===(t=n.children)||void 0===t?void 0:t.filter((function(t){return!t.children})).at(-1)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l,{item:n,selected:u,hasChildren:b,level:r,itemLast:i,onToggle:s}),u&&(b?n.children.map((function(t){var n;return(0,e.jsx)(v,{item:t,level:r+1,itemLast:null===(n=g())||void 0===n?void 0:n.id},t.id)})):null)]})},h=o.createContext({}),m=function(t){var n=t.data;u({quantity:10,depth:10});return(0,e.jsx)("div",{children:n.map((function(t){return(0,e.jsx)(s,{item:t,level:0},t.id)}))})},y=!0;function p(t){var n=t.continents;return(0,e.jsx)(m,{data:n})}}},function(t){t.O(0,[774,888,179],(function(){return n=8581,t(t.s=n);var n}));var n=t.O();_N_E=n}]);