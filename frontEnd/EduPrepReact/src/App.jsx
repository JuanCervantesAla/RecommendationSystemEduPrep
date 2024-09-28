import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'; 
import HomeNotLogged from './HomeNotLogged'
import HomeCourses from './HomeCourses'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className='home'>
            <NavBar/>
            <HomeNotLogged/>
            <HomeCourses/>
          </div>
          } />
        <Route path="/login" element={<p>Here needs to be the login page</p>} />
        <Route path="/register" element={<p>Here needs to be the register page</p>} />
        <Route path="/cursos" element={<p>Here needs to be the register page</p>} />
      </Routes>
    </Router>
  )
}

export default App
