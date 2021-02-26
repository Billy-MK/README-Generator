// Inquirer package

const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter a title for your project.",
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
function writeToFile(data) {
    fs.appendFile("README.md", `${data}\n`, (err) =>
        err ? console.error(err) : null
        );
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile(response.title);
        writeToFile(response.description);
        writeToFile(response.installation);
        writeToFile(response.usage);
        writeToFile(response.contributing);
        writeToFile(response.tests);
        writeToFile(response.questions);
    }
    )}

// Function call to initialize app
init();
