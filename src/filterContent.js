import manageContent from "./manageContent";
import project from "./projects";

export default function filterContent() {
    let projects = document.querySelectorAll('.project');

    projects.forEach(element => {
        element.addEventListener('click', () => {
            manageContent.renderTasks(manageContent.returnTasks(element.innerHTML));
        })
    });
}


// filterContent();