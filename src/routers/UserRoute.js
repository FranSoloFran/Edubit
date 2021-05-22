import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import { UserScreen } from '../components/user/UserScreen';




export const UserRoute = () => {

    return (
        <Route>
            <div>
                <Switch>
                    <Route exact path="/user" component={UserScreen} />
                    <Redirect to="/user" />                    
                </Switch>
            </div>
        </Route>
    )
}