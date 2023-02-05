// Module 5

    // Variables pour récupérer les éléments du module
    let myDiv = document.getElementById("cibleModule5");
    let check = document.getElementById("checkboxModule5");
    let menu = document.createElement("select")
    let newDiv = document.createElement("div");
    let radio = document.getElementById("radioModule5");
    // Variable vide pour stocker les checkbox checked
    let nbrCheck = "";
    
    // Ajout d'un premier évenement au changement des checkbox
    check.addEventListener("change", ()=>{
        // on boucle pour analyser chacun des checkbox
        for (let i=0;i<check.length;i++){
            // Conditions si un checkbox est checked et s'il n'est pas déja enregistré dans la variable nbrCheck
            if (check[i].checked === true && ! nbrCheck.includes(check[i].value)){
                // Si la condition est respecté on ajoute la valeur de la checkbox checked dans la variable nbrCheck
                nbrCheck += `${check[i].value} `
                // Sinon on la supprime de nbrCCheck
            } else if (check[i].checked === false){
                nbrCheck = nbrCheck.replace(check[i].value,"")
            }
            // Ajout d'un deuxiéme événement au changement du "radio"
            radio.addEventListener("change", ()=>{
                // Si le radio choisi et "div"
                if (radio[0].checked === true){
                    // Si il y a un childNodes on le supprime
                    if (myDiv.hasChildNodes()){
                        myDiv.removeChild(myDiv.children[0])
                    }
                    // On génére une "div" qu'on attache au parent et on y insére le résultat de la variable nbrCheckbox
                    myDiv.appendChild(newDiv);
                    newDiv.innerHTML = nbrCheck
                // Si le radio choisi et "opt"
                } else if (radio[1].checked === true){
                    // Si il y a un childNodes on le supprime
                    if (myDiv.hasChildNodes()){
                        myDiv.removeChild(myDiv.children[0])
                    }
                    // On génére une "option" qu'on attache au parent et on y insére le résultat de la variable nbrCheckbox
                    myDiv.appendChild(menu);
                    let option = document.createElement("option");
                    menu.appendChild(option);
                    option.innerHTML = nbrCheck;
                    }   
                })
            }
    });
        


        
        // check.addEventListener("change", ()=>{
        //     for (let i=0;i<4;i++){
        //         if (check[i].checked === true && ! nbrCheck.includes(check[i].value)){
        //              nbrCheck += `${check[i].value} `
        //             } else if (check[i].checked === false){
        //                 nbrCheck = nbrCheck.replace(check[i].value,"")
        //     }
        // }
        //     myDiv.innerHTML = nbrCheck
        // });