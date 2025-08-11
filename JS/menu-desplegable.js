const checkbox = document.getElementById('open-menu');
const nav = document.querySelector('.header__nav');
nav?.addEventListener('click', (e) => {
  const target = e.target;
  if (target instanceof HTMLAnchorElement) {
    if (checkbox) checkbox.checked = false;
  }
});