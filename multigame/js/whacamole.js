function whacamole() {

    var moleTab = [{
        name: "moleStar",
        img:"https://image.shutterstock.com/image-vector/mole-pixel-art-260nw-1255892164.jpg"
    }, {
        name: "molePingouin",
        img:"https://image.shutterstock.com/image-vector/vector-pixel-art-ghost-isolated-600w-675217390.jpg"
    },{
        name: "moleRyo",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOCJOvvo4TkUAFalpKzlEYMHnXIqtDI-27qn7YPLM-x4f4803CPMLt7M6Lz2CMYWebjs&usqp=CAU"
    }, {
        name: "molePascal",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7oMeZJH7T9qAinDFDAfbfGSF8800OHH7hQII9MdO14OeSTKu1itTtOpCLQyA0LihbQyM&usqp=CAU"
    },{
        name: "moleMéteor",
        img:"http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/90eab71ec3e08c7.png"
    }, {
        name: "moleScorpion",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7TsD4OB1AycHszeylLQ7EuVOtSaJoPYLqS1AmenevQYC8w5QqP2RrBqtnCr3R-pudH0&usqp=CAU"
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

      var div = document.createElement("DIV")
      document.body.appendChild(div)

      for (var i = 0; i < moleTab.length; i++) {
        var mole = document.createElement("DIV")
        div.appendChild(mole)
        div.style.display = "flex"
        mole.id = moleTab[i].name
      }

      document.getElementById(elementPlay).addEventListener("click", function(){

      var moleInterval =  setInterval(() => {  var numMole = Math.trunc(Math.random() * moleTab.length)
          var moleImg = new Image(100, 200);
          moleImg.src = moleTab[numMole].img
          document.getElementById(moleTab[numMole].name).textContent = moleTab[numMole].name
          document.getElementById(moleTab[numMole].name).appendChild(moleImg)

        }
        , 1000)

      var moleTimeout = setTimeout(() => {   var numMole = Math.trunc(Math.random() * moleTab.length)
          document.getElementById(moleTab[numMole].name).textContent = ""
        }, 15000)

        document.getElementById(elementPause).addEventListener("click", function(){
          clearInterval(moleInterval)
          clearTimeout(moleTimeout)
        })
      })
}
whacamole()
