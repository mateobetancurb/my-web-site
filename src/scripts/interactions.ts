const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('section').forEach((section) => {
  if (!prefersReducedMotion) {
    section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
    observer.observe(section);
  }
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) header.classList.toggle('shadow-md', window.scrollY > 20);
});

document.querySelectorAll<HTMLElement>('[data-bg]').forEach((el) => {
  const bgObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.style.backgroundImage = el.dataset.bg!;
        bgObserver.disconnect();
      }
    },
    { rootMargin: '200px' }
  );
  bgObserver.observe(el);
});
