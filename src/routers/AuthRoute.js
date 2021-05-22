import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import { LoginScreen } from '../components/authuser/LoginScreen';
import { RegisterScreen } from '../components/authuser/RegisterScreen';
import { HomeScreen } from '../components/homepage/HomeScreen';




export const AuthRoute = () => {

    return (
        <Switch>
            <Route exact path="/homepage" component={HomeScreen} />
            <Route exact path="/homepage/login" component={LoginScreen} />
            <Route exact path="/homepage/register" component={RegisterScreen} />
            <Redirect to="/homepage" />
        </Switch>

    )
}