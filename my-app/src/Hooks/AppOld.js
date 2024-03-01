import './App.css';
import React, {Component} from "react";
import styled from "styled-components";
import BootstrapTest from "./bootstrapTest";

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);

  a {
    display: block;
    margin: 10px 0 10px 0;
    color: ${props => props.active ? 'orange' : 'black'};
  }

  input {
    display: block;
    margin-top: 10px;
  }
`;

const Header = styled.h2`
  font-size: 22px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, .2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`;
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
            <EmpItem active>
                <Button onClick={this.nextYear}>+++</Button>
                <Header>My name is {name}, surname - {surname},
                    age - {years},
                    position - {position}
                </Header>
                <a href={link}>My profile</a>
                <form>
                    <span>Enter position</span>
                    <input type="text" onChange={this.commitInputChanges}/>
                </form>
            </EmpItem>
        )
    }
}

const DynamicGreating = (props) => {
    return (
        <div className={'mb-3 p-3 border border-' + props.color}>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
                })
            }
        </div>
    )
}

const HelloGreatings = () => {
    return (
        <div style={{'width': '600px', 'margin': '0 auto'}}>
            <DynamicGreating color={'primary'}>
                <h2>This weal was hard</h2>
                <h2>Hello world</h2>
            </DynamicGreating>
        </div>
    )
}

const Message = (props) => {
    return (
        <h2>The counter is {props.counter}</h2>
    )
}

class Counter extends Component {
    state = {
        counter: 0
    }

    changeCounter = () => {
        this.setState(({counter}) => ({
            counter: counter + 1
        }));
    }

    render() {
        return (
            <>
                <button
                    className={'btn btn-primary'}
                    onClick={this.changeCounter}>
                    Click Me
                </button>
                {this.props.render(this.state.counter)}
            </>
        );
    }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
  return (
      <Wrapper>
          <Counter render={counter => (
              <Message counter={counter}/>
          )}/>
          <HelloGreatings/>
          <BootstrapTest
              left={
                  <DynamicGreating color={'primary'}>
                      <h2>Left</h2>
                  </DynamicGreating>
              }
              right={
                  <DynamicGreating color={'primary'}>
                      <h2>Right</h2>
                  </DynamicGreating>
              }
          />

        <WhoAmI name="John" surname="Doe" link="facebook.com"/>
        <WhoAmI name="Alex" surname="Smith" link="insta.com"/>
      </Wrapper>
  );
}
export default App;
