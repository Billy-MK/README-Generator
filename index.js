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


// Writes to the README file
function writeToFile(data) {
    fs.appendFile("README.md", data, (err) =>
        err ? console.error(err) : null
        );
    }

// Initialization function which runs the program
function init() {
    fs.writeFile('README.md', "", (err) =>
    err ? console.error(err) : null);

    inquirer.prompt(questions).then((response) => {
        writeToFile(`# ${response.title}\n\n`);
        writeToFile(`## Description\n\n${response.description}\n\n`);
        writeToFile(`## Table of Contents\n\n - [Installation](installation)\n - [Usage](#usage)\n - [Contributing](contributing)\n - [Tests](tests)\n - [Questions](questions)\n\n`);
        writeToFile(`## Installation\n\n${response.installation}\n\n`);
        writeToFile(`## Usage\n\n${response.usage}\n\n`);
        writeToFile(`## Contributing\n\n${response.contributing}\n\n`);
        writeToFile(`## Tests\n\n${response.tests}\n\n`);
        writeToFile(`## Questions\n\n${response.questions}\n\n`);
    }
    )}

// Function call to initialize app
init();
