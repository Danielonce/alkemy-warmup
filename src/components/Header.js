import React from 'react'
import LogoutButton from './LogoutButton'
import '../MediaQueries.css'

const Header = ({auth}) => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">WarmBlog!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <form className="d-flex">
                        <a className="btn btn-outline-info navbar-button" href='/newpost'>New post</a>
                        
                        {auth ? 
                        <LogoutButton>Logout</LogoutButton>

                        : null
                        }

                    </form>
                </div>

            </div>
        </nav>

    )
}

export default Header
