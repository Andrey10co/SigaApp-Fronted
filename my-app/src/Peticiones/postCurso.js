export const postCurso = async (curso) => {

    const url = 'http://localhost:8080/curso/crear'
    const resp = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(curso)
    });
    const respuesta = await resp.json();
    console.log(respuesta)

}