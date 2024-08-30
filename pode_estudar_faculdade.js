function podeEstudar(concluiuEnsinoMedio,idade,cursandoOutrafaculdade){
return concluiuEnsinoMedio &&idade>=23 &&!cursandoOutrafaculdade}

    //dados para testar a função
    let concluiuEnsinoMedio = true // sim concluiu
    let idade = 23 // Definindo idade
    let cursandoOutrafaculdade = false // false para dizer que não

    // Verificar se pode estudar na faculdade
    let resultado = podeEstudar(concluiuEnsinoMedio,idade,cursandoOutrafaculdade)

    //Exibindo o resultado
    if(resultado){
console.log("voce pode entrar na faculdade")
    }
    else{
        console.log("voce não pode entrar na faculdade")
    }
