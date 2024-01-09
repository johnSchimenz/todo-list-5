// Initialize variables
const currentProject = "";
const projectsStorageArray = [];

// Project factory
const ProjectFactory = (title) => {
    return {
        title,
        toDos: [],
    };
}

// Function that adds a project to the projectsStorageArray and updates projectsStorageArray
const addProjectToProjectsStorageArray = (project) => {

    // Create project using ProjectFactory
    const newestProject = ProjectFactory(project);

    // Push project to storage array
    projectsStorageArray.push(newestProject);

    // Return updated projectsStorageArray
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
addProjectToProjectsStorageArray('AAAA');
addProjectToProjectsStorageArray('BBB');
addProjectToProjectsStorageArray('CC');
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