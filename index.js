// TODO: Include packages needed for this application

const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter a title for your project.",
        default: "Title",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions for your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage instructions for your project.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide details about how other developers can contribute to your porject.",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide details about any tests you have written for your project, and how to execute them.",
    },
    {
        type: "input",
        name: "questions",
        message: "Put any questions about the project you may have here.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license to use for your project.",
        choices: ["License1", "License2"],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
