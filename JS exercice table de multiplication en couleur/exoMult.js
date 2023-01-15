function create_table() {


    var n = parseInt(document.getElementById("n").value);
    var m = parseInt(document.getElementById("m").value);
    var tableau ='';


/*Cette boucle permet de créer les table de multiplication.
La premiere boucle avec j permet de créer toutes les tables de multiplication.
La deuxieme boucle avec i permet decréer toutes les lignes des tables.
La derniere ligne apres les deux boucles permet de fermer chaque tables.
*/
   		for (var j = n; j <= m; j ++) {
   		tableau += `<table><caption>Table de ${j}</caption><thead><th>Nombre</th><th>x</th><th>Multiplicateur</th><th>=</th><th>Résultat</th></tr></thead><tbody>`;
			for (let i = 0; i < 11; i ++) {
			tableau += `<tr><td>${j}</td><td>x</td><td>${i}</td><td>=</td><td>${i*j}</td></tr>`;
    		};
        tableau += `</tbody></table>`;
		};
        
    if (n < 0) {
        window.alert("La table de début doit etre au moins égale à 0")
        } else if (m < n) {
        window.alert("La table de fin doit etre supérieur ou égale à la table de début")
        } else {
        document.getElementById('tbody').innerHTML = tableau;
    }

};

function couleur_aleatoire() {

    var tab = document.getElementsByTagName('table');
    var cap = document.getElementsByTagName('caption');
    // var tr = document.getElementsByTagName('tr');


        for (var s = 0; s < tab.length; s ++) {
        // for (var s = 0; s < tr.length; s ++) {
            tab[s].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")" ;
            // tr[s].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")" 
        }
        for (var c = 0; c < cap.length; c ++) {
            cap[c].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")" ;
        }
 };
