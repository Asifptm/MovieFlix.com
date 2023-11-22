
const text = "Web Developer";
const typingElement = document.getElementById("typing-effect");
let index = 0;
let direction = 1;

function updateText() {
  const currentText = text.substring(0, index);
  typingElement.textContent = currentText;

  if (index === text.length) {
    direction = -1; // Start typing backward
  } else if (index === 0 && direction === -1) {
    direction = 1; // Start typing forward again
    setTimeout(() => {
      updateText();
    }, 3000); // Wait for 3 seconds before starting another round
    return;
  }

  index += direction;
  setTimeout(updateText, 200);
}

updateText();