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
    return ''
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return ``;
  }
  return '';
}

// Created a function that returns Credits
function renderCreditsSection(credit) {
  if (credit !== 'None') {
    return ``;
  }
  return '';
}

//created a function that returns Collaborators
function renderCollaboratorSection(collaborators) {
  if (collaborators !== 'None') {
    return ``;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
