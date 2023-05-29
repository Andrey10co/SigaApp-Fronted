import React from "react";
import { Link } from "react-router-dom";

const MenuApp = () => {
  return (
    <div>
      <h1>Bienvenido a la App</h1>
      <Link to="/crear-estudiante">
        <button>Crear estudiante</button>
      </Link>
      <Link to="/crear-profesor">
        <button>Crear profesor</button>
      </Link>
      <Link to="/crear-asignatura">
        <button>Crear asignatura</button>
      </Link>
        <button>Agregar curso</button>
    </div>
  );
};

export default MenuApp;