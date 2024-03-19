let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullimg");
let close = document.querySelector("span");

images.forEach((img, index)=>{
    img.addEventListener(("click"),()=>{
        openModal(img.src);
    });
});

close.addEventListener("click", ()=> (wrapper.style.display = "none"));

function openModal(pic){
    wrapper.style.display = "flex";
    imgWrapper.src = pic;
}