let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.47;
let USD = 4.14;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    if (currency === "EUR") {
        result = amount / EUR;
    } else if (currency === "USD") {
        result = amount / USD;
    }
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> 
${result.toFixed(2)} ${currency}</strong>`;
});
