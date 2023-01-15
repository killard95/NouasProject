
function add_month() {

  var inputDate1 = new Date(document.getElementById('inputDate1').value);
  var nbreMois = document.getElementById("mois").value;
  var newMois = inputDate1.setMonth(inputDate1.getMonth() + parseInt(nbreMois));
  var newDateUtc = new Date(newMois);
  var newDate = newDateUtc.toLocaleDateString('fr');

  if (nbreMois < 1) {
      newDate = "entrer un nombre de mois supérieur ou égale à 1";
    } else {
      newDate = newDate;
    }

  document.getElementById("newDate").innerHTML = newDate;
}



function remove_month() {

  var inputDate1 = new Date(document.getElementById('inputDate2').value);
  var nbreMois = document.getElementById("mois1").value;
  var newMois = inputDate1.setMonth(inputDate1.getMonth() - parseInt(nbreMois));
  var newDateUtc = new Date(newMois);
  var newDate = newDateUtc.toLocaleDateString('fr');

  if (nbreMois < 1) {
      newDate = "entrer un nombre de mois supérieur ou égale à 1";
    } else {
      newDate = newDate;
    }

  document.getElementById("newDate1").innerHTML = newDate;
}


function add_year(){

  var inputDate1 = new Date(document.getElementById('inputDate3').value);
  var nbreYear = document.getElementById('year1').value;
  var newYear = inputDate1.setFullYear(inputDate1.getFullYear() + parseInt(nbreYear));
  var newDateUtc = new Date(newYear);
  var newDate = newDateUtc.toLocaleDateString('fr');

  if (nbreYear < 1) {
    newDate = "entrer un nombre d'année supérieur ou égale à 1";
  } else {
    newDate = newDate;
  }

  document.getElementById('newDate2').innerHTML = newDate;
}


function remove_year() {

  var inputDate1 = new Date(document.getElementById('inputDate4').value);
  var nbreYear = document.getElementById('year2').value;
  var newYear = inputDate1.setFullYear(inputDate1.getFullYear() - parseInt(nbreYear));
  var newDateUtc = new Date(newYear);
  var newDate = newDateUtc.toLocaleDateString('fr');

  if (nbreYear < 1) {
    newDate = "entrer un nombre d'année supérieur ou égale à 1";
  } else {
    newDate = newDate;
  }

  document.getElementById('newDate3').innerHTML = newDate;
}


function add_hours() {

  var inputDate1 = document.getElementById('inputDate5').valueAsNumber;
  var nbreHour = document.getElementById('hour1').value;
  var hourMs = nbreHour * (60 * 60 * 1000);
  var newHour = inputDate1 + hourMs;
  var dateObj = new Date(newHour);
  var hours = dateObj.getUTCHours();
  var minutes = dateObj.getUTCMinutes();
  var newTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');

  if (nbreHour < 1) {

    var newTime = "entrer un nombre d'heures supérieur ou égale à 1";
  } else {
    var newTime = newTime;
  }
  

  

  document.getElementById("newDate4").innerHTML = newTime;
}


function remove_hour() {

  var inputDate1 = document.getElementById('inputDate6').valueAsNumber;
  var nbreHour = document.getElementById('hour2').value;
  var hourMs = nbreHour * (60 * 60 * 1000);
  var newHour = inputDate1 - hourMs;
  var dateObj = new Date(newHour);
  var hours = dateObj.getUTCHours();
  var minutes = dateObj.getUTCMinutes();
  var newTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');

  if (nbreHour < 1) {

    var newTime = "entrer un nombre d'heures supérieur ou égale à 1";
  } else {
    var newTime = newTime;
  }
  

  

  document.getElementById("newDate5").innerHTML = newTime;
}


function add_minute() {

  var inputDate1 = document.getElementById('inputDate7').valueAsNumber;
  var nbreHour = document.getElementById('minute1').value;
  var hourMs = nbreHour * (60 * 1000);
  var newHour = inputDate1 + hourMs;
  var dateObj = new Date(newHour);
  var hours = dateObj.getUTCHours();
  var minutes = dateObj.getUTCMinutes();
  var newTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');

  if (nbreHour < 1) {

    var newTime = "entrer un nombre de minutes supérieur ou égale à 1";
  } else {
    var newTime = newTime;
  }
  

  

  document.getElementById("newDate6").innerHTML = newTime;
}


function remove_minute() {

  var inputDate1 = document.getElementById('inputDate8').valueAsNumber;
  var nbreHour = document.getElementById('minute2').value;
  var hourMs = nbreHour * (60 * 1000);
  var newHour = inputDate1 - hourMs;
  var dateObj = new Date(newHour);
  var hours = dateObj.getUTCHours();
  var minutes = dateObj.getUTCMinutes();
  var newTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');

  if (nbreHour < 1) {

    var newTime = "entrer un nombre de minutes supérieur ou égale à 1";
  } else {
    var newTime = newTime;
  }
  

  

  document.getElementById("newDate7").innerHTML = newTime;
}