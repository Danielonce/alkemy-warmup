import React from 'react'
import {Redirect, Route} from 'react-router-dom'


const LoginRoute = ({component: Component, auth: authToken, ...rest}) => {
    

    return (
        <Route {...rest}> {authToken?  <Redirect to='/home'/> : <Component/>} </Route>
    )
}

export default LoginRoute