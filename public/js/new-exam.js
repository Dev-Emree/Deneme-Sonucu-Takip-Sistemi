/**
 *  It belongs to the "Deneme Sonucu Takip Sistemi" site.
 *
 *  @author:    Emre Ekiz
 *              https://github.com/Dev-Emree
 *
 *  Licensed under the MIT license.
 *  http://opensource.org/licenses/MIT
 */
$.prototype.disableTab=function(){this.each(function(){$(this).attr("tabindex","-1")})},$("input").disableTab();var _main=document.querySelector("main");$(".tyt-button").on("click",function(t){if(t.preventDefault(),window.innerWidth>430){_main.style="transform:translate(-30vw);";return}_main.style="transform:translate(-20vw);"}),$(".ayt-button").on("click",function(t){t.preventDefault(),_main.style="transform:translate(-190vw);"}),$(".ydt-button").on("click",function(t){if(t.preventDefault(),window.innerWidth>430){_main.style="transform:translate(-350vw);";return}_main.style="transform:translate(-360vw);"});var numbers=document.querySelectorAll("#number");function setInputFilter(t,e,n){["input","keydown","keyup","mousedown","mouseup","select","contextmenu","drop","focusout",].forEach(function(r){t.addEventListener(r,function(t){e(this.value)?(["keydown","mousedown","focusout"].indexOf(t.type)>=0&&(this.classList.remove("input-error"),this.setCustomValidity("")),this.oldValue=this.value,this.oldSelectionStart=this.selectionStart,this.oldSelectionEnd=this.selectionEnd):this.hasOwnProperty("oldValue")?(this.classList.add("input-error"),this.setCustomValidity(n),this.reportValidity(),this.value=this.oldValue,this.setSelectionRange(this.oldSelectionStart,this.oldSelectionEnd)):this.value=""})})}document.addEventListener("click",function(t){numbers.forEach((e,n)=>{t.target==e&&0==e.value?e.value="":""!=e.value?e.value=parseInt(e.value):e.value=0})}),numbers.forEach((t,e)=>{setInputFilter(t,function(t){return/^\d*\.?\d*$/.test(t)},"Sadece sayı girebilirsiniz")});var _20=document.querySelectorAll("._20");_20.forEach(function(t,e){setInputFilter(t,function(t){return t>=0&&t<=20},"Maksimum 20, minimum 0 girebilirsiniz")});var _40=document.querySelectorAll("._40");_40.forEach(function(t,e){setInputFilter(t,function(t){return t>=0&&t<=40},"Maksimum 40, minimum 0 girebilirsiniz")});var _80=document.querySelectorAll("._80");_80.forEach(function(t,e){setInputFilter(t,function(t){return t>=0&&t<=80},"Maksimum 80, minimum 0 girebilirsiniz")});const calcTYT=function(){var t={tr:{dogru:parseInt($(".turkce.dogru").val()),yanlis:parseInt($(".turkce.yanlis").val())},sos:{dogru:parseInt($(".sosyal.dogru").val()),yanlis:parseInt($(".sosyal.yanlis").val())},mat:{dogru:parseInt($(".matematik.dogru").val()),yanlis:parseInt($(".matematik.yanlis").val())},fen:{dogru:parseInt($(".fen.dogru").val()),yanlis:parseInt($(".fen.yanlis").val())},total:{},examName:$(".tyt-name").val()},e=!0,n=document.querySelector(".tyt-total.dogru"),r=document.querySelector(".tyt-total.yanlis");return n.innerHTML=parseInt(t.tr.dogru)+parseInt(t.sos.dogru)+parseInt(t.mat.dogru)+parseInt(t.fen.dogru),r.innerHTML=parseInt(t.tr.yanlis)+parseInt(t.sos.yanlis)+parseInt(t.mat.yanlis)+parseInt(t.fen.yanlis),document.querySelector(".tyt-total.net").innerHTML=parseInt(n.innerHTML)-.25*parseInt(r.innerHTML),t.total.dogru=parseInt(n.innerHTML),t.total.yanlis=parseInt(r.innerHTML),t.total.net=parseInt(n.innerHTML)-.25*parseInt(r.innerHTML),t.tr.dogru+t.tr.yanlis>40&&(document.querySelector(".turkce.dogru").value=0,document.querySelector(".turkce.yanlis").value=0,e=!1),t.sos.dogru+t.sos.yanlis>20&&(document.querySelector(".sosyal.dogru").value=0,document.querySelector(".sosyal.yanlis").value=0,e=!1),t.mat.dogru+t.mat.yanlis>40&&(document.querySelector(".matematik.dogru").value=0,document.querySelector(".matematik.yanlis").value=0,e=!1),t.fen.dogru+t.fen.yanlis>20&&(document.querySelector(".fen.dogru").value=0,document.querySelector(".fen.yanlis").value=0,e=!1),!!e&&(t.tr.net=t.tr.dogru-.25*t.tr.yanlis,t.sos.net=t.sos.dogru-.25*t.sos.yanlis,t.mat.net=t.mat.dogru-.25*t.mat.yanlis,t.fen.net=t.fen.dogru-.25*t.fen.yanlis,document.querySelector(".net-turkce").innerHTML=t.tr.net,document.querySelector(".net-sos").innerHTML=t.sos.net,document.querySelector(".net-mat").innerHTML=t.mat.net,document.querySelector(".net-fen").innerHTML=t.fen.net,t)},calcAYT=function(){var t={tr:{dogru:parseInt($(".turkce2.dogru").val()),yanlis:parseInt($(".turkce2.yanlis").val())},sos:{dogru:parseInt($(".sosyal2.dogru").val()),yanlis:parseInt($(".sosyal2.yanlis").val())},mat:{dogru:parseInt($(".matematik2.dogru").val()),yanlis:parseInt($(".matematik2.yanlis").val())},fen:{dogru:parseInt($(".fen2.dogru").val()),yanlis:parseInt($(".fen2.yanlis").val())},mf:{},tm:{},ts:{},examName:$(".ayt-name").val()},e=!0,n=[document.querySelector(".ayt-mf-total.dogru"),document.querySelector(".ayt-tm-total.dogru"),document.querySelector(".ayt-ts-total.dogru")],r=[document.querySelector(".ayt-mf-total.yanlis"),document.querySelector(".ayt-tm-total.yanlis"),document.querySelector(".ayt-ts-total.yanlis")];return t.mf.dogru=parseInt(t.mat.dogru)+parseInt(t.fen.dogru),t.mf.yanlis=parseInt(t.mat.yanlis)+parseInt(t.fen.yanlis),t.mf.net=t.mf.dogru-.25*t.mf.yanlis,t.tm.dogru=parseInt(t.mat.dogru)+parseInt(t.tr.dogru),t.tm.yanlis=parseInt(t.mat.yanlis)+parseInt(t.tr.yanlis),t.tm.net=t.tm.dogru-.25*t.tm.yanlis,t.ts.dogru=parseInt(t.tr.dogru)+parseInt(t.sos.dogru),t.ts.yanlis=parseInt(t.tr.yanlis)+parseInt(t.sos.yanlis),t.ts.net=t.ts.dogru-.25*t.ts.yanlis,n[0].innerHTML=t.mf.dogru,r[0].innerHTML=t.mf.yanlis,document.querySelector(".ayt-mf-total.net").innerHTML=t.mf.net,n[1].innerHTML=t.tm.dogru,r[1].innerHTML=t.tm.yanlis,document.querySelector(".ayt-tm-total.net").innerHTML=t.tm.net,n[2].innerHTML=t.ts.dogru,r[2].innerHTML=t.ts.yanlis,document.querySelector(".ayt-ts-total.net").innerHTML=t.ts.net,t.tr.dogru+t.tr.yanlis>40&&(document.querySelector(".turkce2.dogru").value=0,document.querySelector(".turkce2.yanlis").value=0,e=!1),t.sos.dogru+t.sos.yanlis>40&&(document.querySelector(".sosyal2.dogru").value=0,document.querySelector(".sosyal2.yanlis").value=0,e=!1),t.mat.dogru+t.mat.yanlis>40&&(document.querySelector(".matematik2.dogru").value=0,document.querySelector(".matematik2.yanlis").value=0,e=!1),t.fen.dogru+t.fen.yanlis>40&&(document.querySelector(".fen2.dogru").value=0,document.querySelector(".fen2.yanlis").value=0,e=!1),!!e&&(t.tr.net=t.tr.dogru-.25*t.tr.yanlis,t.sos.net=t.sos.dogru-.25*t.sos.yanlis,t.mat.net=t.mat.dogru-.25*t.mat.yanlis,t.fen.net=t.fen.dogru-.25*t.fen.yanlis,document.querySelector(".net-turkce2").innerHTML=t.tr.net,document.querySelector(".net-sos2").innerHTML=t.sos.net,document.querySelector(".net-mat2").innerHTML=t.mat.net,document.querySelector(".net-fen2").innerHTML=t.fen.net,t)},calcYDT=function(){let t={dogru:parseInt($(".yd.dogru").val()),yanlis:parseInt($(".yd.yanlis").val()),net:parseInt($(".yd.dogru").val())-.25*parseInt($(".yd.yanlis").val()),examName:$(".ydt-name").val()};var e=!0;return t.dogru+t.yanlis>80&&(document.querySelector(".yd.dogru").value=0,document.querySelector(".yd.yanlis").value=0,e=!1),!!e&&(t.net=t.dogru-.25*t.yanlis,document.querySelector(".net-yd").innerHTML=t.net,document.querySelectorAll(".select-box__input").forEach(function(e,n){if(e.checked){t.language=e.value;return}}),t)};$(document).ready(function(){window.innerWidth>430&&(document.querySelector("main").style="transform: translate(-30vw)"),$(".submit-tyt").on("click",function(t){var e=calcTYT();console.log(e),!1!==e&&$.ajax({url:"/set/new-tyt",method:"POST",contentType:"application/json",data:JSON.stringify(e),success:function(t){window.location.href="/panel/tytler"},error:function(){window.alert("Sunucu Hatası l\xfctfen Daha Sonra Tekrar Deneyiniz")}})}),$(".submit-ayt").on("click",function(t){var e=calcAYT();!1!==e&&$.ajax({url:"/set/new-ayt",method:"POST",contentType:"application/json",data:JSON.stringify(e),success:function(t){window.location.href="/panel/aytler"},error:function(){window.alert("Sunucu Hatası l\xfctfen Daha Sonra Tekrar Deneyiniz")}})}),$(".submit-ydt").on("click",function(t){var e=calcYDT();!1!==e&&$.ajax({url:"/set/new-ydt",method:"POST",contentType:"application/json",data:JSON.stringify(e),success:function(t){window.location.href="/panel/ydtler"},error:function(){window.alert("Sunucu Hatası l\xfctfen Daha Sonra Tekrar Deneyiniz")}})}),$(".calc-tyt").on("click",function(t){calcTYT()}),$(".calc-ayt").on("click",function(t){calcAYT()}),$(".calc-ydt").on("click",function(t){calcYDT()})});