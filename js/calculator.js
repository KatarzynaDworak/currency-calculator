
{
    const calculateResult = (amount, currency) => {
        switch (currency) {
            case "EUR":
                return amount / EUR;
            case "USD":
                return amount / USD;
            }

            const EUR = 4.47;
            const USD = 4.14;
    
        }
    }
    
    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> 
        ${result.toFixed(2)} ${currency}</strong>`;
        }
    
    const onFormSubmit = (event) => {
        event.preventDefault();
    
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;
    
        let result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }
}
    init();