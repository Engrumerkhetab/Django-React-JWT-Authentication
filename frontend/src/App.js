import React from 'react'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Loginpage from './views/Loginpage'
import Dashboard from './views/Dashboard'
import Navbar from './views/Navbar'
function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
              <Navbar/>
              <Switch>
                <PrivateRoute component={Dashboard} path="/dashboard" exact />
                <Route component={Registerpage} path="/register" />
                <Route component={Loginpage} path="/login" />
                <Route component={Homepage} path="/" />
               
              </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
