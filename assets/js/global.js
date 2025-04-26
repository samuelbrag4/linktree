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

document.addEventListener('mousemove', (e) => {
    const xPercent = (e.clientX / window.innerWidth) * 100;
    const yPercent = (e.clientY / window.innerHeight) * 100;

    document.body.style.background = `linear-gradient(${xPercent}deg, #000000, #ffffff)`;
});

if (/Mobi|Android/i.test(navigator.userAgent)) {
    document.body.style.background = 'linear-gradient(90deg, #000000, #ffffff)';
}

const snakesContainer = document.getElementById('snakes-container');

function createSnakeEmoji() {
  const snake = document.createElement('div');
  snake.classList.add('snake-emoji');
  snake.textContent = '🐍';

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;

  snake.style.left = `${startX}px`;
  snake.style.top = `${startY}px`;

  snakesContainer.appendChild(snake);

  moveSnakeEmoji(snake); 
}

function moveSnakeEmoji(snake) {
  function animate() {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    snake.style.transition = `top ${0.8 + Math.random()}s ease-in-out, left ${0.8 + Math.random()}s ease-in-out`;
    snake.style.left = `${randomX}px`;
    snake.style.top = `${randomY}px`;

    const nextMove = 1000 + Math.random() * 1000;
    setTimeout(animate, nextMove);
  }

  animate();
}

for (let i = 0; i < 10; i++) {
  createSnakeEmoji();
}
