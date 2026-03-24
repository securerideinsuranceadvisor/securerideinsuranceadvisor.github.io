// Slider
let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4000);

// WhatsApp Form
function sendToWhatsApp(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const vehicle = document.getElementById("vehicle").value;
  const mobile = document.getElementById("mobile").value;

  const message =
    `Hello, I need vehicle insurance assistance.\n\n` +
    `Name: ${name}\nVehicle: ${vehicle}\nMobile: ${mobile}`;

  window.open(`https://wa.me/917633801161?text=${encodeURIComponent(message)}`);
}
