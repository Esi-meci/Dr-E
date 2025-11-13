document.addEventListener('DOMContentLoaded', () => {
      const items = Array.from(document.querySelectorAll('.faq-item'));

      function closeItem(item) {
        const btn = item.querySelector('.faq-button');
        const ans = item.querySelector('.answer');
        item.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-expanded', 'false');
        
        // Before collapsing (maxHeight: 0), remove the vertical padding
        // This ensures the content collapses fully without the padding lingering
        ans.style.paddingTop = 0;
        ans.style.paddingBottom = 0;
        
        // Collapse after padding is removed (which might take a frame)
        // A simple fix for immediate effect is to use a slight timeout, but
        // for most modern browsers, setting to null/0 immediately works fine
        // as the transition is defined on max-height.
        ans.style.maxHeight = '0'; // Use '0' instead of null for consistency
      }

      function openItem(item) {
        const btn = item.querySelector('.faq-button');
        const ans = item.querySelector('.answer');
        item.setAttribute('aria-expanded', 'true');
        btn.setAttribute('aria-expanded', 'true');
        
        // Step 1: Apply vertical padding immediately
        ans.style.paddingTop = '12px';
        ans.style.paddingBottom = '18px';
        
        // Step 2: Set maxHeight to the new scrollHeight
        // Using requestAnimationFrame or a setTimeout of 0 ensures the browser 
        // recalculates the height *after* the padding is applied.
        requestAnimationFrame(() => {
             // We use scrollHeight to get the full height of the content + padding
             ans.style.maxHeight = ans.scrollHeight + 'px';
        });
      }

      items.forEach(item => {
        const btn = item.querySelector('.faq-button');
        btn.addEventListener('click', () => {
          const isOpen = item.getAttribute('aria-expanded') === 'true';

          // close all others
          items.forEach(i => {
            if (i !== item) closeItem(i);
          });

          // toggle clicked item
          if (isOpen) {
            closeItem(item);
          } else {
            openItem(item);
          }
        });

        // Optional: close on ESC when focused inside answer region
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') closeItem(item);
        });
      });

      // Optional: start with first item open — comment this out if you want all closed initially
      // openItem(items[0]);
    });

    

function toggle_theme() {
  const toggleButton = document.querySelector(".theme");
  // alert('clicked')
  document.body.classList.toggle("dark-theme");
}

const openBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("bookingModal");
const closeBtn = document.getElementById("closeModalBtn");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// window.onload = function () {
// const bookBtn = document.getElementById("bookBtn");

// bookBtn.addEventListener("click", function () {
//   if (window.Calendly) {
//     Calendly.initPopupWidget({
//       url: "https://calendly.com/cherrychiro8",

//     });
//     console.log("calendly is here");
//   } else {
//     console.error("Calendly script not loaded yet.");
//   }
//   return false;
// });

//  window.onload = function() {
//     Calendly.initBadgeWidget({
//       url: 'https://calendly.com/cherrychiro8',
//       text: 'Schedule time with me',
//       color: '#00a2ff',
//       textColor: '#ffffff',
//       branding: true
//     });
//  }


// FAQ

// const box = document.querySelector('.answers');
// const question = document.querySelector('.faq-buttons')
// // console.log(question)

// const boxs = document.querySelector(".faq-items")
// boxs.addEventListener('click', () => {
//   console.log(question.innerHTML)
// })

// question.addEventListener('click', () => {
//   alert(question.textContent)
//   // Toggles the 'active' class: adds it if missing, removes it if present.
//   box.classList.toggle('active');
// });

