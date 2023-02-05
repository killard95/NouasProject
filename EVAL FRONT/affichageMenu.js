// Affichage du menu

    //  Variable du bouton et du menu
   let displayNav = document.getElementById("displayNav");
   let nav = document.getElementById("nav");

    // A chaque appuie sur le bouton, le menu change de display (au départ le display est none)
    displayNav.addEventListener("click",()=> {
        // Si le display est flex, on le passe en none
        if (nav.style.display === "flex" ){
            nav.style.display = "none";
            // Sinon, on le passe en flex
        } else {
            nav.style.display = "flex";
        }
    })

// Ajout d'une classe active sur le bouton clicker

    // HTMLCollection de tous les boutons compris dans le menu
    let btn = nav.getElementsByClassName("btn");

    // On boucle sur chacun des éléments de la HTMLCollection
    for (let i = 0; i < btn.length; i++){
        // On ajoute un evenements au clic sur un des boutons
        btn[i].addEventListener("click", function() {
            // HTMLCollection des boutons ayant la classe active
            let actif = document.getElementsByClassName("active");
            // Si aucun bouton n'a la classe active, on la rajoute
            if (actif.length > 0){
                actif[0].className = actif[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }