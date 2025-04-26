// Adiciona faíscas ao clicar nos cartões
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
        for (let i = 0; i < 10; i++) {
            const sparkles = document.createElement('div');
            sparkles.className = 'sparkles';
            sparkles.style.left = `${e.clientX + (Math.random() * 50 - 25)}px`;
            sparkles.style.top = `${e.clientY + (Math.random() * 50 - 25)}px`;
            document.body.appendChild(sparkles);

            setTimeout(() => {
                sparkles.remove();
            }, 1000);
        }
    });
});

// CSS para as faíscas
const style = document.createElement('style');
style.innerHTML = `
    .sparkles {
        position: absolute;
        width: 10px;
        height: 10px;
        background: gold;
        border-radius: 50%;
        animation: sparkle 1s ease-out forwards;
        pointer-events: none;
    }

    @keyframes sparkle {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(3); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Efeito de gradiente seguindo o mouse
document.addEventListener('mousemove', (e) => {
    // Calcula a posição do mouse em porcentagem da tela
    const xPercent = (e.clientX / window.innerWidth) * 100;
    const yPercent = (e.clientY / window.innerHeight) * 100;

    // Atualiza o gradiente no body
    document.body.style.background = `linear-gradient(${xPercent}deg, #000000, #ffffff)`;
});

// Detecta dispositivos móveis e mantém o gradiente estático
if (/Mobi|Android/i.test(navigator.userAgent)) {
    document.body.style.background = 'linear-gradient(90deg, #000000, #ffffff)';
}