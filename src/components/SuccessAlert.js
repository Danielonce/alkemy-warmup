import React from 'react'

const SuccessAlert = ({first, second, link, third }) => {
    return (
        <div className="alert alert-dismissible alert-success">
            <strong>{first}</strong> {second} <a href="/home" className="alert-link">{link} </a>{third}
        </div>
    )
}

export default SuccessAlert
