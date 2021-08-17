// calcolate banking money
function calculateMoney(input, currentValue, totalBalance, isAdd){
    // user input value
    const userInput = document.getElementById(input);
    // convert string to number
    const covertInput = parseFloat(userInput.value);
    if(covertInput > 0){
        // previous Value 
        const currentTotal = document.getElementById(currentValue);
        // convert previous value string to number
        const convertTotal = parseFloat(currentTotal.innerText)

        // total value
        const totalValue = covertInput + convertTotal;
        currentTotal.innerText = totalValue;

        // total balance calculate
        const currentBalance = document.getElementById(totalBalance);

        // convert balance string to number
        const convertBalance = parseFloat(currentBalance.innerText);

        if(isAdd == true){
            // update total balance
            const updateBalance = convertBalance + totalValue;
            currentBalance.innerText = updateBalance;

            // clear input
            userInput.value = "";
            return updateBalance;
        }else{
            // update total balance
            const updateBalance = convertBalance - totalValue;
            currentBalance.innerText = updateBalance;
            
            // clear input
            userInput.value = "";
        }
    }else{
        alert("Please Enter a valid number");
        // clear input
        userInput.value = "";
    }
}
