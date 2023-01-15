class Table {
	constructor(titre, nombre, multiplicateurZero, multiplicateurUn, multiplicateurDeux, multiplicateurTrois, multiplicateurQuatre, multiplicateurCinq, multiplicateurSix, multiplicateurSept, multiplicateurHuit, multiplicateurNeuf, multiplicateurDix) {
		this.titre = titre;
		this.nombre = nombre;
		this.multiplicateurZero = multiplicateurZero;
		this.multiplicateurUn = multiplicateurUn;
		this.multiplicateurDeux = multiplicateurDeux;
		this.multiplicateurTrois = multiplicateurTrois
		this.multiplicateurQuatre = multiplicateurQuatre;
		this.multiplicateurCinq = multiplicateurCinq;
		this.multiplicateurSix = multiplicateurSix;
		this.multiplicateurSept = multiplicateurSept;
		this.multiplicateurHuit = multiplicateurHuit;
		this.multiplicateurNeuf = multiplicateurNeuf;
		this.multiplicateurDix = multiplicateurDix;

	}
}





var myTable = new Table('Table de ', 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


function create_table() {
	
myTable.nombre = document.getElementById('number').value;

    	document.getElementById('container').innerHTML = `<table class='mx-auto table table-bordered table-striped table-success bg-light'><caption class='caption-top bg-dark fw-bolder'>${myTable.titre} ${myTable.nombre}</caption>
												  <thead><th>Nombre</th><th>x</th><th>Multiplicateur</th><th>=</th><th>Résultat</th></thead>
												  <tbody>
												  <tr><td>${myTable.nombre}</td><td>x</td><td>${myTable.multiplicateurZero}</td><td>=</td><td>${Math.round(myTable.nombre*myTable.multiplicateurZero)}</td></tr> 
												  <tr><td>${myTable.nombre}</td><td>x</td><td>${myTable.multiplicateurUn}</td><td>=</td><td>${Math.round(myTable.nombre*myTable.multiplicateurUn)}</td></tr>
												  <tr><td>${myTable.nombre}</td><td>x</td><td>${myTable.multiplicateurDeux}</td><td>=</td><td>${Math.round(myTable.nombre*myTable.multiplicateurDeux)}</td></tr>
												  <tr><td>${myTable.nombre}</td><td>x</td><td>${myTable.multiplicateurTrois}</td><td>=</td><td>${Math.round(myTable.nombre*myTable.multiplicateurTrois)}</td></tr>
												  <tr><td>${myTable.nombre}</td><td>x</td><td>${myTable.multiplicateurQuatre}</td><td>=</td><td>${Math.round(myTable.nombre*myTable.multiplicateurQuatre)}</td></tr>
												  <tr><td>${myTable.nombre}</td><td>x</td><td>${myTable.multiplicateurCinq}</td><td>=</td><td>${Math.round(myTable.nombre*myTable.multiplicateurCinq)}</td></tr>
												  <tr><td>${myTable.nombre}</td><td>x</td><td>${myTable.multiplicateurSix}</td><td>=</td><td>${Math.round(myTable.nombre*myTable.multiplicateurSix)}</td></tr>
												  <tr><td>${myTable.nombre}</td><td>x</td><td>${myTable.multiplicateurSept}</td><td>=</td><td>${Math.round(myTable.nombre*myTable.multiplicateurSept)}</td></tr>
												  <tr><td>${myTable.nombre}</td><td>x</td><td>${myTable.multiplicateurHuit}</td><td>=</td><td>${Math.round(myTable.nombre*myTable.multiplicateurHuit)}</td></tr>
												  <tr><td>${myTable.nombre}</td><td>x</td><td>${myTable.multiplicateurNeuf}</td><td>=</td><td>${Math.round(myTable.nombre*myTable.multiplicateurNeuf)}</td></tr>
												  <tr><td>${myTable.nombre}</td><td>x</td><td>${myTable.multiplicateurDix}</td><td>=</td><td>${Math.round(myTable.nombre*myTable.multiplicateurDix)}</td></tr>
												  </tbody>
												  </table>`


 if (myTable.nombre == '') {
        document.getElementById('container').innerHTML = "Veuillez entrer un nombre !"
    } else if (myTable.nombre == 'e') {
    	document.getElementById('container').innerHTML = "Veuillez entrer un nombre !"
    } else if (myTable.nombre < 0) {
    	document.getElementById('container').innerHTML = "Veuillez entrer un nombre positif !"
    } else if (myTable.nombre == -0) {
    	document.getElementById('container').innerHTML = "Veuillez entrer un nombre positif !"
    }

};






