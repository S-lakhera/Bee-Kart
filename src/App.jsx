import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoute from './routes/AppRoute'

const App = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <div className=''>
        <AppRoute />
      </div>
      <Footer />
    </div>
  )
}

export default App
