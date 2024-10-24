function showSection(sectionId) {
    const sections = document.querySelectorAll('.skills-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    document.getElementById(sectionId).style.display = 'block'; // Show the selected section
}

// Show the programming languages section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('programming');
});
