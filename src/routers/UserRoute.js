import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import { NavBarUser } from '../components/user/NavBar_User';
import { UserScreen } from '../components/user/UserScreen';
import { TradingScreen } from '../components/user/trading/TradingScreen';




export const UserRoute = () => {

    return (
        <Route>
            <div>
                <div className="user__main-content">
                    <NavBarUser />
                </div>
                <Switch>
                    <Route exact path="/user" component={UserScreen} />
                    <Route exact path="/user/trading" component={TradingScreen} />
                    <Redirect to="/user" />
                </Switch>
            </div>
        </Route>
    )
}