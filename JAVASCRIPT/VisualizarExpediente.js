async function visualizarExpediente() {
    const url = "https://localhost:7113/api/ListarExpVersiones/ListarExpVersiones";
    var idVersionExpediente = localStorage.getItem("VersionExpediente")
    var idexpediente = localStorage.getItem("IDExpediente")
    try {
        const VersionExpediente = idVersionExpediente;
        const Expediente = idexpediente;

        const data = {
            "IDExpediente": Expediente,
            "VersionExpediente": VersionExpediente
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            var respuestaJson = await response.json();

            const card = document.createElement('div');

            card.innerHTML = `
            <div class="card">
            <p id="motivo"><strong>Motivo de Consulta:</strong>${respuestaJson.motivo}</p>
            <p id="cuadroclinico"><strong>Cuadro Clínico:</strong>${respuestaJson.cuadroclinico}</p>
            <p id="descripcion"><strong>Descripción:</strong>${respuestaJson.descripcion} </p>
            <p id="fecha"><strong>Fecha de Creación:</strong>${respuestaJson.fecha} </p>
            `;
        }else{
            alert("Datos no encontrados.");
        }

} catch (error) {
    console.error('Error:', error);
}
}