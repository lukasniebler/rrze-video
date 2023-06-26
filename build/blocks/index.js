(()=>{"use strict";var e,r={126:()=>{const e=window.wp.blocks,r=window.wp.element,t=window.wp.i18n,o=window.wp.components,l=window.wp.primitives,n=(0,r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(l.Path,{d:"M7 11.5h10V13H7z"})),i=(0,r.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(l.Path,{d:"M4 9v1.5h16V9H4zm12 5.5h4V13h-4v1.5zm-6 0h4V13h-4v1.5zm-6 0h4V13H4v1.5z"})),a=window.wp.blockEditor,u=window.wp.editor,d=JSON.parse('{"u2":"rrze/rrze-video"}');(0,e.registerBlockType)(d.u2,{edit:function(e){const l=(0,a.useBlockProps)(),{attributes:d,setAttributes:c}=e,{id:m,url:s}=d,[v,p]=(0,r.useState)(s),w=e=>{e.preventDefault(),c({url:v})},h=()=>{c({url:""}),p("")};return(0,r.createElement)("div",l,m||s?(0,r.createElement)(r.Fragment,null,(0,r.createElement)(a.InspectorControls,null,(0,r.createElement)(o.PanelBody,{title:(0,t.__)("URL Settings","rrze-video"),icon:"format-video"},(0,r.createElement)("form",{onSubmit:w},(0,r.createElement)("input",{className:"rrze-video-input-field",type:"url",value:v,onChange:e=>p(e.target.value),placeholder:(0,t.__)("Update the Video URL","rrze-video"),style:{width:"100%"}}),(0,r.createElement)("br",null),(0,r.createElement)(o.Button,{isPrimary:!0,type:"submit"},(0,t.__)("Embed Video from URL","rrze-video"))))),(0,r.createElement)(a.BlockControls,null,(0,r.createElement)(o.ToolbarGroup,null,(0,r.createElement)(o.ToolbarItem,null,(()=>(0,r.createElement)(o.Button,{icon:n,label:(0,t.__)("Reset URL","rrze-video"),onClick:h}))))),(0,r.createElement)(u.ServerSideRender,{block:"rrze/rrze-video",attributes:{url:d.url}})):(0,r.createElement)(o.Placeholder,{icon:i,label:(0,t.__)("Add your Video URL","rrze-video")},(0,r.createElement)("p",null,(0,t.__)("Add your Video URL from FAU Videoportal, YouTube, ARD, ZDF or Vimeo.","rrze-video")),(0,r.createElement)("br",null),(0,r.createElement)("form",{onSubmit:w},(0,r.createElement)("input",{className:"rrze-video-input-field",type:"url",value:v,onChange:e=>p(e.target.value),placeholder:(0,t.__)("Insert your Video URL","rrze-video"),style:{width:"100%"}}),(0,r.createElement)("br",null),(0,r.createElement)(o.Button,{isPrimary:!0,type:"submit"},(0,t.__)("Embed Video from URL","rrze-video")))))},save:function(){return null}})}},t={};function o(e){var l=t[e];if(void 0!==l)return l.exports;var n=t[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(r,t,l,n)=>{if(!t){var i=1/0;for(c=0;c<e.length;c++){for(var[t,l,n]=e[c],a=!0,u=0;u<t.length;u++)(!1&n||i>=n)&&Object.keys(o.O).every((e=>o.O[e](t[u])))?t.splice(u--,1):(a=!1,n<i&&(i=n));if(a){e.splice(c--,1);var d=l();void 0!==d&&(r=d)}}return r}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,l,n]},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={346:0,812:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var l,n,[i,a,u]=t,d=0;if(i.some((r=>0!==e[r]))){for(l in a)o.o(a,l)&&(o.m[l]=a[l]);if(u)var c=u(o)}for(r&&r(t);d<i.length;d++)n=i[d],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},t=globalThis.webpackChunkrrze_video=globalThis.webpackChunkrrze_video||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var l=o.O(void 0,[812],(()=>o(126)));l=o.O(l)})();
//# sourceMappingURL=index.js.map