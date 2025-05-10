document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no rodapé
    const anoAtualSpan = document.getElementById('anoAtual');
    if (anoAtualSpan) {
        anoAtualSpan.textContent = new Date().getFullYear();
    }

    // Funcionalidade do botão "Ver Mini Glossário de Termos"
    const toggleGlossarioBtn = document.getElementById('toggleGlossarioBtn');
    const glossarioTransDiv = document.getElementById('glossarioTrans');

    if (toggleGlossarioBtn && glossarioTransDiv) {
        toggleGlossarioBtn.addEventListener('click', function() {
            if (glossarioTransDiv.classList.contains('hidden')) {
                glossarioTransDiv.classList.remove('hidden');
                toggleGlossarioBtn.textContent = 'Esconder Mini Glossário';
            } else {
                glossarioTransDiv.classList.add('hidden');
                toggleGlossarioBtn.textContent = 'Ver Mini Glossário de Termos';
            }
        });
    }
});
