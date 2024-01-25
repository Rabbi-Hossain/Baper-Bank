function inputFieldId(input){
    const inputFieldIdValue = document.getElementById(input)
    const inputFieldIdString = inputFieldIdValue.value
    const inputFieldIdNumber = parseFloat(inputFieldIdString)
    inputFieldIdValue.value = ''
    return inputFieldIdNumber
}

function innerTextId(textId){
    const innerTextIdElement = document.getElementById(textId)
    const innerTextIdString = innerTextIdElement.innerText
    const innerTextIdNumber = parseFloat(innerTextIdString)
    return innerTextIdNumber
}


function setElementId(id,currentValue){
    const idInput = document.getElementById(id)
    idInput.innerText = currentValue
}

document.getElementById('deposit-button').addEventListener('click',function(){
    
    const depositField = inputFieldId('deposit-field')

    if(isNaN(depositField)){
        alert('please provide me a valid number')
        return
    }

    const mainDeposit = innerTextId('main-deposit')

    const totalDeposit = depositField + mainDeposit

    setElementId('main-deposit', totalDeposit)

    // balance
    const balanceAmount = innerTextId('main-balance')
    const totalAmount = depositField + balanceAmount
    setElementId('main-balance', totalAmount)
    
})


document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawField = inputFieldId('withdraw-field')
    
    if(isNaN(withdrawField)){
        alert('please provide me a valid number')
        return
    }

    const mainWithdraw = innerTextId('main-withdraw')

   
    
    const totalWithdraw = withdrawField + mainWithdraw
    setElementId('main-withdraw', totalWithdraw)

    const totalMainBalance = innerTextId('main-balance')
    const biog = totalMainBalance - withdrawField

    setElementId('main-balance', biog)
})

