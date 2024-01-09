// Initialize variables
const currentProject = "";
const projectsStorageArray = [];

// Project factory
const ProjectFactory = (projectTitle) => {
    return {
        title: projectTitle,
        toDos: [],
    };
}

// Function that adds a project to the projectsStorageArray and updates projectsStorageArray
const addProjectToProjectsStorageArray = (projectTitle) => {

    // Create project
    const newestProject = ProjectFactory(projectTitle);

    // Push project to storage array
    projectsStorageArray.push(newestProject);

    // Return updated projectsStorageArray
    return projectsStorageArray;
}

const removeProjectFromProjectsArray = (projectTitle) => {

    // Search for project title, and if it is matched, removed that project from projectsStorageArray
    for (let i = 0; i < projectsStorageArray.length; i++) {
        if (projectsStorageArray[i].title === projectTitle.title) {
            const indexToRemove = projectsStorageArray.indexOf(projectsStorageArray[i]);
            projectsStorageArray.splice(indexToRemove, 1);
        }
    }
    return projectsStorageArray;
}

// ToDo Factory
const ToDoFactory = (title, dueDate, details) => {
    return {
        title,
        dueDate,
        details,
    };
}

// Trial stuff to make sure Javascript functionality works
const a = addProjectToProjectsStorageArray('AAAA');
const b = addProjectToProjectsStorageArray('BBB');
const c = addProjectToProjectsStorageArray('CC');
console.log(projectsStorageArray);
removeProjectFromProjectsArray({title: 'AAAA'});
console.log(projectsStorageArray);


// DOM - list of all initial document.querySelectors
const selectTopContainer = document.querySelector('#top');
const selectBottomContainer = document.querySelector('#bottom');
const selectBottomLeftContainer = document.querySelector('#bottom-left');
const selectBottomRightContainer = document.querySelector('#bottom-right');
const selectToDosContainer = document.querySelector('#todos');
const selectProjectsContainer = document.querySelector('#projects');
const clickNewProjectButton = document.querySelector('#new-project');
const clickNewToDoButton = document.querySelector('#new-todo');