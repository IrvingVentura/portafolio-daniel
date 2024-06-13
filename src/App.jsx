import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Index from './routes/Index';
import Contactos from './routes/Contactos';
import About from './routes/About';
import ContactoDinamico from './routes/ContactoDinamico';
import Projects from './routes/Projects';
import Python from './routes/Python';
import MachineLearning from './routes/MachineLearning';
import CPlusPlus from './routes/CPlusPlus';
import ProgramacionLogica from './routes/ProgramacionLogica';
import JavaScript from './routes/JavaScript';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gradient-to-r from-blue-900 via-gray-600 to-gray-400 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <NavLink to="/" activeClassName="">
            <FontAwesomeIcon icon={faHome} className="text-3xl text-white hover:text-gray-200 mr-6 transition duration-300 ease-in-out transform hover:scale-110" />
          </NavLink>
          <div className="flex space-x-6">
            <NavLink 
              to="/contactos"
              activeClassName=""
              className="text-lg font-semibold text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-1 text-3xl text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110" style={{background: 'none'}} />
            </NavLink>
            <NavLink 
              to="/about"
              activeClassName=""
              className="text-lg font-semibold text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faUser} className="mr-1 text-3xl text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110" style={{background: 'none'}} />
            </NavLink>
            <NavLink 
              to="/projects"
              activeClassName=""
              className="text-lg font-semibold text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faBriefcase} className="mr-1 text-3xl text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110" style={{background: 'none'}} />
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="container max-w-4xl mx-auto px-4 py-6 bg-white shadow-lg rounded-lg mt-6">
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/contactos' element={<Contactos />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacto/:nombre/:apellido' element={<ContactoDinamico />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/python' element={<Python />} />
          <Route path='/projects/machine-learning' element={<MachineLearning />} />
          <Route path='/projects/cplusplus' element={<CPlusPlus />} />
          <Route path='/projects/programacion-logica' element={<ProgramacionLogica />} />
          <Route path='/projects/java-script' element={<JavaScript />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
