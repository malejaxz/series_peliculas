let currentIndex = 0;

function moveSlide(direction) {
    const platforms = document.querySelectorAll('.platform');
    currentIndex = (currentIndex + direction + platforms.length) % platforms.length;

    platforms.forEach((platform, index) => {
        const angle = 72 * (index - currentIndex); // 360 / 5 = 72
        platform.style.transform = `rotate(${angle}deg) translate(120px) rotate(${-angle}deg)`;
    });
}
