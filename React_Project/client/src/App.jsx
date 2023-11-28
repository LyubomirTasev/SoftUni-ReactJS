import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Menu from './components/Menu'
import About from './components/About'
import Contacts from './components/Contacts'

function App() {

  return (
    <>
      <Header />
    
      <Menu />

      <About />
   
      <Contacts />
    </>
  )
}

export default App
