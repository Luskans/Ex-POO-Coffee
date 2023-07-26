const power = document.querySelector('.coffee-header__power');
const powerTwo = document.querySelector('.coffee-header__power-two');
const display = document.querySelector('.coffee-header__display');
const sugar = document.querySelector('.coffee-header__sugar');
const details = document.querySelector('.coffee-header__details');
const screen = document.querySelector('.coffee-header__screen p');
const coins = document.querySelector('.coffee-header__coins');
const btns = document.querySelectorAll('.coffee-menu__buttons');
const btnOne = document.querySelector('.coffee-menu__button-one');
const btnTwo = document.querySelector('.coffee-menu__button-two');
const btnThree = document.querySelector('.coffee-menu__button-three');
const btnFour = document.querySelector('.coffee-menu__button-four');
const menus = document.querySelectorAll('.coffee-menu__labels');
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
const cup = document.querySelector('.coffee-medium__cup');

let powerState = 0;
power.addEventListener('click', function() {
    if (powerState === 0) {
        power.style.backgroundColor = "var(--green-color)";
        powerTwo.style.boxShadow= "0 0 0 2px var(--green-color)";
        powerState = 1;
    } else if (powerState === 1) {
        power.style.backgroundColor = "var(--red-color)";
        powerTwo.style.boxShadow= "0 0 0 2px var(--red-color)";
        powerState = 0;
    }
})

let activeButton = null;
let activeMenu = null;
// Ajoutez un événement de clic à chaque bouton
btns.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Si le bouton cliqué est déjà actif, ne rien faire
        if (button === activeButton) {
            return;
        }

        // Sinon, désactivez l'ancien bouton et la vieille div actifs s'ils existent
        if (activeButton && activeMenu) {
            activeMenu.style.background = 'white';
        }

        // Activez le nouveau bouton et la nouvelle div associée
        activeButton = button;
        activeMenu = menus[index];
        activeMenu.style.background = 'var(--green-color)';
    });
});

cup.addEventListener('click', function () {
    cup.classList.add('cup-Animation');
    setTimeout( () => {
        liquid.classList.remove('cup-Animation');
    }, 6000)
    smokeOne.classList.remove('smokeOne-Animation');
    smokeTwo.classList.remove('smokeTwo-Animation');
    smokeThree.classList.remove('smokeThree-Animation');
    smokeFour.classList.remove('smokeFour-Animation');
})

display.addEventListener('click', function () {
    display.classList.add('circle');
    liquid.classList.add('liquid-Animation');
    smokeOne.classList.add('smokeOne-Animation');
    smokeTwo.classList.add('smokeTwo-Animation');
    smokeThree.classList.add('smokeThree-Animation');
    smokeFour.classList.add('smokeFour-Animation');
    setTimeout( () => {
        liquid.classList.remove('liquid-Animation');
        display.classList.remove('circle');
    }, 7000)
})

let sugarState = 1;
sugar.addEventListener('click', function () {
    if (sugarState === 0) {
        details.style.backgroundColor = "#9b9091";
        details.style.boxShadow = "-12px 0 0 #9b9091, -24px 0 0 #9b9091, -36px 0 0 #9b9091";
        sugarState = 1;
    } else if (sugarState === 1) {
        details.style.backgroundColor = "#9b9091";
        details.style.boxShadow = "-12px 0 0 #9b9091, -24px 0 0 #9b9091, -36px 0 0 var(--red-color)";
        sugarState = 2;
    } else if (sugarState === 2) {
        details.style.backgroundColor = "#9b9091";
        details.style.boxShadow = "-12px 0 0 #9b9091, -24px 0 0 var(--red-color), -36px 0 0 var(--red-color)";
        sugarState = 3;
    } else if (sugarState === 3) {
        details.style.backgroundColor = "#9b9091";
        details.style.boxShadow = "-12px 0 0 var(--red-color), -24px 0 0 var(--red-color), -36px 0 0 var(--red-color)";
        sugarState = 4;
    } else if (sugarState === 4) {
        details.style.backgroundColor = "var(--red-color)";
        details.style.boxShadow = "-12px 0 0 var(--red-color), -24px 0 0 var(--red-color), -36px 0 0 var(--red-color)";
        sugarState = 0;
    }
})