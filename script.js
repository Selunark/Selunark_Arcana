// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Gallery filter
const filterButtons = document.querySelectorAll('.filter-buttons button');
const galleryImages = document.querySelectorAll('.gallery-grid img');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' to the clicked button
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    galleryImages.forEach(img => {
      const category = img.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  });
}); 