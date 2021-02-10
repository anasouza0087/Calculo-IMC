const clickBtn = document.getElementById("btn")

clickBtn.addEventListener("click", e => {
    let weight = document.getElementById("peso").value
    let size = document.getElementById("altura").value
    let categoria = document.getElementById("categoria").value
    let calcIMC = (weight / (size * size)).toFixed(2)
    document.getElementById("imc").value = calcIMC

    switch (calcIMC) {
        case (calcIMC < 16.00):
            categoria = document.getElementById("categoria").value = "Baixo peso Grau III"
            break;
        case (calcIMC >= 16.00 && calcIMC <= 16.99):
            categoria = document.getElementById("categoria").value = "Baixo peso Grau II"
            break;
        case (calcIMC >= 17.00 && calcIMC <= 18.49):
            categoria = document.getElementById("categoria").value = "Baixo peso Grau I"
            break;
        case (calcIMC >= 18.50 && calcIMC <= 24.99):
            categoria = document.getElementById("categoria").value = "Peso ideal"
            break;
        case (calcIMC >= 25.00 && calcIMC <= 29.99):
            categoria = document.getElementById("categoria").value = "Sobrepeso"
            break;
        case (calcIMC >= 30.00 && calcIMC <= 34.99):
            categoria = document.getElementById("categoria").value = "Obesidade Grau I"
            break;
        case (calcIMC >= 35.00 && calcIMC <= 39.99):
            categoria = document.getElementById("categoria").value = "Obesidade Grau II"
            break;
        case (calcIMC >= 40.00):
            categoria = document.getElementById("categoria").value = "Obesidade Grau III"
            break;
        default:
            categoria = document.getElementById("categoria").value = "Inválido"
    }
})