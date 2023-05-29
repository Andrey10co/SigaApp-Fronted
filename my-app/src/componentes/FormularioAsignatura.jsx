import React, { useState } from "react";

const FormularioAsignatura = () => {
  const [dato, setDato] = useState({
    nombre: "",
    codigo: "",
    facultad: "",
  });

  const agregarAsignatura = () => {
    // Lógica para agregar la asignatura
    console.log("Agregando asignatura:", dato);
    // Restablecer los campos del formulario
    setDato({
      nombre: "",
      codigo: "",
      facultad: "",
    });
  };

  return (
    <div>
      <h2>Crear asignatura</h2>
      <div>
        <label htmlFor="nombre">Nombre</label>
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
        <label htmlFor="codigo">Código</label>
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
        <label htmlFor="facultad">Facultad</label>
        <select
          id="facultad"
          value={dato.facultad}
          onChange={(event) =>
            setDato({ ...dato, facultad: event.target.value })
          }
        >
          <option value="">Seleccione...</option>
          <option value="Ingenieria">Ingenieria</option>
          <option value="Medicina">Medicina</option>
          <option value="Comunicacion">Comunicacion</option>
          <option value="Derecho">Derecho</option>
        </select>
      </div>
      <button onClick={agregarAsignatura}>Agregar asignatura</button>
    </div>
  );
};

export default FormularioAsignatura;