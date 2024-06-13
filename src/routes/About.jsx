import React from 'react';
import foto from '../assets/images/Mi_foto.jpg';

const About = () => {
  return (
    <div className="py-10">
      <h1 className="text-2xl md:text-5xl font-extrabold text-black text-left mb-8">Acerca de Mí</h1>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img 
            src={foto} 
            alt="Foto de Irving Daniel Ventura Hernández" 
            className="w-full object-cover rounded-lg"
            style={{ maxWidth: '250px', height: 'auto' }}
          />
        </div>
        <div className="md:w-2/3 md:ml-6 text-gray-800">
          <p clas sName="text-lg text-justify font-semibold">
            <span className="font-bold">Irving Daniel Ventura Hernández</span> <br />
            Oriundo de Chapa de Mota, Estado de México, con 22 años. <br />
            Estudiante de Ingeniería de Sistemas Computacionales. <br /> <br />
            
            Como apasionado de la tecnología, me especializo en abordar desafíos complejos con creatividad 
            y determinación. Mi enfoque organizado y mi curiosidad insaciable me han permitido destacar en 
            proyectos innovadores y colaborar eficazmente en equipos multidisciplinarios. Siempre estoy en 
            busca de nuevas oportunidades para adquirir conocimientos y habilidades, y estoy comprometido con
            mi crecimiento profesional continuo. Mi objetivo es contribuir al mundo digital en constante 
            evolución, fusionando la creatividad con la tecnología para forjar un futuro mejor.
          </p>

          <p className="mt-4 text-gray-600 text-lg font-semibold">
            ¡Uniendo creatividad y tecnología para crear un futuro mejor!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
