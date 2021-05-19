var workExperienceBtn = document.getElementById("show-work-experience");
var qualificationsBtn = document.getElementById("show-qualifications");
var educationBtn = document.getElementById("show-education");
var projectsBtn = document.getElementById("show-projects");
var workExperienceContainer = document.getElementsByClassName("work-experience")[0];
var qualificationsContainer = document.getElementsByClassName("qualifications")[0];
var educationContainer = document.getElementsByClassName("education")[0];
var projectsContainer = document.getElementsByClassName("projects")[0];

var aboutLink_homepage = document.getElementsByClassName("aboutLink")[0];
var aboutLink = document.getElementById("about-link");

aboutLink_homepage.onclick = function() {
  aboutLink.click()
}

// When the user clicks on the button, open the modal
workExperienceBtn.onclick = function() {
  if (workExperienceContainer.style.display  === "") {
    workExperienceContainer.style.display = "block";
    qualificationsContainer.style.display = "none";
    educationContainer.style.display = "none";
    projectsContainer.style.display = "none";
  } else if (workExperienceContainer.style.display == "none") {
    workExperienceContainer.style.display = "block";
    qualificationsContainer.style.display = "none"
    educationContainer.style.display = "none";
    projectsContainer.style.display = "none";
  } else {
    workExperienceContainer.style.display = "none";
  }
}
qualificationsBtn.onclick = function() {
  if (qualificationsContainer.style.display  === "") {
    qualificationsContainer.style.display = "block";
    workExperienceContainer.style.display = "none";
    educationContainer.style.display = "none";
    projectsContainer.style.display = "none";
  } else if (qualificationsContainer.style.display == "none") {
    qualificationsContainer.style.display = "block";
    workExperienceContainer.style.display = "none";
    educationContainer.style.display = "none";
    projectsContainer.style.display = "none";
  } else {
    qualificationsContainer.style.display = "none";
  }
}

educationBtn.onclick = function() {
  if (educationContainer.style.display  === "") {
    educationContainer.style.display = "block";
    workExperienceContainer.style.display = "none";
    qualificationsContainer.style.display = "none";
    projectsContainer.style.display = "none";
  } else if (educationContainer.style.display == "none") {
    educationContainer.style.display = "block";
    workExperienceContainer.style.display = "none";
    qualificationsContainer.style.display = "none";
    projectsContainer.style.display = "none";
  } else {
    educationContainer.style.display = "none";
  }
}

projectsBtn.onclick = function() {
  if (projectsContainer.style.display  === "") {
    projectsContainer.style.display = "block";
    workExperienceContainer.style.display = "none";
    qualificationsContainer.style.display = "none";
    educationContainer.style.display = "none";
  } else if (projectsContainer.style.display == "none") {
    projectsContainer.style.display = "block";
    workExperienceContainer.style.display = "none";
    qualificationsContainer.style.display = "none";
    educationContainer.style.display = "none";
  } else {
    projectsContainer.style.display = "none";
  }
}