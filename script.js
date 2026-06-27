const button = document.getElementById("interestBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Thanks for showing interest! Welcome to the 30 day sprint!";
});