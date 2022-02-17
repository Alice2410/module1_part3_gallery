const email = document.getElementById('email');
const errorEmail = document.getElementById('email-error');
const password = document.getElementById('password');
const errorPassword = document.getElementById('password-error');

email.addEventListener( 'input', function () { 

    console.log (email.value);
    if ((/\w[-\w+]@\w+\.\w{2,}/.test(email.value))) {
        email.classList.remove('invalid');
        email.classList.add('valid');
        errorEmail.innerHTML = 'Email корректен.'
        errorEmail.classList.remove('authorization-form__error--invalid');
        errorEmail.classList.add('authorization-form__error--valid');
    } else {
        email.classList.remove('valid');
        email.classList.add('invalid');
        errorEmail.innerHTML = 'Введите корректный email.'
        errorEmail.classList.remove('authorization-form__error--valid');
        errorEmail.classList.add('authorization-form__error--invalid');
        console.log ('invalid');
    }

})

password.addEventListener( 'input', function () { 

    console.log (password.value);
    if ((/[a-zA-Z0-9]{8,}/.test(password.value))) {
        password.classList.remove('invalid');
        password.classList.add('valid');
        errorPassword.innerHTML = 'Пароль верен.'
        errorPassword.classList.remove('authorization-form__error--invalid');
        errorPassword.classList.add('authorization-form__error--valid');
    } else {
        password.classList.remove('valid');
        password.classList.add('invalid');
        errorPassword.innerHTML = 'Введите верный пароль.'
        errorPassword.classList.remove('authorization-form__error--valid');
        errorPassword.classList.add('authorization-form__error--invalid');
        console.log ('invalid');
    }

   
})
    
    
