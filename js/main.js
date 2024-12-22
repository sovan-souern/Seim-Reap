
  // Scroll-to-section functionality
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Back-to-top button
  const backToTopButton = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Form validation
  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your message!');
    e.target.reset();
  });
