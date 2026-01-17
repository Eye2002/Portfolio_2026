//  Theme Toggle
 const toggle = document.getElementById("themeToggle");
    const html = document.documentElement;

    toggle.addEventListener("click", () => {
      html.classList.toggle("dark");

      if (html.classList.contains("dark")) {
        toggle.textContent = "Light";
      } else {
        toggle.textContent = "Dark";
      }
    });



    // animation Text 
const textArray = [
  "Graphic Designer",
  "Programmer",
  "UI/UX Designer"
];

const typingText = document.getElementById("typingText");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = textArray[textIndex];

  if (!isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, 1200);
    }
  } else {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();


// burger menu
const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const burgerIcon = document.getElementById('burgerIcon');
  const closeIcon = document.getElementById('closeIcon');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    burgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

// animation style


module.exports = {
  darkMode: 'media', // or 'class'
  // ... rest of config
}