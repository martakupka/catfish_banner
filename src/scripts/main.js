'use strict';

const advertisement = document.querySelector('.advertisement');

function closeAdvertisement() {
  const advertisementWidth = parseFloat(
    window.getComputedStyle(advertisement).width
  );

  const closeButton = document.querySelector('.advertisement__button');

  closeButton.addEventListener('click', () => {
    if (Math.ceil(advertisementWidth) === 1024) {
      advertisement.style.transform = 'translate(-50%, 150%)';
    } else {
      advertisement.style.transform = 'translate(0, 150%)';
    }
  });
}

function redirectUser() {
  advertisement.addEventListener('click', (event) => {
    if (event.target.className !== 'advertisement__button') {
      window.location.href = (
        'https://www.advertserve.com/examples/adhesion.html'
      );
    }
  });
}

closeAdvertisement();
redirectUser();
