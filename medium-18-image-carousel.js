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
const imagesArea = document.querySelector(".image-track");
const imageTracker = document.querySelectorAll(".image-tracker div");

imageCollection.map((img) => {
  imagesArea.innerHTML += `<img src="${img.src}" alt="image" class="slide">`;
});
const slides = document.querySelectorAll(".slide");
let imageIndex = 0;
console.log(imageTracker[imageIndex]);
imageTracker[imageIndex].style.backgroundColor = "rgb(48, 46, 46)";
function rightSlide() {
  if (imageIndex < imageCollection.length - 1) {
    imageIndex++;
    imageTracker[imageIndex - 1].style.backgroundColor = "darkgrey";
    imageTracker[imageIndex].style.backgroundColor = "rgb(48, 46, 46)";
    if (imageIndex === 4) {
      rightSlider.classList.add("visiblity-hid");
    }
    updateSlide();
  }
}
function leftSlide() {
  if (imageIndex === 0) return;
  if (imageIndex <= imageCollection.length) {
    imageIndex--;
    imageTracker[imageIndex].style.backgroundColor = "rgb(48, 46, 46)";
    imageTracker[imageIndex + 1].style.backgroundColor = "darkgrey";
    rightSlider.classList.remove("visiblity-hid");
    updateSlide();
  }
}
rightSlider.addEventListener("click", rightSlide);
leftSlider.addEventListener("click", leftSlide);
function updateSlide() {
  const slideWidht = slides[0].clientWidth;

  imagesArea.style.transform = `translateX(-${imageIndex * slideWidht}px)`;
  console.log(slideWidht);
}
