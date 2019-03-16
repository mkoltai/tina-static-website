var slide1Index=1;var slide2Index=1;var m;function plusSlides1(n){showSlides1(slide1Index+=n)}
function plusSlides2(n){showSlides2(slide2Index+=n)}
function showSlides1(n){var i;var slides=document.getElementsByClassName("mySlides1");if(n>slides.length){slide1Index=1}
if(n<1){slide1Index=slides.length}
for(i=0;i<slides.length;i++){slides[i].style.display="none"}
slides[slide1Index-1].style.display="block"}
function showSlides2(n){var i;var slides=document.getElementsByClassName("mySlides2");if(n>slides.length){slide2Index=1}
if(n<1){slide2Index=slides.length}
for(i=0;i<slides.length;i++){slides[i].style.display="none"}
slides[slide2Index-1].style.display="block"}
function slide1Loop(){var slidesLength=document.getElementsByClassName("mySlides1").length
showSlides1(slide1Index);setTimeout(function(){showSlides1(slide1Index);slide1Index++;if(slide1Index>slidesLength){slide1Index=1}
slide1Loop()},4000)}
function slide2Loop(){var slidesLength=document.getElementsByClassName("mySlides2").length
showSlides2(slide2Index);setTimeout(function(){showSlides2(slide2Index);slide2Index++;if(slide2Index>slidesLength){slide2Index=1}
slide2Loop()},4000)}
slide1Loop();slide2Loop();function setSlideSize(){var imgWidth=document.getElementsByClassName('slideshow')[0].offsetWidth;var slide2height=document.getElementsByClassName('slideshow2-container')[0].offsetHeight;var slide2Width=document.getElementsByClassName('slideshow2')[0].offsetWidth;if(slide2height<400)slide2height=606;var pb=document.getElementsByClassName("purchasebutton");var db=document.getElementsByClassName("demobutton");var tst=document.getElementsByClassName("tinaslidetitle");var tst2=document.getElementsByClassName("tinaslidetitle2");var tst3=document.getElementsByClassName("tinaslidetitle3");var tsl=document.getElementsByClassName("tinaslidelist");var s2i=document.getElementsByClassName("slide2img");var tc2=document.getElementsByClassName("text-content2");document.getElementsByClassName('slideshow2')[0].style.height=slide2height+"px";if(imgWidth>1400)imgWidth=1400;if(slide2Width>1080)slide2Width=1080;var i;for(i=0;i<pb.length;i++){pb[i].style.left=Math.round(imgWidth*390/1400)+"px";pb[i].style.top=Math.round(imgWidth*330/1400)+"px";db[i].style.left=Math.round(imgWidth*2/1400)+"px";db[i].style.top=Math.round(imgWidth*58/1400)+"px"}
for(i=0;i<tst2.length;i++){tst2[i].style.marginTop=Math.round(imgWidth*30/1400)+"px";tst2[i].style.fontSize=Math.round(imgWidth*25/1400)+"px";tst2[i].style.marginLeft=Math.round(imgWidth*600/1400)+"px"}
for(i=0;i<tst.length;i++){tst[i].style.marginTop=Math.round(imgWidth*10/1400)+"px";tst[i].style.fontSize=Math.round(imgWidth*25/1400)+"px";tst[i].style.marginRight=Math.round(imgWidth*70/1400)+"px"}
for(i=0;i<tsl.length;i++){tsl[i].style.fontSize=Math.round(imgWidth*20/1400)+"px";tsl[i].style.marginLeft=Math.round(imgWidth*750/1400)+"px";tsl[i].style.marginTop=Math.round(imgWidth*100/1400)+"px"}
for(i=0;i<tst3.length;i++){tst3[i].style.marginTop=Math.round(imgWidth*10/1400)+"px";tst3[i].style.fontSize=Math.round(imgWidth*25/1400)+"px";tst3[i].style.marginLeft=Math.round(imgWidth*750/1400)+"px"}
for(i=0;i<tc2.length;i++){tc2[i].style.paddingTop=Math.round(slide2Width*140/1080)+"px";tc2[i].style.paddingLeft=Math.round(slide2Width*300/1080)+"px";tc2[i].style.fontSize=Math.round(slide2Width*14/1080)+"px"}}
document.addEventListener('DOMContentLoaded',function(event){setSlideSize()})
window.onresize=function(event){setSlideSize()}
function seeMore(s){var dots=document.getElementById("dots"+s);var moreText=document.getElementById("more"+s);var btnText=document.getElementById("seeMoreBtn"+s);if(dots.style.display==="none"){dots.style.display="inline";btnText.innerHTML="See more";moreText.style.display="none"}else{dots.style.display="none";btnText.innerHTML="See less";moreText.style.display="inline"}}
function getScript(url,success){var head=document.getElementsByTagName("head")[0],done=!1;var script=document.createElement("script");script.src=url;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=!0;success()}};head.appendChild(script)}
document.onscroll=function(){setTimeout(function(){var cs=document.createElement('script');cs.type='text/javascript';cs.async=!0;cs.defer=!0;cs.src=('https:'==document.location.protocol?'https://':'http://')+'//chatsystem.io/173160';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(cs,s);getScript('https://code.jquery.com/jquery-2.1.3.min.js',function(){$.getScript('https://www.designsoftware.com/orders/js/popupoffer.js?_=1520538017')})},2000)}