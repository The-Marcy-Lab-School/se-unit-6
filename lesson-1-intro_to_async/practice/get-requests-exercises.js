/**
 * EXERCISE 1:
 * Read this analogous conversation related to Promises.
 * Aftwerwards, explain the parts of his analogy to describe
 * how asynchronous calls and promises work.
 *
 * 		Raul: Hey Mx. Promise! Can you run to the store down the street
 * 		and get me itemA for this dish we are cooking tonight?
 *
 * 		Mx. Promise: Sure thing!
 *
 * 		Raul: While you are doing that, I will prepare itemB.
 * 		But make sure you let me know whether you could find itemA.
 *
 *		Mx. Promise: What if you are not at home when I am back?
 *
 *		Raul: In that case, send me a text message saying you are
 *		back and have the item for me.
 * 		If you don’t find it, call me back immediately.
 *
 * 		Mx. Promise: Sounds good! See you in a bit.
 */

const response1 = `
    A promise in JavaScript represents the possible resolving, rejecting or pending state of an asynchronous operation. A promise is a returned object, that developers attach callbacks to. 
    
    In the example above, Raul's request is similar to an AJAX request. While the request is being sent off, the preparation of itemB is occurring, much like an asynchronous operation. What is returned is will either be the data that has been fetched (in this case the item) or callback that will deal with the state of rejection of the request. 
 `;

/**
 * For exercises 2-5, use the `Random User Generator API` and
 * write your solutions using .then() syntax.
 *
 * TIPS:
 * 1) Read the documentation for the  `Random user API`:
 * https://randomuser.me/documentation.
 *
 * 2) Drag the `get-requests.html` file to a Google Chrome browser tab.
 * Open up the developer console.
 *
 * 3) Keep your browsers and console tiddy by commenting out all code
 * except for the solution to the exercise that you are currently
 * working on.
 *
 */

/**
 * Exercise 2:
 *
 * Create a function called `logUsers` to log all information for
 * 500 users. Ensure that you only log the `results` from the
 * response object.
 */


const getUsers = (number) => {
    const getData = fetch(`https://randomuser.me/api/?results=${number}`);

    return getData
        .then(response => response.json())
        .then(data => data.results);
}
const logUsers = (number) => {
    getUsers(number)
        .then(data => console.log(data))
}

/**
 * Exercise 3:
 *
 * Create a function called `listTenNames` and then invoke it.
 * This function needs to
 * 1. log the first names of 10 random users.
 * 2. number each of the names from 1-10.
 */

const listTenNames = () => {
    getUsers(10).then(data => {
        data.forEach((user, idx) => {
            console.log(`${idx + 1}. ${user.name.first}`);
        });
    });
}; //Replace null with your solution code to exercise 3

/**
 * Exercise 4:
 * Create a function called `createPhoneBook` and invoke it.
 * This function needs to:
 * 1. get phone numbers for 25 users.
 * 2. and print each users name next to their phone number in a list
 * that shows up in the browser.
 * 3. *optional*: also print the names and phone numbers to the console.
 **/

const createPhoneBook = () => {
    let userList = document.createElement('ul')
    getUsers(25).then(data => {
        data.forEach((user) => {
            let userPhone = document.createElement('li')
            userPhone.innerHTML = `${user.name.first} ${user.name.last}, ${user.phone}`
            userList.appendChild(userPhone)
        })
        document.getElementById('main').appendChild(userList)
    })
};

/**
 * Exercise 5:
 *
 * Create a function called `createPhotoAlbum` and invoke it.
 *
 * This function needs to:
 * 1) get 10 users who all identify as the same gender and same nationality
 * 2) display a simple html table with the users' names and photos
 * 3) give the table a title and ensure both rows have a label.
 *
 * You may choose the size of the photo to display. Styling the table is optional.
 *
 * NOTE: The random user api allows for parameters to be combined
 * using this format: `randomuser.me/api/?parameter1=value1&parameter2=value2`.
 * See the `Pagination` portion of the documentation to see an example query
 * with multiple parameters
 */

const createPhotoAlbum = function(gender, nationality) {
    const url = `https://randomuser.me/api/?gender=${gender}&nat=${nationality}&results=10`
    let table = document.createElement('table')
    table.id = 'table'
    const thead = document.createElement('thead')

    table.appendChild(thead)

    thead.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Photo</th>
        </tr>
        `

    const tbody = document.createElement('tbody')
    table.appendChild(tbody);

    document.getElementById('main').appendChild(table)

    fetch(url)
        .then(response => response.json())
        .then(json => tbody.innerHTML = json.results.map(user => {
            return `
            <tr>
                <td>${user.name.first} ${user.name.last}</td>
                <td><img src="${user.picture.medium}"/></td>
            </tr>
            `
        }).join(""))

};

/**
 * For exercises 6-7, use the `Joke API` and
 * write your solutions using the async/await syntax
 *
 * TIPS:
 * 1) Read the documentation for the  `Joke API`:
 * https://sv443.net/jokeapi/v2#endpoints.
 *
 */

/**
 * Exercise 6:
 * Create a function called `logAJoke`.
 *
 * This function needs to:
 * 1) get 1 joke that is about programming and is in a two-part format.
 * 2) log the setup and delivery of the joke on separate lines
 */


const logAJoke = () => {
    const getData = fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=twopart')
    getData.then(response => response.json())
        .then(joke => console.log(`${joke.setup}\n ${joke.delivery}`));

};

/**
 * Exercise 7:
 * Create a function called `showApiInfo`.
 *
 * This function needs to:
 * 1) use the /info endpoint to get information on about the joke API
 * 2)  within the body of the browser, show the info portion of the response object
 *
 */
const ApiInfo = async() => {
    const getApiInfo = await fetch('https://sv443.net/jokeapi/v2/info');
    const dataInfo = await getApiInfo.json();
    document.getElementById('main').innerHTML = dataInfo.info;
};

ApiInfo();
/**
 * EXERCISE 8:
 * Which manner of handling promises appears to be more advantageous:
 * .then() or async/await? Briefly explain.
 */

const response8 = `
	Async/await seems to be more advantageous as it allows for more condenced and more readable code. Using async and await can also help during the debugging process since it's readability is easier to understand what is occurring. 
 `;
