import React, { useState, useEffect } from "react";
import { postCurso } from "../Peticiones/postCurso";

const FormularioCurso = () => {
  const [curso, setCurso] = useState({
    nombre: "",
    facultad: "",
    asignatura: "",
    profesor: ""
  });

  const [asignaturas, setAsignaturas] = useState([]);
  const [profesores, setProfesores] = useState([]);
  const [facultadSeleccionada, setFacultadSeleccionada] = useState("");

  const filtrarPorFacultad = () => {
    if (facultadSeleccionada !== "") {
      const asignaturasFiltradas = asignaturas.filter(
        (asignatura) => asignatura.facultad === facultadSeleccionada
      );
      return asignaturasFiltradas;
    } else {
      return asignaturas;
    }
  };

  const handleChange = (event) => {
    setCurso({ ...curso, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postCurso(curso);
  };

  useEffect(() => {
    
    setAsignaturas([
      { codigo: 1, nombre: "Asignatura 1", facultad: "Facultad 1" },
      { codigo: 4, nombre: "Asignatura 4", facultad: "Facultad 2" },
      { codigo: 5, nombre: "Asignatura 5", facultad: "Facultad 3" }
    ]);

    setProfesores([
      { codigo: 1, nombre: "Profesor 1", facultad: "Facultad 1" },
      { codigo: 2, nombre: "Profesor 2", facultad: "Facultad 1" },
      { codigo: 3, nombre: "Profesor 3", facultad: "Facultad 2" },
    ]);
  }, []);

  return (
    <div>
      <h1>Formulario de Curso</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={curso.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Facultad:</label>
          <select
            name="facultad"
            value={curso.facultad}
            onChange={(e) => {
              setFacultadSeleccionada(e.target.value);
              handleChange(e);
            }}
          >
            <option value="">Seleccionar facultad</option>
            <option value="Facultad 1">Facultad 1</option>
            <option value="Facultad 2">Facultad 2</option>
            <option value="Facultad 3">Facultad 3</option>
          </select>
        </div>
        <div>
          <label>Asignatura:</label>
          <select
            name="asignatura"
            value={curso.asignatura}
            onChange={handleChange}
          >
            <option value="">Seleccionar asignatura</option>
            {filtrarPorFacultad().map((asignatura) => (
              <option key={asignatura.id} value={asignatura.nombre}>
                {asignatura.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Profesor:</label>
          <select
            name="profesor"
            value={curso.profesor}
            onChange={handleChange}
          >
            <option value="">Seleccionar profesor</option>
            {filtrarPorFacultad().map((profesor) => (
              <option key={profesor.id} value={profesor.nombre}>
                {profesor.nombre}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Crear curso</button>
      </form>
    </div>
  );
};

export default FormularioCurso;