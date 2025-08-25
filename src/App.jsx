import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FAQ from './componenets/FAQ'
import Footer from './componenets/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Header from './componenets/Header'
// import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  //  <Router>
          <div className="flex flex-col min-h-screen">
        <Header/>
    
        <main className="flex-grow">
      <Routes>
        
        <Route path ="/" element = {<Home/>}/>
            <Route path="/about" element={<About />} />
          
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
    <FAQ/>
    </main>
    <Footer/>
    </div>
  //  </Router>
  )
}

export default App
