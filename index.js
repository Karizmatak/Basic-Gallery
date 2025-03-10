let images = document.querySelectorAll(".gallery-container img");
let galleryContainer = document.querySelector(".gallery-container");
let index = 0; 

function updateGallery() {
    let imgWidth = images[0].clientWidth;
    
    images.forEach((img, i) => {
        let offset = (i - index) * (imgWidth + 80);

        if (i === index) {
            img.style.transform = `translateX(${offset}px) scale(1.3)`; 
            img.style.zIndex = "2"; 
        } else {
            img.style.transform = `translateX(${offset}px) scale(1)`; 
            img.style.zIndex = "1";
        }
    });
  }

function left(){
  if(index > 0){
    index--;
  }
  else{
    index = images.length - 1;
  }
  updateGallery();
}

function right(){
  if(index < images.length - 1){
    index++;
  }
  else{
    index = 0;
  }
  updateGallery();
}

images.forEach(img => img.style.transition = "all .5s ease-in-out")
updateGallery();