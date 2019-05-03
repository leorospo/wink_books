import React from 'react';
import './App.css';
import Books from './components/Books'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="">
                <Books />
            </div>
        )
    }
}

export default App;
