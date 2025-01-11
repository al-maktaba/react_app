import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './ui/loader/Loader';

const AppRouter = () => {
    const { isAuth, setIsAuth, isloading } = useContext(AuthContext)
    console.log(isAuth)

    if (isloading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} exact={route.exact} element={route.element} key={route.path} />
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} exact={route.exact} element={route.element} key={route.path} />
                )}
            </Routes>
    );
}

export default AppRouter;