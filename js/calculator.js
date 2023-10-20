{
    const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

const EUR = 4.47;
const USD = 4.14;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    let result;

    if (currency === "EUR") {
        result = amount / EUR;
    } else if (currency === "USD") {
        result = amount / USD;
    }
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> 
${result.toFixed(2)} ${currency}</strong>`;
});

}