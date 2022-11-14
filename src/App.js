import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Errorpage from './Components/Errorpage'
import Menu from './Components/Menu'
const App = () => {
  return (
    <div>
    <Menu/>

        <Routes>
          <Route path="/" element= { <Home/> } />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={ <Contact/> } />
          <Route path='*' element={< Errorpage/> } />
        </Routes>
    </div>
  )
}

export default App