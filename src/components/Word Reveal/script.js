function wrapTextNodes(element) {
  // Use a more robust word splitting regex that handles punctuation
  const words = element.textContent.match(/\b\w+\b|\S+/g) || [];
  element.textContent = ""; // Clear existing text

  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.textContent = word + (index < words.length - 1 ? " " : "");

    // Dynamic delay calculation
    span.style.animationDelay = `${0.1 * (index + 1)}s`;

    element.appendChild(span);
  });
}

// Apply to all elements with word-reveal class
document.querySelectorAll(".word-reveal").forEach(wrapTextNodes);
