import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Header} from "./App";

// const text = 'Hello World!';
// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello React World');

// const elem = (
//     <div>
//         <h2 className="text">Tekst: {text}</h2>
//         <input type="text"/>
//         <label htmlFor=""></label>
//         <button tabIndex="0">Click</button>
//     </div>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
  //   elem
);
