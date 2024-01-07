// Example: Fetching projects from an API
const projectsSection = document.getElementById('projects');

async function fetchProjects() {
    try {
        const response = await fetch('https://api.example.com/projects');
        const projects = await response.json();

        // Render projects
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank">Visit Project</a>
         `;
            projectsSection.appendChild(projectElement);
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

// Call the fetchProjects function when the page loads
document.addEventListener('DOMContentLoaded', fetchProjects);
