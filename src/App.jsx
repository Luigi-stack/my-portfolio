import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import NavBarTop from './components/NavBarTop';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <NavBarTop />
              <HomePage />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
