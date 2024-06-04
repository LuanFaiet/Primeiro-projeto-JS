
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


    valorOutrasMoedas.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency: "USD"
    }).format(convercao)

}

converterButton.addEventListener("click", convertValues)
