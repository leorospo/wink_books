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

                {this.props.books.length === 0 && this.props.currentQuery ?
                    <div>No books found</div> :
                    <div className='books-wrapper'>
                        {this.props.books.map(el =>
                            <div className='book' id={el.id} key={el.id}>
                                <img src={el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.smallThumbnail : ''}></img>
                                <div className='book-info'>
                                    <div className='book-genre'>{el.volumeInfo.categories && `${el.volumeInfo.categories.map(el => { return (el + ' ') })}`} {el.volumeInfo.publishedDate && `- ${el.volumeInfo.publishedDate}`}</div>
                                    <div className='book-title'>{el.volumeInfo.title}</div>
                                    <div className='book-intro'>{el.volumeInfo.description}</div>
                                </div>
                            </div>
                        )}
                    </div>
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
