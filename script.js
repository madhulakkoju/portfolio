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
                        <p class="mb-3">${this.techstack}</p>
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
                          class="img-fluid-half-size rounded mb-3"
                          src="${ this.imageLink }"
                          alt="..."
                        />
                        <!-- Portfolio Modal - Text-->
                        <center>
                        <table style="width:100%">
                        <tr>
                        <td align="center">
                        <a href="${this.documentationLink}" target="_blank" rel="noopener noreferrer">${this.documentationLink!= null && this.documentationLink!= "" ? "Documentation" : ""}</a></p>
                        </td>
                        <td align="center">
                        <a href="${this.url}" target="_blank" rel="noopener noreferrer">${this.url!= null && this.url!= "" ? "Url" : ""}</a></p>
                        </td>
                        <td align="center">
                        <a href="${this.repo}" target="_blank" rel="noopener noreferrer">${this.repo!= null && this.repo!= "" ? "Repo" : ""}</a></p>
                        </td>
                        <tr>
                        </table>
                        </center>
                        
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
    bonafideLink,
    imageLink,
    repo,
    url
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
    this.imageLink=imageLink;
    this.repo = repo;
    this.url = url;
  }

  generateElement(dialogName) {
    return `
    <!-- Portfolio Item -->
          <div class="col-md-6 col-lg-4 mb-5">
            <div class="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#${dialogName}">

              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" >
                <div class="portfolio-item-caption-content text-center text-white" >
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
          <!-- Portfolio Modal -->
          <div class="portfolio-modal modal fade"
            id="${dialogName}"
            tabindex="-1"
            aria-labelledby="${dialogName}"
            aria-hidden="true" >

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
                        <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" >
                          ${this.company}
                        </h2>
                        <h4 class="text-secondary">${this.role}</h4>
                        <p class="mb-3" ${!this.techstack ? 'hidden' : ''}>${this.techstack}</p>
                        <p class="mb-3" ${!this.from ? 'hidden' : ''}>${this.from+" - "+this.to}</p>
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
                          class="img-fluid rounded mb-3"
                          src="${ this.imageLink }"
                          alt="..."
                        />
                        <!-- Portfolio Modal - Text-->
                        <center>
                        <table style="width:100%">
                        <tr>
                        <td align="center" ${!this.documentationLink ? 'hidden' : ''}>
                        <a href="${this.documentationLink}" target="_blank" rel="noopener noreferrer">${this.documentationLink!= null && this.documentationLink!= "" ? "Documentation" : ""}</a></p>
                        </td>
                        <td align="center" ${!this.url ? 'hidden' : ''}>
                        <a href="${this.url}" target="_blank" rel="noopener noreferrer">${this.url!= null && this.url!= "" ? "Url" : ""}</a></p>
                        </td>
                        <td align="center" ${!this.repo ? 'hidden' : ''}>
                        <a href="${this.repo}" target="_blank" rel="noopener noreferrer">${this.repo!= null && this.repo!= "" ? "Repo" : ""}</a></p>
                        </td>
                        <tr>
                        </table>
                        </center>
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

class Education {
  constructor(schoolname,univname, gpa, graduationdate, address, title, courses, transcripturl, iconurl) {
    this.schoolname = schoolname;
    this.univname = univname;
    this.gpa = gpa;
    this.graduationdate = graduationdate;
    this.address = address;
    this.title = title;
    this.courses = courses;
    this.transcripturl = transcripturl;
    this.iconurl = iconurl;

  }
  generateElement(dialogName) {
      return `
      <!-- Education Item 1-->
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
                  </div>
                </div>
                <img
                  class="img-fluid-edu"
                  src="${this.iconurl}"
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
              <div class="modal-dialog modal-xl text-dark ">
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
                          <h3 class="portfolio-modal-title text-secondary text-uppercase mb-0" >
                            ${this.schoolname}
                          </h3>
                          <h4 class="text-uppercase mb-0" ${this.univname == "" ? "hidden":"" } >
                            ${this.univname}
                          </h4>
                          <h4 class="mb-3 ">${this.title} </h4>
                          <!-- Icon Divider-->
                          <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon">
                              <i class="fas fa-star"></i>
                            </div>
                            <div class="divider-custom-line"></div>
                          </div>
                          <!-- Portfolio Modal - Image-->
                          <!--
                          <img
                            class="img-fluid rounded mb-3"
                            src="${ this.iconurl }"
                            alt="..."
                          />
                          -->
                          <!-- Portfolio Modal - Text-->
                          <center>
                          Coursework:
                          ${this.courses}
                          </center>

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

var myProfile={};
var pageIds = ["about-me-page", "portfolio-page", "resume-page"];

function renderPortfolio(myProfile){
  var renderingHtml = ``;
  //Work Experience
  for (const i in myProfile["work"]) {
    w = myProfile["work"][i];
    var work = new Work(w["company"],w["role"],w["employmentType"],w["from"],w["to"],w["description"],w["techstack"],w["documentationLink"],w["bonafideLink"],w["imageLink"],w["repo"],w["url"]);
    renderingHtml += work.generateElement(work.company.replaceAll(" ","_")+"_"+work.from.replace(" ","_")+"_"+i);
  }

  document.getElementById("portfolio-grid-items-container").innerHTML=renderingHtml;
}



function renderPortfolioProjects(myProfile){
  var renderingHtml = ``;
  //Projects
  for (const i in myProfile["projects"]) {
    w = myProfile["projects"][i];
    var proj = new Project(w["name"],w["repo"],w["url"],w["description"],w["imageLink"],w["techStack"],w["documentationLink"]);
    renderingHtml+= proj.generateElement(proj.name.replaceAll(" ","_")+"_"+i);
  }

  document.getElementById("portfolio-projects-grid-items-container").innerHTML=renderingHtml;
}

function renderEducation(myProfile){
  var renderingHtml = ``;
  //Education
  for (const i in myProfile["education"]) {
    w = myProfile["education"][i];
    var edu = new Education(w["schoolname"],w["univname"],w["gpa"],w["graduationdate"],w["address"],w["title"],w["courses"],w["transcripturl"],w["iconurl"]);
    console.log(edu);
    renderingHtml+= edu.generateElement(edu.schoolname.split("<br/>")[0].replaceAll(" ","_")+"_"+i);
    console.log('check')
  }

  document.getElementById("education-grid-items-container").innerHTML=renderingHtml;
}


function renderSkills(skills){
  //do an unordered list
  var skillsHtml = ` <h4 class="text-uppercase mb-4" style="text-align:center">Technical Skills</h4>`;
skillsHtml += `
<ul class="tech-slideshow" style="list-style-type:none">`;

for (const iterator of skills) {
  skillsHtml += `<li class="btn btn-outline-light  mx-1" >${iterator}</li>`;
}
skillsHtml+=`</ul>`;

  document.getElementById("techSkills").innerHTML = skillsHtml;
}

function renderCertifications(certs){
  //do an unordered list
  var skillsHtml = ` <h4 class="text-uppercase mb-4" style="text-align:center">Certifications</h4>`;
skillsHtml += `
<ul class="tech-slideshow" style="list-style-type:none">`;

for (const iterator of certs) {
  skillsHtml += `<li class="btn btn-outline-light  mx-1" >${iterator["tech"]}</li>`;
}
skillsHtml+=`</ul>`;

  document.getElementById("techCertifications").innerHTML = skillsHtml;
}

function renderAbout(myProfile){
  //About Me
  document.getElementById("git-id").href=myProfile["contactinfo"]["github"];
  document.getElementById("phone-id").href = myProfile["contactinfo"]["phone"];
  document.getElementById("email-id").href='mailto:'+myProfile["contactinfo"]["email"];
  document.getElementById("fb-id").href=myProfile["contactinfo"]["fb"];
  document.getElementById("twitter-id").href=myProfile["contactinfo"]["twitter"];
  document.getElementById("linkedin-id").href=myProfile["contactinfo"]["linkedin"];
  renderSkills(myProfile["skills"]);
  renderCertifications(myProfile["certifications"]);
}

function renderProfile(myProfile){
  document.getElementById("title").innerHTML = myProfile["name"]+"'s Profile";
  document.getElementById("head-title").innerHTML = myProfile["name"]+"'s Portfolio";
  document.getElementById("masthead-heading-name").innerText=myProfile["name"];
  document.getElementById("masthead-desc").innerText=myProfile["about"];
  document.getElementById("masthead-image").src=myProfile["myImage"];
  document.getElementById("page-top-id").innerText=myProfile["name"];
  document.getElementById("linkedin-badge").innerHTML = myProfile["linkedin-badge"];

  renderPortfolio(myProfile);
  renderEducation(myProfile);
  renderPortfolioProjects(myProfile);
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

function notifyUser(){
  console.log("Notify called");
var name= document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var message=document.getElementById("message");

  Email.send({
    Host: "smtp.mailtrap.io",
    Username : myProfile["proxy"]["email"],
    Password : myProfile["proxy"]["password"],
    To : myProfile["contactinfo"]["email"],
    From : myProfile["proxy"]["email"],
    Subject : "IMP: "+ name+" contacted you from your Portfolio Page",
    Body : `
    <html>
    <body>
    A Message From :
    <h2>${name}</h2>
    <h3>
      Email : <a href="mailto:${email}">${email}</a>
    </h3>
    <h3>
      Phone : ${phone}
    </h3>
    <h3>
     Message : 
    </h3>
    <textarea style="font-size:18px" name="Message" rows="10" cols="50" disabled="true">${message}</textarea>
    </body>
    </html>
    `,
    }).then(
      message => alert("mail sent successfully")
    );
}

makemyProfile();

