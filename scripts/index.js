let logo = document.getElementById('logo-enggal');
let bianglala = document.getElementById('bianglala');
let dino = document.getElementById('dino');
let gunungBack = document.getElementById('gunung-back');
let header = document.querySelector('header');
let ourProject = document.querySelector('.sec .our-projects');
let projectItem = document.querySelectorAll('.sec .our-projects div .project-item');

const dinoLeft = 900;
const bianglalaRight = 1000;

let f = function () {
    let value = window.scrollY;
    
    bianglala.style.transform = `translateX(-${value * 0.1}%)`;
    bianglala.style.right = bianglalaRight - ((bianglalaRight - window.innerWidth) * 0.3) + 'px';
    
    dino.style.transform = `translateX(${value * 0.1}%)`;
    dino.style.left = dinoLeft - ((dinoLeft - window.innerWidth) * 0.4) + 'px';
    
    gunungBack.style.marginTop = value * 0.4 + 'px';
}
f();

function addListenerMulti(element, eventNames, listener) {
    eventNames.split(' ').forEach(item => element.addEventListener(item, listener, false));
}

addListenerMulti(window, 'scroll resize', function() {
    f();
});