function whacamole() {

    var moleTab = [{
        name: "moleStar",
        hole: false
    }, {
        name: "molePingouin",
        hole: false
    },{
        name: "moleRyo",
        hole: false
    }, {
        name: "molePascal",
        hole: false
    },{
        name: "moleMéteor",
        hole: false
    }, {
        name: "moleScorpion",
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

      for (var i = 0; i < moleTab.length; i++) {
        var btnMole = document.createElement("BUTTON")
        var textBtn = document.createTextNode(moleTab[i].hole)
        btnMole.appendChild(textBtn)
        document.body.appendChild(btnMole)
        btnMole.id = moleTab[i].name
      }

      document.getElementById(elementPlay).addEventListener("click", function(){
        var moleInterval = setInterval(function() {  var numMole = Math.trunc(Math.random() * moleTab.length)
        moleTab[numMole].hole = true

        if(moleTab[numMole].hole === true){
          console.log(moleTab[numMole].name)
          document.getElementById(moleTab[numMole].name).textContent = moleTab[numMole].name
        }}
        , 1000)

        console.log(moleInterval);

        document.getElementById(elementPause).addEventListener("click", function(){
          clearInterval(moleInterval)
        });
      });
}
whacamole()
