let currentSlideIndex = 0;

function setActiveDot() {
  let dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentSlideIndex) {
      dot.classList.add('active');
    }
  });
}

function moveSlide(index) {
  currentSlideIndex = index;
  let slideWidth = document.querySelector('.slide').offsetWidth + 18; // Add margin-left
  let moveAmount = index * slideWidth;
  document.querySelector('.slides').style.transform = `translateX(-${moveAmount}px)`;
  setActiveDot();
}

// Initialize slider
setActiveDot();
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModal');
  const closeModalBtn = document.querySelector('.close');

  openModalBtn.onclick = () => {
    modal.style.display = 'block';
  };

  closeModalBtn.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});
// Відкриття модального вікна
const openModalButtons = document.querySelectorAll('.chocolet__cards--box--button');
const modal = document.getElementById('modal');
const closeModalButton = modal.querySelector('.close');
const submitButton = modal.querySelector('.submit');
const modal2 = document.getElementById('modal02');
const closeModalButton2 = modal2.querySelector('.close');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

// Закриття модального вікна
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Відкриття другого модального вікна
submitButton.addEventListener('click', event => {
  event.preventDefault();
  modal.style.display = 'none';
  modal2.style.display = 'block';
});

// Закриття другого модального вікна
closeModalButton2.addEventListener('click', () => {
  modal2.style.display = 'none';
});

// Закриття модальних вікон при кліку поза вікном
window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  } else if (event.target === modal2) {
    modal2.style.display = 'none';
  }
});