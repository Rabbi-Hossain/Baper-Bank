// section step-1
document.getElementById('deposit-button').addEventListener('click', function(){
    
    // please deposit field
    const depositField = document.getElementById('deposit-field')
    const depositValueString = depositField.value
    const depositValueNumber = parseFloat(depositValueString)

    depositField.value = ''
    if(isNaN(depositValueNumber)){
        alert('please provide ma a valid number')
        return
    }
    // main deposit
    const mainDeposit = document.getElementById('main-deposit')
    const mainDepositString = mainDeposit.innerText
    const mainDepositNumber = parseFloat(mainDepositString)
    const totalAmount = depositValueNumber + mainDepositNumber
    mainDeposit.innerText = totalAmount
    

    // balance
    const totalBalance = document.getElementById('main-balance')
    const totalBalanceString = totalBalance.innerText
    const totalBalanceNumber = parseFloat(totalBalanceString)
    const TotalBalanceAmount = totalBalanceNumber + depositValueNumber
    totalBalance.innerText = TotalBalanceAmount
    console.log(TotalBalanceAmount);

})

// section step-2

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawFieldString = withdrawField.value
    const withdrawFieldNumber = parseFloat(withdrawFieldString)
    
    withdrawField.value = ''
    if(isNaN(withdrawFieldNumber)){
        alert('please provide valid number')
        return
    }

    const mainWithdraw = document.getElementById('main-withdraw')
    const mainWithdrawString = mainWithdraw.innerText
    const mainWithdrawNumber = parseFloat(mainWithdrawString)

    

    

    const mainBalanceWithdraw = document.getElementById('main-balance')
    const mainBalanceWithdrawString = mainBalanceWithdraw.innerText
    const mainBalanceWithdrawNumber = parseFloat(mainBalanceWithdrawString)

    if(withdrawFieldNumber > mainBalanceWithdrawNumber){
        alert('bapper bank e taka nai')
        return
    }

    const totalSum = withdrawFieldNumber + mainWithdrawNumber
    mainWithdraw.innerText = totalSum

  

    
    const biogAmount = mainBalanceWithdrawNumber - totalSum
    mainBalanceWithdraw.innerText = biogAmount




})