import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import HomePage from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
