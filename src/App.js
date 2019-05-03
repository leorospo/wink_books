import React from 'react';
import './App.css';
import Books from './components/Books';
import SearchBar from './components/SearchBar'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

    getBooks = query => fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    printBooks = query => this.getBooks(query)
        .then(r => r.json())
        .then(r => r.items)
        .then(r =>
            this.setState({
                books: r
            })
        )

    render() {
        return (
            <div className="">
                <SearchBar printBooks={this.printBooks} />
                <Books books={this.state.books} />
            </div>
        )
    }
}

export default App;
