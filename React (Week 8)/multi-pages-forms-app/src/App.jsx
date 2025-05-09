import './App.css'

import Home from './home'
import Form from './form'
import About from './about'

import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/form' element={<Form></Form>}></Route>
      <Route path='/about' element={<About></About>}></Route>
    </Routes>
  )
}

export default App
