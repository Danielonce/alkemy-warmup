import React from 'react'

const PostCard = ({info}) => {
    console.log(info)
    return (
        <div className='container'>
            <div className="card border-primary mb-3">
                <div className="card-header">{info.title}</div>
                    <div className="card-body">
                    <h4 className="card-title">{info.title}</h4>
                    <p className="card-text">{info.body}</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard
