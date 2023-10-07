'use strict';

const btnsAcessorizeContainer = document.getElementById("btns-acessorize");
const btnStylesContainer = document.getElementById("btns-style");
const AlpcaImages = Array.from(document.querySelectorAll(".alpaca-component:not(#alpaca-nose)"));
const positions = [0, 0, 0, 0, 0, 0, 0, 0];

// AlpcaImages[2].src="images/alpaca/ears/default.png"
const random = AlpcaImages.find(alpacaComponent => alpacaComponent.dataset.id == 0)
console.log(random)
random.src = "images/alpaca/hair/elegant.png" 
// ATENÇÃO: PROBLEMA => QUANDO ALTERA A O SRC, O A POSICAO DO ELEMENTO HTML FICA EM PRIMEIRO
// Possível solução, atualizar a lista inteira sempre quando mudar uma única imagem

let btnListRenderedStyle = [];
let btnStyle = [];

const AlpacaLists = [
    {id: 7, category: "background", parts: ["blue50", "blue60", "blue70", "darkblue30", "darkblue50", "darkblue70", "green50", "green60", "green70", "grey40", "grey70", "grey80", "red50", "red60", "red70", "yellow50", "yellow60", "yellow70"]},
    {id: 4, category: "neck", parts: ["default", "bend-backward", "bend-forward", "thick"]},
    {id: 1,category: "ears", parts: ["default", "tilt-backward", "tilt-forward"]},
    {id: 0, category: "hair", parts: ["default", "bang", "curls", "elegant", "fancy", "quiff", "short"]},
    {id: 2, category: "eyes", parts: ["default", "angry", "naughty", "panda", "smart", "star"]},
    {id: 5, category: "leg", parts: ["default", "bubble-tea", "cookie", "game-console", "tilt-backward", "tilt-forward"]},
    {id: 6, category: "accessories", parts: ["earings", "flower", "glasses", "headphone"]},
    {id: 3, category: "mouth",  parts: ["default", "astonished", "eating", "laugh", "tongue"]},
]

// Init
function renderButtonsInOrder() {
    // if order => order buttons
    const AlpacaListSortedById = AlpacaLists.sort((a, b) => a.id - b.id);
    const buttonList = AlpacaListSortedById.map(button => `<button class="btn btn-round" id="${button.id}">${button.category}</button>`);
    btnsAcessorizeContainer.innerHTML = buttonList.join("");

    const renderedButtons = btnsAcessorizeContainer.querySelectorAll(".btn")

    // continuar daqui......
    renderedButtons.forEach(button => button.addEventListener("click", ()=>{}))
}

function changeButtonsClass(currentButtom, buttonList) {

}

renderButtonsInOrder()






















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