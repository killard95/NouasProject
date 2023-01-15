

var mot = "motivation";
var lettre = mot.split(""); /*transforme une string en tableau (chaque caractéres à un index)*/
	// var rev = lettre.reverse(); /*inverse l'ordre des elements du tableau*/
	lettre.sort();
	lettre.reverse();

	var i = 0;
	var shuffle = "";


function anagramme() {

	while (lettre[i]) {
		shuffle += `<td>${lettre[i]}</td>`;
		i ++;

	};
	
	document.getElementById("smot").innerHTML = shuffle;
};

function check() {
	var verif = "";
	var reponse = document.getElementById("reponse").value;
	if (reponse === mot) {
		verif = `Félicitations vous avez trouver la bonne réponse<br><br>
				 <img id="image" src="felicitations.jpg" alt="felicitations">`;
		
	} else {
		verif = `Malheuresement "${reponse}" n'est pas la bonne réponse.<br><br>
				 Vous avez encore deux chances de trouver la bonne réponse.<br><br>
				 <h3>2 ème tentative</h3>
				 <label>2 éme tentative</label> : <input type=text id="reponseDeux" />
				 <input type=button id="button" onClick="checkDeux()" value="valider" /><br>
				 <br><div id="verifDeux"></div>`
			
	}
	document.getElementById("verif").innerHTML = verif;
};

function checkDeux() {
var verifDeux = "";
	var reponseDeux = document.getElementById("reponseDeux").value;
	if (reponseDeux === mot) {
		verifDeux = `Félicitations vous avez trouver la bonne réponse<br><br>
				 	 <img id="image" src="felicitations.jpg" alt="felicitations">`;
	} else {
		verifDeux = `Malheuresement "${reponseDeux}" n'est pas la bonne réponse.<br><br>
					 Il ne vous reste plus qu'une seule chance de trouver la bone réponse.<br><br>
					 <h3>Derniére tentative</h3>
					 <label>Dernière tentative</label> : <input type=text id="reponseTrois" />
					 <input type=button id="button" onClick="checkTrois()" value="valider" /><br>
					 <br><div id="verifTrois"></div>`
			
	}
	document.getElementById("verifDeux").innerHTML = verifDeux;
};

function checkTrois() {
var verifTrois = "";
	var reponseTrois = document.getElementById("reponseTrois").value;
	if (reponseTrois === mot) {
		verifTrois = `Félicitations vous avez trouver la bonne réponse<br><br>
					  <img id="image" src="felicitations.jpg" alt="felicitations">`;
	} else {
		verifTrois = `Malheuresement "${reponseTrois}" n'est pas la bonne réponse.<br><br>
					  <img id="image" src="gameover.jpg" alt="gameover">`
			
	}
	document.getElementById("verifTrois").innerHTML = verifTrois;
}; 
