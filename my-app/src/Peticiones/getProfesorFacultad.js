export const getProfesorFacultad = async (facultad) => {

    const url = `http://localhost:8080//profesor/facultad/${facultad}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const listaProfesores = data.map(profesor => ({
        codigo: estudiante.codigo,
        nombre: estudiante.nombre,
        facultad: estudiante.facultad,
    }));
    return listaProfesores;

}