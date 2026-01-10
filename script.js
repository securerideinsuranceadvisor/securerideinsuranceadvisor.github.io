// SLIDER
let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4000);

// FORM → WHATSAPP
document.getElementById('leadForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let vehicle = document.getElementById('vehicle').value;
  let expiry = document.getElementById('expiry').value;

  let message = `Hello, I want insurance details.%0A🚗 Vehicle: ${vehicle}%0A📅 Expiry: ${expiry}`;

  window.open(`https://wa.me/917633801161?text=${message}`, '_blank');
});
