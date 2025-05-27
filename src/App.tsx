import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Nav from './components/Nav/Nav';
import sharedStyles from './shared/shared.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={sharedStyles.routesAndNav}>
        <div className={sharedStyles.routesContainer}>
          <Routes>
            <Route path="/my-portfolio/" element={<Home />} />
            <Route path="/my-portfolio/projects" element={<Projects />} />
            <Route path="/my-portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
