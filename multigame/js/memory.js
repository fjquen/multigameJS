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
        var btnMemory = document.createElement("BUTTON")
        var textBtn = document.createTextNode(index)
        btnMemory.appendChild(textBtn)
        document.body.appendChild(btnMemory)
        btnMemory.append(imgHidden)
        btnMemory.id = memoryAnimals[index].id
        btnMemory.className = index
        btnMemory.style.width = "35%"

    }


   var checkResult = []
    var all_btn_Memory = document.querySelectorAll('button');
    all_btn_Memory.forEach(function (btnMemory,index) {
        btnMemory.addEventListener("click", function (e) {
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
            console.log(checkResult)
              
                e.preventDefault
            
            
        })
    });
}
memory()