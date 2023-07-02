'use strict';

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
});

const shippingCheckbox = document.querySelector('#billing-checkbox');
const billingWidgets = document.querySelectorAll('#billing input[type="text"]');
const shippingWidgets = document.querySelectorAll(
  '#shipping input[type="text"]'
);
const billingLabels = document.querySelectorAll('#billing .billing-label');

function toggleBilling() {
  if (!this.checked) {
    billingWidgets.forEach((widget) => widget.removeAttribute('disabled'));
    billingLabels.forEach((label) => label.classList.remove('disabled-label'));
  } else {
    billingWidgets.forEach((widget) => {
      widget.value = '';
      widget.setAttribute('disabled', '');
    });
    billingLabels.forEach((label) => label.classList.add('disabled-label'));
  }
}

shippingCheckbox.addEventListener('change', toggleBilling);
