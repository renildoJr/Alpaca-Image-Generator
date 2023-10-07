'use strict';

const imageContainer = document.getElementById("image-container");
const btnsAcessorizeContainer = document.getElementById("btns-acessorize");
const btnStylesContainer = document.getElementById("btns-style");
const positions = [4, 0, 0, 0, 0, 0, 3, 0];

const AlpacaLists = [
    {id: 7, category: "backgrounds", parts: ["blue50", "blue60", "blue70", "darkblue30", "darkblue50", "darkblue70", "green50", "green60", "green70", "grey40", "grey70", "grey80", "red50", "red60", "red70", "yellow50", "yellow60", "yellow70"]},
    {id: 4, category: "neck", parts: ["default", "bend-backward", "bend-forward", "thick"]},
    {id: 1, category: "ears", parts: ["default", "tilt-backward", "tilt-forward"]},
    {id: 0, category: "hair", parts: ["default", "bang", "curls", "elegant", "fancy", "quiff", "short"]},
    {id: 2, category: "eyes", parts: ["default", "angry", "naughty", "panda", "smart", "star"]},
    {id: 5, category: "leg", parts: ["default", "bubble-tea", "cookie", "game-console", "tilt-backward", "tilt-forward"]},
    {id: 6, category: "accessories", parts: ["earings", "flower", "glasses", "headphone"]},
    {id: 3, category: "mouth",  parts: ["default", "astonished", "eating", "laugh", "tongue"]},
];


// BUG: TROCANDO A SEQUENCIA DAS IMAGENS APÓS ALTERA-LAS
function generateAlpacaImage() {
    imageContainer.innerHTML = "";
    positions.map((position, index) => {
        if(index == 7) {
            imageContainer.innerHTML+=`<img class="alpaca-component" id="alpaca-nose" src="images/alpaca/nose.png" alt="Alpaca Nose">`;
        }
        imageContainer.innerHTML+=`
        <img class="alpaca-component" src="images/alpaca/${AlpacaLists[index].category}/${AlpacaLists[index].parts[position]}.png" alt="Alpaca ${AlpacaLists[index].category}">`;
    });
}

// Init
function renderAcessorizeButtons() {
    const AlpacaListSortedById = AlpacaLists.sort((a, b) => a.id - b.id);
    const buttonList = AlpacaListSortedById.map(button => `<button class="btn btn-round" id="${button.id}">${button.category}</button>`);
    
    // Refatorar esse trecho em dentro de uma única função
    btnsAcessorizeContainer.innerHTML = buttonList.join("");

    const renderedButtons = Array.from(btnsAcessorizeContainer.querySelectorAll(".btn"));
    renderedButtons[0].classList.add("btn-primary");
    ////

    renderedButtons.forEach((button, index) => button.addEventListener("click", ()=>{
        changeButtonsClass("btn-primary", button, renderedButtons);
        // Tornar o código acima reaproveitável, a função abaixo será extra
        renderStyleButtons(button.id, index);
    }));
}

function renderStyleButtons(CurrentButtonId = 0, currentListIndex = 3) {
    const buttonList = AlpacaLists[CurrentButtonId].parts.map(button => `<button class="btn btn-round">${button}</button>`);
    
    // Refatorar esse trecho em dentro de uma única função
    btnStylesContainer.innerHTML = buttonList.join("");

    const renderedButtons = Array.from(btnStylesContainer.querySelectorAll(".btn"));
    renderedButtons[positions[currentListIndex]].classList.add("btn-primary");
    ////

    renderedButtons.forEach((button, index) => button.addEventListener("click", ()=>{
        changeButtonsClass("btn-primary", button, renderedButtons);
        // Tornar o código acima reaproveitável, a função abaixo será extra
        positions[currentListIndex] = index;
        generateAlpacaImage();
    }));
}

function changeButtonsClass(ButtonClass = "", currentButton = {}, buttonList = []) {
    buttonList.map(button => button.classList.remove(ButtonClass));
    currentButton.classList.add(ButtonClass);
}

generateAlpacaImage();
renderAcessorizeButtons();
renderStyleButtons();




















// console.log(AlpacaLists[1].parts)

// btnsAcessorize.forEach((button, index) => {
//     button.addEventListener("click", ()=>{
//         classChanging(button, "btn-primary", btnsAcessorize);
//         renderButtonList(AlpacaLists[index].parts[index],positions[index], index);
//     });
// });

// // init();

// // ideia: criar uma lista com posições estabelecidas, o usuario vai clicar em um
// // botao do acessorize e escolherá um estilo, vai para outro botao do acessorize depois volta
// // para o anterior e a opcao do style tem que continuar a mesma

// function renderButtonList(list = [], selectdButton = 0, triggeredButtonIndex) { // Na implementação do random, deve-se alterar o selected button para os botões selecionados pelo random conforme clicamos nos acessorizes
//     btnStylesContainer.innerHTML = "";

//     btnListRenderedStyle = list.map((button, index) => 
//         `<button class="btn btn-round ${index === selectdButton ? "btn-primary" : ""}">${list[index]}</button>`
//     ).join("");
    
//     btnStylesContainer.innerHTML = btnListRenderedStyle;
//     btnStyle = document.querySelectorAll("#btns-style .btn")

//     btnStyle.forEach((button, index) => 
//         button.addEventListener("click", ()=> {
//             classChanging(button, "btn-primary", btnStyle);
//             positions[triggeredButtonIndex] = index;
//             console.log(positions)
//         })  
//     )

// }

// function classChanging(currentItem = {}, itemClass = "", itemList = []) {
//     itemList.forEach(item => item.classList.remove(itemClass));
//     return currentItem.classList.add(itemClass);
// }

// function init() {
//     renderButtonList(AlpacaLists[].parts[0]);
//     btnsAcessorize[0].classList.add("btn-primary");
// }