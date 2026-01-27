// SLIDER
const slides = document.querySelectorAll('.hero-slider img');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 3500);

// WHATSAPP FORM SUBMISSION
document.getElementById("insuranceForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const vehicle = document.getElementById("vehicleNumber").value;
  const expiry = document.getElementById("policyExpiry").value;

  const message =
    `Hello SecureRide Insurance Advisor,%0A%0A` +
    `Vehicle Number: ${vehicle}%0A` +
    `Policy Expiry: ${expiry}%0A%0A` +
    `Please share the best insurance quote.`;

  const whatsappURL = `https://wa.me/917633801161?text=${message}`;

  window.open(whatsappURL, "_blank");
});
