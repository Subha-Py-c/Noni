function toggleDarkMode() {
  const root = document.documentElement;
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  root.classList.toggle('invert');

  // Toggle visibility of sun and moon icons
  sunIcon.style.display = sunIcon.style.display === "none" ? "inline" : "none";
  moonIcon.style.display = moonIcon.style.display === "none" ? "inline" : "none";
}

const cursor = document.querySelector('.cursor');
if (cursor) {
  document.addEventListener('mousemove', (e) =>{
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
  });
}

// Get the element
var element = document.getElementById('nav');
if (element) {
  var hoverTimeout;

  // Function to apply hover effect
  function applyHoverEffect() {
    element.classList.add('hover-effect');
  }

  // Function to remove hover effect
  function removeHoverEffect() {
    element.classList.remove('hover-effect');
  }

  // Event listener for mouse entering the element
  element.addEventListener('mouseenter', function() {
    // Set a timeout for 1.2s (1200ms)
    hoverTimeout = setTimeout(applyHoverEffect, 1200);
  });

  // Event listener for mouse leaving the element
  element.addEventListener('mouseleave', function() {
    // Clear the timeout if mouse leaves before 1.2s (1200ms)
    clearTimeout(hoverTimeout);
    removeHoverEffect();
  });
}
