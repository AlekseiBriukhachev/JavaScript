import './charList.scss';
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";
import useMarvelServices from "../../services/MarvelServices";

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const {loading, error, getAllCharacters, clearError} = useMarvelServices();

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [loading, newItemLoading])

    const onRequest = (offset, initial) => {
        setNewItemLoading(initial);
        getAllCharacters(offset)
            .then(onCharListLoaded);
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }

    const onScroll = () => {
        if (!newItemLoading && !loading &&
            (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 1)) {
            onRequest(offset, true);
        }
    }

    const itemRefs = useRef([]);

    const focusOnItem = id => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            let imgStyle = {'objectFit': 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit': 'contain'};
            }

            return (
                <li className="char__item"
                    key={item.id}
                    tabIndex={0}
                    ref={elem => itemRefs.current[i] = elem}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                    }}
                    onKeyPress={e => {
                        if (e.key === ' ' || e.key === 'Enter') {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
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

    const items = renderItems(charList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;
    const newItemSpinner = newItemLoading ? <Spinner/> : null;
    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
            <div>
                {newItemSpinner}
            </div>
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset, true)}>
                <div className="inner">load more</div>
            </button>
        </div>
    );
}

CharList.propType = {
    onCharSelected: PropTypes.number.isRequired
}

export default CharList;