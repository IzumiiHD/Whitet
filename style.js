function toggleTheme(theme) {
  const body = document.querySelector('body');
  body.classList.remove('defualt', 'spooky', 'winter', 'white-gold');
  body.classList.add(theme);

  // Store the user's preference
  localStorage.setItem('theme', theme);
}

// Apply the user's preference on page load
window.addEventListener('load', () => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    toggleTheme(theme);
  }
});