import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HomePage />
              <About />
              <Projects />
              <Contact />
            </>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
