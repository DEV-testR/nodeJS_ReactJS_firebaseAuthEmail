// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { AuthProvider } from './components/Auth'


function App() {

  return (
    // <AuthProvider>
    //   <Router>
    //     <Routes>
    //       <Route exact paht="/" Component={Home}></Route>
    //       <Route exact paht="/dashboard" Component={Dashboard}></Route>
    //       <Route exact paht="/login" Component={Login}></Route>
    //       <Route exact paht="/signup" Component={SignUp}></Route>
    //     </Routes>
    //   </Router>
    // </AuthProvider>

      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      </AuthProvider>
  )
}

export default App
