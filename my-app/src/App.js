import './App.css';
import {Component} from "react";

class WhoAmI extends Component {
    render() {
        const {name, surname, link} = this.props;
        return (
            <div>
                <h1>My name is {name}, surname - {surname}</h1>
                <a href={link}>My profile</a>
            </div>
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
