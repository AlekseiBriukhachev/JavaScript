import {Component} from "react";
import ReactDOM from 'react-dom/client';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.counter
        }
    }

    // Используйте только стрелочную форму методов
    // Почему? Подробный ответ будет в следующем уроке

    incCounter = () => {
        if (this.state.counter < 50) {
            this.setState(state => ({
                counter: state.counter + 1
            }))
        }
    }

    decCounter = () => {
        if (this.state.counter > -50) {
            this.setState(state => ({
                counter: state.counter - 1
            }))
        }
    }

    rndCounter = () => {
        this.setState({
            counter: +(Math.random() * (50 - -50) + -50).toFixed(0)
        })
    }

    resetCounter = () => {
        this.setState({
            counter: this.props.counter
        })
    }

    render() {
        const {counter} = this.state;

        return (
            <div className="app">
                <div className="counter">{counter}</div>
                <div className="controls">
                    <button onClick={this.incCounter}>INC</button>
                    <button onClick={this.decCounter}>DEC</button>
                    <button onClick={this.rndCounter}>RND</button>
                    <button onClick={this.resetCounter}>RESET</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App counter={0}/>, document.getElementById('app'));

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов