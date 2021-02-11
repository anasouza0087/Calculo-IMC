const clickBtn = document.getElementById("btn")

clickBtn.addEventListener("click", e => {
    let weight = document.getElementById("peso").value
    let size = document.getElementById("altura").value
    let categoria = document.getElementById("categoria").value
    let calcIMC = (weight / (size * size)).toFixed(2)
    document.getElementById("imc").value = calcIMC

    if (calcIMC < 16.00) {
        categoria = document.getElementById("categoria").value = "Baixo peso Grau III"
        categoria = document.getElementById("categoria").style.backgroundColor = "red"
    } else if (calcIMC >= 16.00 && calcIMC <= 16.99) {
        categoria = document.getElementById("categoria").value = "Baixo peso Grau II"
        categoria = document.getElementById("categoria").style.backgroundColor = "orange"
    } else if (calcIMC >= 17.00 && calcIMC <= 18.49) {
        categoria = document.getElementById("categoria").value = "Baixo peso Grau I"
        categoria = document.getElementById("categoria").style.backgroundColor = "yellow"
    } else if (calcIMC >= 18.50 && calcIMC <= 24.99) {
        categoria = document.getElementById("categoria").value = "Peso ideal"
        categoria = document.getElementById("categoria").style.backgroundColor = "lightblue"
    } else if (calcIMC >= 25.00 && calcIMC <= 29.99) {
        categoria = document.getElementById("categoria").value = "Sobrepeso"
        categoria = document.getElementById("categoria").style.backgroundColor = "yellow"
    } else if (calcIMC >= 30.00 && calcIMC <= 34.99) {
        categoria = document.getElementById("categoria").value = "Obesidade Grau I"
        categoria = document.getElementById("categoria").style.backgroundColor = "orange"
    } else if (calcIMC >= 35.00 && calcIMC <= 39.99) {
        categoria = document.getElementById("categoria").value = "Obesidade Grau II"
        categoria = document.getElementById("categoria").style.backgroundColor = "orange"
    } else if (calcIMC >= 40.00) {
        categoria = document.getElementById("categoria").value = "Obesidade Grau III"
        categoria = document.getElementById("categoria").style.backgroundColor = "red"
    } else {
        categoria = document.getElementById("categoria").value = "Valor inválido"
        categoria = document.getElementById("categoria").style.backgroundColor = "red"
    }

})