// Flip de tarjetas y efectos de aparición
document.addEventListener('DOMContentLoaded', () => {
  // IntersectionObserver para revelar elementos
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Flip al hacer click
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
    // Accesibilidad: Enter/Space
    card.setAttribute('tabindex','0');
    card.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        card.classList.toggle('is-flipped');
      }
    });
  });
});
