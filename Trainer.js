//---start Main_Navbar---
const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

        // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-container')) {
        navLinks.classList.remove('active');
      }
  });
//--end Main_bar---

//--start 3 slides of benefits script---
const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');
let index = 0;

function moveSlider(newIndex) {
    index = newIndex !== undefined ? newIndex : (index + 1) % dots.length;
    slider.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => moveSlider(i));
});

setInterval(() => moveSlider(), 4000);
//--end of 3 slides of benefits script--


//------start send message--
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Display the success message
  document.getElementById("success-message").style.display = "block";

  // Clear the form fields but keep the form visible
  document.getElementById("contact-form").reset();
}
//------end of send message--


//--start footer section--
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  });
  //--end footer section--
