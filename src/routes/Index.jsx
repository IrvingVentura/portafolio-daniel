import React from 'react';
import foto from '../assets/images/Mi_foto.jpg';

const Index = () => {
  return (
    <div className="text-center py-10 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-extrabold text-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="currentColor" className="inline-block align-middle mr-2">
        </svg>
        <span className="text-lg md:text-xl font-semibold text-gray-600">¡Explora mi mundo digital!</span>
      </h1>
      <p className="mt-4 text-xl text-gray-600">Descubre mi trabajo creativo y conoce más sobre mí y mis proyectos.</p><dir></dir>
      <h1 className="text-3xl md:text-4xl font-extrabold text-black">Irving Daniel Ventura Hernández Hernández</h1>
      <div className="mt-8 flex justify-center">
        <img 
          src={foto} 
          alt="Foto de Irving Daniel Ventura Hernández" 
          style={{ width: '370px', height: '550px' }} 
          className="rounded-full border-4 border-gray-200"
        />
      </div>
    </div>
  );
}

export default Index;
