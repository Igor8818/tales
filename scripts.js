const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive');
const overlay = document.querySelector('.menu-overlay');

menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('change'); 
    nav.classList.toggle('open'); 
    overlay.classList.toggle('active'); 
});

/* Fechar o menu ao clicar no fundo escuro */
overlay.addEventListener('click', () => {
    menuHamburguer.classList.remove('change');
    nav.classList.remove('open');
    overlay.classList.remove('active');
});

/* NÃO fecha o menu ao clicar dentro dele */
nav.addEventListener('click', (event) => {
    event.stopPropagation();
});
