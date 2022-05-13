window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          offset: 72,
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

});

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

  generateElement(dialogName) {
    return `
    <!-- Portfolio Item 1-->
          <div class="col-md-6 col-lg-4 mb-5">
            <div
              class="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#${dialogName}"
            >
              <div
                class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
              >
                <div
                  class="portfolio-item-caption-content text-center text-white"
                >
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="${this.imageLink}"
                alt="..."
              />
            </div>
          </div>
          <!-- Portfolio Modal 1-->
          <div
            class="portfolio-modal modal fade"
            id="${dialogName}"
            tabindex="-1"
            aria-labelledby="${dialogName}"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header border-0">
                  <button
                    class="btn-close"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body text-center pb-5">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-lg-8">
                        <!-- Portfolio Modal - Title-->
                        <h2
                          class="portfolio-modal-title text-secondary text-uppercase mb-0"
                        >
                          ${this.name}
                        </h2>
                        <p class="mb-4">${this.techstack}</p>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                          <div class="divider-custom-line"></div>
                          <div class="divider-custom-icon">
                            <i class="fas fa-star"></i>
                          </div>
                          <div class="divider-custom-line"></div>
                        </div>
                        <!-- Portfolio Modal - Image-->
                        <img
                          class="img-fluid rounded mb-5"
                          src="${ this.imageLink }"
                          alt="..."
                        />
                        <!-- Portfolio Modal - Text-->
                        <table><tr><td>Documentation</td><td>URL</td><td>Repo</td><tr></table>
                        <p class="mb-4">
                          ${this.description}
                        </p>
                        <button class="btn btn-primary" data-bs-dismiss="modal">
                          <i class="fas fa-xmark fa-fw"></i>
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
  }
}

class Work {
  constructor(
    company,
    role,
    employmentType,
    from,
    to,
    description,
    techstack,
    documentationLink,
    bonafideLink
  ) {
    this.company = company;
    this.role = role;
    this.employmentType = employmentType;
    this.from = from;
    this.to = to;
    this.description = description;
    this.techstack = techstack;
    this.documentationLink = documentationLink;
    this.bonafideLink = bonafideLink;
  }

  generateElement(dialogName) {
    return `<div class="work">
            <div class="work_header">${this.role + ", " + this.company}</div>
            <div class="work_body"></div>
        </div>`;
  }
}

class Education {
  constructor(schoolname, score, grade) {
    this.schoolname = schoolname;
    this.score = score;
    this.grade = grade;
  }
  generateElement() {
    return `<div class="edu">
                <div class="edu_header">${
                  this.grade + ", " + this.schoolname
                }</div>
                <div class="edu_body"></div>
            </div>`;
  }
}

var myProfile={};
var pageIds = ["about-me-page", "portfolio-page", "resume-page"];

function renderPortfolio(myProfile){
  var renderingHtml = ``;
  //Work Experience
  for (const i in myProfile["work"]) {
    w = myProfile["work"][i];
    var work = new Work(w["company"],w["role"],w["employmentType"],w["from"],w["to"],w["description"],w["techstack"],w["documentationLink"],w["bonafideLink"]);
    renderingHtml += work.generateElement(work.company.replaceAll(" ","_")+"_"+work.from.replace(" ","_")+"_"+i);
  }
  //Projects

  for (const i in myProfile["projects"]) {
    w = myProfile["projects"][i];
    var proj = new Project(w["name"],w["repo"],w["url"],w["description"],w["imageLink"],w["techStack"],w["documentationLink"]);
    renderingHtml+= proj.generateElement(proj.name.replaceAll(" ","_")+"_"+i);
  }

  document.getElementById("portfolio-grid-items-container").innerHTML=renderingHtml;
}

function renderAbout(myProfile){
  //About Me
  document.getElementById("git-id").href=myProfile["contactinfo"]["github"];
  document.getElementById("phone-id").href = myProfile["contactinfo"]["phone"];
  document.getElementById("email-id").href='mailto:'+myProfile["contactinfo"]["email"];
  document.getElementById("fb-id").href=myProfile["contactinfo"]["fb"];
  document.getElementById("twitter-id").href=myProfile["contactinfo"]["twitter"];
  document.getElementById("linkedin-id").href=myProfile["contactinfo"]["linkedin"];
}

function renderProfile(myProfile){
  document.getElementById("title").innerHTML = myProfile["name"]+"'s Profile";
  document.getElementById("head-title").innerHTML = myProfile["name"]+"'s Portfolio";
  document.getElementById("masthead-heading-name").innerText=myProfile["name"];
  document.getElementById("masthead-desc").innerText=myProfile["about"];
  document.getElementById("masthead-image").src=myProfile["myImage"];
  
  //document.getElementById("address-block").innerHTML=myProfile["address"];
  renderPortfolio(myProfile);
}

//To retrieve Profile from MyProfile.json and create the HTML content for webpage.
async function makemyProfile() {

  fetch("./MyProfile.json").then(response=>response.json()).then(data=>{
    myProfile = data;
    console.log(myProfile);
    renderProfile(myProfile);
    renderAbout(myProfile);
  });

}

makemyProfile();
