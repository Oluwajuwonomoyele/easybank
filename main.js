//moebile menu navigation
const openNav = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-container');
const closeNav = document.querySelector('.menu-btn i');
const navLink = document.querySelectorAll('.nav-link');

openNav.addEventListener('click', e => {
    menu.classList.toggle('active');
    closeNav.classList.toggle('active');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        closeNav.classList.remove('active');
    })
})

