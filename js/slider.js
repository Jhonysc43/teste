var slider = document.querySelector('.slider');
var sliderWidth = document.querySelector('.slider-container').offsetWidth;
var slideIndex = 0;

function slideNext() {
  if (slideIndex < slider.childElementCount - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  slider.style.transform = 'translateX(-' + (slideIndex * sliderWidth) + 'px)';
}

function slidePrevious() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slider.childElementCount - 1;
  }
  slider.style.transform = 'translateX(-' + (slideIndex * sliderWidth) + 'px)';
}

// Eventos para os botões de próximo e anterior
document.querySelector('.next-button').addEventListener('click', slideNext);
document.querySelector('.previous-button').addEventListener('click', slidePrevious);