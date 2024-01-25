// document.getElementById('deposit-button').addEventListener('click', function(){
    
//     // please deposit
//     const depositField = document.getElementById('deposit-field')
//     const depositFieldString = depositField.value
//     const depositFieldNumber = parseFloat(depositFieldString)

//     if(isNaN(depositFieldNumber)){
//         alert('please provide me a valid number')
//         return
//     }
   
//     // main deposit
//     const mainDeposit = document.getElementById('main-deposit')
//     const mainDepositString = mainDeposit.innerText 
//     const mainDepositNumber = parseFloat(mainDepositString)

//     const totalDeposit = depositFieldNumber + mainDepositNumber
//     mainDeposit.innerText = totalDeposit

//     // balance
//     const balanceAmount = document.getElementById('main-balance')
//     const balanceAmountString = balanceAmount.innerText
//     const balanceAmountNumber = parseFloat(balanceAmountString)

//     const totalMainAmount = balanceAmountNumber + depositFieldNumber
//     balanceAmount.innerText = totalMainAmount

//     depositField.value = ''

// })

// document.getElementById('withdraw-button').addEventListener('click',function(){

//     // please withdraw
//     const withdrawField = document.getElementById('withdraw-field')
//     const withdrawFieldString = withdrawField.value
//     const withdrawFieldNumber = parseFloat(withdrawFieldString)

//     if(isNaN(withdrawFieldNumber)){
//         alert('please provide me a valid number')
//         return
//     }
    
//     // main withdraw
//     const mainWithdraw = document.getElementById('main-withdraw')
//     const mainWithdrawString = mainWithdraw.innerText
//     const mainWithdrawNumber = parseFloat(mainWithdrawString)



//     // balance
//     const balanceWithdraw = document.getElementById('main-balance')
//     const balanceWithdrawString = balanceWithdraw.innerText 
//     const balanceWithdrawNumber = parseFloat(balanceWithdrawString)

//     if(withdrawFieldNumber > balanceWithdrawNumber){
//         alert('bap er bank ea taka nai')
//         return
//     }

//     const mainWithdrawAmount = withdrawFieldNumber + mainWithdrawNumber
//     mainWithdraw.innerText = mainWithdrawAmount
    
//     const biog = balanceWithdrawNumber - mainWithdrawAmount
//     balanceWithdraw.innerText = biog

//     withdrawField.value = ''
// })