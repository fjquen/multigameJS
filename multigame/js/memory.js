/*eslint-env browser*/
function memory() {
    var memoryAnimals = [{
            id: "fruit",
            image: "https://www.le-panier-de-flo.fr/1769-thickbox_default/pitaya-rose-fruit-du-dragon-400g-la-piece.jpg",
            imageDefaut: "https://www.dcplanet.fr/wp-content/uploads/2021/12/og.jpg"
        },
        {
            id: "fruit",
            image: "https://www.le-panier-de-flo.fr/1769-thickbox_default/pitaya-rose-fruit-du-dragon-400g-la-piece.jpg",
            imageDefaut: "https://www.dcplanet.fr/wp-content/uploads/2021/12/og.jpg"
        },
        {
            id: "pizza",
            image: "https://cdnb.artstation.com/p/assets/images/images/033/443/005/large/dtxx-20191104-pizza.jpg?1609624047",
            imageDefaut: "https://www.dcplanet.fr/wp-content/uploads/2021/12/og.jpg"
        },
        {
            id: "pizza",
            image: "https://cdnb.artstation.com/p/assets/images/images/033/443/005/large/dtxx-20191104-pizza.jpg?1609624047",
            imageDefaut: "https://www.dcplanet.fr/wp-content/uploads/2021/12/og.jpg"
        }]

    var divMemory = document.createElement("DIV")
    divMemory.style.display = "flex"

     document.body.appendChild(divMemory)
    /* It's creating a button for each element in the array. It's creating a clone of the array. */
    for (var index = 0; index < memoryAnimals.length; index++) {
        var imgHidden = document.createElement("img");
        imgHidden.src = memoryAnimals[index].imageDefaut;
        imgHidden.style.width = "100%"
        imgHidden.id = "img "+index
        var btnMemory = document.createElement("BUTTON")
        var textBtn = document.createTextNode(index)
        btnMemory.appendChild(textBtn)
        btnMemory.append(imgHidden)
        btnMemory.id = memoryAnimals[index].id
        btnMemory.className = index
        btnMemory.style.width = "35%"
        btnMemory.style.background ="rgba(255, 255, 255,0.4)"
        btnMemory.style.borderColor = "rgba(255, 255, 255,0.4)"
        btnMemory.style.color = "rgba(255, 255, 255,0.4)"
       divMemory.appendChild(btnMemory)
         const collectionFlex  = document.getElementsByClassName(btnMemory.textContent);
         var random = Math.trunc(Math.random() * memoryAnimals.length)
       collectionFlex[0].style.order = random
    }
   
   
   var checkResult = []
   var numclick = 0
    var all_btn_Memory = document.querySelectorAll('button');
    all_btn_Memory.forEach(function (btnMemory,index) {
        btnMemory.addEventListener("click", function (e) {
            numclick++
            var imgView = document.createElement("img");
            imgView.style.width = "100%"
            var idMemory = btnMemory.getAttribute("id");
            var classMemory = btnMemory.getAttribute("class");
            var wordTest = "img "+btnMemory.textContent
            var element = document.getElementById(wordTest);
            const collection = document.getElementsByClassName(btnMemory.textContent);
            element.style.display = "none"
            collection[0].disabled = true
            imgView.src = memoryAnimals[btnMemory.textContent].image;
            btnMemory.append(imgView)
            checkResult.push(idMemory)
            for(var checkIndex = 0; checkIndex < checkResult.length; checkIndex++ ){
                if(checkResult[checkIndex] === checkResult[checkIndex+1]){
                   var buttonElement = document.querySelectorAll("#"+checkResult[checkIndex])
                   for (var i = 0; i < buttonElement.length; i++) {
                     buttonElement.item(i).style.display = "none"
                    }
                }else if( checkResult[checkIndex] !== checkResult[checkIndex+1] && checkResult[checkIndex+1] != null){
                    console.log(numclick)
                    
                    switch (numclick) {
                        case 2:
                            location.reload()
                            break;
                        case memoryAnimals.length:
                            location.reload()
                            break;
                        default:
                            e.preventDefault
                    }
                }
            }
            
              
                e.preventDefault
            
            
        })
    });
}
memory()