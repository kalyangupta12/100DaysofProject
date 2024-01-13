const grayPart = document.querySelector(".graypart");
const redPart = document.querySelector(".redpart");

grayPart.addEventListener("click", () =>{
   redPart.classList.add("animation");
   grayPart.classList.add("fill-color") ;
});

redPart.addEventListener("click", () =>{
   redPart.classList.remove("animation");
   grayPart.classList.remove("fill-color") ;
});


