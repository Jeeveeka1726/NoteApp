import React from 'react'
import LandingPage from './Pages/LandingPage/LandingPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

const routes=(
  <Router>
    <Routes>
      <Route path='/dashboard' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  </Router>
)



export default function App() {
  return (
    <div>
      {routes}
    </div>
  )
}
