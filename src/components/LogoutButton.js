import React from 'react'

const LogoutButton = () => {

    const logoutHandler = () => {
        window.localStorage.removeItem('tokenLoginAuth')
        window.location = '/' 
    }

    return (
        
        <button className=' navbar-button btn btn-outline-secondary ml-4' onClick={logoutHandler}>
            Logout
        </button>
    
    )
}

export default LogoutButton