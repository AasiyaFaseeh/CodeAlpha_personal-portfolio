// Smooth scroll reveal
const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const viewHeight = window.innerHeight;
    if (top < viewHeight - 100) {
      section.classList.add('reveal');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);