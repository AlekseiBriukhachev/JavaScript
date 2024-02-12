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

// function Btn() {
//   const text = 'Log In';
  // const res = () => {
  //   return 'Log In';
  // }
  // const p = <p>Log In</p>

  // const logged = false;

  // return <button>{logged ? "Enter" : text}</button>
// }

// function WhoAmI(props) {
function WhoAmI({name, surname, link}) {
    return (
      <div>
          <h1>My name is {name}, surname - {surname}</h1>
          <a href={link}>My profile</a>
      </div>
    );
}
function App() {
  return (
    <div className="App">
      {/*<StrictMode><Header/></StrictMode>*/}
      {/*<Field/>*/}
      {/*<Btn/>*/}
        <WhoAmI name="John" surname="Doe" link="facebook.com"/>
        <WhoAmI name="Alex" surname="Smith" link="insta.com"/>
    </div>
  );
}

export {Header};
export default App;
