import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import ProtoTypes from 'prop-types';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) =>{
   
    return(        
        <Route             
            {...rest}
            component={(props) =>(
                (isAuthenticated)
                ? (<Component {...props}/>)
                : (<Redirect to="/homepage" />)
            )}      
        
        />
    )
}


PrivateRoute.prototype={
    isAuthenticated : ProtoTypes.bool.isRequired,
    component : ProtoTypes.func.isRequired
}
