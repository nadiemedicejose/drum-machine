(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{10:function(e,r,t){},11:function(e,r,t){"use strict";t.r(r);var c=t(1),a=t.n(c),s=t(4),o=t.n(s),d=t(2),i=t(0);function n(e){var r={backgroundColor:"hsl(208, 80%, 63%)",color:"hsl(215, 96%, 17%)"},t={backgroundColor:"hsl(215, 96%, 17%)",color:"hsl(203, 100%, 94%)",boxShadow:"3px 3px 5px hsl(215, 96%, 17%)"},a=Object(c.useState)(t),s=Object(d.a)(a,2),o=s[0],n=s[1];Object(c.useEffect)((function(){return document.addEventListener("keydown",m),function(){document.removeEventListener("keydown",m)}}));var m=function(r){r.keyCode===e.keyCode&&p()},l=function(){e.power?"orange"===o.backgroundColor?n(t):n(r):(o.marginTop,n(t))},p=function(){var r=document.getElementById(e.keyTrigger);r.currentTime=0,r.play(),l(),setTimeout((function(){return l()}),100),e.updateDisplay(e.clipId.replace(/-/g," "))};return Object(i.jsxs)("div",{className:"drum-pad",id:e.clipId,onClick:p,style:o,children:[Object(i.jsx)("audio",{className:"clip",id:e.keyTrigger,src:e.clip}),e.keyTrigger]})}function m(e){var r;return r=e.power?e.currentPadBank.map((function(r,t,c){return Object(i.jsx)(n,{clip:c[t].url,clipId:c[t].id,keyCode:c[t].keyCode,keyTrigger:c[t].keyTrigger,power:e.power,updateDisplay:e.updateDisplay})})):e.currentPadBank.map((function(r,t,c){return Object(i.jsx)(n,{clip:"#",clipId:c[t].id,keyCode:c[t].keyCode,keyTrigger:c[t].keyTrigger,power:e.power,updateDisplay:e.updateDisplay})})),Object(i.jsx)("div",{className:"pad-bank",children:r})}function l(){return Object(i.jsxs)("footer",{children:[Object(i.jsx)("p",{children:"Designed and developed by"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("a",{href:"https://nadiemedicejose.web.app",children:"Jose Estrada"})," \xa9 2021"]})]})}var p=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],u=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}];t(10);function h(){var e=Object(c.useState)(!0),r=Object(d.a)(e,2),t=r[0],a=r[1],s=Object(c.useState)("ON"),o=Object(d.a)(s,2),n=o[0],h=o[1],k=Object(c.useState)(p),j=Object(d.a)(k,2),y=j[0],g=j[1],b=Object(c.useState)("Heater Kit"),f=Object(d.a)(b,2),O=f[0],C=f[1],x=Object(c.useState)(.3),w=Object(d.a)(x,2),v=w[0],T=w[1],H=function(){h(String.fromCharCode(160))},_=t?{float:"right"}:{float:"left"},z=y===p?{float:"left"}:{float:"right"};return[].slice.call(document.getElementsByClassName("clip")).forEach((function(e){e.volume=v})),Object(i.jsxs)("div",{id:"drum-machine",children:[Object(i.jsx)("h1",{children:"Drum Machine"}),Object(i.jsxs)("div",{id:"drum-box",children:[Object(i.jsx)(m,{clipVolume:v,currentPadBank:y,power:t,updateDisplay:function(e){t&&h(e)}}),Object(i.jsxs)("div",{className:"controls-container",children:[Object(i.jsxs)("div",{className:"control",children:[Object(i.jsx)("p",{children:"Power"}),Object(i.jsx)("div",{className:"select",onClick:function(){t?(a(!t),h("OFF")):(h("ON"),a(!t))},children:Object(i.jsx)("div",{className:"inner",style:_})})]}),Object(i.jsx)("p",{id:"display",children:n}),Object(i.jsx)("div",{className:"volume-slider",children:Object(i.jsx)("input",{max:"1",min:"0",onChange:function(e){t&&(T(e.target.value),h("Volume: "+Math.round(100*e.target.value)),setTimeout((function(){return H()}),1e3))},step:"0.01",type:"range",value:v})}),Object(i.jsxs)("div",{className:"control",children:[Object(i.jsx)("p",{children:"Bank"}),Object(i.jsx)("div",{className:"select",onClick:function(){t&&("Heater Kit"===O?(g(u),h("Smooth Piano Kit"),C("Smooth Piano Kit")):(g(p),h("Heater Kit"),C("Heater Kit")))},children:Object(i.jsx)("div",{className:"inner",style:z})})]})]})]}),Object(i.jsx)(l,{})]})}o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.196b94e3.chunk.js.map