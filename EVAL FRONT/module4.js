        // Module4

        let ul = document.getElementById("ulModule4");
        let arrLi = ul.getElementsByTagName("li");
        let up = document.getElementById("up")
        let down = document.getElementById("down")
        let li1 = arrLi[0]
        let li2 = arrLi[1]
        let li3 = arrLi[2]
        let li4 = arrLi[3]
   
        
        up.addEventListener("click", ()=>{ 
            if (li1 == arrLi[1] ) {
                li2.insertAdjacentElement('beforebegin', li1);
            }else if (li1 == arrLi[2]){
                li3.insertAdjacentElement('beforebegin', li1);
            }else if (li1 == arrLi[3]){
                li4.insertAdjacentElement('beforebegin', li1);
            } else if (li1 == arrLi[0]){
                li4.insertAdjacentElement('afterend', li1);
            }
        })

        down.addEventListener("click", ()=>{
            if (li1 == arrLi[0] ) {
                li2.insertAdjacentElement('afterend', li1);
            }else if (li1 == arrLi[1]){
                li3.insertAdjacentElement('afterend', li1);
            }else if (li1 == arrLi[2]){
                li4.insertAdjacentElement('afterend', li1);
            } else if (li1 == arrLi[3]){
                li2.insertAdjacentElement('beforebegin', li1);
            }
        })