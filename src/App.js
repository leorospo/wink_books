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
            loading: true,
        })
        getBooks(query)
            .then(r => r.json())
            .then(r => {
                this.setState({
                    books: r.items || [],
                    booksFound: r.totalItems,
                    loading: false,
                })
            })
    }

    displayPage = page => {
        this.setState({
            loading: true,
        })
        getBooks(this.state.currentQuery, page)
            .then(r => r.json())
            .then(r => {
                this.setState({
                    books: r.items,
                    loading: false,
                })
            })
    }

    render() {
        return (
            <div className="fullscreen-app">
                <div className='heading'>
                    <h1 className=''>Google Books App</h1>
                    {/* <h3>Application test project for Wink s.r.l.</h3> */}
                </div>
                <SearchBar
                    newSearch={this.newSearch}
                    loading={this.state.loading}
                />
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
