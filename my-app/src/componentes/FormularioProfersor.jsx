import React, { useState } from "react";

const FormularioProfesor = () => {
  const [dato, setDato] = useState({
    nombre: "",
    codigo: "",
    facultad: ""
  });

  const agregarProfesor = () => {
    // Lógica para agregar el profesor
    console.log("Profesor agregado:", dato);
    setDato({
      nombre: "",
      codigo: "",
      facultad: ""
    });
  }

  return (
    <div>
      <h2>Crear profesor</h2>
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
      <button onClick={agregarProfesor}>Agregar profesor</button>
    </div>
  );
}

export default FormularioProfesor;