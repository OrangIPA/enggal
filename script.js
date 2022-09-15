let logo = document.getElementById('logo-enggal');
let bianglala = document.getElementById('bianglala');
let dino = document.getElementById('dino');
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    logo.style.marginTop = value * 1 + 'px';
    bianglala.style.transform = `translate(-${value * 0.2}%, 0%)`;
    dino.style.transform = `translate(${value * 0.2 + 30}%, 0%)`;
    header.style.top = value * 0.7 + 'px';
});