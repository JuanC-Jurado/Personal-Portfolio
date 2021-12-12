const openButton = document.getElementById('open-btn');
const closeButton = document.getElementById('close-btn');
const navMenu = document.getElementById('navbar');
const navLinks = Array.from(document.getElementsByClassName('menu-links'));

navLinks.forEach(link => {
    link.addEventListener('click', closeMenu)
});

function closeMenu(){
    navMenu.style.right = '-85vw'
}
function openMenu(){
    navMenu.style.right = '0vw'
}

openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);