let header = document.querySelector('header');

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