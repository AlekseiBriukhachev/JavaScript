import './App.css';
import {Component, StrictMode} from "react";

const Header = () => {
  return <h2>Hello World</h2>
}

const Field = () => {
  const holder = "Type here";
  const styledField = {
    width: '300px'
  };
  return <input
      placeholder={holder}
      type="text"
      style={styledField}/>
}

function Btn() {
  const text = 'Log In';
  // const res = () => {
  //   return 'Log In';
  // }
  // const p = <p>Log In</p>

  const logged = false;

  return <button>{logged ? "Enter" : text}</button>
}

class Field extends Component {

}

function App() {
  return (
    <div className="App">
      <StrictMode><Header/></StrictMode>
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
