import './comicList.scss';
import {useEffect, useRef, useState} from "react";
import useMarvelServices from "../../services/MarvelServices";
import charList from "../charList/CharList";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import {Link} from "react-router-dom";

const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, getAllComics, clearError} = useMarvelServices();

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [loading, newItemLoading]);

    const onRequest = (offset, initial) => {
        setNewItemLoading(initial);
        getAllComics(offset)
            .then(onComicsLoaded);
    }

    const onComicsLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 8);
        setComicsEnded(ended);
    }

    const onScroll = () => {
        if (!newItemLoading && !loading &&
            (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 1)) {
            onRequest(offset, true);
        }
    }
    function renderItems(arr) {
        const items = arr.map((item, i) => {
            return (
                <li className="comics__item" key={i}>
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </li>
            )
        })
        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

    const items = renderItems(comicsList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;
    const newItemSpinner = newItemLoading ? <Spinner/> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {items}
            <div>
                {newItemSpinner}
            </div>
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': comicsEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset, true)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;