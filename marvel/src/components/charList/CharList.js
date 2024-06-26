import './charList.scss';
import {Component} from "react";
import MarvelServices from "../../services/MarvelServices";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import PropTypes from "prop-types";

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210,
        charEnded: false
    }

    marvelService = new MarvelServices();

    componentDidMount() {
        this.onRequest();
        window.addEventListener('scroll', this.onScroll);
    }

    onRequest = (offset) => {
        if (offset) {
            console.log("Loading")
        }
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError);
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }

    onScroll = () => {
        const {offset, loading, newItemLoading} = this.state;
        if (!newItemLoading && !loading &&
            (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 1)) {
            this.onRequest(offset);
        }
    }

    componentWillUnmount() {
        console.log('Unmount');
        window.removeEventListener('scroll', this.onScroll);
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    itemRefs = [];

    setRefs = ref => {
        this.itemRefs.push(ref);
    }

    focusOnItem = id => {
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemRefs[id].classList.add('char__item_selected');
        this.itemRefs[id].focus();
    }

    renderItems(arr) {
        const items = arr.map((item, i) => {
            let imgStyle = {'objectFit': 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit': 'contain'};
            }

            return (
                <li className="char__item"
                    key={item.id}
                    tabIndex={0}
                    ref={this.setRefs}
                    onClick={() => {
                        this.props.onCharSelected(item.id);
                        this.focusOnItem(i);
                    }}
                    onKeyPress={e => {
                        if (e.key === ' ' || e.key === 'Enter') {
                            this.props.onCharSelected(item.id);
                            this.focusOnItem(i);
                        }
                    }}>
                    <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                    <div className="char__name">{item.name}</div>
                </li>
            )
        });
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    render() {
        const {charList, loading, error, newItemLoading, offset, charEnded} = this.state;
        const items = this.renderItems(charList);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;
        const newItemSpinner = newItemLoading ? <Spinner/> : null;
        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <div>
                    {newItemSpinner}
                </div>
                <button
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{'display': charEnded ? 'none' : 'block'}}
                    onClick={() => this.onRequest(offset)}>
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
}

CharList.propType = {
    onCharSelected: PropTypes.number.isRequired
}

export default CharList;