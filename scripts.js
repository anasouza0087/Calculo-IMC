const clickBtn = document.getElementById("btn")

clickBtn.addEventListener("click", e => {
    let weight = document.getElementById("peso").value
    let size = document.getElementById("altura").value
    let calcIMC = (weight / (size * size))
    document.getElementById("imc").value = calcIMC.toFixed(2)
})