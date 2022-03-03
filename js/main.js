//slick slider
$(document).ready(function(){
    $('.your-class').slick({
      autoplay:true,
      adaptiveHeight:true,
      autoplaySpeed:3000,
      arrows:true,

    });
  });
  //owl-carosel
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
//Naveber
var header1=document.querySelector("#navber");
window.addEventListener("scroll",function(){
  header1.classList.toggle('bg',window.scrollY>0);

})
//back top
var to_top=document.querySelector(".back-top-botton");
window.addEventListener('scroll',function(){
   if(window.pageYOffset>1500){
     to_top.classList.add('activee');
   }else{
     to_top.classList.remove('activee');
   }
})

//right section
const rightbtn=document.querySelector(".righbtn");
rightbtn.addEventListener("click",function(){
 const righadd=document.querySelector(".right-section");
 righadd.classList.add('rightadd');
})
const closebtn=document.querySelector(".close");
closebtn.addEventListener("click",function(){
  const righadd=document.querySelector(".right-section");
 righadd.classList.remove('rightadd');
})