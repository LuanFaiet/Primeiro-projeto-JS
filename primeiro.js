
const converterButton = document.querySelector(".converter-button")

function convertValues() {
    const inputValue = document.querySelector(".input-currency").value
    const valorReal = document.querySelector(".currency-real")
    const valorOutrasMoedas = document.querySelector(".currency-dolar")



    const dolarToday = 5.25
    const convercao = inputValue / dolarToday

    valorReal.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputValue)




}

converterButton.addEventListener("click", convertValues) //luan Faiet
