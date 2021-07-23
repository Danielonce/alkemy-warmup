import axios from 'axios'
import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import PostLine from '../components/PostLine'

const Home = () => {

    const history = useHistory()
    const [list, setList] = useState([]);

    
    //Fetching post list
    useEffect(() => {
        async function fetchData() {
            const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setList(data.data)
        }
        fetchData()
    }, [])


    //Delete entry by id:
    const deleteHandler = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            if(response.status === 200) {
                const newList = list.filter( element => element.id !== id);
                setList(newList);
            }
        })
    }

    //Open post:
    const openHandler = (id) => {
            history.push(`/post/${id}`)   
        }


    return (
        <div className='mt-4'>

            <h4 className='d-flex justify-content-center'>Posts</h4>

            {list.map( (element, key) => 

                <div className='mt-3' key={key}>
                    <PostLine 
                        post={element} 
                    />
                    <div className="p-0 container table table-hover d-flex justify-content-end">
                        <span onClick={() => openHandler(element.id)} className="btn btn-outline-success ml-1">Open</span>
                        <span onClick={() => deleteHandler(element.id)} className="btn btn-outline-danger ml-1">Delete</span>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Home
