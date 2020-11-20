var navOpen = document.getElementsByClassName('nav-trigger')[0],
    navClose = document.getElementsByClassName('nav-close')[0],
    body = document.getElementsByTagName('body')[0];

// navOpen.addEventListener('click', toggleNavigation);
navClose.addEventListener('click', toggleNavigation);

function toggleNavigation(ev) {
    ev.preventDefault();
    body.classList.toggle('nav-open');
}