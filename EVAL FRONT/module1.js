// Module 1

    // Variables contenant l'endroit où l'on va projeter l'image et les "td" du "table"
    let cible = document.getElementById("imgModule1");
    let cells = document.getElementsByClassName("cell");
    // Variable des liens d'images
    let arrImage = ["https://images6.alphacoders.com/749/749966.png",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJQnAxu_8UfTsWOEsyGCFC3EeDIaa_v75NA&usqp=CAU",
                    "https://jolly-roger.fr/wp-content/uploads/2022/08/affiche-wanted-one-piece-luffy.jpg",
                    "https://m.media-amazon.com/images/I/91EUW0K1AWL._AC_SL1500_.jpg",
                    "https://i.skyrock.net/3989/41953989/pics/1676397652.jpg",
                    "https://newsgeek.com.br/wp-content/uploads/2023/01/Luffy-Gear-5.jpg"  
                    ];
    
    // On créer un evenement pour faire disparaitre l'image lorsqu'on enleve la souris du tableau
    tableModule1.addEventListener("mouseout", ()=>{
        cible.innerHTML = "";
    })

    // On boucle pour créer un évènement lorsque l'on passe sur un des "td" (il y a autant d'images que de "td")
    for (let i = 0 ; i < arrImage.length; i++){
        cells[i].addEventListener("mouseover", ()=>{
            // On affiche l'image, correspondant au "td" survolé, dans la cible
            cible.innerHTML = `<img src=${arrImage[i]}>`;
        })
    }