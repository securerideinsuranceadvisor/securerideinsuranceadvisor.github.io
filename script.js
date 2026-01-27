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

  const vehicle = document.getElementById("vehicle").value;
  const mobile = document.getElementById("mobile").value;

  const message =
    `Hello, I need vehicle insurance assistance.\n\n` +
    `Vehicle Number: ${vehicle}\n` +
    `Mobile: ${mobile}`;

  const url = `https://wa.me/917633801161?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
