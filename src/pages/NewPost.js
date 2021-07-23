import { useState } from 'react';
import {Formik} from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import SuccessAlert from '../components/SuccessAlert';

const NewPost = () => {
  
  
  const history = useHistory()
  
  const [inputClassName, setInputClassName] = useState('form-control container mt-3')
  const [submitAlert, setSubmitAlert] = useState(false)
  
  return (

  <div>

    <h4 className='d-flex justify-content-center mt-4'>New</h4>

    <Formik

      initialValues={{ title: '', body: '' }}

      validate={values => {
      
        const errors = {};

        if (!values.title) {

          setInputClassName('form-control is-invalid')
          errors.title = 'Please, enter a title';

        } 
        if (!values.body) {
            errors.body = 'Please, write your entry body'
        }

        return errors;

      }}

      onSubmit={ formData => {

        axios.post('https://jsonplaceholder.typicode.com/posts', formData)
          .then( (response) => {
            if(response.status === 201) {
              console.log('yeah!')
            }
          })
          .then(setSubmitAlert(true))
          .then(setTimeout(() => {
            history.push('/home')
        }, 2500))
        
        .catch( err => console.log(err) )

      }}

    >

      {({

        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,

      }) => (

        <form className='container' onSubmit={handleSubmit}>

          <input type="text" name="title"

            className={inputClassName}
            placeholder='Title'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}

          />

          {errors.title && touched.title && errors.title}

          <textarea type="text" name="body"

            className={inputClassName}
            placeholder='Body'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.body}

          />

          {errors.body && touched.body && errors.body}
          
          <div className="p-0 container table table-hover d-flex justify-content-end">
            <button type="submit" disabled={isSubmitting} className='btn btn-outline-success mt-5'>

              Submit

            </button>
          </div>

          {submitAlert
            ?
              <SuccessAlert 
                first='Well done!'
                second=" You've successfully created an entry "
                link='Now click here to /home '
                third="or wait while you're redirected"
              />
            
            : null
          }

        </form>

      )}

    </Formik>

  </div>

);

}

export default NewPost
