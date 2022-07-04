function whacamole() {

    var moleTab = [{
        name: "moleStar",
        hole: null
    }, {
        name: "molePingouin",
        hole: null
    },{
        name: "moleRyo",
        hole: null
    }, {
        name: "molePascal",
        hole: null
    },{
        name: "moleMéteor",
        hole: null
    }, {
        name: "moleScorpion",
        hole: null
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

      for (var i = 0; i < moleTab.length; i++) {
        var btnMole = document.createElement("BUTTON")
        var textBtn = document.createTextNode("trou")
        btnMole.appendChild(textBtn)
        document.body.appendChild(btnMole)
        btnMole.id = moleTab[i].name
      }

      document.getElementById(elementPlay).addEventListener("click", function(){
        var moleInterval = setInterval(function() {  var numMole = Math.trunc(Math.random() * moleTab.length)

          console.log(moleTab[numMole].name)
          document.getElementById(moleTab[numMole].name).textContent = moleTab[numMole].name
          var myTimeout = setTimeout(function(){
            document.getElementById(moleTab[numMole].name).textContent = moleTab[numMole].hole
          }, 5000);
        }
        , 1000)

        document.getElementById(elementPause).addEventListener("click", function(){
          clearInterval(moleInterval)
        });



      });
}
whacamole()
