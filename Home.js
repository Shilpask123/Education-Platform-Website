//---start Main_Navbar---
   // Mobile Menu Toggle
   const mobileMenuButton = document.querySelector('.mobile-menu-button');
   const body = document.body;
  
   mobileMenuButton.addEventListener('click', () => {
       body.classList.toggle('mobile-menu-open');
       // Prevent body scroll when menu is open
       body.style.overflow = body.classList.contains('mobile-menu-open') ? 'hidden' : '';
   });
  
   // Close mobile menu when clicking outside
   document.addEventListener('click', (e) => {
       if (body.classList.contains('mobile-menu-open') && 
           !e.target.closest('.mobile-nav') && 
           !e.target.closest('.mobile-menu-button')) {
           body.classList.remove('mobile-menu-open');
           body.style.overflow = '';
       }
   });
  
   // Enhanced Header Scroll Behavior
   const header = document.querySelector('.site-header');
   const scrollProgress = document.querySelector('.scroll-progress');
   let lastScroll = 0;
   let headerVisible = true;
  
   window.addEventListener('scroll', () => {
       const currentScroll = window.pageYOffset;
       const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
       
       // Update scroll progress bar
       const scrollPercentage = (currentScroll / maxScroll) * 100;
       scrollProgress.style.transform = `scaleX(${scrollPercentage / 100})`;
  
       // Header show/hide logic with threshold
       if (currentScroll > lastScroll && currentScroll > 100 && headerVisible) {
           header.style.transform = 'translateY(-100%)';
           headerVisible = false;
       } else if (currentScroll < lastScroll && !headerVisible) {
           header.style.transform = 'translateY(0)';
           headerVisible = true;
       }
  
       lastScroll = currentScroll;
   });
  
   // Smooth scrolling for navigation links with offset
   document.querySelectorAll('.nav-link').forEach(link => {
       link.addEventListener('click', (e) => {
           if (link.getAttribute('href').startsWith('#')) {
               e.preventDefault();
               const targetId = link.getAttribute('href').slice(1);
               const targetElement = document.getElementById(targetId);
               if (targetElement) {
                   const headerHeight = document.querySelector('.site-header').offsetHeight;
                   const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                   
                   window.scrollTo({
                       top: targetPosition - headerHeight,
                       behavior: 'smooth'
                   });
  
                   // Close mobile menu if open
                   body.classList.remove('mobile-menu-open');
                   body.style.overflow = '';
               }
           }
       });
   });
  
   // Button click animation
   document.querySelectorAll('.button').forEach(button => {
       button.addEventListener('click', function() {
           this.style.transform = 'scale(0.95)';
           setTimeout(() => {
               this.style.transform = '';
           }, 100);
           
           const action = this.textContent.trim();
           console.log(`Button clicked: ${action}`);
       });
   });
  
   // Add active state to current page link
   const currentPath = window.location.pathname;
   document.querySelectorAll('.nav-link').forEach(link => {
       if (link.getAttribute('href') === currentPath) {
           link.style.color = 'var(--primary-color)';
       }
   });
   document.querySelectorAll('.button').forEach(button => {
       button.addEventListener('click', function() {
           const action = this.textContent.trim();
           console.log(`Button clicked: ${action}`);
           // Add your button click handling logic here
       });
   });
   const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.classList.add('animate-lines');
               observer.unobserve(entry.target); // Only animate once
           }
       });
   }, {
       threshold: 0.1
   });
  //--end Main_bar---
  

//--start landscape Header Part--
// //--end of landscape--

//---start search for skills---
const searchBar = document.getElementById("search-bar");
        const searchButton = document.getElementById("search-button");
        const dropdownOptions = document.getElementById("dropdown-options");
        const options = dropdownOptions.querySelectorAll("li");

        // Show dropdown and filter options as user types
        searchBar.addEventListener("input", () => {
            const searchTerm = searchBar.value.toLowerCase().trim();

            // Show dropdown only if there is input
            if (searchTerm) {
                dropdownOptions.classList.remove("hidden");
                let hasVisibleOptions = false;

                options.forEach(option => {
                    if (option.textContent.toLowerCase().includes(searchTerm)) {
                        option.style.display = "block"; // Show matching options
                        hasVisibleOptions = true;
                    } else {
                        option.style.display = "none"; // Hide non-matching options
                    }
                });

                // If no options match, hide the dropdown
                if (!hasVisibleOptions) {
                    dropdownOptions.classList.add("hidden");
                }
            } else {
                dropdownOptions.classList.add("hidden"); // Hide dropdown if input is cleared
            }
        });

        // Show dropdown when search bar is focused
        searchBar.addEventListener("focus", () => {
            dropdownOptions.classList.remove("hidden");
        });

        // Hide dropdown when clicking outside the search bar or dropdown
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".search-container")) {
                dropdownOptions.classList.add("hidden");
            }
        });

        // Dropdown option click to populate search bar, no navigation
        dropdownOptions.addEventListener("click", (e) => {
            if (e.target.tagName === "LI") {
                searchBar.value = e.target.textContent; // Update search bar value
                dropdownOptions.classList.add("hidden"); // Hide dropdown
            }
        });

        // Button click to navigate
        searchButton.addEventListener("click", () => {
            const searchTerm = searchBar.value.toLowerCase().trim().replace(/\s+/g, '-');
            if (searchTerm) {
                window.location.href = `school.html#${searchTerm}`;
            } else {
                alert("Please enter a skill name.");
            }
        });
//end of search for skills


//----courses info-----
// Add a simple animation when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
      setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
      }, index * 200);
  });
});
//----end course info---


        //---start of Essential Life and Soft skills--
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
 //---end of Essential Life and Soft skills--

//--start footer section--
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});
//--end footer section--
