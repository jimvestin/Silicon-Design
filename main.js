const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});