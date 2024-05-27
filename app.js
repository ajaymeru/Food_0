// hamburger

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}




var img = document.querySelector(".bottom-header");

function fullScreenImg() {
  console.log(img.children[2]);

  img.children[2].style.display = "block";
}
function close() {
  img.children[2].style.display = "none";
}

// fullScreenImg()







// toggle for recent post
function toggleInfo(infoId) {
  const infoElement = document.getElementById(infoId);
  if (infoElement) {
    infoElement.classList.toggle("visible");
  }
}

// horizontal scroll for category menu

// document.querySelector('.category-menu').addEventListener('mouseenter', function() {
//     this.style.animationPlayState = 'paused';
// });

// // document.querySelector('.category-menu').addEventListener('mouseleave', function() {
// //     this.style.animationPlayState = 'running';
// // });

// Horizantally Scrolling Functionallty
var curretPageIndex = 0
function horizantallyScroll(event) {
    const nextPage = document.querySelectorAll(".scrollBy");
    const showPage = (index)=>{
        nextPage.forEach((page,i) =>{
            page.classList.toggle('active', i === index)
        })
    }
    if(event == 'previous' && curretPageIndex > 0){
        curretPageIndex--;
        console.log('curretPageIndexprevious',curretPageIndex)
        showPage(curretPageIndex)
    }else if(event == 'next' && curretPageIndex < nextPage.length-1){
        curretPageIndex++;
        console.log('curretPageIndexNext',curretPageIndex)
        showPage(curretPageIndex)
    } 
    showPage(curretPageIndex)
}
