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