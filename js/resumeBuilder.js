var firstName = "Xavier";
var lastName = "Locoge"
var actualRole = "Ingénieur étude et developpement"
var age = 25;


var formatedName = HTMLheaderName.replace("%data%", firstName + " " + lastName);
var formatedRole = HTMLheaderRole.replace("%data%", actualRole);

$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);
