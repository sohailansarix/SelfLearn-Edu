// Theme Toggle with localStorage
const root = document.documentElement;
const toggleBtn = document.querySelector('.theme-toggle');
const stored = localStorage.getItem('theme');

// Set initial theme
if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  root.setAttribute('data-theme', 'dark');
  toggleBtn.textContent = '☀️';
} else {
  toggleBtn.textContent = '🌙';
}

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  toggleBtn.textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', next);
});
