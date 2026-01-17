const observerOptions = {
    threshold: 0.15 // Triggers when 15% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Un-comment the line below if you only want the animation to happen once
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply the observer to all elements with the 'reveal' class
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));



  console.log("Portfolio Loaded");



  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });