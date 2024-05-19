
//switching to dark/light
const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
      

      if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
      }else{
        modeText.innerText = "Dark mode";
      }});
      
//Typing effect     
var typed = new Typed(".animated-text",{
  strings : ["Programmer","Designer","Freelancer"],
  typeSpeed: 80,
  BackSpeed: 150,
  loop:true
})

//scrolling 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


//portfolio section

const image1 = document.getElementById("portimg1"),
      image2 = document.getElementById("portimg2"),
      image3 = document.getElementById("portimg3"),
      image4 = document.getElementById("portimg4");

image1.onclick = function(){
  window.open("https://github.com/GeorgesKalouch/ecommerce_project2")
}
image2.onclick = function(){
  window.open("https://github.com/GeorgesKalouch/ecommerce_project2")
}
