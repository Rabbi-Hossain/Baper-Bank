document.getElementById('Page-submite').addEventListener('click', function(){
    const emailId = document.getElementById('email-id')
    const emailValue = emailId.value;

    const passwordId = document.getElementById('password-id')
    const passwordValue = passwordId.value
    console.log(emailValue, passwordValue);

    if(emailValue == 'rabbi@gmail.com' && passwordValue == 'screate'){
        window.location.href = 'bank.html'
    }else{
        console.log('invalid');
    }
})