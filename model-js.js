<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fixed Element with Changing Top</title>
<style>
  #fixed-element {
    position: fixed;
    top: 50px; /* Initial top position */
    left: 50%;
    transform: translateX(-50%);
    background-color: #f00;
    color: #fff;
    padding: 10px;
    transition: top 0.3s ease; /* Smooth transition for top property */
  }
</style>
</head>
<body>

<div id="fixed-element">Fixed Element</div>

<script>
window.addEventListener('scroll', function() {
  var element = document.getElementById('fixed-element');
  var scrollPosition = window.scrollY;

  // Calculate new top position based on scroll position
  var newTop = 50 + scrollPosition; // Adjust this value as needed

  // Update the top position of the fixed element
  element.style.top = newTop + 'px';
});
</script>

<!-- Placeholder content to create scrolling -->
<div style="height: 2000px;">Scroll down to see the effect</div>

</body>
</html>
