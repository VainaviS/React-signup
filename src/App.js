import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Broker from './components/broker.component'
import Publisher from './components/pub.component'
import Subscriber from './components/sub.component'
import Home from './components/home.component'
import User from './components/userDetails'

function App() {
  return (
    <Router>
      <div class="bg_image">
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/Home'}>
              MQTT
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to={'/broker'}>
                    Broker
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Pub'}>
                    Pub
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Sub'}>
                    Sub
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/userDetails'}>
                    User
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          
            <Routes>
             <Route exact path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Pub" element={<Publisher />} />
              <Route path="/broker" element={<Broker />} />
              <Route path="/Sub" element={<Subscriber />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
        </div>
      
      </div>
    </Router>
  )
}

export default App
