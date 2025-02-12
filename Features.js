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

    const features = [
        {
            icon: {
                name: 'video',
                color: 'text-orange-500'
            },
            title: "Interactive Workshops",
            description: "Our workshops are designed to be interactive and practical, providing you with real-world skills that you can apply immediately. Led by industry experts, each workshop is structured to maximize your learning experience."
        },
        {
            icon: {
                name: 'users',
                color: 'text-orange-500'
            },
            title: "Community & Collaboration",
            description: "Join our vibrant community where you can connect with like-minded learners, share ideas, and collaborate on exciting projects. Learn together, grow together."
        },
        {
            icon: {
                name: 'gamepad',
                color: 'text-orange-500'
            },
            title: "Gamified Learning",
            description: "Our gamified learning system makes education fun and engaging. With achievements, challenges, and rewards, you'll stay motivated throughout your learning journey."
        },
        {
            icon: {
                name: 'book-open',
                color: 'text-orange-500'
            },
            title: "Comprehensive Curriculum",
            description: "Access a wide range of courses covering various topics. Our curriculum is designed to provide you with a well-rounded education in your chosen field."
        },
        {
            icon: {
                name: 'award',
                color: 'text-orange-500'
            },
            title: "Certifications",
            description: "Earn industry-recognized certifications upon completion of your courses. Boost your resume and showcase your skills to potential employers."
        },
        {
            icon: {
                name: 'zap',
                color: 'text-orange-500'
            },
            title: "Personalized Learning Paths",
            description: "Our AI-powered system creates personalized learning paths based on your goals, skills, and progress. Get a tailored education experience that meets your unique needs."
        }
    ];

        // Create SVG icons dynamically
        function createIcon(name, color) {
            const icons = {
                'video': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 sm:w-8 sm:h-8 ${color}"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`,
                'users': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 sm:w-8 sm:h-8 ${color}"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
                'gamepad': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 sm:w-8 sm:h-8 ${color}"><line x1="6" y1="11" x2="6" y2="16"></line><line x1="10" y1="11" x2="10" y2="16"></line><line x1="14" y1="11" x2="14" y2="16"></line><line x1="18" y1="11" x2="18" y2="16"></line><path d="M2 16a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z"></path><path d="M6 12V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"></path></svg>`,
                'book-open': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 sm:w-8 sm:h-8 ${color}"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                'award': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 sm:w-8 sm:h-8 ${color}"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
                'zap': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 sm:w-8 sm:h-8 ${color}"><polygon points="13 2 3 14 12 14 11 22 21 10"></polygon></svg>`
            };
            return icons[name] || '';
        }

        // Render features
        function renderFeatures() {
            const featuresGrid = document.getElementById('features-grid');
            featuresGrid.innerHTML = features.map((feature, index) => `
                <div class="feature-card bg-white rounded-lg shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div class="p-6">
                        <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 feature-icon">
                            ${createIcon(feature.icon.name, feature.icon.color)}
                        </div>
                        <h3 class="text-lg sm:text-xl font-bold mb-3">${feature.title}</h3>
                        <p class="text-sm sm:text-base text-gray-600">${feature.description}</p>
                    </div>
                </div>
            `).join('');

            // Optional: Add staggered animation
            const featureCards = document.querySelectorAll('.feature-card');
            featureCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.transition = 'all 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }

        // Render on page load
        renderFeatures();

        //testimonial
        const testimonials = [
            {
                id: 1,
                content: "LearnHyve has transformed the way I approach online learning. The interactive workshops and community features make it stand out from other platforms.",
                author: "Sarah Johnson",
                role: "Software Developer",
                avatar: "https://via.placeholder.com/48"
            },
            {
                id: 2,
                content: "The gamified learning system keeps me motivated and engaged. I've learned more in the past month than I have in years!",
                author: "Michael Chen",
                role: "Data Scientist",
                avatar: "https://via.placeholder.com/48"
            },
            {
                id: 3,
                content: "As an instructor, I'm impressed by the tools and support LearnHyve provides. It's a joy to teach on this platform.",
                author: "Emily Rodriguez",
                role: "UX Design Instructor",
                avatar: "https://via.placeholder.com/48"
            }
        ];

        let currentIndex = 0;

        // DOM elements
        const testimonialText = document.getElementById('testimonial-text');
        const testimonialAvatar = document.getElementById('testimonial-avatar');
        const testimonialAuthor = document.getElementById('testimonial-author');
        const testimonialRole = document.getElementById('testimonial-role');
        const prevButton = document.getElementById('prev-testimonial');
        const nextButton = document.getElementById('next-testimonial');
        const testimonialContent = document.getElementById('testimonial-content');

        function updateTestimonial(index) {
            const testimonial = testimonials[index];

            // Add exit animation
            testimonialContent.classList.add('testimonial-exit');
            testimonialContent.classList.add('testimonial-exit-active');

            // Update content after a short delay to allow exit animation
            setTimeout(() => {
                testimonialText.textContent = testimonial.content;
                testimonialAvatar.src = testimonial.avatar;
                testimonialAvatar.alt = testimonial.author;
                testimonialAuthor.textContent = testimonial.author;
                testimonialRole.textContent = testimonial.role;

                // Remove exit animations and add enter animations
                testimonialContent.classList.remove('testimonial-exit');
                testimonialContent.classList.remove('testimonial-exit-active');
                testimonialContent.classList.add('testimonial-enter');
                testimonialContent.classList.add('testimonial-enter-active');

                // Remove enter animations after transition
                setTimeout(() => {
                    testimonialContent.classList.remove('testimonial-enter');
                    testimonialContent.classList.remove('testimonial-enter-active');
                }, 500);
            }, 500);
        }

        function nextTestimonial() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateTestimonial(currentIndex);
        }

        function prevTestimonial() {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            updateTestimonial(currentIndex);
        }

        // Initial load
        updateTestimonial(currentIndex);

        // Event listeners
        nextButton.addEventListener('click', nextTestimonial);
        prevButton.addEventListener('click', prevTestimonial);

        //footer
        document.addEventListener("DOMContentLoaded", () => {
            const yearSpan = document.getElementById("year");
            const currentYear = new Date().getFullYear();
            yearSpan.textContent = currentYear;
        });

