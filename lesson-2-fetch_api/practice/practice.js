// 5. getRandomAdvice
const url = 'https://api.adviceslip.com/advice'

function getRandomAdvice() {
    fetch(url)
        .then(response => {
            console.log('This is the response object: ', response);
            return response.json();
        })
        .then(data => {
            console.log('This is the response data: ', data)
            console.log('Piece of advice:', data.slip.advice)

        })
        .catch(error => console.log(`THERE IS AN ERROR: ${error}`))
}

function getSpecificAdvice() {
    fetch(url + '/1000')
        .then(response => {
            console.log('This is the response object: ', response)
            return response.json();
        })
        .then(data => {
            console.log('This is the reponse data: ', data)
            console.log('Piece of data: ', data.slip.advice)
        })
        .catch(error => console.log(`THERE IS AN ERROR: ${error}`))
}

function getAdviceById(id) {
    return fetch(`https://api.adviceslip.com/advice/${id}`)
        .then(response => {
            console.log('the response object:   ', response)
            return response.json();
        })
        .then(data => {
            console.log('this is the response data: ', data)
            if (data.slip) {
                console.log('here is some advice:   ', data.slip.advice)
            }
            else if (data.message) {
                console.log('There was an error with that request:  ', data.message.text)
            }
        })
        .catch(error => console.log(`THERE IS AN ERROR: ${error}`))
}
