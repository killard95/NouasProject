// Affichage de chacun des modules

    // Variables contenant les boutons du menu et chacune des sections du HTML
    let module1 = document.getElementById("Module1");
    let module2 = document.getElementById("Module2");
    let module3 = document.getElementById("Module3");
    let module4 = document.getElementById("Module4");
    let module5 = document.getElementById("Module5");
    let section1 = document.getElementById("secModule1");
    let section2 = document.getElementById("secModule2");
    let section3 = document.getElementById("secModule3");
    let section4 = document.getElementById("secModule4");
    let section5 = document.getElementById("secModule5");
    
    // On ajoute un evenement au click sur un des bouton du menu pour modifier le display (par défaut none)
    module1.addEventListener("click",()=> {
        // Si le display est flex on le passe a none
        if (section1.style.display==="flex"){
            section1.style.display="none";
            // Sinon on passe le display du module selectionné en flex et tous les autres en none
        } else {
            section1.style.display="flex";
            section2.style.display="none";
            section3.style.display="none";
            section4.style.display="none";
            section5.style.display="none";
        }
    })
    module2.addEventListener("click",()=> {
        if (section2.style.display==="flex"){
            section2.style.display="none";
        } else {
            section2.style.display="flex";
            section1.style.display="none";
            section3.style.display="none";
            section4.style.display="none";
            section5.style.display="none";
        }
    })
    module3.addEventListener("click",()=> {
        if (section3.style.display==="flex"){
            section3.style.display="none";
        } else {
            section3.style.display="flex";
            section1.style.display="none";
            section2.style.display="none";
            section4.style.display="none";
            section5.style.display="none";
        }
    })
    module4.addEventListener("click",()=> {
        if (section4.style.display==="flex"){
            section4.style.display="none";
        } else {
            section4.style.display="flex";
            section1.style.display="none";
            section2.style.display="none";
            section3.style.display="none";
            section5.style.display="none";
        }
    })
    module5.addEventListener("click",()=> {
        if (section5.style.display==="flex"){
            section5.style.display="none";
        } else {
            section5.style.display="flex";
            section1.style.display="none";
            section2.style.display="none";
            section3.style.display="none";
            section4.style.display="none";
        }
    })