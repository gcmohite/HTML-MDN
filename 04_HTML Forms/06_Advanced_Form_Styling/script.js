'use strict';

const toggleSwitch = document.querySelector('#toggle');
const switchStatus = document.querySelector('label[for="toggle"]');

toggleSwitch.addEventListener('click', () => {
  toggleSwitch.checked
    ? (switchStatus.textContent = 'ON')
    : (switchStatus.textContent = 'OFF');
});

const slider = document.querySelector('#slider');
const sliderReading = document.querySelector('output');

slider.addEventListener('input', function () {
  // console.log(this);
  sliderReading.textContent = this.value;

  if (this.value > 80) {
    slider.style.backgroundColor = 'rgb(179, 29, 29)';
    thumb.backgroundColor = 'rgb(179, 29, 29)';
  } else if (this.value <= 60) {
    this.style.backgroundColor = 'green';
  } else if (this.value > 60 && this.value <= 80) {
    this.style.backgroundColor = 'darkgoldenrod';
  } else {
    this.style.backgroundColor = 'green';
  }
});
console.log(slider.value);
