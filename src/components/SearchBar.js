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
            <form className='search-bar' onSubmit={this.onSubmit}>
                <label>Search in Google Books:</label>
                <div className='search-bar-wrapper'>
                    <input
                        className='search-input'
                        type='text'
                        value={this.state.searchTerm}
                        onChange={this.searchTermHandler}
                        placeholder='Type something...'
                    />
                    <button className='search-btn' type='submit' disabled={this.props.loading}>Search</button>
                </div>
            </form>

        )
    }
}
