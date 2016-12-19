var bio = {
  "name" : "Xavier Locoge",
  "role" : "Ingénieur étude et developpement",
  "contacts" : {
    "mobile" : "0688637110",
    "email" : "xavier.locoge@icloud.com",
    "github" : "king_loth",
    "twitter" : "@KingLoth",
    "location" : "Toulouse"
  },
  "welcomMessage" : "lorem ipsum dolor sit amet etc etc etc...",
  "skills" :  ["programation", "développement Front-End", "Scrum Master"],
  "bioPic" : "images/fry.jpg",
  "display" : function(){
    prependElement("#header",HTMLheaderRole, this.role);
    prependElement("#header",HTMLheaderName, this.name);


    for (var contact in bio.contacts) {
      if (contact !== null) {
        var formatedContact = HTMLcontactGeneric.replace("%contact%", contact);
        ajouterElement("#header",formatedContact, this.contacts[contact]);
      }
    }


    prependElement("#header",HTMLbioPic, this.bioPic);
    prependElement("#header",HTMLwelcomeMsg, this.welcomMessage);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (i = 0; i<bio.skills.length; i++) {
        prependElement("#skills",HTMLskills, this.skills[i]);
      }
    }

  }
};

var work = {
  "jobs" : [
    {
      "title": "Ingénieur Etude et développement",
      "employer": "Astek SO",
      "dates": "2015 - de nos jours",
      "location": "Toulouse",
      "description": "lorem ipsum dolor sit amet etc etc etc..."
    },
    {
      "title": "Ingénieur Etude et développement",
      "employer": "Capegemini",
      "dates": "2014",
      "location": "Montpellier",
      "description": "lorem ipsum dolor sit amet etc etc etc..."
    },
    {
      "title": "Ingénieur Etude et développement",
      "employer": "Sopra",
      "dates": "2014",
      "location": "Aix-en-Provence",
      "description": "lorem ipsum dolor sit amet etc etc etc..."
    }
  ],
  "display" : function(){
    for (var i = 0; i < this.jobs.length; i ++) {
      $("#workExperience").append(HTMLworkStart);

      ajouterElementMultiple(".work-entry:last",HTMLworkEmployer, HTMLworkTitle,this.jobs[i].employer, this.jobs[i].title);
      ajouterElement(".work-entry:last",HTMLworkDates, this.jobs[i].dates);
      ajouterElement(".work-entry:last",HTMLworkLocation, this.jobs[i].location);
      ajouterElement(".work-entry:last",HTMLworkDescription, this.jobs[i].description);
    }
  }
};

var education = {
  "schools" : [
    {
      "name": "Lycée Cézanne",
      "location": "Aix en Provence",
      "degree": "Bacalauréat",
      "majors": ["physique-chimie"],
      "dates": "2010",
      "url":""
    },
    {
      "name": "Ecole des Mines d'Albi",
      "location": "Albi",
      "degree": "Diplôme d'Ingénieur",
      "majors": ["Gestion de projet", "Développement"],
      "dates": "2014",
      "url":""
    },
  ],
  "onlineCourses": [
    {
      "title": "Front-End developers",
      "school": "Udacity",
      "dates": "2016",
      "url": "https://classroom.udacity.com/nanodegrees/"
    }
  ],
  "display" : function(){
    for (var i = 0; i < this.schools.length; i ++) {
      $("#education").append(HTMLschoolStart);

      ajouterElementMultiple(".education-entry:last",HTMLschoolName, HTMLschoolDegree,this.schools[i].name, this.schools[i].degree);
      ajouterElement(".education-entry:last",HTMLschoolDates, this.schools[i].dates);
      ajouterElement(".education-entry:last",HTMLschoolLocation, this.schools[i].location);
      ajouterElement(".education-entry:last",HTMLschoolMajor, this.schools[i].majors);

    }
    $("#education").append(HTMLonlineClasses);
    for (var j = 0; j < this.onlineCourses.length; j ++) {
      $("#education").append(HTMLschoolStart);

      ajouterElementMultiple(".education-entry:last",HTMLonlineSchool, HTMLonlineTitle,this.onlineCourses[j].school, this.onlineCourses[j].title);
      ajouterElement(".education-entry:last",HTMLschoolDates, this.onlineCourses[j].dates);
      ajouterElementMultipleMemeLigneDonne(".education-entry:last",HTMLonlineURL, this.onlineCourses[j].url);

    }
  }
};

var projet = {
  "projects" : [
    {
      "title": "CV interactif",
      "dates": "2016",
      "description": "lorem ipsum dolor sit amet etc etc etc...",
      "image": ""
    }
  ],
  "display" : function(){
    for (var i = 0; i < this.projects.length; i ++) {
      $("#projects").append(HTMLprojectStart);

      ajouterElement(".project-entry:last",HTMLprojectTitle, this.projects[i].title);
      ajouterElement(".project-entry:last",HTMLprojectDates, this.projects[i].dates);
      ajouterElement(".project-entry:last",HTMLprojectDescription, this.projects[i].description);
      ajouterElement(".project-entry:last",HTMLprojectImage, this.projects[i].image);
    }
  }
};


bio.display();
work.display();
projet.display();
education.display();

function prependElement(place,html,donnee){
  if(donnee !== "" && donnee !== null){
    var formatedHtml=html.replace("%data%", donnee);
    $(place).prepend(formatedHtml);
  }
}

function ajouterElement(place,html,donnee){
  if(donnee !== "" && donnee !== null){
    var formatedHtml=html.replace("%data%", donnee);
    $(place).append(formatedHtml);
  }
}

function ajouterElementMultipleMemeLigneDonne(place,html,donnee){
  if(donnee !== "" && donnee !== null){
    var formatedHtml=html.replace("%data%", donnee);
    formatedHtml =  formatedHtml.replace("%data%", donnee);
    $(place).append(formatedHtml);
  }
}

function ajouterElementMultiple(place,html,html1,donnee,donnee1){
  if(donnee !== "" && donnee !== null && donnee1 !== "" && donnee1 !== null){
    var formatedHtml=html.replace("%data%", donnee);
    var formatedHtml1=html1.replace("%data%", donnee1);
    $(place).append(formatedHtml+formatedHtml1);
  }
}
