// Função para comparar dois numeros

function CompararNumeros(num1,num2) {
    if(num1>num2){
        return "O primeiro é maior que o segundo"
    }
    else if(num1<num2){
        return "O primeiro é menor que o segundo"
    }
    else{
        return "Os numeros são iguais"
    }
}

let resultado = CompararNumeros(12,9)
console.log(resultado)