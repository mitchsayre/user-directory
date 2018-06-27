const form = document.querySelector('form#userForm')
const handleSubmit = function(ev) {
    ev.preventDefault()
    const heading = document.querySelector('h1')
    const form = ev.target
    const userName = form.userName.value  
    heading.textContent = userName
}


form.addEventListener('submit', handleSubmit)
