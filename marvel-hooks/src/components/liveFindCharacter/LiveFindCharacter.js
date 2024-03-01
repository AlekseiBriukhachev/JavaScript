import './liveFindCharacter.scss'
import useMarvelServices from "../../services/MarvelServices";
import {useEffect, useMemo, useState} from "react";
import useDebounce from "../../hooks/debounce.hook";
import {Link} from "react-router-dom";
import Spinner from "../spinner/Spinner";

const LiveFindCharacter = () => {

    const {loading, error, getCharacterByNameInput, clearError} = useMarvelServices();
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    const [done, setDone] = useState(true);

    const debouncedData = useDebounce(input, 400);

    useEffect(() => {
        if (debouncedData) {
            getCharacterByNameInput(debouncedData)
                .then(res => {
                    setData(res)
                    setDone(false)
                })
        }
    }, [debouncedData]);

    const initName = (e) => {
        setInput(e.target.value);
    }

    const  onBlur = () => {
        setTimeout(() => setDone(true), 150);
    }

    const onFocus = () => {
        setDone(false);
    }

    const renderResults = useMemo(() => data.map(({id, name, thumbnail}, i) =>
        <li key={i}>
            <Link to={`/characters/${id}`}>
                <div  className='findCharacter__results-wrapper'>
                    <img src={thumbnail} alt={name}/>
                    <div className='findCharacter__desc'>{name}</div>
                </div>
            </Link>
        </li>),[data])


    const noDisplay = done || !input ? 'none' : 'block';
    const spinner = loading ? <Spinner/> : null;

    return (
        <div className="findCharacter">
            <div className='container'>
                <div className="findCharacter__block">
                    <form>
                        <input  value={input}
                                onChange={initName}
                                onBlur={onBlur}
                                onFocus={onFocus}
                                name='find'
                                type='text'
                                autoComplete="on"
                                placeholder='Or find a character by name'/>
                        {data.length === 0
                            ? null
                            : <ul className='findCharacter__results' style={{animation: `fadeIn .4s`, display: noDisplay}}>
                                {loading ? spinner: renderResults}
                            </ul>}
                    </form>
                </div>
                {error? <div style={{fontWeight: "bold", color: 'red'}}>Unknow error, try search again</div>: null}
            </div>
            {done ? null : <div className='findCharacter__overlay'>

            </div> }
        </div>
    )
}
export default LiveFindCharacter;