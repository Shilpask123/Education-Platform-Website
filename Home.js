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
