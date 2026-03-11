// darkmode.js
(function () {
  const toggle = document.getElementById('dark-mode-toggle');
  if (!toggle) return;

  // Load initial mode from localStorage (dark mode on by default)
  const saved = localStorage.getItem('owens_portfolio_dark_mode');
  if (saved !== 'false') {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    const enabled = toggle.checked;
    document.body.classList.toggle('dark-mode', enabled);
    localStorage.setItem('owens_portfolio_dark_mode', enabled ? 'true' : 'false');
  });
})();
