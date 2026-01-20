document.addEventListener("DOMContentLoaded", function() {
    // Select all containers that hold a slider
    const containers = document.querySelectorAll('.flex.flex-col.lg\\:flex-row-reverse, .flex.flex-col.lg\\:flex-row');

    containers.forEach((container) => {
        const slider = container.querySelector('[id^="slider"]');
        const dots = container.querySelectorAll('.dot');
        
        // If this specific section doesn't have a slider, skip it
        if (!slider || dots.length === 0) return;

        let currentSlide = 0;
        const totalSlides = dots.length;
        let slideInterval;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
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

        // Attach local functions to the images/container
        // We use click listeners instead of inline onclick to keep sections separate
        container.querySelector('.relative.overflow-hidden').addEventListener('click', () => {
            nextSlide();
            startTimer();
        });

        const thumbnails = container.querySelectorAll('.sm\\:grid img');
        thumbnails.forEach((thumb, idx) => {
            thumb.addEventListener('click', (e) => {
                e.stopPropagation();
                currentSlide = idx;
                updateSlider();
                startTimer();
            });
        });

        startTimer();
    });
});
