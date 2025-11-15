/*
🚀 Question 23:   Implement localStorage-based theme switcher.

  
*/

const themeBtn = document.querySelector("button");
const html = document.documentElement;
themeBtn.addEventListener("click", changeTheme);
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  html.classList.add("dark-mode");
  themeBtn.classList.add("btn-theme");
  themeBtn.textContent = "Light mode";
} else {
  themeBtn.textContent = "Dark mode";
}
function changeTheme() {
  html.classList.toggle("dark-mode");

  const isDark = html.classList.contains("dark-mode");
  if (isDark) {
    localStorage.setItem("theme", "dark");
    themeBtn.classList.add("btn-theme");
    themeBtn.textContent = "Light mode";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "Dark mode";
    themeBtn.classList.remove("btn-theme");
  }
}
