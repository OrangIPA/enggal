let logo = document.getElementById('logo-enggal');
let bianglala = document.getElementById('bianglala');
let dino = document.getElementById('dino');
let gunungBack = document.getElementById('gunung-back');
let header = document.querySelector('header');

const dinoLeft = 900;
const bianglalaRight = 900;

let value = window.scrollY;

bianglala.style.transform = `translateX(-${value * 0.1}%)`;
bianglala.style.right = bianglalaRight - ((bianglalaRight - window.innerWidth) * 0.3) + 'px';

dino.style.transform = `translateX(${value * 0.1}%)`;
dino.style.left = dinoLeft - ((dinoLeft - window.innerWidth) * 0.4) + 'px';

logo.style.marginTop = value * 1 + 'px';
header.style.top = value * 0.7 + 'px';
gunungBack.style.marginTop = value * 0.4 + 'px';

function addListenerMulti(element, eventNames, listener) {
    var events = eventNames.split(' ');
    for (var i=0, iLen=events.length; i<iLen; i++) {
        element.addEventListener(events[i], listener, false);
    }
}

addListenerMulti(window, 'scroll resize', function() {
    let value = window.scrollY;

    bianglala.style.transform = `translateX(-${value * 0.1}%)`;
    bianglala.style.right = bianglalaRight - ((bianglalaRight - window.innerWidth) * 0.3) + 'px';

    dino.style.transform = `translateX(${value * 0.1}%)`;
    dino.style.left = dinoLeft - ((dinoLeft - window.innerWidth) * 0.4) + 'px';

    logo.style.marginTop = value * 1 + 'px';
    header.style.top = value * 0.7 + 'px';
    gunungBack.style.marginTop = value * 0.4 + 'px';
    // console.log(window.innerWidth);
});