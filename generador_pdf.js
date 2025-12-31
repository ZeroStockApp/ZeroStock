function generarPDF() {
    const elemento = document.getElementById('pdf');
    const cuerpo = document.body;

    // Activamos el modo compacto
    cuerpo.classList.add('pdf-full');

    const fecha = new Date().toLocaleDateString().replace(/\//g, '-');
    const nombreArchivo = 'Informe_Stock_' + fecha + '.pdf';

    const opciones = {
        margin: [12, 15, 12, 15],
        filename: nombreArchivo,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 1.5, // 🔹 Bajamos un poco la escala para mayor estabilidad
            useCORS: true, 
            letterRendering: true,
            width: 1000 // Ancho de captura virtual
        },
        jsPDF: {
            unit: 'mm',
            format: 'letter',
            orientation: 'landscape'
        }
    };

    html2pdf().set(opciones).from(elemento).save().then(() => {
        cuerpo.classList.remove('pdf-full');
    });
}
