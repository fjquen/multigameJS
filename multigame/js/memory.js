function memory() {
    var memoryAnimals = [{id:1, image:"https://mesjoursferies.com/wp-content/uploads/sites/8/2020/03/date-jour-ferie-fete-travail-1170x694.jpg",imageDefaut:"https://www.dcplanet.fr/wp-content/uploads/2021/12/og.jpg"},
                        {id:2, image:"https://mesjoursferies.com/wp-content/uploads/sites/8/2020/03/date-jour-ferie-fete-travail-1170x694.jpg",imageDefaut:"https://www.dcplanet.fr/wp-content/uploads/2021/12/og.jpg"},
                        {id:3, image:"https://mesjoursferies.com/wp-content/uploads/sites/8/2020/03/date-jour-ferie-fete-travail-1170x694.jpg",imageDefaut:"https://www.dcplanet.fr/wp-content/uploads/2021/12/og.jpg"},
                        {id:4, image:"https://mesjoursferies.com/wp-content/uploads/sites/8/2020/03/date-jour-ferie-fete-travail-1170x694.jpg",imageDefaut:"https://www.dcplanet.fr/wp-content/uploads/2021/12/og.jpg"}]
    
    

   
    /* It's creating a button for each element in the array. It's creating a clone of the array. */
    for (let index = 0; index < memoryAnimals.length; index++) {
        const iDanimal = memoryAnimals[index].id
        var img = document.createElement("img");
        img.src = memoryAnimals[index].imageDefaut;
        img.style.width="100%"
        var btn = document.createElement("BUTTON")
        var textBtn = document.createTextNode(iDanimal)
        btn.appendChild(textBtn)
        document.body.appendChild(btn)
        btn.append(img)
        btn.id=iDanimal
        btn.style.width="35%"
        
    }
    

    let all_btn = document.querySelectorAll('button');
    all_btn.forEach(function(btn) {
            btn.addEventListener("click", function() {
                    const idMemory = btn.getAttribute("id");
                    console.log(idMemory)
                
            })
    });
}
memory()