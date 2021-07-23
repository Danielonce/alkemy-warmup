import React from 'react'

const PostLine = ({post}) => {
    return (
        <div>
            <table className="container table table-hover">
                <tbody>
                    <tr className="table-active">
                    <th scope="row">{post.title}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PostLine
