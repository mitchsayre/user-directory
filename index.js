const form = document.querySelector('form#userForm')

function renderColor(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}



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

    
   
    // nameItem.textContent = `${userName}, ${age}, favorite Color: ${favoriteColor}`
    
    const colorItem = document.createElement('li')
    colorItem.textContent = 'favorite Color: '
    
    
    
    // colorItem.style.backgroundColor = favoriteColor   
    colorItem.appendChild(renderColor(favoriteColor))
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)
    

    users.appendChild(list)
  
  
    form.reset()
    form.userName.focus()
}


form.addEventListener('submit', handleSubmit) 
