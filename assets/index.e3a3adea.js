import{m as e,S as t}from"./vendor.b5e0dc1f.js";/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",(function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())}),!1);const n=function(e={elId:String,mobile:Boolean,desktop:Boolean,breakPoint:Number,distance:Number}){let t=document.getElementById(e.elId);document.addEventListener("scroll",(function(){let n=e.mobile,i=e.desktop,s=e.breakpoint||1024,o=e.distance||300,a=Boolean;var l;n&&i?a=!0:i?a=window.innerWidth>=s:n&&(a=window.innerWidth<s),document.documentElement.scrollTop>o&&a?("none"==t.style.display||t.classList.contains("hidden"))&&(!function(e,t=String){e.style.display=t||"block",function t(){var n=parseFloat(e.style.opacity);(n+=.1)>1||(e.style.opacity=n,requestAnimationFrame(t))}()}(t,"inline-flex"),t.classList.remove("hidden")):"inline-flex"==t.style.display&&(l=t,function e(){(l.style.opacity-=.1)<0?l.style.display="none":requestAnimationFrame(e)}())}))};window.Alpine=e,e.start(),function(){let e=document.getElementById("navbar-side-panel"),t=document.getElementById("mobile-menu-overlay"),n=document.getElementById("mobile-nav-btn"),i=document.getElementById("mobile-menu-back");n.addEventListener("click",(function(){"0"==this.dataset.toggle?(e.classList.remove("hide"),t.style.display="block",this.dataset.toggle="1"):(e.classList.add("hide"),t.style.display="none",this.dataset.toggle="0")})),t.addEventListener("click",(function(){n.dataset.toggle="0",e.classList.add("hide"),this.style.display="none"})),i.addEventListener("click",(function(){n.dataset.toggle="0",e.classList.add("hide"),t.style.display="none"}))}(),n({elId:"mobile-contactus-btn",desktop:!1,mobile:!0,breakPoint:1024,distance:200}),new t("#cities-slider",{speed:300,slidesPerView:1,spaceBetween:8,grabCursor:!0,autoplay:{delay:2e3,disableOnInteraction:!1},watchOverflow:!0,breakpoints:{640:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:3.5,spaceBetween:32},3840:{slidesPerView:4,spaceBetween:48}}}),document.querySelectorAll(".scrollto").forEach((function(e){e.addEventListener("click",(function(e){var t;e.preventDefault(),t=this.getAttribute("href"),document.querySelector(t).scrollIntoView({behavior:"smooth"})}))}));
