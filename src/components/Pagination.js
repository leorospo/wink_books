import React from 'react';

export default class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    paginationBuilder = () => {
        const books = this.props.booksFound
        let pages = []
        let pageNum = 0
        if (books > 10) {
            for (let i = 0; i < books; i += 10) {
                pages.push(++pageNum)
            }
        }
        return pages
    }

    render() {
        return (
            <div>
                {this.paginationBuilder().map(el =>
                    <button
                        key={el}
                        onClick={() => {
                            this.props.displayPage(el)
                        }}
                    >{el} </button>
                )}
            </div>
        )
    }
}
