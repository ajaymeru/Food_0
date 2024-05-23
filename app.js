var img = document.querySelector('.bottom-header')

function fullScreenImg(){
console.log(img.children[2])

        img.children[2].style.display = 'block';

        
}

function close(){
        img.children[2].style.display = 'none';
}

// fullScreenImg()