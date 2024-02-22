import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

class Form extends Component {
    // myRef = React.createRef();

    // componentDidMount() {
    //     this.myRef.current.doSmth();
    // }

    setInputRef = (elem) => {
        this.myRef = elem;
    }

    focusFirst = () => {
        if (this.myRef) {
            this.myRef.focus();
        }
    }

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Email address
                        </label>
                        <input
                            ref={this.setInputRef}
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Example textarea
                        </label>
                        <textarea
                            onClick={this.focusFirst}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"></textarea>
                    </div>
                </form>
            </Container>
        )
    }
}

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.inpRef = React.createRef();
    }

    doSmth = () => {
        console.log('smth');
    }

    componentDidMount() {
        this.inpRef.current.focus();
    }

    render() {
        return (
            <input
                ref={this.inpRef}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"/>
        )
    }
}

function App() {
    return (
        <Form/>
    );
}

export default App;
