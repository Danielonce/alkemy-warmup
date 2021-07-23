import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import LoginRoute from './components/LoginRoute';
import Header from './components/Header';
import Post from './pages/Post';
import NewPost from './pages/NewPost';
import Edit from './pages/Edit';



const App = () => {

  const isAuth = window.localStorage.getItem('tokenLoginAuth')
  console.log(isAuth)

  return (

    <Fragment>


      <Router>
    
          <Header
            auth={isAuth}
          />
          
          <Switch>
            

            <LoginRoute
              exact path='/'
              component={Login}
              auth={isAuth}
            />

            <ProtectedRoute
              exact path='/home'
              component={Home}
              toRoute='/'
              auth={isAuth} 
            />

            <ProtectedRoute
              exact path='/post/:id'
              component={Post}
              toRoute='/'
              auth={isAuth} 
            />

            <ProtectedRoute
              exact path='/newpost'
              component={NewPost}
              toRoute='/'
              auth={isAuth} 
            />

            <ProtectedRoute
              exact path='/edit/:id'
              component={Edit}
              toRoute='/'
              auth={isAuth} 
            />

          </Switch>

      </Router>

    </Fragment>
  
  )

}


export default App;
