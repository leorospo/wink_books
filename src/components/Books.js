import React from 'react';

export default class Books extends React.Component {
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
            <div>
                {
                    this.state.books.map(el => <p key={el.id}>{el.volumeInfo.title}</p>)
                }
                <button onClick={() => this.printBooks('a')}>click</button>
            </div>
        )
    }
}
