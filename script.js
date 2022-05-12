console.log("check");

class Project {
  constructor(
    name,
    repo,
    url,
    description,
    imageLink,
    techstack,
    documentationLink
  ) {
    this.name = name;
    this.repo = repo;
    this.url = url;
    this.description = description;
    this.imageLink = imageLink;
    this.techstack = techstack;
    this.documentationLink = documentationLink;
  }

  generateElement() {
    return `<div class="project">
            <div class="project_header"></div>
            <div class="project_body"></div>
        </div>`;
  }
}

var myProjects = [];
var pageIds = ["about-me-page","portfolio-page","resume-page"];

//To retrieve Profile from MyProfile.json and create the HTML content for webpage.
async function makemyProfile(){

    const response = await fetch("./MyProfile.json");
    const ProjectsList = await response.json();

    this.myProjects = ProjectsList;
    console.log(myProjects);
}

//To display the page on click of tab in the header
//@param id: string
function openPage(id){
    document.getElementById(id).style.display="block";
    for (const key of pageIds) {
        if(key != id) document.getElementById(key).style.display="None";
    }
}

makemyProfile();