import React from 'react';
import './App.css';
import Books from './components/Books';
import SearchBar from './components/SearchBar'
import { getBooks } from './utils'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            currentQuery: undefined,
            booksFound: 0,
        }
    }

    newSearch = query => {
        this.setState({
            currentQuery: query,
        })
        getBooks(query)
            .then(r => r.json())
            .then(r => {
                this.setState({
                    books: r.items || [],
                    booksFound: r.totalItems,
                })
            })
    }

    displayPage = page => {
        getBooks(this.state.currentQuery, page)
            .then(r => r.json())
            .then(r => {
                this.setState({
                    books: r.items,
                })
            })
    }

    render() {
        return (
            <div className="">
                <SearchBar newSearch={this.newSearch} />
                <Books
                    books={this.state.books}
                    booksFound={this.state.booksFound}
                    displayPage={this.displayPage}
                    currentQuery={this.state.currentQuery}
                />
            </div>
        )
    }
}

export default App;
