function create_table() {
    var tb ='';
    var th ='';
    const debutTableau = "<table class='mx-auto table table-bordered table-striped table-success bg-light'>";
    const finTableau = '</table>';
    const debutHead = "<thead class='table-dark'>";
    const finHead = '</thead>';
    const debutTitre = "<caption class='caption-top bg-dark fw-bolder'>";
    const finTitre = '</caption>';
    const debutBody = "<tbody>";
    const finBody = '</tbody>';
    const head = ('<th>' + 'Nombre' + '</th>' + '<th>' + 'x' + '</th>' + '<th>' + 'Multiplicateur' + '</th>' + '<th>' + '=' + '</th>' + '<th>' + 'Résultat' + '</th>' + '</tr>');
    var debut = parseInt(document.getElementById('debut').value);
    var fin = parseInt(document.getElementById('fin').value);
    var width = ""

    if ((((fin - (debut - 1))% 3) == 0) && (((fin - (debut - 1))% 2) == 0)) {
    width = "<div class='col-4'>";
    } else if (((fin - (debut - 1))% 3) == 0) {
    width = "<div class='col-4'>";
    } else if (((fin - (debut - 1))% 2) == 0) {
     width = "<div class='col-6'>";
    } else {
    width = "<div class='col'>";
    };
/*Cette boucle permet de créer les tables de multiplication.
La premiere boucle avec j permet de créer toutes les tables de multiplication.
La deuxieme boucle avec i permet de créer toutes les lignes des tables.
La derniere ligne apres les deux boucles permet de fermer chaque tables.
*/
   		for (var j = debut; j <= fin; j ++) {
   		tb +=  (width + debutTableau + debutTitre + 'Table de ' + j + finTitre + debutHead + head + finHead + debutBody);
			for (let i = 0; i < 11; i ++) {
			tb += ("<tr>" + '<td>' + j + '</td>' + '<td>' + ' x ' + '</td>' + '<td>' + i + '</td>' + '<td>' + '=' + '</td>' + '<td>' + i * j + '</td>' + '</tr>');
    		};
        tb += finBody + finTableau + "</div>";
		};



    if (debut > fin) {
        window.alert("la table de debut doit etre plus petite que la table de fin");
    } else  if (debut < 0 || fin < 0) {
        window.alert("merci de mettre une table de début au moins égale à 0")
    } else {
        document.getElementById('container').innerHTML = tb;
    };
    
};



function pdf() {

    var pdf = new jsPDF('p','pt','a4');
        pdf.internal.scaleFactor = 1.7;

    var options = {
        pagesplit: true,
    };



    pdf.addHTML(document.getElementById('container'), options, function () {
    pdf.save('table.pdf');
    });
}







