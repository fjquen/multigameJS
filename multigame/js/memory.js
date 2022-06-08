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
        var img = document.createElement("img");
        img.src = memoryAnimals[index].imageDefaut;
        img.style.width = "100%"
        var btn = document.createElement("BUTTON")
        var textBtn = document.createTextNode(index)
        btn.appendChild(textBtn)
        document.body.appendChild(btn)
        btn.append(img)
        btn.id = memoryAnimals[index].id
        btn.style.width = "35%"

    }




    var all_btn = document.querySelectorAll('button');
    all_btn.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var idMemory = btn.getAttribute("id");
            // eslint-disable-next-line no-console
            console.log(idMemory)
            // eslint-disable-next-line no-console
            console.log(btn.textContent)
            img.src = memoryAnimals[btn.textContent].image;
            btn.append(img)
        })
    });

}
memory()