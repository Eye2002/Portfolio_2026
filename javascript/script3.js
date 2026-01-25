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

// 1. Settings
let itemsToShow = 4; // How many to show initially
let currentLimit = itemsToShow;
let activeCategory = 'all';

function updateGallery() { 
  // 1. Show/Hide Items Based on Category and Limit
  const items = document.querySelectorAll('.portfolio-item');
  let visibleInCat = 0;

  items.forEach(item => {
    const match = activeCategory === 'all' || item.classList.contains(activeCategory);
    
    if (match) {
      visibleInCat++;
      // Only show if within the current "Show More" limit
      if (visibleInCat <= currentLimit) {
        item.classList.remove('hidden');
        item.style.display = 'block'; 
      } else {
        item.classList.add('hidden');
        item.style.display = 'none';
      }
    } else {
      // Hide if it doesn't match the category
      item.classList.add('hidden');
      item.style.display = 'none';
    }
  });

  // 2. Handle the "Show More" button visibility
  const totalInCat = Array.from(items).filter(i => 
    activeCategory === 'all' || i.classList.contains(activeCategory)
  ).length;

  const showMoreBtn = document.getElementById('show-more-btn');
  if (currentLimit >= totalInCat) {
    showMoreBtn.style.setProperty('display', 'none', 'important');
  } else {
    showMoreBtn.style.setProperty('display', 'block', 'important');
  }
}

// 3. Trigger Functions (Called by your HTML onclick)
window.filterSelection = function(category) {
  activeCategory = category;
  currentLimit = itemsToShow; // Reset count to 4 when switching categories
  updateGallery();
  
  // Optional: Update button UI to show which is active
  document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');
};

window.showMoreItems = function() {
  currentLimit += 4; // Add 4 more
  updateGallery();
};

// 4. Run on startup
document.addEventListener('DOMContentLoaded', updateGallery);


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
