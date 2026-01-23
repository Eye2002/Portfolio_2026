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



const trafficContainer = document.getElementById('traffic-container');
    const trafficCard = document.getElementById('traffic-card');

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            trafficContainer.classList.remove('opacity-0', '-translate-y-10', 'pointer-events-none');
            trafficContainer.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
        } else {
            trafficContainer.classList.add('opacity-0', '-translate-y-10', 'pointer-events-none');
            trafficContainer.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
            trafficCard.classList.add('hidden');
        }
    };

    function toggleTrafficCard() {
        trafficCard.classList.toggle('hidden');
    }

    // --- TRACKING LOGIC: Counting Visitors ---
    function initTracker() {
        // 1. Handle Personal Visits (Stored in Browser)
        let visits = localStorage.getItem('visit_count') || 0;
        visits = parseInt(visits) + 1;
        localStorage.setItem('visit_count', visits);
        document.getElementById('local-count').innerText = visits;

        // 2. Generate/Retrieve a Session ID
        let sessionId = sessionStorage.getItem('session_id');
        if (!sessionId) {
            sessionId = 'ID-' + Math.random().toString(36).substr(2, 6).toUpperCase();
            sessionStorage.setItem('session_id', sessionId);
        }
        document.getElementById('visitor-id-display').innerText = sessionId;

        // 3. Simulate "Total Visitors" (Adding a random realistic number)
        let baseTotal = 1284; 
        document.getElementById('total-count').innerText = (baseTotal + visits).toLocaleString();
    }

    // Run tracker when page loads
    window.onload = initTracker;
