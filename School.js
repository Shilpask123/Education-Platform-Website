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
    
//--start the why do we stand out--
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentIndex = 0;
  
  // Show the active slide
  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === index);
      });
  }
  
  // Event Listeners for Buttons
  prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
  });
  
  nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  });
  
  // Initialize the first slide as active
  showSlide(currentIndex);  
  //--end why do we standout---

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
  
