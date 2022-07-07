function whacamole() {

    var moleTab = [{
        name: "moleStar"
    }, {
        name: "molePingouin"
    },{
        name: "moleRyo"
    }, {
        name: "molePascal"
    },{
        name: "moleMéteor"
    }, {
        name: "moleScorpion"
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
        var btnMole = document.createElement("DIV")
        document.body.appendChild(btnMole)
        btnMole.id = moleTab[i].name
      }
var pointsMole = 0
      document.getElementById(elementPlay).addEventListener("click", function(){
        var moleInterval = setInterval(function() {  var numMole = Math.trunc(Math.random() * moleTab.length)

          document.getElementById(moleTab[numMole].name).textContent = moleTab[numMole].name
          var myTimeout = setTimeout(function(){
            document.getElementById(moleTab[numMole].name).textContent = null

          }, 5000);

          document.getElementById(elementPause).addEventListener("click", function(){
            clearTimeout(myTimeout)
          });
        }
        , 1000)

        document.getElementById(elementPause).addEventListener("click", function(){
          clearInterval(moleInterval)
        });
      });
var all_btn_Memory = document.querySelectorAll('DIV');
all_btn_Memory.forEach(function (btnMole) {
btnMole.addEventListener("click", function(){
console.log(btnMole.textContent)
    if(btnMole.textContent !== ""){
      pointsMole++
      console.log(btnMole)
      console.log(pointsMole)
    }else {
      pointsMole--
      console.log(btnMole)
      console.log(pointsMole)
    }
  })
})


}
whacamole()
