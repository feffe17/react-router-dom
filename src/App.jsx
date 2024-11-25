import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from "./pages/About"
import Books from "./pages/Books"
import Contacts from "./pages/Contacts"
import DefaultLayout from './pages/DefaultLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/books' element={<Books />} />
            <Route path='/contacts' element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
