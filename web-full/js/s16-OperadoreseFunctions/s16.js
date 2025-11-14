/*
    OPERADORES BÁSICOS: MATEMÁTICOS 

    OPERADORES RELACIONAIS >=, > \\ LÓGICOS: && || -> TRUE FALSE
    
    ESTRUTURA CONDICIONAL => IF ELSE

    OPERADOR TERNÁRIO: idade>=18 ? true : false

    SWITCH CASE: SWITCH (){
    CASE 1: xx
    }
*/


//FUNCTIONS
let torneira = false

function desligarTorneira(){
    if (torneira == true) {
        console.log("A torneira está ligada, desligando...")
        torneira == false
        console.log("Torneira Desligada\nStatus da Torneira: " + torneira)
    } else {
        console.log("A torneira já está desligada.\n\n")
    }
}

desligarTorneira()

const valorArroz = 3.5
let comprararroz = false

function irAoMercadoArroz(dinheiro) {
    let saldo = dinheiro
    console.log("Seu saldo é de: R$" + saldo)
    if (comprararroz == true) {
        console.log("Indo ao mercado...\n")
        console.log("Verificando valor do arroz...\n")
        console.log("Arroz = R$"+ valorArroz +"\n")
        if (dinheiro >= valorArroz) {
            console.log("Arroz Comprado!")
            let novoSaldo = saldo - valorArroz
            console.log("Saldo atual: R$" + novoSaldo)
        } else {
            comprararroz = false  
            console.log("Não foi possível comprar arroz, seu saldo é menor que o valor do arroz.")
            if (comprararroz == false) {
                console.log("Você não comprou arroz.")
            }
        }
    } else {
        console.log("Não é necessário comprar arroz.")
    }
}

irAoMercadoArroz(2)