const form = document.querySelector('form#userForm')
const handleSubmit = function(ev) {
    ev.preventDefault()
    const form = ev.target
    const users = document.querySelector('#users')
    const userName = form.userName.value 
    const age = form.age.value 
    
    const favoriteColor = form.favoriteColor.value
    const p = document.createElement('p')
    p.style.backgroundColor = favoriteColor   
   
    p.textContent = `${userName}, ${age}, favorite Color: ${favoriteColor}`
    users.appendChild(p)
   
    form.reset()
    form.userName.focus()
}


form.addEventListener('submit', handleSubmit)
