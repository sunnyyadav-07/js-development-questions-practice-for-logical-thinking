/*
  🚀 Question 18:  Create an image slider/carousel.

   
*/
let imageCollection = [
  {
    src: "https://i.pinimg.com/1200x/fb/78/ff/fb78ffa55bf7bedf77f1b957e35b3969.jpg",
  },
  {
    src: "https://i.pinimg.com/736x/ad/8a/61/ad8a614488f985451673d949e4a0e266.jpg",
  },
  {
    src: "https://i.pinimg.com/1200x/9d/38/0f/9d380fb52097ed5dad02ea19440de5dd.jpg",
  },
  {
    src: "https://i.pinimg.com/736x/4f/8c/0f/4f8c0fa9e43ea7e3c913fa6644218372.jpg",
  },
  {
    src: "https://i.pinimg.com/736x/fe/a2/5b/fea25b4271ae3f587c8df6cd140e5fe0.jpg",
  },
];
const leftSlider = document.querySelector(".left-slider");
const rightSlider = document.querySelector(".right-slider");
const imagesArea = document.querySelector(".images");

const allImages = document.querySelectorAll("img");
let imageIndex = 0;
function imageCarousel() {
  // imagesArea.innerHTML = "";
  if (imageIndex < imageCollection.length) {
    imageIndex++;
  }
  // imageCollection[imageIndex].src.style.translate = 100 + "%";
  imagesArea.innerHTML = `  <img
            src=${imageCollection[imageIndex].src}
            alt=""
          />`;
}
rightSlider.addEventListener("click", imageCarousel);
