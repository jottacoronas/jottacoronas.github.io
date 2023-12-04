//window.alert("Olá Mundo!")
//console.log("teste log")
//document.write("teste write")
//document.getElementById("titulo").innerHTML = "<mark>inserindo o js no html</mark"

/*a = 1
b = a+2

nome = "joao"

oi = true

alert("meu nome é "+nome)*/

contagem  = 0

function teste(){
    valor = parseInt(document.getElementById('valor').value)
    contagem += valor
    document.getElementById("resultado").innerHTML = contagem

}







/*
function teste(){
    clicks += 1
    document.getElementById("contador").innerHTML = clicks
    if(clicks >= 10){
    document.getElementById("contador").style.backgroundColor = 'red'
    document.getElementById("contador").style.transition = '4s'
}}
function teste2(){
    clicks -= 1
    document.getElementById("contador").innerHTML = clicks
    
}

function teste(){
    clicks += v
    document.getElementById('contagem').innerHTML = clicks
} 

   --------------- HTML-------------------------
    <button onclick="teste(1)">
        Aumente
    </button>

    <label for="" id="contador">0</label>

    <button onclick="teste(-1)">
        Diminua
    </button>

*/
