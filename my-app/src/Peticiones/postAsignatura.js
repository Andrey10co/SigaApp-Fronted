export const postAsignatura = async (asignatura) => {

    const url = 'http://localhost:8080/asigantura/crear'
    const resp = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(asignatura)
    });
    const respuesta = await resp.json();
    console.log(respuesta)

}