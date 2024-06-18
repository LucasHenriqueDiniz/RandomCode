// overlay element
var overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.width = '500px';
overlay.style.height = '500px';

// Add the background image
overlay.style.backgroundImage = "url('https://cdn1.i-scmp.com/sites/default/files/styles/1320w/public/2018/10/23/31ut76paolg01_1.png?itok=3hUXkCaT')";
overlay.style.backgroundRepeat = 'no-repeat';
overlay.style.backgroundSize = 'contain';
document.body.appendChild(overlay);

// Function to update the position of the overlay based on the mouse cursor
function updateOverlayPosition(event) {
  var overlayRect = overlay.getBoundingClientRect();
  if (
    event.clientX < overlayRect.left ||
    event.clientX > overlayRect.right ||
    event.clientY < overlayRect.top ||
    event.clientY > overlayRect.bottom
  ) {
    overlay.style.left = (event.clientX - 75) + 'px'; // Adjusting the position to center the overlay on the cursor
    overlay.style.top = (event.clientY - 75) + 'px';
  }
}

// Function to handle the click event within the overlay
function handleOverlayClick(event) {
  var overlayRect = overlay.getBoundingClientRect();
  var overlayHeight = overlayRect.bottom - overlayRect.top;
  var clickY = event.clientY - overlayRect.top;

  if (overlayHeight) {
    if (clickY > overlayHeight/2) {
      alert("You did the right thing by saving her. Congratulations!");
    } else {
      alert("How dare you torture her?");
    }
  }
}

// Add the event listeners to track mouse movement and handle clicks
document.addEventListener('mousemove', updateOverlayPosition);
overlay.addEventListener('click', handleOverlayClick);

overlay.style.animation = 'pulsate 1s ease-in-out infinite';

// Define the pulsating animation keyframes
var pulsateKeyframes = `@keyframes pulsate {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}`;

var style = document.createElement('style');
style.innerHTML = pulsateKeyframes;
document.head.appendChild(style);
