import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
