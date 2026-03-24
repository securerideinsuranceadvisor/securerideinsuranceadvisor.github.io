window.onload = function () {
  const slides = document.querySelectorAll('.slide');
  let index = 0;

  if (slides.length === 0) {
    console.log("❌ No slides found - check image path");
    return;
  }

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4000);
};

// WhatsApp
function sendToWhatsApp(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const vehicle = document.getElementById("vehicle").value;
  const mobile = document.getElementById("mobile").value;

  const message =
    `Hello, I need insurance\nName: ${name}\nVehicle: ${vehicle}\nMobile: ${mobile}`;

  window.open(`https://wa.me/917633801161?text=${encodeURIComponent(message)}`);
}
