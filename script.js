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

    // Set para garantir unicidade dos números sorteados
    var numerosSorteados = new Set();

    // Sortear a quantidade de números desejada
    while (numerosSorteados.size < quantidade) {
        var numeroSorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        numerosSorteados.add(numeroSorteado);
    }

    // Converter o Set para um array para exibição
    var arraySorteados = Array.from(numerosSorteados);

    // Exibir os números sorteados no elemento com ID "resultado-numeros"
    document.getElementById("resultado-numeros").textContent = "Números Sorteados: " + arraySorteados.join(", ");
}
