const containerEl = document.querySelector(".container");
const generateEl = document.querySelector("#generate");

for(let index = 0; index < 30; index++){
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

function generateColors(){
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
        colorContainerEl.style.background = "#" + newColorCode;
        colorContainerEl.innerHTML = "#" + newColorCode;
    })
}

generateColors();

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodelenght = 6;
    let colorCode = "";
    for(let index = 0; index < colorCodelenght; index++){
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}

generateEl.addEventListener("click",()=>{
    location.reload();
})