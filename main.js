//moebile menu navigation
const openNav = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-container');
const closeNav = document.querySelector('.menu-btn i')
const menuBg = document.querySelector('.menu-bg');
const navLink = document.querySelectorAll('.nav-link');

openNav.addEventListener('click', () => {
    menu.classList.toggle('active');
    closeNav.classList.toggle('active');
});
menuBg.addEventListener('click', () => {
    menu.classList.remove('active');
});


navLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    })
})

