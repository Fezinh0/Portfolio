// MENU --------------------------------------------------
const menuM = document.getElementById('menu-mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav','fundo');
    nav.classList.toggle('active');
}

menuM.addEventListener('click', toggleMenu);
menuM.addEventListener('touchstart', toggleMenu);