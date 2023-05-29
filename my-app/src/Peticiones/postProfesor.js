export const postProfesor = async (profesor) => {

    const url = 'http://localhost:8080/profesor/crear'
    const resp = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(profesor)
    });
    const respuesta = await resp.json();
    console.log(respuesta)

}