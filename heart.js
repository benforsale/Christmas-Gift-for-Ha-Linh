// Get all the heart elements
const hearts = document.querySelectorAll('.heart');

// Function to generate random values
function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

// Loop through each heart and apply random values
hearts.forEach((heart, index) => {
  // Random left position (percentage)
  const randomLeft = getRandomValue(0, 100) + '%';
  
  // Random animation duration (between 2s and 4s) for faster movement
  const randomDuration = getRandomValue(3, 6) + 's';
  
  // Random animation delay (between 0s and 1s) for variety
  const randomDelay = getRandomValue(0, 3) + 's';

  // Apply the random values to each heart
  heart.style.left = randomLeft;
  heart.style.animationDuration = randomDuration;
  heart.style.animationDelay = randomDelay;
});
