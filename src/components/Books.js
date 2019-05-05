import React from 'react';
import Pagination from './Pagination';

export default class Books extends React.Component {

    render() {
        if (this.props.loading) return <div>Loading</div>

        return (
            <div>
                {this.props.books.length === 0 && this.props.currentQuery ?
                    <div>No books found</div> :
                    this.props.books.map(el => <p key={el.id}>{el.volumeInfo.title}</p>)
                }
                <Pagination
                    booksFound={this.props.booksFound}
                    displayPage={this.props.displayPage}
                    loading={this.props.loading}
                />
            </div>
        )
    }
}
