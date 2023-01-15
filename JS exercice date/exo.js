document.write("<h3>Leçon 1: Editer Hello World en utilisant des variables:</h3>");

// To start we will create 2 variables:
var variable1 = 'Hello ';
var variable2 = 'World!'; // <br> means line break in html
 
// Create a third variable by adding both variables:
var final_text = variable1 + variable2;

// Print the final result:
document.write('<div id="jstext1">' + final_text + '</div>');

document.write("<h3>Leçon 2: Résoudre une équation:</h3>");

var n = 9;
var x = n*n;
document.write('<div id="jstext2">' + "Resultat de n*n=" + x + '</div>');

document.write("<br><br><h3>Leçon 3: Editer des nombres de 1 à 10:</h3>");

// Create a loop of 10 elements.
// Variable "i" starts with value 1 and while i<=10 it will increment 1 (i=i+1) 
for (var i=1; i<=10; i=i+1) {

  document.write(i); // Print the current "i" number

  // Print a comma followed by a space if i < 10
  if (i<10) {
    document.write(", ");
  }
}

function show_random_number() {

  var random_number = Math.random(); // generate random number between 0 and 1
  alert(random_number); // show popup with a random number
  
}

function calculate_this() {

  var operation = document.getElementById('input').value;
  var resultat = eval(operation);
  document.getElementById('total').innerHTML = resultat;
}

function calculer_age() {

  var year = document.getElementById("year").value;
  var currentTime = new Date();
  var currentYear = currentTime.getFullYear();
  var age = currentYear - year;
  document.getElementById('age').innerHTML = "Vous avez " + age + " ans !";
}

function age_actuel() {

  var year = document.getElementById("annee").value;
  var month = document.getElementById("mois").value;
  var day = document.getElementById("jour").value;
  var currentTime = new Date();
  var currentYear = currentTime.getFullYear();
  var currentMonth = currentTime.getMonth();
  var currentDay = currentTime.getDate();
  var U1 = (currentYear - year) - 1;
  var U2 = currentYear - year;
  var age = 0

  if (month < currentMonth) {
    var age = U2;
  } else if (month === currentMonth && day <= currentDay) {
    var age = U2;
  } else {
    var age = U1;
  }
  document.getElementById("age_actuel").innerHTML = "Vous avez " + age + " ans !";
}

function age_date() {

  var inputDate = new Date(document.getElementById("inputDate").value);

  var inputYear = inputDate.getFullYear();
  var inputMonth = inputDate.getMonth(); 
  var inputDay = inputDate.getDate();
  var currentTime = new Date();
  var currentYear = currentTime.getFullYear();
  var currentMonth = currentTime.getMonth();
  var currentDay = currentTime.getDate();
  var age1 = currentYear - inputYear;
  var age2 = (currentYear - inputYear) - 1;
  var age = 0;
  
  if (inputMonth < currentMonth) {
    var age = age1;
  } else if (inputMonth === currentMonth && inputDay <= currentDay) {
    var age = age1;
  } else {
    var age = age2;
  }
  
  

  document.getElementById("Votre_age").innerHTML = "Vous avez " + age + " ans !";
}



function add_jour() {

  var inputDate1 = new Date(document.getElementById('inputDate1').value);
  var nbreJour = document.getElementById('jour1').value;
  var msJour = 24 * 60 * 60 * 1000;
  var nbreMs = nbreJour * msJour;
  var msDate = inputDate1.getTime();
  var newDateMs = msDate + nbreMs;
  var newDateUtc = new Date(newDateMs);
  var newDate1 = newDateUtc.toLocaleDateString("fr");

  if (nbreJour < 1) {
      newDate1 = "entrer un nombre de jour supérieur ou égale à 1";
    } else {
      newDate1 = newDate1;
    }



  document.getElementById("newDate1").innerHTML = newDate1;
}


function remove_day() {

  var inputDate2 = new Date(document.getElementById('inputDate2').value);
  var nbreJour = document.getElementById('jour2').value;
  var msJour = 24 * 60 * 60 * 1000;
  var nbreMs = nbreJour * msJour;
  var newDateMs = inputDate2 - nbreMs;
  var newDateUtc = new Date(newDateMs);
  var newDate1 = newDateUtc.toLocaleDateString('fr');

   if (nbreJour < 1) {
      newDate1 = "entrer un nombre de jour supérieur ou égale à 1";
    } else {
      newDate1 = newDate1;
    }
    
    
document.getElementById('newDate2').innerHTML = newDate1;
    
}


function between_date() {

  var inputDate1 = new Date(document.getElementById('inputDate3').value);
  var inputDate2 = new Date(document.getElementById('inputDate4').value);
  var date1Utc = inputDate1.getTime();
  var date2Utc = inputDate2.getTime();
  var msJour = 24 * 60 * 60 * 1000;
  var nbreMs = date2Utc - date1Utc;
  var nbreJour = nbreMs / msJour;
    
    if (inputDate2 < inputDate1) {
      nbreJour = -(nbreJour);
    } else {
      nbreJour = nbreJour;
    }
    
    
 document.getElementById('nbreJour2').innerHTML = nbreJour;   
    
    
}


