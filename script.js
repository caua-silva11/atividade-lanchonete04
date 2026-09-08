function calcular() {
    const codigo = Number(document.getElementById("codigo").value)
    const quantidade = Number(document.getElementById("quantidade").value)
    let preco = 0

    if (codigo === 1) preco = 5.00
    else if (codigo === 2) preco = 3.50
    else if (codigo === 3) preco = 4.80
    else if (codigo === 4) preco = 8.90
    else if (codigo === 5) preco = 7.32

    const total = preco * quantidade
    document.getElementById("resultado").textContent = "Valor a pagar: R$ " + total.toFixed(2)
}