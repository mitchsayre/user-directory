const form = document.querySelector('form#userForm')
const handleSubmit = function(ev) {
    ev.preventDefault()
    const form = ev.target
    const users = document.querySelector('#users')
    const userName = form.userName.value  
    users.innerHTML += '<p>' + userName + '</p>'
    form.userName.value = ''
}


form.addEventListener('submit', handleSubmit)
