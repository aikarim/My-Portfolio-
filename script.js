const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  toggleBtn.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
});