//navber mobile responsive js--start
const btn=document.querySelector(".mobile-menu");
btn.addEventListener("click",function(){
  const addshow=document.querySelector(".phonemenu");
  this.querySelector('i').classList.toggle('fa-times')
  addshow.classList.toggle('show')
})

const dropli=document.querySelectorAll(".dropdown1");
dropli.forEach(function(e){
  e.querySelector("a").innerHTML +='<i class="fas fa-angle-down phonecaret"></i>'
  e.addEventListener("click",function(event){
    this.querySelector(".sub-menu-1").classList.toggle("phone")
    event.stopPropagation();
  })
})
//navber mobile responsive js--end