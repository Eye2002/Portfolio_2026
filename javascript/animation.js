 
        document.addEventListener("DOMContentLoaded", function() {
            let currentSlide = 0;
            const slider = document.getElementById('slider');
            const dots = document.querySelectorAll('.dot');
            const totalSlides = dots.length; // Use dots length as a reliable count
            let slideInterval;

            function updateSlider() {
                // Apply the transform
                slider.style.transform = `translateX(-${currentSlide * 100}%)`;
                
                // Update dots
                dots.forEach((dot, index) => {
                    if (index === currentSlide) {
                        dot.style.opacity = "1";
                        dot.style.transform = "scale(1.2)";
                    } else {
                        dot.style.opacity = "0.4";
                        dot.style.transform = "scale(1)";
                    }
                });
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            }

            function startTimer() {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 3000);
            }

            // Expose functions to the window so HTML 'onclick' can see them
            window.manualNext = function() {
                nextSlide();
                startTimer();
            }

            window.manualGoTo = function(index, event) {
                if (event) event.stopPropagation();
                currentSlide = index;
                updateSlider();
                startTimer();
            }

            // Start everything
            startTimer();
        });
        