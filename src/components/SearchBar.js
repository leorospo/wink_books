import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    searchTermHandler = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.searchTerm !== '') {
            this.props.printBooks(this.state.searchTerm)
        } else {
            alert('Write something')
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type='text'
                    value={this.state.searchTerm}
                    onChange={this.searchTermHandler} />
                <button type='submit'>Search</button>
            </form>

        )
    }
}
