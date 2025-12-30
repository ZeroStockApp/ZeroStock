function generarPDF() {
    // 1. Seleccionamos el área y el cuerpo de la página
    const elemento = document.getElementById('pdf');
    const cuerpo = document.body;

    // 2. ACTIVAMOS el modo PDF (esto es lo que faltaba)
    cuerpo.classList.add('pdf-full');

    const fecha = new Date().toLocaleDateString().replace(/\//g, '-');
    const nombreArchivo = 'Informe_Stock_' + fecha + '.pdf';

    const opciones = {
        margin: [10, 5, 10, 5], // Margen: arriba, izquierda, abajo, derecha (en mm)
        filename: nombreArchivo,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true, 
            letterRendering: true,
            width: 1050 // Obligamos a capturar un ancho fijo
        },
        jsPDF: {
            unit: 'mm',
            format: 'letter',
            orientation: 'landscape'
        }
    };

    // 3. Generamos el PDF y al terminar QUITAMOS el modo PDF
    html2pdf().set(opciones).from(elemento).save().then(() => {
        cuerpo.classList.remove('pdf-full');
    });
}
