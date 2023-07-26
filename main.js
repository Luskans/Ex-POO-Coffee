const power = document.querySelector('.coffee-header__power');
const powerTwo = document.querySelector('.coffee-header__power-two');
const display = document.querySelector('.coffee-header__display');
const sugar = document.querySelector('.coffee-header__sugar');
const details = document.querySelector('.coffee-header__details');
const screen = document.querySelector('.coffee-header__screen p');
const coins = document.querySelector('.coffee-header__coins');
const btnOne = document.querySelector('.coffee-menu__button-one');
const btnTwo = document.querySelector('.coffee-menu__button-two');
const btnThree = document.querySelector('.coffee-menu__button-three');
const btnFour = document.querySelector('.coffee-menu__button-four');
const menuOne = document.querySelector('.coffee-menu__label-one');
const menuTwo = document.querySelector('.coffee-menu__label-two');
const menuThree = document.querySelector('.coffee-menu__label-three');
const menuFour = document.querySelector('.coffee-menu__label-four');
const labelOne = document.querySelector('.coffee-menu__label-one p');
const labelTwo = document.querySelector('.coffee-menu__label-two p');
const labelThree = document.querySelector('.coffee-menu__label-three p');
const labelFour = document.querySelector('.coffee-menu__label-four p');
const liquid = document.querySelector('.coffee-medium__liquid');
const smoke = document.querySelectorAll('.coffee-medium__smoke');
const smokeOne = document.querySelector('.coffee-medium__smoke-one');
const smokeTwo = document.querySelector('.coffee-medium__smoke-two');
const smokeThree = document.querySelector('.coffee-medium__smoke-three');
const smokeFour = document.querySelector('.coffee-medium__smoke-four');

// power.addEventListener('click', function() {
//     if () {
//         power.style.backgroundColor = "#9acfc5";
//         powerTwo.style.boxShadow= "0 0 0 2px #9acfc5";
//     } else if () {
//         power.style.backgroundColor = "#ef9c9c";
//         powerTwo.style.boxShadow= "0 0 0 2px #ef9c9c";
//     }
// })

btnOne.addEventListener('click', function() {
    menuOne.style.backgroundColor = "#9acfc5";
})

btnTwo.addEventListener('click', function() {
    menuTwo.style.backgroundColor = "#9acfc5";
})

btnThree.addEventListener('click', function() {
    menuThree.style.backgroundColor = "#9acfc5";
})

btnFour.addEventListener('click', function() {
    menuFour.style.backgroundColor = "#9acfc5";
})

let liquidState = 1;
display.addEventListener('click', function() {
    if (liquidState === 0) {
        liquid.style.animation = "";
        smokeOne.style.animation = "";
        smokeTwo.style.animation = "";
        smokeThree.style.animation = "";
        smokeFour.style.animation = "";
        liquidState = 1;
    } else if (liquidState === 1){
        liquid.style.animation = "liquid 4s 2s linear 1 running";
        smokeOne.style.animation = "smokeOne 3s 3s linear infinite running";
        smokeTwo.style.animation = "smokeTwo 3s 4s linear infinite running";
        smokeThree.style.animation = "smokeTwo 3s 5s linear infinite running";
        smokeFour.style.animation = "smokeOne 3s 4s linear infinite running";
        liquidState = 0;
    }
})

let sugarState = 0;
sugar.addEventListener('click', function() {
    if (sugarState === 0) {
        details.style.backgroundColor = "#9b9091";
        details.style.boxShadow = "-12px 0 0 #9b9091, -24px 0 0 #9b9091, -36px 0 0 #9b9091";
        sugarState = 1;
    } else if (sugarState === 1) {
        details.style.backgroundColor = "#9b9091";
        details.style.boxShadow = "-12px 0 0 #9b9091, -24px 0 0 #9b9091, -36px 0 0 #9acfc5";
        sugarState = 2;
    } else if (sugarState === 2) {
        details.style.backgroundColor = "#9b9091";
        details.style.boxShadow = "-12px 0 0 #9b9091, -24px 0 0 #9acfc5, -36px 0 0 #9acfc5";
        sugarState = 3;
    } else if (sugarState === 3) {
        details.style.backgroundColor = "#9b9091";
        details.style.boxShadow = "-12px 0 0 #9acfc5, -24px 0 0 #9acfc5, -36px 0 0 #9acfc5";
        sugarState = 4;
    } else if (sugarState === 4) {
        details.style.backgroundColor = "#9acfc5";
        details.style.boxShadow = "-12px 0 0 #9acfc5, -24px 0 0 #9acfc5, -36px 0 0 #9acfc5";
        sugarState = 0;
    }
})