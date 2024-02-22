import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Button} from "./AppOld";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
  font-weight: bold;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
      {/*<BigButton as="a">Send report</BigButton>*/}
  </StrictMode>
  //   elem
);
