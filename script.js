document.addEventListener('DOMContentLoaded', () => {

    // --- Atualiza o ano no rodapé ---
    const anoAtualSpan = document.getElementById('anoAtual');
    if (anoAtualSpan) {
        anoAtualSpan.textContent = new Date().getFullYear();
    }

    // --- Lógica para o botão "Voltar ao Topo" ---
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        // Mostra ou esconde o botão dependendo da posição de rolagem
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Faz a rolagem suave para o topo ao clicar
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
