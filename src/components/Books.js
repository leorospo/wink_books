import React from 'react';

export default class Books extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                {this.props.books.map(el => <p key={el.id}>{el.volumeInfo.title}</p>)}
            </div>
        )
    }
}
