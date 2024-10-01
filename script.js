// Smooth scrolling when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adding a hover effect to project cards (example: showing more details on hover)
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'scale(1.05)';
        project.style.transition = 'transform 0.3s ease';
    });
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'scale(1)';
    });
});
// Dark mode toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Dark Mode';
document.body.prepend(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Add dark mode styles in CSS

