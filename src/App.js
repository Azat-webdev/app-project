import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import { AlertContext } from './context/alert/alertContext'

function App() {
  return (
    <AlertContext>
      <BrowserRouter>
        <Navbar />
          <div className="container pt-4">
        <Alert />
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} component={About} />
        </Switch>
          </div>
      </BrowserRouter>
    </AlertContext>
  )
}

export default App;
