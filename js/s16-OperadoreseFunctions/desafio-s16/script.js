
function calcularMelhor() {

    let precoAlcool = document.getElementById("valorAlcool").value;
    let precoGasolina = document.getElementById("valorGas").value;


    if(precoAlcool != "") {
        if (precoGasolina != "") {
            let resultado = precoAlcool / precoGasolina;
            if (resultado < 0.7){
                document.getElementById("resultado").innerHTML = "Melhor Gasolina"
            } else {
                document.getElementById("resultado").innerHTML = "Melhor Álcool"
            }
        } else {
            alert("Preencha o campo: Valor Gasolina")
        }
    } else {
        alert("Preencha o campo: Valor Álcool")
    }
}