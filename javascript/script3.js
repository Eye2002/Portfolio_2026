// ================= MODAL FUNCTIONS =================

// OPEN MODAL
window.showModal = function (src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  if (!modal || !modalImg) {
    console.warn("Modal not found on this page");
    return;
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  modalImg.src = src;
  document.body.style.overflow = "hidden";
};

// CLOSE MODAL
window.closeModal = function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  if (!modal || !modalImg) {
    console.warn("Modal not found on this page");
    return;
  }

  modal.classList.add("hidden");
  modal.classList.remove("flex");
  modalImg.src = "";
  document.body.style.overflow = "";
};

// CLICK OUTSIDE TO CLOSE (SAFE)
document.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (!modal) return;

  if (e.target === modal) {
    window.closeModal();
  }
});


// scroll animation for anchor links

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.15 // Trigger when 15% of the card is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay for each card to create a "staggered" look
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                }, index * 150); 
                
                // Once it animates in, stop watching this element
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target specifically the cards with the 'cert-card' class
    const cards = document.querySelectorAll('.cert-card');
    cards.forEach((card) => observer.observe(card));
});

// smooth scroll for nav links

document.getElementById('scroll-link1').addEventListener('click', function(e) {
  e.preventDefault(); // Stop the instant jump
  

  const target = document.getElementById('Experiences');
  
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start' // Aligns the section to the top of the screen
  });
});

  document.getElementById('scroll-link').addEventListener('click', function(e) {
  e.preventDefault(); // Stop the instant jump
  
  
  const target = document.getElementById('aboutme');
  
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start' // Aligns the section to the top of the screen
  });
});

// scroll to top button with water fill animation
const scrollBtn = document.getElementById('scrollBtn');
const waterLevel = document.getElementById('waterLevel');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (scrollTop > 200) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.pointerEvents = 'all';
    } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.pointerEvents = 'none';
    }

    waterLevel.style.height = scrollPercent + '%';
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

