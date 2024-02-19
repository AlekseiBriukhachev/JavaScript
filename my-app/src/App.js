import './App.css';
import {Component} from "react";

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            position: ''
        }
        this.nextYear = this.nextYear.bind(this);
    }

    nextYear = () => {
        console.log('+++');
        this.setState({
            years: this.state.years + 1
        })
    }

    commitInputChanges = (e) => {
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state;

        return (
            <>
                <button onClick={this.nextYear}>+++</button>
                <h1>My name is {name}, surname - {surname},
                    age - {years},
                    position - {position}
                </h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Enter position</span>
                    <input type="text" onChange={this.commitInputChanges}/>
                </form>
            </>
        )
    }
}
function App() {
  return (
    <div className="App">
        <WhoAmI name="John" surname="Doe" link="facebook.com"/>
        <WhoAmI name="Alex" surname="Smith" link="insta.com"/>
    </div>
  );
}
export default App;
