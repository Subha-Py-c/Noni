function toggleDarkMode() {
  const root = document.documentElement;
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  root.classList.toggle('invert');

  // Toggle visibility of sun and moon icons
  sunIcon.style.display = sunIcon.style.display === "none" ? "inline" : "none";
  moonIcon.style.display = moonIcon.style.display === "none" ? "inline" : "none";
}

// const cursor = document.querySelector('.cursor');
// if (cursor) {
//   document.addEventListener('mousemove', (e) =>{
//       cursor.style.left = e.pageX + 'px';
//       cursor.style.top = e.pageY + 'px';
//   });
// }

// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  var element = document.getElementById('b2');
  if (isInViewport(element)) {
    // If element is in the viewport, add a class to trigger the animation
    element.classList.add('animate');
    // Remove the scroll event listener once the animation is triggered
    window.removeEventListener('scroll', handleScroll);
  }
}

// Add scroll event listener to trigger animation when element is in viewport
window.addEventListener('scroll', handleScroll);

