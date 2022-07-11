function shifumi() {
  var tabJanken = ["pierre","feuille","ciseau"]

  for (let index = 0; index < tabJanken.length; index++) {
    const element = tabJanken[index]

    var btn = document.createElement("DIV")
    var textBtn = document.createTextNode(element)
    btn.appendChild(textBtn)
    document.body.appendChild(btn)
    btn.id=element

  }

  var textHtml = document.createElement("p")
  var tabResult = ["vous avez perdu","vous avez gagné","vous etes à égalité faite pas chier"]
  var textResult


  /**
   * The function arbitre() is a function that takes two arguments, player and max.
   * The function will generate a random number between 0 and max.
   * The function will then compare the random number to the player's choice.
   * The function will then return the result of the comparison.
   * @param player - The player's choice.
   * @param max - The maximum number of elements in the array.
   */
  function arbitre(player,max) {
    var idRandom = Math.floor(Math.random() * max);

    switch (tabJanken[idRandom]) {
      case "feuille":
          if(player === "pierre"){
            textResult = document.createTextNode(tabResult[0])
            textHtml.appendChild(textResult)
            document.body.appendChild(textHtml)
          }else if(player === "ciseau"){
            textResult = document.createTextNode(tabResult[1])
            textHtml.appendChild(textResult)
            document.body.appendChild(textHtml)
          }else if(player === "feuille"){
            textResult = document.createTextNode(tabResult[2])
            textHtml.appendChild(textResult)
            document.body.appendChild(textHtml)
          }else{
            console.log("probleme")
          }

        break;
      case "pierre":
          if(player === "pierre"){
            console.log("egalité")
            textResult = document.createTextNode(tabResult[2])
            textHtml.appendChild(textResult)
            document.body.appendChild(textHtml)
          }else if(player === "ciseau"){
            console.log("perdu")
            textResult = document.createTextNode(tabResult[0])
            textHtml.appendChild(textResult)
            document.body.appendChild(textHtml)
          }else if(player === "feuille"){
            console.log("gagné")
            textResult = document.createTextNode(tabResult[1])
            textHtml.appendChild(textResult)
            document.body.appendChild(textHtml)
          }else{
            console.log("probleme")
          }

        break;
      case "ciseau":
          if(player === "pierre"){
            console.log("gagne")
            textResult = document.createTextNode(tabResult[1])
            textHtml.appendChild(textResult)
            document.body.appendChild(textHtml)
          }else if(player === "ciseau"){
            console.log("egalité")
            textResult = document.createTextNode(tabResult[2])
            textHtml.appendChild(textResult)
            document.body.appendChild(textHtml)
          }else if(player === "feuille"){
            console.log("perdu")
            textResult = document.createTextNode(tabResult[0])
            textHtml.appendChild(textResult)
            document.body.appendChild(textHtml)
          }else{
            console.log("probleme")
          }

        break;
      default:
        console.log('erreur')
        break;
    }
  }
      let all_btn = document.querySelectorAll('DIV');
      all_btn.forEach(function(btn) {
          btn.addEventListener("click", function() {
            textHtml.innerHTML = ""
            arbitre(btn.textContent,3)
          });
      });
}

shifumi()
