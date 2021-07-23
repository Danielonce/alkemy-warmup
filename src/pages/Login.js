import { useState } from 'react';
import {Formik} from 'formik';
import axios from 'axios';

const Login = () => {

  const [inputClassName, setInputClassName] = useState('form-control container m-3')
  
  return (

  <div>

    <h4 className='d-flex justify-content-center mt-4'>Login</h4>

    <Formik

      initialValues={{ email: '', password: '' }}

      validate={values => {

        const errors = {};

        if (!values.email) {

          setInputClassName('form-control is-invalid')
          errors.email = 'Please, enter a valid e-mail';

        } else if (

          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)

        ) {

          errors.email = 'Invalid email address';

        }

        return errors;

      }}

      onSubmit={ formData => {

        axios.post('http://challenge-react.alkemy.org/', formData)
          .then( (response) => {
            window.localStorage.setItem('tokenLoginAuth', JSON.stringify(response.data.token))
            console.log(response.data.token)
            window.location = '/home'
          })
          .catch( (err) => {
            console.log(err)
          })

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

        <form className='container'

          onSubmit={handleSubmit}      
        >

          <input type="email" name="email"

            className={inputClassName}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}

          />

          {errors.email && touched.email && errors.email}

          <input type="password" name="password"

            className={inputClassName}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}

          />

          {errors.password && touched.password && errors.password}
          
          <div className="p-0 container table table-hover d-flex justify-content-end">
            <button type="submit" disabled={isSubmitting} className='mr-3 btn btn-outline-success'>

            Submit

          </button>
          </div>

        </form>

      )}

    </Formik>

  </div>

);

}



export default Login;