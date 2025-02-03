// Script para ajustar a rolagem, levando em consideração a altura do cabeçalho fixo
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Captura o valor do atributo href (ex: #redes, #contact)
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Verifica se o elemento existe
        if (targetElement) {
            // Calcula a posição para rolar, levando em conta a altura do cabeçalho
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            // Faz a rolagem suave para a posição ajustada
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});