
const converterButton = document.querySelector(".converter-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() { 
    const inputValue = document.querySelector(".input-currency").value
    const valorReal = document.querySelector(".currency-real")
    const valorOutrasMoedas = document.querySelector(".currency-dolar")


    
    const dolarToday = 5.25
    const euroToday = 5.75


    if (currencySelect.value == "dolar") {
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }



    if (currencySelect.value == "euro") {
        valorOutrasMoedas.innerHTML = new Intl.NumberFormat("es-es", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }


    valorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

}



function changeSelect(){
    const paragrafoDolar = document.getElementById("paragrafo-dolar")

    if(currencySelect.value == "dolar"){ 
        paragrafoDolar.innerHTML = "Dólar Americano"}

if(currencySelect.value == "euro"){
    paragrafoDolar.innerHTML= "Euro"
}



}


currencySelect.addEventListener("change",changeSelect)
converterButton.addEventListener("click", convertValues) //luan Faiet
