const submit = document.querySelector('#signup');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_pass');
const errorPara = document.createElement('p')
errorPara.textContent = '* Passwords do not match'
errorPara.classList.add('error');
password.parentNode.insertBefore(errorPara, password.nextSibling);
errorPara.style.visibility = 'hidden';

submit.addEventListener('click', e => {
    if (confirmPassword.value !== password.value){
        e.preventDefault();
        password.style.border = '1px solid red';
        confirmPassword.style.border = '1px solid red';
        errorPara.style.visibility = 'visible';
    } else {
        errorPara.style.visibility = 'hidden';
    }
});