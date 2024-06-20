function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    const colors = [
        'rgb(255, 0, 0)',
        'rgb(230, 179, 225)',
        'rgb(214, 111, 175)',
        'rgb(232, 42, 121)',
        'rgb(207, 66, 92)',
        'rgb(247, 25, 166)'
    ];
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.setProperty('--color', color);

    const rotation = Math.random() * 360 + 'deg';
    heart.style.transform = `rotate(${rotation})`;

    const scale = Math.random() * 2 + 1;
    heart.style.transform += ` scale(${scale})`;

    document.getElementById('heart-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setTimeout(() => {    
    const isMobile = window.innerWidth <= 768;
    const heartCreationInterval = isMobile ? 150 : 50;
    
    setInterval(createHeart, heartCreationInterval);
}, 5000);