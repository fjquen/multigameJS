function whacamole() {

    var moleTab = [{
        name: "moleStar",
        hole: false
    }, {
        name: "molePingouin",
        hole: false
    }]




      var elementPause = "pause"
      var btn = document.createElement("BUTTON")
      var textBtn = document.createTextNode(elementPause)
      btn.appendChild(textBtn)
      document.body.appendChild(btn)
      btn.id=elementPause


      var elementPlay = "play"
      var btn = document.createElement("BUTTON")
      var textBtn = document.createTextNode(elementPlay)
      btn.appendChild(textBtn)
      document.body.appendChild(btn)
      btn.id=elementPlay
      document.getElementById(elementPlay).addEventListener("click", function(){
        var moleInterval = setInterval(function() {  var numMole = Math.trunc(Math.random() * moleTab.length)
        moleTab[numMole].hole = true
        console.log(moleTab[numMole].name + " " + moleTab[numMole].hole)}, 1000)

        console.log(moleInterval);

        document.getElementById(elementPause).addEventListener("click", function(){
          clearInterval(moleInterval)
        });
      });
}
whacamole()
