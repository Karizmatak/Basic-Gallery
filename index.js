let images = document.querySelectorAll(".gallery-container img");
let index = 0;

function updateGallery(){
  images.forEach((img, i) => {
    let focus = (i - index) * 110;
    if(i === index){
    img.style.transform = `translateX(${focus}px) scale(1.4)`;
    img.style.zIndex = '2';
    }
    else{
    img.style.transform = `translateX(${focus}px) scale(1)`;
    img.style.zIndex = '1';
    }
  });
}

function left(){
  if(index > 0){
    index--;
    updateGallery();
  }
}

function right(){
  if(index < images.length - 1){
    index++;
    updateGallery();
  }
}

images.forEach(img => img.style.transition = "all .5s ease-in-out")
updateGallery();