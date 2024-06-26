//https://redux-toolkit.js.org/introduction/getting-started#whats-included
import { configureStore } from '@reduxjs/toolkit';
import filters from '../components/heroesFilters/filtersSlise';
import { apiSlice } from '../api/apiSlice';

const stringMiddleWare = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action);
}

const store = configureStore({
    reducer: { filters, [apiSlice.reducerPath]: apiSlice.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleWare, apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;