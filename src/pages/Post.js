import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PostCard from '../components/PostCard'
import axios from 'axios'

const Post = () => {

    const [post, setPost] = useState([])
    const [errorAlert, setErrorAlert] = useState(false)
    
    const param = useParams();
    const id = param.id

    useEffect(() => {
        async function fetchData() {
            try {     
                const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                setPost(data.data)            
            } catch (error) {
                console.log(error)
                setErrorAlert(true)
            }
        }
        fetchData()
    }, [id])

    return (
        <div className='mt-4'>
            {!errorAlert ? 
                
                <div>
                    <PostCard info={post} />
                    <div className="p-0 container table table-hover d-flex justify-content-end">
                        <Link to={{pathname:`/edit/${id}`, state: post}} className='mr-3 btn btn-outline-info'>Edit</Link>
                    </div>
                </div>
                
                    : 
                
                <div className='container'>
                    <div class="alert alert-dismissible alert-danger">
                        <button type="button" class="btn" data-bs-dismiss="alert">&times;</button>
                        <strong>Error</strong> <a href="/home" class="alert-link">Entry not found</a> try submitting again.
                    </div>
                </div>

            }
        </div>
    )
}

export default Post
