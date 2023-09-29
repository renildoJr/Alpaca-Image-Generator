'use strict';

const btnsAcessorize = document.querySelectorAll("#btns-acessorize .btn");

class Button {
    constructor(name, btnClass, qnt) {
        this.name = name;
        this.class = btnClass;
        this.qnt = qnt;
    }
}

const AlpacaListBackground = [
    "blue50",
    "darkblue50",
]

const AlpacaListAccessories = [
    "earings",
]

// Btn Hair
$btnHair = new Button("Hair", );
$btnNose = new Button("Default", "Hair");

btnsAcessorize.forEach(btn => {
    btn.addEventListener("click", ()=>{

    })
})


