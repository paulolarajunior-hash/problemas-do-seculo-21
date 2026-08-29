// INTERATIVIDADE DO TEMA (CLARO/ESCURO)
const themeToggleBtn = document.getElementById('themeToggle');

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  
  if (currentTheme === 'light') {
    document.body.removeAttribute('data-theme');
    themeToggleBtn.textContent = 'Modo Claro';
  } else {
    document.body.setAttribute('data-theme', 'light');
    themeToggleBtn.textContent = 'Modo Escuro';
  }
});

// INTERATIVIDADE DO FILTRO DE CATEGORIAS
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    cards.forEach(card => {
      if (filterValue === 'todos' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
