// Module 2

    // Variable contenant le bouton et la cible
    let buttonModule2 = document.getElementById("buttonModule2");
    let cibleModule2 = document.getElementById("cibleModule2");
    // Variables pour la création de la table ("table", "thead", "th", "tbody")
    let table = document.createElement("TABLE");
    let thead = document.createElement("THEAD");
    let th1 = document.createElement("TH");
    let th2 = document.createElement("TH");
    let tbody = document.createElement("TBODY");


    // On ajoute un evenement au click sur le bouton
    buttonModule2.addEventListener("click", ()=>{
        // Variables pour la récupération des valeurs entrées dans les 2 inputs
        // On supprime tous les espaces au début et à la fin de l'input avec la méthode ".trim()"
        let nom = (document.getElementById("nom").value).trim();
        let prenom = (document.getElementById("prenom").value).trim();
        
        
        // On pose une condition au cas où les champs ne sont pas remplis
        // Afin de ne pas créer de lignes vides
        // Si les champs sont remplis on continue le programme
        if (nom !== "" && prenom !== ""){
            // Variables pour la suite de la création de la table (les "tr" et les "td")
            let ligne = document.createElement("TR");
            let cell1 = ligne.insertCell(0);
            let cell2 = ligne.insertCell(1);
            // ici on rattache les éléments au parents
            cibleModule2.appendChild(table);
            table.appendChild(thead);
            thead.appendChild(th1);
            thead.appendChild(th2);
            table.appendChild(tbody);
            tbody.appendChild(ligne);
            // On ajoute du texte dans les "th"
            th1.innerHTML = "NOM";
            th2.innerHTML = "PRENOM";
            // On ajoute les valeurs entrées, dans les inputs, dans les "td" nouvellement créées
            cell1.innerHTML = nom;        
            cell2.innerHTML = prenom;
        // Si les champs ne sont pas remplis on affiche un pop-up pour demander de remplir les champs vides
        } else {
            window.alert("Merci de remplir les champs");
        }
    })