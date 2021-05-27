import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';


import {firebase} from '../firebase/firebase-config';
import { login } from '../reducers/authReducer';
import { loadingCheck } from '../reducers/loadingReducer';

//CUSTOM ROUTES 
import { AuthRoute } from './AuthRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { UserRoute } from './UserRoute';



export const AppRoutes = () => {

    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        dispatch(loadingCheck(true));
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.name));
                setIsLoggedIn(true);
            }
            else {
                setIsLoggedIn(false);
            }
        });
        dispatch(loadingCheck(false));
    }, [dispatch, setIsLoggedIn]);



    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/homepage"
                        component={AuthRoute}
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoute
                        path="/user"
                        component={UserRoute}
                        isAuthenticated={isLoggedIn}
                    />

                    <Redirect to="/homepage" />

                </Switch>
            </div>
        </Router>
    )
}