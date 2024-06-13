import React from 'react';
import ProjectList from '../components/ProjectList';

const ProgramacionLogica = () => {
  const projects = [
    { id: 1, name: 'Templado Simulado ', url: 'https://github.com/AdolfoFloresHdz/Programacion-Logica-Funcional-/blob/main/templado_simulado.py' },
    { id: 2, name: 'Hill Climbing Iter', url: 'https://github.com/AdolfoFloresHdz/Programacion-Logica-Funcional-/blob/014a58ba6d0053e84d17c59fe28e100ef8819bd3/hill_climbing_iter.py' },
    { id: 3, name: 'Algoritmos Geneticos', url: 'https://github.com/AdolfoFloresHdz/Programacion-Logica-Funcional-/blob/014a58ba6d0053e84d17c59fe28e100ef8819bd3/algoritmos_geneticos.py' },
    { id: 4, name: 'TSP Tabu', url: 'https://github.com/AdolfoFloresHdz/Programacion-Logica-Funcional-/blob/014a58ba6d0053e84d17c59fe28e100ef8819bd3/TSP_tabu.py' },
    { id: 5, name: 'TSP Hill Climbing', url: 'https://github.com/AdolfoFloresHdz/Programacion-Logica-Funcional-/blob/014a58ba6d0053e84d17c59fe28e100ef8819bd3/TSP_hill_climbing.py' },
    { id: 5, name: 'C_W', url: 'https://github.com/AdolfoFloresHdz/Programacion-Logica-Funcional-/blob/014a58ba6d0053e84d17c59fe28e100ef8819bd3/C_W.py' },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Proyectos de Programación Lógica Funcional</h1>
      <ProjectList projects={projects} />
    </div>
  );
}

export default ProgramacionLogica;
