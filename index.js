const form = document.querySelector('form#userForm')
const handleSubmit = function(ev) {
    ev.preventDefault()
    const form = ev.target
    const users = document.querySelector('#users')
    const userName = form.userName.value  
    users.textContent += ' ' + userName
    form.userName.value = ''
}


form.addEventListener('submit', handleSubmit)
