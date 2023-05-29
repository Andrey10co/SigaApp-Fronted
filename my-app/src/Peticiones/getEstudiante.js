export const getEstudiante = async () => {

    const url = 'http://localhost:8080/estudiante/todos'
    const resp = await fetch(url);
    const data = await resp.json();
    const listaEstudiantes = data.map(estudiante => ({
        codigo: estudiante.codigo,
        nombre: estudiante.nombre,
        facultad: estudiante.facultad,
    }));
    return listaEstudiantes;

}