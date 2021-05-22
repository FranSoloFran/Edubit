import React from 'react';
import { Provider } from 'react-redux';
import { Loader } from './components/loader/Loader';
import { MsgBox } from './components/msgbox/MsgBox';
import { AppRoutes } from './routers/AppRoute';
import { store } from './store/store';




export const SeminarioApp = () =>{
    return(
        <Provider store={store}>
            <AppRoutes />
            <MsgBox />
            <Loader />
        </Provider>
    )
}