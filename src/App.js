import React from 'react';
import 'normalize.css'
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
            loading: false,
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
            <div className="fullscreen-app">
                <div className='heading'>
                    <h1 className=''>Google Books App</h1>
                    <h3>Application test project for Wink s.r.l.</h3>
                </div>
                <div></div>
                <SearchBar newSearch={this.newSearch} />
                <Books
                    books={this.state.books}
                    booksFound={this.state.booksFound}
                    displayPage={this.displayPage}
                    currentQuery={this.state.currentQuery}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}

export default App;
