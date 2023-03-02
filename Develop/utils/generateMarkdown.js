// TODO: Create a function that returns a license badge based on which license is passed in

const { default: inquirer } = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![](https://img.shields.io/badge/license-${license}-orange)`
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT Link](https://mit-license.org/)'
  };
  if (license === 'APACHE') {
    return '[APACHE Link](https://apache.org/licenses/)'
  };
  if (license === 'GNU') {
    return '[GNU Link](https://www.gnu.org/licenses/)'
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)

## Installation

What are the steps required to install your project? 

${data.installation}

## Usage

${data.usage}

## Credits

Collaborators,
    - Github: [${data.githubTwo}](https://github.com/${data.githubTwo})


Tutorials,
    - [How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
    - [Microsoft's VS Code repository](https://github.com/microsoft/vscode)
    - [Contributor Covenant](https://www.contributor-covenant.org/)
    - [shields.io](https://shields.io/)
    - [https://choosealicense.com/](https://choosealicense.com/)

## License

[${data.license}]([${renderLicenseLink(data.license)}]) 

${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

## Contact Me

Github: [${data.github}](https://github.com/${data.github})

Email: [${data.email}](mailto:${data.email})

## How to Contribute

${data.contribution}
If you created an application or package and would like other developers to  is an industry standard, but you can always write your own if you'd prefer.

## Tests
  
${data.test}
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`;
}

module.exports = generateMarkdown;
