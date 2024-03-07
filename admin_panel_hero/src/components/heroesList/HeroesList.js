import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './heroesList.scss';
import { useGetHeroesQuery, useDeleteHeroMutation } from '../../api/apiSlice';

const HeroesList = () => {

    const {
        data: heroes = [],
        isLoading,
        isError
    } = useGetHeroesQuery();

    const [deleteHero] = useDeleteHeroMutation();

    const activeFilter = useSelector(state => state.filters.activeFilter);
    const filteredHeroes = useMemo(() => {
        const filteredHeroes = heroes.slice();
        return activeFilter === 'all' ?
            filteredHeroes :
            filteredHeroes.filter(item => item.element === activeFilter)
    }, [heroes, activeFilter]);


    const onDelete = useCallback((id) => {
        deleteHero(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return <Spinner />;
    } else if (isError) {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            <CSSTransition
                timeout={0}
                classNames="hero">
                <h5 className="text-center mt-5">Героев пока нет</h5>
            </CSSTransition>
        }

        return arr.map(({ id, ...props }) => {
            return (
                <CSSTransition
                    key={id}
                    timeout={500}
                    classNames="hero">
                    <HeroesListItem key={id} {...props} onDelete={() => onDelete(id)} />
                </CSSTransition>
            )
        })
    }

    const elements = renderHeroesList(filteredHeroes);
    return (
        <TransitionGroup>
            {elements}
        </TransitionGroup>
    )
}

export default HeroesList;