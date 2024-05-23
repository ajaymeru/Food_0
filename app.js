
var img = document.querySelector('.bottom-header')

function fullScreenImg(){
console.log(img.children[2])

        img.children[2].style.display = 'block';

        
}

function close(){
        img.children[2].style.display = 'none';
}

// fullScreenImg()
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
