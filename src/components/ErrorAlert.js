import React from 'react'

const ErrorAlert = ({first, second}) => {
    return (
        <div>
            <div className='container'>
                <div className="alert alert-dismissible alert-danger">
                    <button type="button" className="btn" data-bs-dismiss="alert">&times;</button>
                    <strong>Error</strong> <a href="/home" className="alert-link">{first}</a> {second}
                </div>
            </div>
        </div>
    )
}

export default ErrorAlert
