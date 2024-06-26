import AppHeader from "../appHeader/AppHeader";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));
const App = () => {

    return (<Router>
        <div className="app">
            <AppHeader/>
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        {/*https://stackoverflow.com/questions/64890293/react-router-v6-nested-routing-without-outlet*/}
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/comics">
                            <Route index element={<ComicsPage/>}/>
                            <Route path=":id" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>}/>
                        </Route>
                        <Route path="/characters">
                            {/*<Route index element={<SinglePage Component={SingleCharacterLayout} dataType='characters'/>}/>*/}
                            <Route path=":id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}/>
                        </Route>
                        <Route path='*' element={<Page404/>}/>
                    </Routes>
                </Suspense>
            </main>
        </div>
    </Router>);
}

export default App;
