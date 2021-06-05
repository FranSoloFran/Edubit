import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { firebase, db } from "../firebase/firebase-config";
import { setLogin } from "../reducers/authReducer";
import { loadingCheck } from "../reducers/loadingReducer";


//CUSTOM ROUTES
import { AuthRoute } from "./AuthRoute";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { LandingRoute } from "./LandingRoute";



export const AppRoutes = () => {

    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
      dispatch(loadingCheck(true));
        firebase.auth().onAuthStateChanged(async(user) => {
            if (user?.uid) {
                const docRef = await db.collection(`${user.uid}`).doc('userInfo').get().then((docs) => docs.data());
                dispatch(setLogin(user.uid, docRef.name));
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
                        path="/landingpage"
                        component={LandingRoute}
                        isAuthenticated={isLoggedIn}
                    />

                    <Redirect to="/homepage" />

                </Switch>
            </div>
        </Router>
    )
}
