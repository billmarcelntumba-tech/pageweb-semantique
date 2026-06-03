document.addEventListener('DOMContentLoaded', () => {
  const pages = [
    `<blockquote>« On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux. »</blockquote>
     <p>Cette pensée célèbre introduit le lecteur à une réflexion sur les valeurs humaines. Certaines réalités importantes comme l'amitié, l'amour ou la confiance ne peuvent être perçues uniquement par les sens.</p>
     <p>Le Petit Prince découvre progressivement que les liens créés entre les êtres donnent un sens véritable à la vie.</p>`,

    `<p>Le voyage du Petit Prince à travers les différentes planètes lui permet d'observer les comportements des adultes.</p>
     <p>Chaque personnage rencontré représente une manière différente de voir le monde : le pouvoir, la richesse, la vanité ou encore l'obsession du travail.</p>
     <p>À travers ces rencontres, l'auteur invite le lecteur à développer un regard critique sur la société.</p>`,

    `<p>La rencontre avec le renard constitue l'un des moments les plus marquants du récit.</p>
     <p>Le renard lui apprend que l'amitié demande du temps, de la patience et de la confiance.</p>
     <p>Apprivoiser quelqu'un signifie créer un lien unique qui transforme profondément les deux êtres.</p>`,

    `<p>À la fin de son aventure, le Petit Prince comprend que les expériences vécues ont une valeur inestimable.</p>
     <p>Les souvenirs, les rencontres et les émotions deviennent plus précieux que les biens matériels.</p>
     <p>Cette œuvre demeure aujourd'hui un message universel sur l'amitié, la responsabilité et la beauté des relations humaines.</p>`
  ];

  const chapterTitle = document.getElementById('chapterTitle');
  const pageContent = document.getElementById('pageContent');
  const pageIndicator = document.getElementById('pageIndicator');
  const progressBar = document.getElementById('progressBar');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const toggleTheme = document.getElementById('toggleTheme');
  const toggleHelp = document.getElementById('toggleHelp');
  const helpOverlay = document.getElementById('helpOverlay');
  const closeHelp = document.getElementById('closeHelp');

  let currentPage = 0;

  function renderPage() {
    pageContent.innerHTML = pages[currentPage];
    chapterTitle.textContent = `Page ${currentPage + 1}`;
    pageIndicator.textContent = `${currentPage + 1} / ${pages.length}`;
    progressBar.style.width = `${((currentPage + 1) / pages.length) * 100}%`;
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === pages.length - 1;
    prevBtn.style.opacity = prevBtn.disabled ? '.45' : '1';
    nextBtn.style.opacity = nextBtn.disabled ? '.45' : '1';
  }

  function nextPage() {
    if (currentPage < pages.length - 1) {
      currentPage += 1;
      renderPage();
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      currentPage -= 1;
      renderPage();
    }
  }

  nextBtn.addEventListener('click', nextPage);
  prevBtn.addEventListener('click', prevPage);
  pageContent.addEventListener('click', nextPage);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') nextPage();
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') prevPage();
  });

  toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const pressed = document.body.classList.contains('dark');
    toggleTheme.setAttribute('aria-pressed', String(pressed));
    toggleTheme.textContent = pressed ? 'Mode clair' : 'Mode sombre';
  });

  toggleHelp.addEventListener('click', () => helpOverlay.classList.remove('hidden'));
  closeHelp.addEventListener('click', () => helpOverlay.classList.add('hidden'));
  helpOverlay.addEventListener('click', (e) => {
    if (e.target === helpOverlay) helpOverlay.classList.add('hidden');
  });

  renderPage();
});