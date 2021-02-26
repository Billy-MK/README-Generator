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
        message: "Provide details about how other developers can contribute to your project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide details about any tests you have written for your project, and how to execute them.",
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license to use for your project.",
        choices: ["MIT License", "Mozilla Public License"],
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
        if (response.license == 'MIT License') {
            writeToFile(`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n`);
        }
        if (response.license == 'Mozilla Public License') {
            writeToFile(`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`);
        }
        writeToFile(`## Description\n\n${response.description}\n\n`);
        writeToFile(`## Table of Contents\n\n - [Installation](#installation)\n - [Usage](#usage)\n - [Contributing](#contributing)\n - [Tests](#tests)\n - [Questions](#questions)\n\n - [License](#license)\n\n`);
        writeToFile(`## Installation\n\n${response.installation}\n\n`);
        writeToFile(`## Usage\n\n${response.usage}\n\n`);
        writeToFile(`## Contributing\n\n${response.contributing}\n\n`);
        writeToFile(`## Tests\n\n${response.tests}\n\n`);
        writeToFile(`## Questions\n\nFor questions, reach me via GitHub or by email.\n\nGithub: ${response.github}\nEmail: ${response.email}\n\n`);
        writeToFile(`## License\n\nThis application is covered under the ${response.license}.`);
    }
    )}

// Function call to initialize app
init();
