import{_ as c,c as o,e as i,o as t}from"./index-BfU0rXlF.js";const n={name:"EasterView",data(){return{showVideo:!1,videoSrc:""}},watch:{showVideo(r){r&&(this.videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1")}}},d={class:"video-container"},a=["src"];function l(r,s,u,p,e,w){return t(),o("div",d,[e.showVideo?i("",!0):(t(),o("button",{key:0,onClick:s[0]||(s[0]=h=>e.showVideo=!0),class:"show-video-button"}," Click this button ")),e.showVideo?(t(),o("iframe",{key:1,width:"1280",height:"720",src:e.videoSrc,title:"YouTube video player",frameborder:"0",allow:"autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,a)):i("",!0)])}const _=c(n,[["render",l],["__scopeId","data-v-2b42133d"]]);export{_ as default};
