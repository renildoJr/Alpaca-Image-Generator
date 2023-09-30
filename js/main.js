'use strict';

const btnsAcessorize = document.querySelectorAll("#btns-acessorize .btn");
const btnStylesContainer = document.getElementById("btns-style");
let btnListRenderedStyle = [];
let btnStyle = [];

const AlpacaLists = [
    // Hair
    ["default", "bang", "curls", "elegant", "fancy", "quiff", "short"],
    // Ears
    ["default", "tilt-backward", "tilt-forward"],
    // Eyes
    ["default", "angry", "naughty", "panda", "smart", "star"],
    // Mouth
    ["default", "astonished", "eating", "laugh", "tongue"],
    // Neck
    ["default", "bend-backward", "bend-forward", "thick"],
    // Leg
    ["default", "bubble-tea", "cookie", "game-console", "tilt-backward", "tilt-forward"],
    // Accessories
    ["earings", "flower", "glasses", "headphone"],
    // Background
    ["blue50", "blue60", "blue70", "darkblue30", "darkblue50", "darkblue70", "green50", "green60", "green70", "grey40", "grey70", "grey80", "red50", "red60", "red70", "yellow50", "yellow60", "yellow70"],
]

btnsAcessorize.forEach((button, index) => {
    button.addEventListener("click", ()=>{
        classChanging(button, "btn-primary", btnsAcessorize);
        renderButtonList(AlpacaLists[index]);
    });
});

init();




// ideia: criar uma lista com posições estabelecidas, o usuario vai clicar em um
// botao do acessorize e escolherá um estilo, vai para outro botao do acessorize depois volta
// para o anterior e a opcao do style tem que continuar a mesma



function renderButtonList(list = [], selectdButton = 0) { // Na implementação do random, deve-se alterar o selected button para os botões selecionados pelo random conforme clicamos nos acessorizes
    btnStylesContainer.innerHTML = "";

    btnListRenderedStyle = list.map((button, index) => 
        `<button class="btn btn-round ${index === selectdButton ? "btn-primary" : ""}">${list[index]}</button>`
    ).join("");
    
    btnStylesContainer.innerHTML = btnListRenderedStyle;
    btnStyle = document.querySelectorAll("#btns-style .btn")

    btnStyle.forEach(button => 
        button.addEventListener("click", ()=> {
            classChanging(button, "btn-primary", btnStyle);
        })  
    )    

}



function classChanging(currentItem = {}, itemClass = "", itemList = []) {
    itemList.forEach(item => item.classList.remove(itemClass));
    return currentItem.classList.add(itemClass);
}



function init() {
    renderButtonList(AlpacaLists[0]);
    btnsAcessorize[0].classList.add("btn-primary");
}