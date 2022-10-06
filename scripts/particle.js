particlesJS("particles-js", {
    particles: {
        number: { value: 300, density: { enable: true, value_area: 1100 } },
        color: { value: "#ffffff" },
        shape: {
            type: "star",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Head.svg/290px-Head.svg.png", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 4,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 40, //38
            color: "#ffffff",
            opacity: 0.7,
            width: 2
        },
        move: {
            enable: true,
            speed: 0.65,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: true, rotateX: 10000, rotateY: 10000 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "bubble, grab" },
            onclick: { enable: true, mode: "repulse" },
            resize: true
        },
        modes: {
            grab: { distance: 85, line_linked: { opacity: 3 } },
            bubble: { distance: 200, size: 6.5, duration: 1, opacity: 1, speed: 2.5 },
            repulse: { distance: 75, duration: 0.9 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});