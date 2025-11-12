alert("Olá, você deseja receber um bom dia, boa tarde ou boa noite?")

var hora= new Date().getHours()
var saudacao

if(hora < 12){
    saudacao = "Bom dia!" 
}
else if(hora < 18){
    saudacao = "Boa tarde!"
}
else{
    saudacao = "Boa Noite!"
}

document.getElementById("saudacao").innerHTML = saudacao