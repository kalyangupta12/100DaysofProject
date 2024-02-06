let clickme = document.getElementById("selectField");
let lists = document.getElementById("list");
let arrow =  document.getElementById("arrowicon");

clickme.addEventListener("click", () => {
    if (lists.style.visibility === "hidden" || lists.style.visibility === "") {
        lists.style.visibility = "visible";
        arrow.classList.toggle("rotate");
    } else {
        lists.style.visibility = "hidden";
        arrow.classList.toggle("rotate");
    }
});

