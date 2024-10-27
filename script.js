function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}