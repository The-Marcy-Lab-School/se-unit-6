// 4
function createAUser(userName, userJob) {
    fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: {
                name: userName,
                job: userJob
            }
        })
        .then(response => {
            console.log('Response: ', response)
            if (response.status >= 400) {
                console.log(`status: ${response.status}. Try Again`)
            }
            else {
                console.log(`Users ${userName} was successfully created`)
            }
        })
        .catch(error => {
            console.error(`ERROR IN CREATING USER: ${error}`)
        })

}

//5
function createAUser2(userName, userJob) {
    if (typeof(userName) != 'string' || typeof(userJob) != 'string') {
        throw new Error(`Name and Job must be in STRING FORMAT. Try again.`)
    }
    fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: {
                name: userName,
                job: userJob
            }
        })
        .then(response => {
            console.log('Response: ', response)
            if (response.status >= 400) {
                console.log(`status: ${response.status}. Try Again`)
            }
            else {
                console.log(`Users ${userName} was successfully created`)
            }
        })
        .catch(error => {
            console.error(`ERROR IN CREATING NEW USER: ${error}`)
        })

}

//6
function registerAnEmail(userEmail, userPassword) {
    if (typeof(userEmail) != 'string' || typeof(userPassword) != 'string') {
        throw new Error('Email and Password must be in STRING FORMAT. Try Again')
    }
    fetch('https://reqres.in/api/register', {
            method: 'POST',
            body: {
                email: userEmail,
                password: userPassword
            }
        })
        .then(response => {
            console.log('Response: ', response)
            if (response.status >= 400) {
                console.log(`Status: ${response.status} could not register email. Try Again`)
            }
            else {
                console.log(`${userEmail} Successfully Created`)
            }
        })
        .catch(error => {
            console.error(`ERROR registering new email: ${error}`)
        })
}

//7
