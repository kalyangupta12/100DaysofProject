const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Frontend Developer", "Backend Developer", "FullStack Developer", "Trainee", "Intern"];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay= 2000;
let index=0;
let charindex=0;

document.addEventListener("DOMContentLoaded", ()=>{
    if(words.length){
        setTimeout(type, newLetterDelay);
    }
});

function type(){
    if(charindex<words[index].length){
        typedTextSpan.textContent += words[index].charAt(charindex);
        charindex++;
        setTimeout(type, typingDelay);
    }else{
        setTimeout(erase, newLetterDelay);
    }
}

function erase(){
    if(charindex>0){
        typedTextSpan.textContent = words[index].substring(0, charindex - 1);
        charindex--;
        setTimeout(erase, erasingDelay);
    }else{
        index++;
        if(index>=words.length){
            index=0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}
