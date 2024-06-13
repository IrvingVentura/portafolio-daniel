import React from 'react';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="py-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h1 className="text-2xl md:text-5xl font-extrabold text-black text-left mb-8">Proyectos</h1>
      <div className="grid grid-cols-2 gap-8">
        <NavLink 
          to="/projects/python" 
          className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
        >
          <img 
            src="https://cdn.worldvectorlogo.com/logos/python-5.svg" 
            alt="Python Logo" 
            className="w-24 h-24 mx-auto mb-4 transition duration-300 transform hover:scale-110" 
            width="100"
          />
          <h5 className="text-lg font-bold mb-2 text-center transition duration-300 transform hover:scale-110">Proyectos en Python</h5>
          <p className="text-gray-600 text-center">Explora proyectos realizados en Python.</p>
        </NavLink>
        <NavLink 
          to="/projects/machine-learning" 
          className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
          
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/8618/8618881.png" 
            alt="Machine Learning Logo" 
            className="w-24 h-24 mx-auto mb-4 transition duration-300 transform hover:scale-110" 
            width="100"
          />
          <h5 className="text-lg font-bold mb-2 text-center transition duration-300 transform hover:scale-110">Proyectos de Machine Learning</h5>
          <p className="text-gray-600 text-center">Descubre proyectos de Machine Learning.</p>
        </NavLink>
        <NavLink 
          to="/projects/cplusplus" 
          className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
        >
          <img 
            src="https://cdn.worldvectorlogo.com/logos/c.svg" 
            alt="C++ Logo" 
            className="w-24 h-24 mx-auto mb-4 transition duration-300 transform hover:scale-110" 
            width="100"
          />
          <h5 className="text-lg font-bold mb-2 text-center transition duration-300 transform hover:scale-110">Scripts en C++</h5>
          <p className="text-gray-600 text-center">Explora scripts desarrollados en C++.</p>
        </NavLink>
        <NavLink 
          to="/projects/java-script" 
          className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
        >
          <img 
            src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" 
            alt="JavaScript Logo" 
            className="w-24 h-24 mx-auto mb-4 transition duration-300 transform hover:scale-110" 
            width="100" 
          />
          <h5 className="text-lg font-bold mb-2 text-center transition duration-300 transform hover:scale-110">Proyectos en JavaScript</h5>
          <p className="text-gray-600 text-center">Descubre proyectos realizados en JavaScript.</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Projects;
