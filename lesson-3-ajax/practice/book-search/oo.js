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
