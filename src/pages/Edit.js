import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import ErrorAlert from '../components/ErrorAlert';
import SuccessAlert from '../components/SuccessAlert';

const Edit = () => {

    const location = useLocation();
    const history = useHistory();

    const [textValue, setTextValue] = useState({
        title: '',
        body: ''
    });
    
    const [submitAlert, setSubmitAlert] = useState(false);

    //Check if location.state is not undefined, avoiding crash when it render with wrong id
    useEffect(() => {
        if (location.state) {
            setTextValue({
                title: location.state.title,
                body: location.state.body
            })
        }
        
    }, [location.state])


    const submitHandler = (e) => {
        e.preventDefault()
        console.log(textValue)
        axios.put(`https://jsonplaceholder.typicode.com/posts/${location.state.id}`, textValue)
            .then( (response) => {
                if(response.status === 200) {
                    console.log('yeah!')
                }
            })
            .then(setSubmitAlert(true))
            .then(setTimeout(() => {
                history.push('/home')
            }, 2500))
            .catch( err => console.log(err) )
    }

    return (

        

        <div>

            {!location.state ? 

                <ErrorAlert
                    first='you must chose some entry and click down on EDIT button'
                    second='or try submitting again'
                />

                :
                
                
                <form className='container'>

                    <div className="card border-secondary mb-3 card-height mt-4">
                        <div className="card-body">

                            
                            <input 
                                className="card-title h4 d-block w-100"
                                type='text'
                                placeholder='Title'
                                value={textValue.title}
                                onChange={(e) => {
                                    setTextValue({ ...textValue, title: e.target.value })
                                }}    
                            />
                            
                            <textarea 
                                className="card-text d-block w-100 h-50 h5" 
                                type='text'
                                value={textValue.body}
                                onChange={(e) => {
                                    setTextValue({ ...textValue, body: e.target.value })
                                }} 
                            />
                        </div>
                        <button 
                            className='btn btn-outline-success'
                            onClick={(e) => {submitHandler(e)}}
                        >Submit</button>
                    </div>

                    {submitAlert ?

                        <SuccessAlert
                            first='Well done!'
                            second=' You successfully edited this entry '
                            link='click /home '
                            third="or wait while you're redirected"
                        />

                        :

                        null
                    }

                </form>

            }
        
        </div>
    )
}

export default Edit
