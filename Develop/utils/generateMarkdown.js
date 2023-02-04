// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None') {
    return '(https://img.shields.io/packagist/l/ecadena7/m9_Pro_READE_Generator)'
}
return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return '[${data.license}](https://github.com/ecadena7/m9_Professional_README_gen/license)'
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return '${data.license} License.';
  }
  return '';
}

// Created a function that returns Credits
function renderCreditsSection(credit) {
  if (credit !== 'None') {
    return `## Credits
  
    The following tutorials were used for this README.md file:
      -[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
      -[How to add a video into your README](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide)`;
  }
  return '';
}

//created a function that returns Collaborators
function renderCollaboratorSection(collaborators) {
  if (collaborators !== 'None') {
    return `  The collaborators that worked on this project were:
    - [Starter Code](https://github.com/coding-boot-camp/potential-enigma)
    - ${data.collaborators}
    `;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}
  `
//   Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  
//   - What was your motivation?
//   - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
//   - What problem does it solve?
//   - What did you learn?
  
//   ## Table of Contents (Optional)
  
//   If your README is long, add a table of contents to make it easy for users to find what they need.
  
//   - [Installation](#installation)
//   - [Usage](#usage)
//   - [Credits](#credits)
//   - [License](#license)
  `  
  ## Installation
  
  `//What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`
  `
  ${data.installation}

  ## Usage

  ${data.usage}
  `
//   Provide instructions and examples for use. Include screenshots as needed.
  
//   To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
//       ```md
//       ![alt text](assets/images/screenshot.png)
//       ```
  `
  ${data.credit}

  ${data.collaborators}
  `
//   List your collaborators, if any, with links to their GitHub profiles.

//   If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
//   If you followed tutorials, include links to those here as well.
  `

  ## License
  
  ${data.license}
  `
  //  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  `  
  `
//   ---
  
//   🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
//   ## Badges
  
//   ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
//   Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
//   ## Features
  
//   If your project has a lot of features, list them here.
  
//   ## How to Contribute
  
//   If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  `
  ## Tests
  
  ${data.test}
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`;
}

module.exports = generateMarkdown;
