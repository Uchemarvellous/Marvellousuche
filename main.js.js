let index = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function nextSlide() {
  index = (index + 1) % totalImages;
  updateCarousel();
}

function updateCarousel() {
  const offset = -index * (images[0].width + 20);  // Width of image + margin
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Optional: Add event listeners for buttons (left and right controls)
// document.querySelector('.prev').addEventListener('click', prevSlide);
// document.querySelector('.next').addEventListener('click', nextSlide);
