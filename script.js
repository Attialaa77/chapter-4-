const toggleTheme = document.getElementById('toggleTheme');
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        projects.forEach(project => {
            project.style.display = category === 'all' || project.getAttribute('data-category') === category
                ? 'block'
                : 'none';
        });
    });
});



