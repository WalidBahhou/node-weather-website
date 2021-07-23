console.log('Client side javascript loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()  
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    const location = search.value
    search.value = ''
    
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error
            } else {
                //console.log(data)
                messageOne.textContent = data.location
                //messageTwo.textContent = data.forecast
                messageTwo.textContent =  data.forecast+
                ', the temperateure is '+ data.temp + ' C'
            }
        })
    })
})