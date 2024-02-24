var changeButton = window.document.getElementById('change-btn')
var bColor = window.document.getElementById('change-color')
changeButton.addEventListener('click', changeBackground)

function changeBackground(){
    var colorR = Math.floor(Math.random() * 256)
    var colorG = Math.floor(Math.random() * 256)
    var colorB = Math.floor(Math.random() * 256)
    console.log(colorR,colorG,colorB)
    bColor.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`
}