
import './App.css'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from './Component/Home'
import Navbar from './Component/Navbar'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='Home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
