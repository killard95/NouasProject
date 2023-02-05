// Module 3
    
    // Variable qui récupére le texte a modifier
    let lorem = document.getElementById("lorem");
    // On ajoute un évènement au changement du menu déroulant
    style.addEventListener("change", ()=>{
        // Variable qui va prendre en compte le choix dans le menu déroulant
        let style = document.getElementById("style").value;
        // Conditions Pour appliquer le style au texte selon le choix sélectionné 
        if ( style === "rouge"){
            lorem.style.color = "tomato";
            lorem.style.backgroundColor = "darkred";
            lorem.style.textAlign = "left";
        } else if ( style === "vert"){
            lorem.style.color = "lime";
            lorem.style.backgroundColor = "darkgreen";
            lorem.style.textAlign = "right";
        } else if (style === "aleatoire"){
            lorem.style.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
            lorem.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";;
            lorem.style.textAlign = "justify";
        } else {
            lorem.style.color = "black";
            lorem.style.backgroundColor = "white";
            lorem.style.textAlign = "unset";
        }
    })