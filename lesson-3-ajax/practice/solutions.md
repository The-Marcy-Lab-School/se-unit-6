# Unit 6 Lesson 3:  AJAX

0. What is AJAX? Why is this important for building web applications? Include some examples of web applications which implement AJAX.

**Suggested Answer** AJAX stands for "Asynchronous JavaScript and XML." In the early days of the web, each request that a web browser made would cause the page to refresh. Modern web applications, however, are able to implement robust experiences without page refreshes. GMail, for example, has multiple interactions and allows you to use the app without ever needing to refresh the page.

## Practice

For the next questions, write your code in the `book-search` directory.

1. Given the existing HTML file, write a function that, when the user submits the search form, logs the value they've typed in the search input to the console.

**Suggested Answer** Here's one way you might solve it.

```js
function addSearchListener(e){
  const form = document.getElementById("book-search")
  const search = form[0]

  function handleSearch(e){
    e.preventDefault();
    console.log(search.value)
    search.value = ''
  }

  form.addEventListener('submit', handleSearch)
}


document.addEventListener('DOMContentLoaded', addSearchListener)
```

You could also solve this in an object-oriented fashion by creating a class to represent our BookSearch function:

```js
class BookSearch {
  constructor(){
    this.form = document.getElementById("book-search")
    this.search = this.form[0]
    this.addSearchListener()
  }

  addSearchListener(){
    this.form.addEventListener('submit', this.handleSearch.bind(this))
  }

  handleSearch(e){
    e.preventDefault();
    console.log(this.search.value)
    this.search.value = ''
  }
}

document.addEventListener('DOMContentLoaded', () => new BookSearch() )
```


2. Write a function that takes in a search term and, using the `fetch` API, fetches a list of books from the Google Books API and logs the title of each book to the console. The Google Books API is available via the following URL: https://www.googleapis.com/books/v1/volumes?q=search+term - where `search+term` can be replaced by any search term. You can view the [documentation](https://developers.google.com/books/docs/v1/using) for information on what the response will look like.

**Suggested Answer**: Here's one way you might do this.

```js

function fetchBooks(query){
  const url = 'https://www.googleapis.com/books/v1/volumes?q='

  fetch(url + query)
    .then(res => res.json())
    .then(data => {
      data.items.forEach(item => console.log(item.volumeInfo.title))
    })
}
```

This function could also be added as a method to our class above.

3. Write a function called `createBookListItem` that, given an object of book information that looks like this:

```js
{
  title: "How to Give Your Dog a Bath",
  authors: [
  "Michele Dufresne"
  ],
  publishedDate: "2015-01-02"
}
```

Returns a list element that looks as follows:

```html
<li>How to Give Your Dog a Bath<li>
```

**Suggested Answer**

```js

function createBookListItem(volumeInfo){
  const li = document.createElement('li')
  li.innerText = volumeInfo.title
  return li
}
```

4. Write a function `createBookList` that, given an array of books, each with a volumeInfo, returns an unordered list element where each child is a list item containing the title of the book. HINT: Feel free to use your `createBookListItem` function from above.

**Suggested Answer**

```js
function createBookList(books){
  const bookList = document.createElement('ul')
  books.forEach(book => {
    const listItem = createBookListItem(book.volumeInfo);
    bookList.append(listItem)
  })

  return bookList
}
```

5. Write a function, `renderBookList`, that given an array of books, actually renders an unordered list into the DOM.

**Suggested Answer**

```js
function addSearchListener(e){
  const results = document.getElementById('results')

  function renderBookList(books){
    results.append(createBookList(books))
  }

  function createBookList(books){
    const bookList = document.createElement('ul')
    books.forEach(book => {
      const listItem = createBookListItem(book.volumeInfo);
      bookList.append(listItem)
    })

    return bookList
  }

  function createBookListItem(volumeInfo){
    const li = document.createElement('li')
    li.innerText = volumeInfo.title
    return li
  }
}
```

6. Update your code so that, when a user types in a search query and submits the form, we render a list of books based on the search results from the Google Books API.

**Suggested Answer**

```js
function addSearchListener(e){
  const form = document.getElementById("book-search")
  const search = form[0]
  const results = document.getElementById('results')

  function handleSearch(e){
    e.preventDefault()
    fetchBooks(search.value).then(books => renderBookList(books))
  }

  function renderBookList(books){
    results.append(createBookList(books))
  }

  function fetchBooks(query){
    const url = 'https://www.googleapis.com/books/v1/volumes?q='

    return fetch(url + query)
      .then(res => res.json())
      .then(data => data.items )
  }

  function createBookList(books){
    const bookList = document.createElement('ul')
    books.forEach(book => {
      const listItem = createBookListItem(book.volumeInfo);
      bookList.append(listItem)
    })

    return bookList
  }

  function createBookListItem(volumeInfo){
    const li = document.createElement('li')
    li.innerText = volumeInfo.title
    return li
  }

  form.addEventListener('submit', handleSearch)
}

document.addEventListener('DOMContentLoaded', addSearchListener)
```

7. Looking at the code we wrote, what do you like about it? What could make it better?

**Suggested Answer** Some things that could make the code work well:

1. We've separated out the idea of fetching data, creating elements, and actually adding this into the DOM. This is a general Model-View-Controller paradigm.
2. We could improve this by separating these concerns into separate functions or classes. We could also move these into separate files or modules to help break things up if we wanted.

```js
function fetchBooks(query){
  const url = 'https://www.googleapis.com/books/v1/volumes?q='

  return fetch(url + query)
    .then(res => res.json())
    .then(data => data.items )
}

function createBookList(books){
  const bookList = document.createElement('ul')

  function createBookListItem(volumeInfo){
    const li = document.createElement('li')
    li.innerText = volumeInfo.title
    return li
  }

  books.forEach(book => {
    const listItem = createBookListItem(book.volumeInfo);
    bookList.append(listItem)
  })

  return bookList;
}


function bookSearchController(){
  const form = document.getElementById("book-search")
  const search = form[0]
  const results = document.getElementById('results')

  function renderBookList(books){
    results.append(createBookList(books))
  }

  function handleSearch(e){
    e.preventDefault();
    fetchBooks(search.value).then(books => renderBookList(books))
  }

  form.addEventListener('submit', handleSearch)
}



document.addEventListener('DOMContentLoaded', bookSearchController)
```

8. Write an application that allows a user to search for GIFs using the [GiphyAPI](https://developers.giphy.com/docs/api/endpoint#search). Your application should include a form where a user can input a search query. You should then get a list of results from the Giphy API and display one at random to the user.
