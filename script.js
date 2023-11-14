function sortear() {

    // Obter valores dos inputs
    const quantidadeDeNumeros = document.querySelector("#quantidade").value
    const valorMinimo = Math.ceil(document.querySelector("#input-min").value)
    const valorMaximo = Math.floor(document.querySelector("#input-max").value)


    // Validar se os valores são numéricos e se maximo >= minimo
    if (isNaN(quantidadeDeNumeros) || isNaN(valorMinimo) || isNaN(valorMaximo) || valorMaximo < valorMinimo) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    var numerosSorteados = [];

    // Sortear a quantidade de números desejada
    while (numerosSorteados.length < quantidadeDeNumeros) {
        var numeroSorteado = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;

        // Verificar se o número já foi sorteado
        if (numerosSorteados.indexOf(numeroSorteado) === -1) {
            numerosSorteados.push(numeroSorteado);
        }
    }

    // Exibir os números sorteados no H2 com ID "resultado-numeros"
    document.getElementById("resultado-numeros").textContent = "Números Sorteados: " + numerosSorteados.join(", ");
}

