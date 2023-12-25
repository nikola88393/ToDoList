// This module is intended to create new projects and manage methods withing those projects

export default function project(name) {
    const getName = () => {
        return name;
    }

    const renderProject = () => {
        let container = document.getElementById('projectList');
        let project = document.createElement('a');
        project.classList.add('project');
        project.innerHTML = name;

        container.appendChild(project);
    }

    return {
        name: name,
        getName: getName,
        renderProject: renderProject,
    }
}