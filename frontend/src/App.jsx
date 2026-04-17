import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import ListaPage from './pages/ListaPage'
import UjPage from './pages/UjPage'
import ModositasPage from './pages/ModositasPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/lista" element={<ListaPage />} />
          <Route path="/uj" element={<UjPage />} />
          <Route path="/modositas" element={<ModositasPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
