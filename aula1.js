//window.alert("Olá Mundo!")
//console.log("teste log")
//document.write("teste write")
//document.getElementById("titulo").innerHTML = "<mark>inserindo o js no html</mark"

/*a = 1
b = a+2

nome = "joao"

oi = true

alert("meu nome é "+nome)*/

clicks  = 0


function teste(){
    clicks += 1
    document.getElementById("contador").innerHTML = clicks
    if(clicks >= 10){
    document.getElementById("contador").style.backgroundColor = 'red'
    document.getElementById("contador").style.transition = '4s'
}}
