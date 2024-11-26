import { useState } from 'react'
import './App.css'
import Home from './page/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './page/Shop/Shop'
import Footer from './components/Footer/Footer'
import ProductDetail from './components/Detail/Detail'
// import Productcard from './components/Productcard'
// import Modal from './components/Modal/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Productcard/> */}
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/detail/:id' element={<ProductDetail/>}></Route>
        <Route path='/shop' element={<Shop/>} ></Route>
      </Routes>
    </BrowserRouter>
    {/* <Modal/> */}
    <Footer/>
    </>
  )
}

export default App
