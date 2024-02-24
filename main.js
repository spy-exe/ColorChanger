var changeButton = window.document.getElementById('change-btn')
var changeText = window.document.getElementById('change-text')
var bColor = window.document.getElementById('change-color')
var colorFooter = window.document.getElementById('color-footer')
var colorSpecs = window.document.getElementById('color-specs')

changeButton.addEventListener('click', changeBackground)

function changeBackground(){
    var colorR = Math.floor(Math.random() * 256)
    var colorG = Math.floor(Math.random() * 256)
    var colorB = Math.floor(Math.random() * 256)

    if(colorB <= 130 && colorG <= 130 && colorB <= 130){
        changeText.style.color = 'white'
        colorSpecs.style.color = 'white'
        colorFooter.style.color = 'white'
        changeButton.style.background = 'white'
        changeButton.style.color = 'black'
    }
    else{
        changeText.style.color = 'black'
        colorSpecs.style.color = 'black'
        colorFooter.style.color = 'black'
        changeButton.style.background = 'black'
        changeButton.style.color = 'white'
    }
    console.log(colorR,colorG,colorB)
    bColor.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`
    colorSpecs.innerHTML = `RGB (${colorR}, ${colorG}, ${colorB})`
}