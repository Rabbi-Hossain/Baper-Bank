// project step-1
document.getElementById('deposit-button').addEventListener('click', function(){
    
    // please deposit field
    const depositField = document.getElementById('deposit-field')
    const depositValueString = depositField.value
    const depositValueNumber = parseFloat(depositValueString)
    
    // main deposit
    const mainDeposit = document.getElementById('main-deposit')
    const mainDepositString = mainDeposit.innerText
    const mainDepositNumber = parseFloat(mainDepositString)
    const totalAmount = depositValueNumber + mainDepositNumber
    mainDeposit.innerText = totalAmount
    depositField.value = ''

    // balance
    const totalBalance = document.getElementById('main-balance')
    const totalBalanceString = totalBalance.innerText
    const totalBalanceNumber = parseFloat(totalBalanceString)
    const TotalBalanceAmount = totalBalanceNumber + depositValueNumber
    totalBalance.innerText = TotalBalanceAmount
    console.log(TotalBalanceAmount);

})

// project step-2
