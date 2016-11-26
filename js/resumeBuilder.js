var firstName = "Xavier";
var lastName = "Locoge"
var actualRole = "Ingénieur étude et developpement"
var age = 25;
var skills = ["programation", "développement Front-End", "Scrum Master"]


var formatedName = HTMLheaderName.replace("%data%", firstName + " " + lastName);
var formatedRole = HTMLheaderRole.replace("%data%", actualRole);

$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);
$("#main").append(skills);
