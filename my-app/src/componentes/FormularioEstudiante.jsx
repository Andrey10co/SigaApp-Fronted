

import React, { useState } from "react";
import { postEstudiante } from "../Peticiones/postEstudiante";

const FormularioEstudiante = () => {
  const [dato, setDato] = useState({
    nombre: "",
    codigo: "",
    facultad: ""
  });

  const agregarEstudiante = (estudiante) => {
    postEstudiante(estudiante);
    console.log("Agregar estudiante:", estudiante);
  };

  const enviar = (event) => {
    event.preventDefault();

    if (dato.nombre && dato.codigo && dato.facultad) {
      agregarEstudiante(dato);
      setDato({
        nombre: "",
        codigo: "",
        facultad: ""
      });
    } else {
      console.log("Error: Debes completar todos los campos");
    }
  };

  return (
    <div>
      <h2>Crear estudiante</h2>
      <form onSubmit={enviar}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={dato.nombre}
            onChange={(event) =>
              setDato({ ...dato, nombre: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="codigo">Código:</label>
          <input
            type="text"
            id="codigo"
            value={dato.codigo}
            onChange={(event) =>
              setDato({ ...dato, codigo: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="facultad">Facultad:</label>
          <select
            id="facultad"
            value={dato.facultad}
            onChange={(event) =>
              setDato({ ...dato, facultad: event.target.value })
            }
          >
            <option value="">Seleccione...</option>
            <option value="Ingeniería">Ingeniería</option>
            <option value="Medicina">Medicina</option>
            <option value="Comunicación">Comunicación</option>
            <option value="Derecho">Derecho</option>
          </select>
        </div>
        <button type="submit">Agregar estudiante</button>
      </form>
    </div>
  );
};

export default FormularioEstudiante;