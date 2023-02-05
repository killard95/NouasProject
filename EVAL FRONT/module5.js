        // Module 5
        let myDiv = document.getElementById("cibleModule5");
        let nbrCheck = "";
        let check = document.getElementById("checkboxModule5");
        let menu = document.createElement("select")
        let newDiv = document.createElement("div");
        
        
        let radio = document.getElementById("radioModule5");
        check.addEventListener("change", ()=>{
            for (let i=0;i<check.length;i++){
                if (check[i].checked === true && ! nbrCheck.includes(check[i].value)){
                    nbrCheck += `${check[i].value} `
                } else if (check[i].checked === false){
                    nbrCheck = nbrCheck.replace(check[i].value,"")
                }
                radio.addEventListener("change", ()=>{
                    if (radio[0].checked === true){
                        if (myDiv.hasChildNodes()){
                            myDiv.removeChild(myDiv.children[0])
                        }
                        myDiv.appendChild(newDiv);
                        newDiv.innerHTML = nbrCheck
                    } else if (radio[1].checked === true){
                        if (myDiv.hasChildNodes()){
                            myDiv.removeChild(myDiv.children[0])
                        }
                        console.log(nbrCheck)
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