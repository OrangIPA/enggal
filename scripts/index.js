let header = document.querySelector('header');
let ourProject = document.querySelector('.sec .our-projects');
let projectItem = document.querySelectorAll('.sec .our-projects div .project-item');

projectItem.forEach((val, i) => {
    if (i % 2 === 0) return;
    val.classList.add('reverse');
});

let f = function () {
    if (window.scrollY - window.innerHeight > 0) {
        header.classList.add('header-background')
    } else {
        header.classList.remove('header-background')
    }
}
f();

function addListenerMulti(element, eventNames, listener) {
    eventNames.split(' ').forEach(item => element.addEventListener(item, listener, false));
}

addListenerMulti(window, 'scroll resize', f);