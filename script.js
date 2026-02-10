// Messages panel toggle for laptop (≤1024px)
const messagesToggleBtn = document.getElementById("messages-toggle-btn");
const messagesCloseBtn = document.getElementById("messages-close-btn");
const messagesSection = document.querySelector(".messages-section");

messagesToggleBtn.addEventListener("click", () => {
  messagesSection.classList.toggle("active");
  document.body.classList.toggle(
    "no-scroll",
    messagesSection.classList.contains("active"),
  );
});

messagesCloseBtn.addEventListener("click", () => {
  messagesSection.classList.remove("active");
  document.body.classList.remove("no-scroll");
});
