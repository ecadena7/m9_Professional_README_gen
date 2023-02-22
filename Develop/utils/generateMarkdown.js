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
    return '[APACHE Link]()'
  };
  if (license === 'GNU') {
    return '[GNU Link]()'
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  # ${license}
  
  Did this also print on the screen?`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

${data.installation}

## Usage

Provide instructions and examples for use. Include screenshots as needed.

${data.usage}

## Credits

List your collaborators, if any, with links to their GitHub profiles.
    - [GitHub Profile:](https://github.com/${data.githubTwo})

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

${data.license} 

${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Contact

Github: [https://github.com/${data.github}](https://github.com/${data.github})

Email: [${data.email}](mailto:${data.email})

## How to Contribute

${data.contribution}
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests
  
${data.test}
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`;
}

module.exports = generateMarkdown;
