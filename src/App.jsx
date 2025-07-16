import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "../src/Pages/HomePage/Page"
import Login from "../src/Pages/Login/Page"
import NotFound from "../src/Pages/NotFound/404NotFound"
import MainLayout from './components/layout/MainLayout'
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/maindishes' element={<Login/>}/>
          <Route path="*" element={<NotFound />} />
         </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App