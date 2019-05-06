import React from 'react';
import Pagination from './Pagination';

export default class Books extends React.Component {

    render() {
        if (this.props.loading) return (
            <div className='loader'>
                <h5>Loading</h5>
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        )

        return (
            <div className='parent-width'>

                <div className='books-wrapper'>
                    <div className='book'>
                        <img src='http://books.google.com/books/content?id=-FNOPk_9tGgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'></img>
                        <div className='book-info'>
                            <div className='book-genre'>Genere - anno</div>
                            <div className='book-title'>Titolo del libro molto lungo che smargina</div>
                        </div>
                    </div>
                </div>


                {this.props.books.length === 0 && this.props.currentQuery ?
                    <div>No books found</div> :
                    this.props.books.map(el => <p id={el.id} key={el.id}>{el.volumeInfo.title}</p>)
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
