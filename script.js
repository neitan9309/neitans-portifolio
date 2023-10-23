const botaoScroll = document.getElementById('botaoScroll');

function alternarBotao() {
    if (window.scrollY > 200) {
        botaoScroll.classList.add('visible');
    } else {
        botaoScroll.classList.remove('visible');
    }
}

window.addEventListener('scroll', alternarBotao);

botaoScroll.addEventListener('click', scrollToTop);