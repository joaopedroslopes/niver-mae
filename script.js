function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Posicionamento e animação aleatórios
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    // Definir tons de vermelho e rosa
    const colors = [
        'rgb(255, 0, 0)', // rosinha
        'rgb(230, 179, 225)',  // mais um rosinha
        'rgb(214, 111, 175)',     // red
        'rgb(232, 42, 121)',   // tomato
        'rgb(207, 66, 92)', // pink
        'rgb(247, 25, 166)'  // lightpink
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.setProperty('--color', color);

    // Rotação aleatória
    const rotation = Math.random() * 360 + 'deg';
    heart.style.transform = `rotate(${rotation})`;

    // Tamanho aleatório
    const scale = Math.random() * 2 + 1; // Tamanho aleatório entre 1 e 3
    heart.style.transform += ` scale(${scale})`;

    document.getElementById('heart-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setTimeout(() => {
    document.getElementById('greeting').style.display = 'none';
    setInterval(createHeart, 50);
}, 5000);