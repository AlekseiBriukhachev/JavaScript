import useMarvelServices from "../../services/MarvelServices";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import AppBanner from "../appBanner/AppBanner";
import setContent from "../../utils/setContetnt";

const SinglePage = ({Component, dataType}) => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const {getComic, getCharacter, clearError, process, setProcess} =  useMarvelServices();

    useEffect(() => {
        updateData();
    }, [id])

    const updateData = () => {
        clearError();

        switch (dataType) {
            case 'comic':
                getComic(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('confirmed'));
                break;
            case 'character':
                getCharacter(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('confirmed'));
                break;
        }
    }

    const onDataLoaded = (data) => {
        setData(data);
    }

    return (
        <>
            <AppBanner/>
            {setContent(process, Component, data)}
        </>
    )
}
export default SinglePage;