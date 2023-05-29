export const getAsignatura = async () => {

    const url = 'http://localhost:8080/asigantura/todas'
    const resp = await fetch(url);
    const data = await resp.json();
    const listaAsignaturas = data.map(asignatura => ({
        codigo: estudiante.codigo,
        nombre: estudiante.nombre,
        facultad: estudiante.facultad,
    }));
    return listaAsignaturas;

}