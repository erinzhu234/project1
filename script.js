// script.js

// Toggle form background on submit to simulate interactivity
const form = document.querySelector("form");
const nameInput = document.getElementById("name");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent actual form submission

  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  form.style.backgroundColor = "#d4edda";
  alert("Thanks for your submission, " + nameInput.value + "!");

  // DOM manipulation example
  const title = document.getElementById("page-title");
  title.textContent = "Hello, " + nameInput.value + "!";
});

form.classList.add("success");
