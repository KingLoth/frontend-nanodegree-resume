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
  "bioPic" : "images/fry.jpg"
};


var formatedName = HTMLheaderName.replace("%data%", bio.name);
var formatedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);
$("#main").append(bio.skills);
