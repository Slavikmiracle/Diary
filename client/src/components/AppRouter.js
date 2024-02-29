import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE } from "../utils/consts";
import { Context } from "../index";

const AppRouter = () => {
    const {user, mark} = useContext(Context)
    // let isAuth=true
   console.log(user)
   console.log(mark)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                    <Route key = {path} path ={path} element = {<Component/>} exact/>
                )}
            {publicRoutes.map(({path, Component}) =>
                    <Route key = {path} path ={path} element = {<Component/>} exact/>
                )}
            <Route path="*" element = {<Navigate to={LOGIN_ROUTE} />} replace />
        </Routes>
    );
};

export default AppRouter;
