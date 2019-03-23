 const weatherForm = document.querySelector('form')
const searchelement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = ''

weatherForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const address = searchelement.value
    
    const geocodeurl = `/weather?address=${address}`;
    messageOne.textContent = 'Loading Results . . .'    
    messageTwo.textContent = ''
    fetch(geocodeurl).then((response) => {
        response.json().then((data) => {
            if (data.error) {
              messageOne.textContent = data.error 
              messageTwo.textContent = ''               
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast                              
            }  
    })
})
   
})


