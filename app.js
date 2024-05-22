// toggle for recent post
function toggleInfo(infoId) {
    const infoElement = document.getElementById(infoId);
    if (infoElement) {
        infoElement.classList.toggle('visible');
    }
}

// horizontal scroll for category menu

document.querySelector('.category-menu').addEventListener('mouseenter', function() {
    this.style.animationPlayState = 'paused';
});

document.querySelector('.category-menu').addEventListener('mouseleave', function() {
    this.style.animationPlayState = 'running';
});
