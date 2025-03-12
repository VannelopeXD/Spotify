import React from 'react'
import Header from './components/Header'
import Main from './components/main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Artists from './pages/Artists'
import Artist from './pages/Artist'
import Song from './pages/Song'
import Songs from './pages/Songs'

const App = () => {
  return (
        <BrowserRouter>
          <Header />
          {/* <Main /> */}

          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/artists' element={<Artists />}/>
          <Route path='/artist/:id' element={<Artist />}/>
          <Route path='/songs' element={<Songs />}/>
          <Route path='/song/:id' element={<Song />}/>
          
          </Routes>      
        </BrowserRouter>
  );
}

export default App  

