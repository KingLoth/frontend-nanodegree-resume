var firstName = "Xavier";
var lastName = "Locoge"
var age = 25;
var formatedName = HTMLheaderName.replace("%data%", firstName + " " + lastName);

$("#header").append(formatedName);
