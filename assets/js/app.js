// Handle Show Form Reg

const btnLogin = document.querySelector('#login-btn')
const btnReg = document.querySelector('#reg-btn')


btnLogin.addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('login-form').classList.toggle('hidden')
})

btnLogin.addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('reg-form').classList.remove('hidden')
})

// Handle Show Form Login



btnReg.addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('login-form').classList.remove('hidden')
})

btnReg.addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('reg-form').classList.toggle('hidden')
})

btnLogin.addEventListener('click', function(e) {
    e.stopPropagation();
    const inputList = document.querySelectorAll('.container__login-input')
    for(var i in inputList) {
        inputList[i].value = ''    
    }
})