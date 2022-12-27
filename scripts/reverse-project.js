let ourProject = document.querySelector('.sec .our-projects');
let projectItem = document.querySelectorAll('.sec .our-projects div .project-item');

projectItem.forEach((val, i) => {
    if (i % 2 === 0) return;
    val.classList.add('reverse');
});
