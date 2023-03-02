// TODO: Include packages needed for this application

const path = require ('path');
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of you project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'Open your terminal and type [npm i] and press [enter]',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'githubTwo',
        message: 'What is the github username of a collaborator?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the type of license for this project?',
        choices: ['MIT', 'APACHE', 'GNU', 'None'],
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can you contribute to the repo?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.promises.writeFile(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile('READ.md', generateMarkdown(inquirerResponses));
    });
}

// Function call to initialize app
init();
