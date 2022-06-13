/*eslint-env browser*/
function memory() {
    var memoryAnimals = [{
            id: "fruit",
            image: "https://mesjoursferies.com/wp-content/uploads/sites/8/2020/03/date-jour-ferie-fete-travail-1170x694.jpg",
            imageDefaut: "https://www.dcplanet.fr/wp-content/uploads/2021/12/og.jpg"
        },
        {
            id: "fruit",
            image: "https://mesjoursferies.com/wp-content/uploads/sites/8/2020/03/date-jour-ferie-fete-travail-1170x694.jpg",
            imageDefaut: "https://www.dcplanet.fr/wp-content/uploads/2021/12/og.jpg"
        },
        {
            id: "pizza",
            image: "https://mesjoursferies.com/wp-content/uploads/sites/8/2020/03/date-jour-ferie-fete-travail-1170x694.jpg",
            imageDefaut: "https://www.dcplanet.fr/wp-content/uploads/2021/12/og.jpg"
        },
        {
            id: "pizza",
            image: "https://mesjoursferies.com/wp-content/uploads/sites/8/2020/03/date-jour-ferie-fete-travail-1170x694.jpg",
            imageDefaut: "https://www.dcplanet.fr/wp-content/uploads/2021/12/og.jpg"
        }]



    /* It's creating a button for each element in the array. It's creating a clone of the array. */
    for (var index = 0; index < memoryAnimals.length; index++) {
        var imgHidden = document.createElement("img");
        imgHidden.src = memoryAnimals[index].imageDefaut;
        imgHidden.style.width = "100%"
        imgHidden.id = "img "+index
        var btn = document.createElement("BUTTON")
        var textBtn = document.createTextNode(index)
        btn.appendChild(textBtn)
        document.body.appendChild(btn)
        btn.append(imgHidden)
        btn.id = memoryAnimals[index].id
        btn.style.width = "35%"

    }


    var numClick = 0
    var all_btn = document.querySelectorAll('button');
    all_btn.forEach(function (btn,index) {
        btn.addEventListener("click", function (e) {
            numClick++
            var imgView = document.createElement("img");
            imgView.style.width = "100%"
            var idMemory = btn.getAttribute("id");
            var wordTest = "img "+btn.textContent
            var element = document.getElementById(wordTest);
           

            switch (numClick) {
              case 1:
            element.style.display = "none"
            imgView.src = memoryAnimals[btn.textContent].image;
            btn.append(imgView)
                break;
              case 2:
                element.style.display = "none"
                imgView.src = memoryAnimals[btn.textContent].image;
                btn.append(imgView)
                
                break
              default:
                e.preventDefault
                break
              
            }
            
            
        })
    });
}
memory()