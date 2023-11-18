// Variables for elements needed from the DOM
const menuBtn = document.getElementById('menu-icon');
const closeBtn = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');
const formInput = document.querySelector('.form-input');
const formBtn = document.querySelector('.form-btn');
const formErrorMsg = document.querySelector('.form-error__msg');
const modalEmail = document.querySelector('.modalEmail');
const modalBtn = document.querySelector('.modalBtn');
const thankModal = document.querySelector('.thankModal');

// Slider Function using Swiper JS
const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  centeredSlides: false,
  spaceBetween: 10,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: false,
  },

  pagination: {
    el: '.swiper-pagination',
  },

  // Enabled autoplay mode
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
  // Responsive breakpoints
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: false,
      loop: true,
    },
    601: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
      loop: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
      loop: true,
    },
  },
});

// EventListeners for opening and closing mobile menu with navigation icon btn's
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('mobile-menu__active');
  menuBtn.classList.add('hidden');
  closeBtn.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.body.style.background = 'rgba(0, 0, 0, .1)';
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-menu__active');
  closeBtn.classList.add('hidden');
  menuBtn.classList.remove('hidden');
  document.body.style.overflow = 'visible';
  document.body.style.backgroundColor = '#ffffff';
});

// Email Validation function
function emailValidation(email) {
  return /\S+@\S+.\S+/.test(email);
}

// Adding and removing email Form errors on screen
let removeErrors = () => {
  formInput.classList.remove('input-error__border');
  formErrorMsg.classList.add('hidden');
};

let addErrors = () => {
  formInput.classList.add('input-error__border');
  formErrorMsg.classList.remove('hidden');
};

// Displaying and closing confirmation modal after user enters email
let showModal = () => {
  thankModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

let closeModal = () => {
  thankModal.classList.add('hidden');
  document.body.style.overflow = 'visible';
};

// EventListener for closing modal with modal button
modalBtn.addEventListener('click', () => {
  closeModal();
  document.body.style.overflow = 'visible';
  formInput.value = '';
});

// Clearing errors when user clicks back into input to try email again
formInput.addEventListener('click', () => {
  removeErrors();
});

// EventListener for Form submit button checks if email is valid if valid goes through and shows confirmation modal if incorrect email adds error messages to screen
formBtn.addEventListener('click', () => {
  if (emailValidation(formInput.value)) {
    modalEmail.innerText = formInput.value;
    showModal();
    event.preventDefault();
  } else {
    addErrors();
    event.preventDefault();
  }
});
