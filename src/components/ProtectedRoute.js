import React from 'react'
import {Redirect, Route} from 'react-router-dom'


const ProtectedRoute = ({component: Component, auth: authToken, toRoute: routePath, ...rest}) => {
    

    return (
        <Route {...rest}> {authToken? <Component/> : <Redirect to={routePath}/>} </Route>
    )
}

export default ProtectedRoute