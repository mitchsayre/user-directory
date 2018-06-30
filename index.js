const form = document.querySelector('form#userForm')
const handleSubmit = function(ev) {
    ev.preventDefault()
    const form = ev.target
    const users = document.querySelector('#users')
    const userName = form.userName.value 
    const age = form.age.value 
    
    const favoriteColor = form.favoriteColor.value
   
    const list = document.createElement('ul')
    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`

    nameItem.style.backgroundColor = favoriteColor   
   
    nameItem.textContent = `${userName}, ${age}, favorite Color: ${favoriteColor}`
    
    list.appendChild(nameItem)
    users.appendChild(list)
    list.appendChild(ageItem)
   
   form.reset()
    form.userName.focus()
}


form.addEventListener('submit', handleSubmit) 
