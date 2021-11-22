import './App.css'
import Login from './components/login/Login'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/home/Header'
import Main from './components/home/Main'
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/home'>
            <Header />
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
