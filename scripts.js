const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive');

menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('change'); // Anima o botão
    nav.classList.toggle('open'); // Exibe/oculta o menu
});

/* Fechar o menu ao clicar em um link */
document.querySelectorAll('.nav-responsive a').forEach(link => {
    link.addEventListener('click', () => {
        menuHamburguer.classList.remove('change');
        nav.classList.remove('open');
    });
});
