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

  document.getElementById('scroll-link3').addEventListener('click', function(e) {
  e.preventDefault(); // Stop the instant jump
  
  
  const target = document.getElementById('apoint');
  
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start' // Aligns the section to the top of the screen
  });
});

  document.getElementById('scroll-link4').addEventListener('click', function(e) {
  e.preventDefault(); // Stop the instant jump
  
  
  const target = document.getElementById('GraphicDs');
  
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


// ================= END OF MODAL FUNCTIONS =================


// ================= category =================
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio-item");
  var btns = document.getElementsByClassName("btn");
  
  // 1. Update button active state immediately
  for (i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  }
  if (event) {
    event.currentTarget.classList.add("active");
  }

  // 2. Handle the animation logic
  if (c == "all") c = "";
  
  for (i = 0; i < x.length; i++) {
    // Start by shrinking and fading everything out
    x[i].classList.add("scale-95", "opacity-0");
    x[i].classList.remove("scale-100", "opacity-100");
    
    // Check if the item matches the category
    if (x[i].className.indexOf(c) > -1) {
      // Show the item
      x[i].classList.remove("hidden");
      // Use a tiny delay so the "fade in" animation triggers
      setTimeout((function(el) {
        return function() {
          el.classList.add("scale-100", "opacity-100");
          el.classList.remove("scale-95", "opacity-0");
        };
      })(x[i]), 10);
    } else {
      // Hide the item after the fade-out finishes (300ms)
      setTimeout((function(el) {
        return function() {
          if (el.classList.contains("opacity-0")) {
            el.classList.add("hidden");
          }
        };
      })(x[i]), 300);
    }
  }
}


function showMoreItems() {
  // Select all items that still have the 'hidden' class
  const hiddenItems = document.querySelectorAll('.hidden-item.hidden');
  
  // Define how many to show per click
  const itemsToShow = 4;
  
  for (let i = 0; i < itemsToShow && i < hiddenItems.length; i++) {
    // Remove the Tailwind 'hidden' class
    hiddenItems[i].classList.remove('hidden');
    
    // Smooth fade-in effect
    hiddenItems[i].style.opacity = "0";
    hiddenItems[i].style.transition = "opacity 0.5s ease";
    setTimeout(() => {
        hiddenItems[i].style.opacity = "1";
    }, 50 * i);
  }

  // Check again: if no more hidden items exist, remove the button
  if (document.querySelectorAll('.hidden-item.hidden').length === 0) {
    document.getElementById('show-more-btn').style.display = 'none';
  }
}


// ================ behance model - image show =================
function openModal(imgSrc, title, categories, tools) {
    try {
        console.log("Attempting to open modal for:", title);
        
        const modal = document.getElementById('behanceModal');
        const modalImg = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalCategory = document.getElementById('modalCategory');
        const toolsContainer = document.getElementById('modalTools');

        // 1. Set Image
        modalImg.src = imgSrc;
        
        // 2. Set Title
        modalTitle.innerText = title || "Project Details";
        
        // 3. Set Category
        modalCategory.innerText = categories || "General";
        
        // 4. Set Tools (Clears old ones and adds new ones)
        toolsContainer.innerHTML = ''; 
        if (tools) {
            const toolsArray = tools.split(',');
            toolsArray.forEach(tool => {
                const span = document.createElement('span');
                span.className = "text-[11px] bg-gray-100 px-3 py-1 rounded text-gray-600 font-bold uppercase";
                span.innerText = tool.trim();
                toolsContainer.appendChild(span);
            });
        }

        // 5. Show Modal
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
    } catch (error) {
        console.error("Modal Error:", error);
    }
}

function Xmodal() {
    const modal = document.getElementById('behanceModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}
