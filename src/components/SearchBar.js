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
            this.props.newSearch(this.state.searchTerm)
        } else {
            alert('Write something')
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>Search in Google Books:</label>
                <input
                    type='text'
                    value={this.state.searchTerm}
                    onChange={this.searchTermHandler}
                    placeholder='Type something...'
                />
                <button type='submit'>Search</button>
            </form>

        )
    }
}
