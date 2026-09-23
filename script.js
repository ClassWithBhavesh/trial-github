const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const savedTheme = localStorage.getItem("devtrack-theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  themeIcon.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("devtrack-theme", isLight ? "light" : "dark");
  themeIcon.textContent = isLight ? "☀" : "☾";
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const statCards = document.querySelectorAll(".stat-card");
statCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(12px)";
  setTimeout(() => {
    card.style.transition = "opacity .5s ease, transform .5s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 120 * index);
});